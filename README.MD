# NeoWorld

服务器文档使用主题 [vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing)。

## 构建

需要 nodejs 环境，以及使用 yarn 管理依赖。

先打包 vdoing 主题

```shell
cd vdoing
npm pack
cd ..
```
然后构建文档
```shell
yarn
# Linux 执行这个
yarn build
# Windows 执行这个
yarn build:win
```
将文档复制到 `public/docs` 文件夹，以 `public` 文件夹为根目录，使用任意方式发布静态网页即可。
```shell
mkdir "public/docs"
rm -r public/docs/*
cp -r docs/.vuepress/dist/* public/docs
```
