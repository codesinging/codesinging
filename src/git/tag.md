# 标签 Tag

## 列出所有 Tag

```shell script
git tag
```

## 查看指定 tag 信息

```shell script
git show <tag>
```

## 在当前 commit 新建一个 tag

```shell script
git tag <name>
```

## 在指定 commit 新建一个 tag

```shell script
git tag <name> <commit>
```

## 删除本地 tag

```shell script
git tag -d <name>
```

## 删除远程 tag

```shell script
git push origin :refs/tags/<name>
```

## 提交指定 tag

```shell script
git push <remote> <tag>
```

## 提交所有 tag

```shell script
git push <remote> --tags
```