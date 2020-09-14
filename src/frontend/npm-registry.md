# 如何设置 npm 国内镜像

`npm` 原镜像有时速度太慢，我们可以使用国内的镜像来加快访问速度。

## 查看当前 npm 镜像

```shell script
npm config get registry 
```

## 设置镜像为国内镜像

推荐使用淘宝提供的国内镜像：
[https://developer.aliyun.com/mirror/npm](https://developer.aliyun.com/mirror/npm)

### 永久设置镜像为淘宝镜像

```shell script
npm config set registry https://registry.npm.taobao.org
```

### 临时使用淘宝镜像

```shell script
npm install vue --registry https://registry.npm.taobao.org
```

### 通过 cnpm 使用淘宝镜像

#### 安装 `cnpm` 命令

```shell script
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 使用 `cnpm` 安装包

```shell script
cnpm install vue
```

## 切换回原镜像

```shell script
npm config set registry https://registry.npmjs.org
```

## 使用 `nrm` 快速切换镜像

[使用 nrm 管理 npm 镜像](nrm.md)