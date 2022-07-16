/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-03 13:53:29
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-16 18:06:17
 * @FilePath: \vue-elementui-demo3\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      //配置代理
      '/x': {
        target: 'https://api.bilibili.com',
        onProxyReq(proxyReq, req, res) {
          //add custom header to request
          proxyReq.setHeader('origin', 'https://www.bilibili.com')
          proxyReq.setHeader('referer', 'https://www.bilibili.com/')

          //or log the request
        },
      },
    },
    //port:8087,
    //host:"localhost",
    //open:true
  },
})
