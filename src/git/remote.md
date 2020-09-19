# 远程分支 Remote

## 显示所有远程仓库

```shell script
git remote -v
```

## 显示某个远程仓库的信息

```shell script
git remote show <remote>
```

## 下载远程仓库的所有变动

```shell script
git fetch <remote>
```

## 下载远程仓库的所有变动，并与本地分支合并

```shell script
git pull <remote> <branch>
```

## 增加一个远程仓库

```shell script
git remote add <shortname> <url>
```

## 上传本地指定分支到远程仓库

```shell script
git push <remote> <branch>
```

## 强行推送当前分支到远程仓库

```shell script
git push <remote> --force
```

## 推送所有分支到远程仓库

```shell script
git push <remote> --all
```