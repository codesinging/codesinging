# 使用 nrm 管理 npm 镜像

`nrm` 是一个 `npm` 的镜像管理工具，可以方便的切换 `npm` 镜像。

## 安装 nrm 
```shell script
npm i -g nrm
```

## 查看可用镜像

```shell script
nrm ls
```

下图是默认的可用镜像，带 * 号的为当前使用的镜像。

![默认可用镜像](https://tva1.sinaimg.cn/large/007S8ZIlly1giqmynh6u3j30js09gta4.jpg)

## 查看当前镜像

```shell script
nrm current
```

## 切换镜像

切换到淘宝镜像
```shell script
nrm use taobao
```

切换到原镜像
```shell script
nrm use npm
```

## 增加镜像

你可以增加自己定制的镜像，比如内部的私有镜像。

```shell script
nrm add <registry> <url> [home]
```

## 删除镜像

```shell script
nrm del <registry>
```

## 打开镜像网站

```shell script
nrm home <registry>
```

## 测试镜像速度

```shell script
nrm test npm
```