# Composer 镜像源管理

由于composer在国内下载速度非常慢，大家都习惯使用中国镜像，如果正在使用的镜像没有更新或者出现故障你可以使用 `Composer Registry Manager` 帮助你轻松地切换到另外一个镜像。

## 安装

```shell script
composer global require slince/composer-registry-manager
```

## 查看当前镜像列表

```shell script
composer repo:ls
```

默认的镜像源，带 * 表示当前正在使用的源：
![](https://tva1.sinaimg.cn/large/007S8ZIlly1giqp6qhnc0j30m209cgn5.jpg)

你可以使用 --location xx 按地区过滤：

```shell script
composer repo:ls --location China
```

## 切换镜像

选择镜像

```shell script
composer repo:use
```

直接使用某个镜像

```shell script
composer repo:use aliyun
```

默认是修改全局的源，添加选项 --current/-c 为当前项目切换源。

## 查看所有命令

```shell script
composer repo
```