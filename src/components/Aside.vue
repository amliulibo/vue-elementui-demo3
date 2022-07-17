<template>
  <div>
    <div class="aside">
      <Search></Search>

      <TitleMenu :isActive="activeID === 100" @active="activeID = 100">
        <template v-slot:title>发现频道</template>
        <template v-slot:icon>></template>
      </TitleMenu>

      <ChannelList
        :activeID="activeID"
        :column_count="2"
        @onSelect="activeID = $event"
      ></ChannelList>
    </div>
  </div>
</template>

<script>
import TitleMenu from "./TitleMenu.vue";
import ChannelList from "./ChannelList.vue";
import Search from "./Search.vue";
export default {
  components: {
    TitleMenu,
    ChannelList,
    Search,
  },
  data() {
    return {
      activeID: 100, //默认选中的是热门
    };
  },
  methods: {
    test(msg) {
      console.log(msg);
    },
  },
};
</script>

<style>
.aside {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>