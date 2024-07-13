---
permalink: /pages/9f272b57f952
tags: 
  - 数据结构
  - Linux
---

起因是刷知乎的时候刷到有人对Linux中的链表的实现赞不绝口，并推荐了如下博客：

<https://blog.csdn.net/m0_74282605/article/details/128037229>

本人对这种“妙啊”的东西很感兴趣，于是打算学一学。

对应的源代码：[<linux/list.h>](https://github.com/torvalds/linux/blob/master/include/linux/list.h)

传统链表和内核链表的区别原博客中给了两个很形象的图，我这里援引过来：

![传统链表](https://img-blog.csdnimg.cn/img_convert/06981b3ff14697d4c8a289519ef742ae.png)

![内核链表](https://img-blog.csdnimg.cn/img_convert/65c478429cad1a3b15a236b1167f4ff2.webp?x-oss-process=image/format,png)

也就是说，相比于传统的 *对于不同的问题 数据个数和类型也不同* 的链表Node，内核中的实现方法将一个**不定**的问题转化为了一个确定性的问题：每个Node的大小都是完全一致的，均只包含两个指针：

```c
struct list_head {
	struct list_head *next, *prev;
};
```

那么对于一个需要链表的未知问题，我们就可以定义数据结构如下，并直接使用内核中的链表操作函数直接进行处理，而避免了重复造轮子的问题。

```c
struct Q_struct{
    ElemType ElemTypedata;
    struct list_head list;
}
```

这种思路很有意思。原本教科书上基础的链表节点形式如下，这意味着对于每个数据项不同的问题，我们都需要重新写一套链表操作函数（或是修改已有的函数的数据类型？），从长远角度来看确实很繁琐。

```c
struct list_node {
    struct list_node *next;
    ElemType ElemTypedata;
};
```

这里的介绍挂一漏万（亿），权当提醒自己存在这么一回事。更详细的资料互联网上有很多，故不多赘述。