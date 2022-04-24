<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
export default {
  data() {
    return {
      keyframes: Array.from(Array(100).keys()),
    };
  },
  setup() {
    const elementStore = useElementStore();
    const animationStore = useAnimationStore();

    return {
      animationStore,
      elementStore,
    };
  },
};
</script>

<template>
  <div v-if="elementStore.elements.length > 0" class="timeline">
    <div class="timeline__inner">
      <div
        class="timeline__element-row"
        v-for="(element, index) in elementStore.elements"
        :key="index"
      >
        <div
          @click="elementStore.selectElement(index)"
          class="timeline__element-name"
          :class="{
            'timeline__element-name--selected': index === elementStore.selected,
          }"
        >
          {{ element.name }}
        </div>
        <div
          v-for="(keyframe, index) in keyframes"
          :key="index"
          class="timeline__keyframe"
          @click="animationStore.createAnimation(element.id, index)"
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
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.timeline__element-name:hover {
  background: #ccc;
}
.timeline__element-name--selected {
  background: #ccc;
  font-weight: bolder;
}
.timeline__keyframe {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 24px;
  height: 32px;
  border: 1px solid #ccc;
  background: aquamarine;
  border-top: 0;
  border-left: 0;
  transition: filter 0.15s ease-in-out;
  cursor: pointer;
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
.timeline__keyframe:hover::before,
.timeline__keyframe--empty:hover::before {
  content: "➕";
}
</style>
