/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-08 14:38:52
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-13 13:50:52
 * @FilePath: \vue-elementui-demo3\test\a.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var http=require("http")
var url=require("Url")


function start(){
    function onRequest(req,res){
        var pathname=url.parse(req.url).pathname
    }
}