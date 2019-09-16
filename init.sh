#!/usr/bin/env bash
# 找到新建项目根目录
cd ../
pwd [-P]
cp -r ./vue-scss-js-init/scripts ./
echo "copy 脚本文件成功"
rm -rf ./src
echo "delete 新建项目 src 文件成功"
cp -r ./vue-scss-js-init/src ./
echo "copy 脚本文件 src 成功"
cp -r ./vue-scss-js-init/vue.config.js ./
echo "copy 脚本文件 vue.config.js 成功"

if read -t 5 -p "是否删除 vue-scss-js-init 文件?（yes/No）" website
then
    echo "删除 vue-scss-js-init 文件"
#    rm -rf ./vue-scss-js-init
else
    echo "保留 vue-scss-js-init 文件"
fi
exit 0