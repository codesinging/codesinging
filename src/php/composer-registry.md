# 修改 composer 国内镜像源

推荐使用阿里云镜像：[https://developer.aliyun.com/composer](https://developer.aliyun.com/composer)

## 全局配置（推荐）

所有项目都会使用该镜像地址：

```shell script
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

## 取消全局配置

```shell script
composer config -g --unset repos.packagist
```

## 项目配置

仅修改当前工程配置，仅当前工程可使用该镜像地址：

```shell script
composer config repo.packagist composer https://mirrors.aliyun.com/composer/
```

## 取消项目配置

```shell script
composer config --unset repos.packagist
```

## 使用 CRM 管理镜像源

[使用 CRM 管理镜像源](composer-registry-manager.md)