<script lang="ts">
import { useElementStore } from "../stores/elements";
export default {
  data() {
    return {
      keyframes: Array.from(Array(100).keys()),
    };
  },
  setup() {
    const store = useElementStore();

    return {
      store,
    };
  },
};
</script>

<template>
  <div v-if="store.elements.length > 0" class="timeline">
    <div class="timeline__inner">
      <div
        class="timeline__element-row"
        v-for="(element, index) in store.elements"
        :key="index"
      >
        <div class="timeline__element-name">
          {{ element.name }}
        </div>
        <div
          v-for="(keyframe, index) in keyframes"
          :key="index"
          class="timeline__keyframe"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  min-height: 64px;
  position: fixed;
  background: white;
  width: 100%;
  bottom: 0px;
  border-top: 1px solid #aaa;
  overflow: hidden;
}
.timeline__inner {
  overflow: auto;
}
.timeline__element-row {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
}
.timeline__element-name {
  display: inline-block;
  flex: 1 0 auto;
  width: 192px;
  background: #ddd;
  border: 1px solid #aaa;
  border-top: 0;
  border-left: 0;
  padding: 0.25em;
  height: 32px;
}
.timeline__keyframe {
  display: inline-block;
  flex: 1 0 auto;
  width: 24px;
  height: 32px;
  border: 1px solid #ccc;
  background: aquamarine;
  border-top: 0;
  border-left: 0;
  transition: filter 0.15s ease-in-out;
}
.timeline__keyframe:hover {
  filter: brightness(0.95);
}
.timeline__keyframe--selected {
  background: greenyellow;
}
.timeline__keyframe--empty {
  background: #ccc;
}
</style>
