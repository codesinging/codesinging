# 如何设置 yarn 国内镜像

`yarn` 原镜像有时速度太慢，我们可以使用国内的镜像来加快访问速度。

## 查看当前 yarn 镜像

```shell script
yarn config get registry 
```

## 设置镜像为国内镜像

推荐使用淘宝提供的国内镜像：
[https://developer.aliyun.com/mirror/npm](https://developer.aliyun.com/mirror/npm)

### 设置镜像为淘宝镜像

```shell script
yarn config set registry https://registry.npm.taobao.org
```

## 切换回原镜像

```shell script
yarn config set registry https://registry.npmjs.org
```

## 使用 yrm 管理镜像

[使用 yrm 管理镜像](yrm.md)