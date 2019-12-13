# Deploy ThinkPHP to SAE

This document is about how to deploy a [ThinkPHP5.1](https://www.kancloud.cn/manual/thinkphp5_1/353946) project to [SAE](https://www.sinacloud.com/) platform via Git.

::: tip
This document is only for ThinkPHP 5.1 version.
:::

## Creating a New Application

Firstly let's create an application like this:

![Creating application](https://tva1.sinaimg.cn/large/006tNbRwly1g9v07zzd6kj30mo0c90tm.jpg)

**Note that you should select `7.0` and `Git` options.**

## Creating a new code version

Then you should enter the application console, click code management in left sidebar:

![Creating code version](https://tva1.sinaimg.cn/large/006tNbRwly1g9v0e64sy2j30qv0itwgo.jpg)

## Creating a local Project

Create a local ThinkPHP project via composer:

``` sh
cd ~/code
composer create-project topthink/think:^5.1 pin-cms
cd pin-cms
git init
git add -A
git commit -m "Initialize"
```

::: tip
Remember to remove the `thinkphp` and `vendor` in the `.gitignore`.
:::

## Pushing to the SAE

Check out the git repository like this: `https://git.sinacloud.com/<your application name>`.

Then open the terminal and run:

``` sh
git remote add sae https://git.sinacloud.com/<your application name>
git pull sae 1 --allow-unrelated-histories
git push sae master:1
```

::: tip
Note that you should run `git pull sae 1 --allow-unrelated-histories` before your first `push`.
:::

If the terminal show you the correct message, the code has already been pushed to the SAE. You can enter the SAE console to check if the code exists.

## Installing Extension

In order to run a ThinkPHP project in SAE, you must install a extra extension for SAE support.

### Recommended: `codesinging/think-sae`

The package `codesinging/think-sae` is highly recommended for SAE support:

1. Compatible with SAE and common enviroments.
1. Without any settings or configurations.

All that you need do is only a command:

``` sh
composer require codesinging/think-sae
```

That's all!

### Official: `topthink/think-sae`

Firstly, install the package via composer:

``` sh
composer require topthink/think-sae
```

Open `config/database.php`, and modify some options like:

``` php
// 数据库类型
'type'        => 'mysql',
// 服务器地址
'hostname'    => SAE_MYSQL_HOST_M . ',' . SAE_MYSQL_HOST_S,
// 数据库名
'database'    => SAE_MYSQL_DB,
// 用户名
'username'    => SAE_MYSQL_USER,
// 密码
'password'    => SAE_MYSQL_PASS,
// 端口
'hostport'    => SAE_MYSQL_PORT,
// 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)
'deploy'          => 1,
// 数据库读写是否分离 主从式有效
'rw_separate'     => true,

```

Open `config/log.php`, and modify:

``` php
'type'=> '\think\sae\Log',
```

Open `config/template`, and add the `compile_type` option:

``` php
'compile_type' => '\think\sae\Template',
```

Open `config/cache.php` and modify:

``` php
'type'  =>  '\think\sae\Cache',
```

For more details, see: [top-think/think-sae, branch 2.0](https://github.com/top-think/think-sae/tree/2.0)

## Common commands

- `git pull sae 1`: Pull code from SAE.
- `git push sae master:1`: Push the code to SAE.
