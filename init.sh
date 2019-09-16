#!/usr/bin/env bash
# 找到新建项目根目录
cd ../
pwd [-P]
cp -r ./init-vue-scss-js/scripts ./
echo "copy 脚本文件成功"
rm -rf ./src
echo "delete 新建项目 src 文件成功"
cp -r ./init-vue-scss-js/src ./
echo "copy 脚本文件 src 成功"
cp -r ./init-vue-scss-js/vue.config.js ./
echo "copy 脚本文件 vue.config.js 成功"

if read -t 5 -p "是否删除 init-vue-scss-js 文件?（yes/No）" website
then
    echo "删除 init-vue-scss-js 文件"
    rm -rf ./init-vue-scss-js
else
    echo "保留 init-vue-scss-js 文件"
fi
exit 0
