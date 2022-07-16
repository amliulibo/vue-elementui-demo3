/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-16 17:38:37
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-16 18:09:46
 * @FilePath: \vue-elementui-demo3\src\services\channel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  async getChannels() {
    var resp = await fetch('/x/web-interface/web/channel/category/list')
    var data = await resp.json()

    return data.data.categories
  },
}
