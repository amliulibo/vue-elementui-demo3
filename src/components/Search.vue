<template>
  <div class="search-area">
    <input type="text" placeholder="输入搜索内容" />
    <Icon type="search" />
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
</style>