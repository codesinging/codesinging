# 分支 Branch

## 查看所有分支

```shell script
git branch
```

## 查看所有远程分支

```shell script
git branch -r
```

## 查看所有本地和远程分支

```shell script
git branch -a
```

## 创建分支

```shell script
git branch <branch>
```

## 切换分支

```shell script
git checkout <branch>
```

## 创建并切换分支

```shell script
git checkout -b <branch>
```

## 新建一个分支，与指定的远程分支建立追踪关系

```shell script
git branch --track <branch> <remote-branch>
```

## 从指定 tag 新建一个分支

```shell script
git checkout -b <branch> <tag>
```

## 切换到上一个分支

```shell script
git checkout -
```

## 建立现有分支与指定的远程分支之间的追踪关系

```shell script
git branch --set-upstream <branch> <remote-branch>
```

## 合并指定分支到当前分支

```shell script
git merge <branch>
```

## 合并指定 commit 到当前分支

```shell script
git cherry-pick <commit>
```

## 删除分支

```shell script
git branch -d <branch>
```

## 删除远程分支

```shell script
git push origin --delete <branch>
git branch -dr <remote/branch>
```