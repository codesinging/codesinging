# 历史 Log

## 查看当前文件变更状态

```shell script
git status
```

## 显示当前分支的版本历史

```shell script
git log
```

## 显示过去5次提交

```shell script
git log -5 --pretty --oneline
```

## 显示commit历史，以及每次commit发生变更的文件

```shell script
git log --stat
```

## 获取所有操作日志

```shell script
git reflog
```

## 在一行内显示

```shell script
git log --oneline
```

## 根据关键词搜索

```shell script
git log --all --grep="commit"
```

## 查询某人的提交日志

```shell script
git log --author="codesinging"
```

## 显示指定文件的修改历史

```shell script
git blame <file>
```

## 显示所有提交过的用户，按提交次数排序

```shell script
git shortlog -sn
```