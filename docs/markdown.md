---
title: Markdown 方言
permalink: /markdown
---

本页面为本站支持的 Markdown 语法及其方言的使用方法，以及使用示例汇总。

## 标题

在本站中，1号标题不会出现在右侧的`此页内容`中，只有2号标题和3号标题会在网页右侧显示。

```markdown
# 1号标题
## 2号标题
### 3号标题
#### 4号标题
##### 5号标题
```

# 1号标题
## 2号标题
### 3号标题
#### 4号标题
##### 5号标题

---

## 换行/换段落

::: danger 注意
这是任何 Markdown 初学者都应该注意的常识。
:::

```markdown
如果需要换行，应该要在一行的末尾加【两个空格】
这是一个错误的示例，会让两行挤到同一行。  
这是一个正确的示例，上一行的末尾有两个空格。

如果需要换段落，应该距离上一段落额外空一行。

这是一个正确的示例。
```

如果需要换行，应该要在一行的末尾加【两个空格】
这是一个错误的示例，会让两行挤到同一行。  
这是一个正确的示例，上一行的末尾有两个空格。

如果需要换段落，应该距离上一段落额外空一行。

这是一个正确的示例。

## html

```html
在本站中，可以使用 html 代码，比如<br>可以换行。为了简洁，建议非必要不使用 html 代码。
```

在本站中，可以使用 html 代码，比如<br>可以换行。为了简洁，建议非必要不使用 html 代码。

## 加粗字体

```markdown
**加粗文字**
__加粗字体__
```
**加粗文字**
__加粗字体__

## 强调/倾斜字体

```markdown
*倾斜字体*
_倾斜字体_
```
*倾斜字体*
_倾斜字体_

## 快速代码/代码块

```` markdown
`快速代码`
```java
void foo() {
   // 代码块
}
```
````

`快速代码`
```java
void foo() {
   // 代码块
}
```

注：声明快速代码/代码块的`反单引号`可使用 `Esc` 键下方、数字键 `1!` 左方的 `~` 键输入。

## 链接

```markdown
[链接文本](网址)  
[SweetRiceMC](https://www.pds.ink)
```

[链接文本](网址)  
[SweetRiceMC](https://www.pds.ink)

## 图片

```markdown
![图片描述](图片链接)  
![糯米](https://www.pds.ink/assets/images/icon/favicon.png)
```

![糯米](https://www.pds.ink/assets/images/icon/favicon.png)

## 列表

```markdown
有序列表每项前面加数字

1.有序列表
2.有序列表

无序列表每项前面加 `+`, `-`, `*` 之中的任意一个符号。同一个无序列表前面的符号必须相同，否则会出现下面的分隔效果。

+ 无序列表
+ 无序列表
- 无序列表
- 无序列表
* 无序列表
* 无序列表
```

有序列表每项前面加数字

1. 有序列表
2. 有序列表

无序列表每项前面加 `+`, `-`, `*` 之中的任意一个符号。同一个无序列表前面的符号必须相同，否则会出现下面的分隔效果。

+ 无序列表
+ 无序列表
- 无序列表
- 无序列表
* 无序列表
* 无序列表

## 表格
表格分为三部分，表头、排列方式、主体。

如下所示，我们用 `|` 来分隔每一列。  
表头下面一行就是排列方式，用三个或以上的 `-` 加上 `:` (可选) 来表示。
+ `|---|` 表示单元格内容居左 (默认)
+ `|:---|` 表示单元格内容居左
+ `|---:|` 表示单元格内容居右
+ `|:---:|` 表示单元格内容居中

为了源代码美观，排列方式通常会添加多个 `-` 使其长度与单元格内容一致，表头添加多个空格同理。

如果需要在单元格内换行，请使用 html 代码 `<br>`

```markdown
| 表头文字 | 表头文字 | 表头文字 | 表头文字 |
| --- |:--- |:---:| ---:|
| 默认 | 居左 | 居中 | 居右 |
| 单元格内容<br>换行 | 单元格内容 | 单元格内容 | 单元格内容 |
```

| 表头文字 | 表头文字 | 表头文字 | 表头文字 |
| --- |:--- |:---:| ---:|
| 默认 | 居左 | 居中 | 居右 |
| 单元格内容<br>换行 | 单元格内容 | 单元格内容 | 单元格内容 |

# 方言

从这里开始，介绍 vuepress 以及本站扩展的 Markdown 方言。

## Front Matter

你可以理解为，这是当前页面的配置文件

```markdown
---
title: 页面标题
---
```

其它配置详见 [Front Matter](https://www.vuepress.cn/guide/frontmatter.html)

## emoji

```markdown
:tada: :100:
```

:tada: :100:

## 目录

```markdown
[[toc]]
```

[[toc]]

## 提示

```markdown
::: tip
普通提示
:::

::: warning
警告提示
:::

::: danger
危险提示
:::

::: details
详细块，在 IE 和旧版 Edge 中不显示
:::

::: tip 自定义标题
在“类型”后面添加文字，即可自定义其标题
:::

::: detail 显示/隐藏折叠内容
uwu
:::
```

::: tip
普通提示
:::

::: warning
警告提示
:::

::: danger
危险提示
:::

::: details
详细块，在 IE 和旧版 Edge 中不显示
:::

::: tip 自定义标题
在“类型”后面添加文字，即可自定义其标题
:::

::: details 显示/隐藏折叠内容
uwu
:::

## 选项卡组

常用于相同效果不同方法的步骤，特别常用于不同语言相同功能的代码。

```
:::: tabs

::: tab 标题1
内容1
:::

::: tab 标题2
内容2
:::

::: tab 标题3
内容3
:::

::::
```

:::: tabs

::: tab 标题1
内容1
:::

::: tab 标题2
内容2
:::

::: tab 标题3
内容3
:::

::::