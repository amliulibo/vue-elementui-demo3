<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-13 13:35:09
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-16 18:55:10
 * @FilePath: \vue-elementui-demo3\src\components\item.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="channel">
    <item-2 :isActive="isActive" @active="$emit('onSelect')">
      <div class="inner">
        <span class="name">{{ channel_info.name }} </span>
        <span class="number">{{ channel_info.channel_count }}</span>
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
    channel_info: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>


<style scoped>
.channel {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}
.inner {
  padding: 0 20px;
}
.name {
  font-size: 14px;
  color: #212121;
}
.number {
  font-size: 12px;
  color: #999;
  margin-left: 10px;
}
.name,
.number {
  float: left;
}
</style>