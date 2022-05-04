<script lang="ts">
import { PlayCircleOutlined } from "@ant-design/icons-vue";

export default {
  components: { PlayCircleOutlined },
  data() {
    return {
      size: "large",
    };
  },
};
</script>

<template>
  <div class="play-controls">
    <a-button type="primary" shape="circle" :size="size">
      <template #icon>
        <PlayCircleOutlined />
      </template>
    </a-button>
    <a-button type="primary" shape="circle" :size="size">
      <template #icon>
        <div class="play-controls__stop"></div>
      </template>
    </a-button>
  </div>
</template>

<style scoped>
.play-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}
.play-controls__stop {
  width: 12px;
  height: 12px;
  background: white;
  margin: 0 auto;
}
</style>
