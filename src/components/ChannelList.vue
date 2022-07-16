<template>
  <div class="channel-list">
    <div v-for="item in channels" :key="item.id" class="item">
      <Channel :channel_info="item" />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";

export default {
  components: {
    Channel,
  },

  data() {
    return {
      channels: [
        { id: 1, name: "name1", channel_count: 11 },
        { id: 2, name: "name2", channel_count: 22 },
      ],
    };
  },
};
</script>

<style scoped>
.channel-list {
  overflow: hidden;
}
.item {
  float: left;
  width: 50%;
}
</style>
