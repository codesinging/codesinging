# 仓库 Repository

## 新建仓库

### 在当前目录新建一个 Git 仓库

```shell script
git init
```

### 新建一个目录，并将其初始化为 Git 仓库

```shell script
git init <project>
```

### 克隆一个远程仓库到本地

```shell script
git clone <url> <name>
```

## 增加文件

### 添加指定文件到暂存区

```shell script
git add <file> <file2> ...
```

### 添加指定目录到暂存区，包括子目录

```shell script
git add <dir>
```

### 添加当前目录的所有文件到暂存区

```shell script
git add .
```

## 删除文件

### 删除工作区文件，并将这次删除放入暂存区

```shell script
git rm <file>
```

### 停止追踪指定文件，但该文件会保留在工作区

```shell script
git rm --cached <file>
```

## 修改文件名

修改文件名，并且将修改放入暂存区

```shell script
git mv <name> <new-name>
```

## 提交文件

### 提交暂存区文件到仓库区

```shell script
git commit -m "<message>"
```

### 提交暂存区的指定文件到仓库区

```shell script
git commit <file> <file> ... -m "<message>"
```

### 提交工作区自上次commit之后的变化，直接到仓库区

```shell script
git commit -a -m "<message>"
```

### 提交时显示所有diff信息

```shell script
git commit -v
```

### 编辑上次提交

```shell script
git commit --amend -m "新的提交说明"
```

### 重做上一次commit，并包括指定文件的新变化

```shell script
git commit --amend <file> <file2> ...
```

### 在上次提交中附加一些内容，保持提交日志不变

```shell script
git add .
git commit --amend --no-edit
```

### 空提交

可以用来触发 CI 构建

```shell script
git commit --allow-empty -m "re-trigger build"
```

### 显示指定 commit 的变化

```shell script
git show <commit>
```

## 撤销

### 恢复暂存区的指定文件到工作区

```shell script
git checkout <file>
```

### 恢复暂存区的所有文件到工作区

```shell script
git checkout .
```

### 恢复某个commit的指定文件到暂存区和工作区

```shell script
git checkout <commit> <file>
```

### 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变

```shell script
git reset <file>
```

### 重置暂存区与工作区，与上一次commit保持一致

```shell script
git reset --hard
```

### 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变

```shell script
git reset <commit>
```

### 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致

```shell script
git reset --hard <commit>
```

### 重置当前HEAD为指定commit，但保持暂存区和工作区不变

```shell script
git reset --keep <commit>
```

### 新建一个commit，用来撤销指定commit

```shell script
git revert <commit>
```