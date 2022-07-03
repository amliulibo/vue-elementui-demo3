/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-03 13:53:29
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-03 18:00:18
 * @FilePath: \vue-elementui-demo3\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
	  port:8087,
	  host:"localhost",
	  open:true
  }
})
