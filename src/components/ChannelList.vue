<template>
  <div class="channel-list">
    <div v-for="item in channels" :key="item.id" class="item">
      <Channel
        :channel_info="item"
        :isActive="item.id === activeID"
        @onSelect="$emit('onSelect', item.id)"
      />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
import ChannelService from "@/services/channel";

export default {
  components: {
    Channel,
  },
  props: {
    activeID: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      //activeID: 100,
      channels: [
        // { id: 1, name: "name1", channel_count: 11 },
        // { id: 2, name: "name2", channel_count: 22 },
      ],
    };
  },

  async created() {
    let v1 = await ChannelService.getChannels();
    this.channels = v1.filter((item) => item.name != "热门");
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
