# Git 基础

## 工作流程

- Workspace 工作区
- Index/Stage 暂存区
- Repository 本地仓库
- Remote 远程仓库

![工作流程](https://tva1.sinaimg.cn/large/007S8ZIlly1giwe1rcwwjj30wk09g3zt.jpg)

## 配置

Git 配置文件为 `.gitconfig` , 在用户主目录下为全局配置，项目目录下为项目配置。

### 显示当前 Git 配置

```shell script
git config --list
```

### 编辑 Git 配置文件

```shell script
git config -e [--global]
```

### 设置用户名和邮箱

```shell script
git config [--global] user.name "<name>"
git config [--global] user.email "<email>"
```
