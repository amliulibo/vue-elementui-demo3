<template>
  <i class="iconfont" :class="[iconClass, extraClass]">
    {{ iconClass }}
  </i>
</template>

<script>
var iconMap = {
  left: "<",
  right: ">",
  search: "?",
};

export default {
  props: {
    type: {
      type: String,
      require: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
  },

  computed: {
    iconClass() {
      let v1 = iconMap[this.type];
      return v1;
    },
  },
};
</script>

<style scoped>
</style>