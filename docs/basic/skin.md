---
title: 👔更换皮肤
permalink: /basic/skin
date: 2025-02-04 14:40:52
---

# 更换皮肤

服务器自带皮肤系统，考虑到皮肤系统使用较复杂，本文将介绍在 NeoWorld 中更换皮肤的方法。
注意，除了正版途径外，无法更换披风。

# 正版皮肤
正版账号会自动使用正版皮肤，如果你想要用别人的正版账号皮肤，使用这个命令即可
```
/skin set 正版玩家名
```
注意，不要频繁在 Minecraft 官网更改皮肤，  
服务器正版皮肤缓存时间较长，不一定会实时更改。

如果更改皮肤后，皮肤**迟迟未变动**，可尝试命令 `/uskin` 刷新皮肤  
或者前往 Minecraft 官网登录，右键复制自己皮肤的`图片地址`，使用以下命令切换皮肤
```
/skin url 皮肤图片地址
```

# 第三方皮肤

除了用某正版玩家的皮肤以外，你也可以用第三方皮肤站提供的皮肤，选择以下**任意一个**皮肤站进行操作即可。

## NameMC

到[这个地址](https://namemc.com/minecraft-skins)找你想要的皮肤，  
点进你要用的皮肤，右键点击皮肤展示右侧的**下载**按钮，复制链接，复制出来的链接格式如下
```
https://s.namemc.com/i/字母数字.png
```
然后使用命令 `/skin url 复制的链接` 即可更换皮肤

> 举例：
> ```
> /skin url https://s.namemc.com/i/eb5648d2ef1a297b.png
> ```

## LittleSkin
到[这个地址](https://littleskin.cn/skinlib)找你想要的皮肤，自己上传也行，要公开。  
点进皮肤详细页之后，我们可以看到链接格式如下
```
https://littleskin.cn/skinlib/show/数字ID
```
这时，将链接的 `skinlib/show` 改成 `raw`，然后在末尾加上 `.png`，改好的链接像下面这样
```
https://littleskin.cn/raw/数字ID.png
```
然后使用命令 `/skin url 改好的链接` 即可更换皮肤。

> 举例：
> ```
> /skin url https://littleskin.cn/raw/810
> ```

这个方法适用于**任何**使用 BlessingSkin 搭建的皮肤站，比如 [BlessingSkin](https://skin.prinzeugen.net/)、[红石皮肤站](https://mcskin.cn/) 等等。  

# 其他途径
你可以把皮肤上传到QQ空间或者图床什么的，  
只要能拿到图片的访问直链就行，  
使用命令 `/skin url 链接` 即可更换皮肤，不推荐这种方法，建议用皮肤站，更稳定
