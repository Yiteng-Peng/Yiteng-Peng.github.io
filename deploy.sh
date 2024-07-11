#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


push_addr=https://github.com/Yiteng-Peng/Yiteng-Peng.github.io.git # push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
push_branch=release # 推送的分支
commit_info=`git describe --all --always --long`

src_main_path=mainpage  # 主页面
dst_rls_path=release_page # 待发布文件夹路径

cp -r $src_main_path $dst_rls_path

src_dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
dst_blog_path=$dst_rls_path/blog # 待发布blog文件夹路径

# 生成静态文件
npm run build

mv $src_dist_path $dst_blog_path

# 进入生成的文件夹
cd $dst_rls_path

git init
git add -A
git commit -m "deploy, $commit_info"
git push -f $push_addr HEAD:$push_branch

cd -
rm -rf $dst_rls_path
