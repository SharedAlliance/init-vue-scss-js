/*
 * @Description: 页面快速生成脚本
 * @Date: 2018-12-06 10:28:08
 * @LastEditTime: 2018-12-10 09:43:50
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{data.pageName}}
  </div>
</template>

<script src="./${dirName}.js"></script>

<style lang="scss" scoped>
  @import './${dirName}.scss;'
</style>

`

// js 模版
const tsTep = `export default{
  name: '${dirName}',
  data(){
    return{
      
    }
  },
  created() {
    //
  },
  mounted() {
    //
  },
  // 初始化函数
  init() {
    //
  }
}
`

// scss 模版
const scssTep = `@import "@/assets/scss/variables.scss";

.${dirName}-wrap {
  width: 100%;
}
`


// vuex 模版
const vuexTep = `const state = {
  //
}
const getters = {
  //
}
const mutations = {
  //
}
const actions = {
  //
}
export default {
  state,
  getters,
  mutations,
  actions
}`

// api 接口模版
const apiTep = `import Api from '@/utils/request'

export const getData = () => {
  return Api.getData()
}

`

fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir

process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue
fs.writeFileSync(`${dirName}.js`, tsTep) // js
fs.writeFileSync(`${dirName}.scss`, scssTep) // scss

process.chdir(`${basePath}/types/views`); // cd types

process.chdir(`${basePath}/store/module`); // cd store
fs.writeFileSync(`${dirName}.js`, vuexTep) // vuex

process.chdir(`${basePath}/api`); // cd api
fs.writeFileSync(`${dirName}.js`, apiTep) // api

process.exit(0)