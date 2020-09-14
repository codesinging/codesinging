# 使用 yrm 管理 yarn 镜像

`yrm` 是一个 `yarn` 的镜像管理工具，可以方便的切换 `yarn` 镜像。

## 安装 yrm 
```shell script
npm i -g yrm
```

## 查看可用镜像

```shell script
yrm ls
```

下图是默认的可用镜像，带 * 号的为当前使用的镜像。

![默认可用镜像](https://tva1.sinaimg.cn/large/007S8ZIlly1giqmynh6u3j30js09gta4.jpg)

## 切换镜像

切换到淘宝镜像
```shell script
yrm use taobao
```

切换到原镜像
```shell script
yrm use yarn
```

## 增加镜像

你可以增加自己定制的镜像，比如内部的私有镜像。

```shell script
yrm add <registry> <url> [home]
```

## 删除镜像

```shell script
yrm del <registry>
```

## 打开镜像网站

```shell script
yrm home <registry>
```

## 测试镜像速度

```shell script
yrm test npm
```