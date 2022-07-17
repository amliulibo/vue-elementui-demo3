<template>
  <div>
    <div class="channel-list" :style="{ height: `${height}px` }">
      <div
        v-for="item in channels"
        :key="item.id"
        class="item"
        :style="{ width: `${100 / column_count}%` }"
      >
        <Channel
          :channel_info="item"
          :isActive="item.id === activeID"
          @onSelect="$emit('onSelect', item.id)"
        />
      </div>
    </div>
    <div class="collapse" @click="collapse_click">
      <span>{{ isExpand ? "收起" : "展开" }}</span>
      <Icon :type="isExpand ? 'left' : 'right'" />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
import ChannelService from "@/services/channel";
import Icon from "./Icon.vue";
export default {
  components: {
    Channel,
    Icon,
  },

  props: {
    activeID: {
      type: Number,
      require: true,
      default: 100,
    },
    column_count: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    collapse_click() {
      this.isExpand = !this.isExpand;
      console.log(this.height);
    },
  },
  data() {
    return {
      //activeID: 100,
      channels: [
        // { id: 1, name: "name1", channel_count: 11 },
        // { id: 2, name: "name2", channel_count: 22 },
      ],

      isExpand: true,
    };
  },

  async created() {
    let v1 = await ChannelService.getChannels();
    this.channels = v1.filter((item) => item.name != "热门");
  },
  computed: {
    height() {
      if (this.isExpand) {
        var rows = Math.ceil(this.channels.length / this.column_count);
      } else {
        rows = 3;
      }

      // console.log("rows=", rows);
      return 40 * rows;
    },
  },
};
</script>

<style scoped>
.channel-list {
  overflow: hidden;
  transition: 0.3s;
}
.item {
  float: left;
  width: 50%;
}
.collapse {
  clear: both;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #999;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #e7e7e7;
}
</style>
