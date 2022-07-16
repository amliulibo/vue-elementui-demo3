<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-03 13:53:29
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-16 17:15:40
 * @FilePath: \vue-elementui-demo3\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <div style="width: 250px">
      <TitleMenu :isActive="true" @active="test()">
        <template v-slot:title>发现频道</template>
        <template v-slot:icon>></template>
      </TitleMenu>
    </div>
  </div>
</template>

<script>
import TitleMenu from "./components/TitleMenu.vue";

export default {
  components: {
    TitleMenu,
  },
  data() {
    return {
      select: false,
    };
  },
  methods: {
    test() {
      console.log("sss");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
