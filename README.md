# init-vue-scss-js
Vue-cli 初始化，删除不必要的文件。自动化处理文件，节省开发者时间


### 下载 js-cookie

```$xslt
  npm i js-cookie --S
  npm i @types/js-cookie --D
```
### 下载 axios

```$xslt
  npm i axios --S
```

### 打开根目录下的 package.json ,在 scripts 中添加如下代码

```
  "tep": "node scripts/template",
  "com": "node scripts/component"
```

### 新建模板
```$xslt
  npm run tep index
```
### 新建组件
```$xslt
  npm run com test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
