<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-13 13:35:09
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-16 17:07:24
 * @FilePath: \vue-elementui-demo3\src\components\item.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="item" :class="{ active: isActive }" @click="$emit('active')">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
.active {
  background: #e7e7e7;
}
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.item:hover {
  background: #f4f4f4;
}
</style>