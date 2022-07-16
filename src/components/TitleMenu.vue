<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-13 13:35:09
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-16 17:14:25
 * @FilePath: \vue-elementui-demo3\src\components\item.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title-menu">
    <item-2 :isActive="isActive" @active="$emit('active')">
      <div class="inner">
        <div class="left">
          <slot name="title"></slot>
        </div>
        <div class="right">
          <slot name="icon"></slot>
        </div>
      </div>
    </item-2>
  </div>
</template>

<script>
import item2 from "./item2.vue";
export default {
  components: { item2 },
  props: {
    isActive: {
      type: Boolean, //
      //required:true,
      default: false,
    },
  },
};
</script>


<style scoped>
.title-menu {
  width: 100%;
  height: 46px;
  line-height: 46px;
  padding: 0 20px;
}
.inner {
  padding: 0 20px;
}
.left {
  float: left;
  color: #212121;

  font-weight: bold;
}
.right {
  float: right;
  font-size: 12px;
}
</style>