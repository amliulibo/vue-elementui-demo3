<template>
  <form class="search-area" @submit.prevent="handleSearch">
    <input type="text" v-model="searchValue" :placeholder="placeHolder" />
    <div class="icon" @click="handleSearch">
      <Icon type="search" />
    </div>
  </form>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: {
    Icon,
  },
  methods: {
    handleSearch() {
      if (this.searchValue) {
        this.$emit("on_search", this.searchValue);
      }
    },
  },
  data() {
    return {
      searchValue: "",
    };
  },
  props: {
    placeHolder: {
      type: String,
      default: "搜索关键字",
    },
  },
};
</script>

<style scoped>
.search-area {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  position: relative;
  left: 20px;
}
.search-area input {
  border: none;
  outline: none;

  width: 100%;
  height: 100%;
  box-sizing: border-box; /**包括边框、padding总共加起来100% */
  padding-left: 10px;
  padding-right: 40px;
}
.search-area input::placeholder {
  color: #999;
}
.icon {
  position: absolute;
  width: 40px;
  height: 100%;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  color: #c0c0c0;
  background: yellow;
  cursor: pointer;

  justify-content: center;
}
</style>