<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-13 13:35:09
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-13 13:55:33
 * @FilePath: \vue-elementui-demo3\src\components\item.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title-menu">

      <item-2>
     <div class="left">         发现频道2     </div>
     <div>></div>
      </item-2>

</item-2>
  </div>
</template>

<script>
import item2 from "./item2.vue";
export default {
  components: { item2 },
};
</script>

<style scoped>
.title-menu {
  width: 100%;
  height: 46px;
  line-height: 46px;
  padding: 0 20px;
}
</style>