<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
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
      let v1 = this.iconMap[this.type];
      console.log("iconClass=", v1);
      return v1;
    },
  },
};
</script>

<style scoped>
</style>