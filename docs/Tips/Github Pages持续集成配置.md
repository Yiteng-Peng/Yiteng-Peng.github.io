# Github Pages持续集成中踩的一些坑

## URL空格处理

Github的username可能有空格，这时候使用`git remote add <name> <url>`或诸如此类的指令时，需要注意将空格处理为`%20`。可采用方法如下：

```bash
str="something with space"
encoded_str=$(echo $str | sed 's/ /%20/g')
```

## GITHUB_TOKEN

在使用Github Actions时，当前它会默认提供一个临时的Token，叫做`GITHUB_TOKEN`，因此不必再如一些较旧的文档中所写的，使用Personal token，而是可以直接用默认的这个，使用方式如下：

`remote_addr="https://${user_name}:${{secrets.GITHUB_TOKEN}}@${remote_addr}"`

值得注意的是，Github新增了一个配置来调控该token的权限，因此如果需要利用该token进行push的话，需要手动修改一下Settings - Actions - General - Workflow permissions处的读写权限。