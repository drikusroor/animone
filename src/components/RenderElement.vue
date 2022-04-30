<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
import { Button } from "ant-design-vue";
import { PlayCircleOutlined, StopOutlined } from "@ant-design/icons-vue";

export default {
  props: ["element", "index"],
  components: {
    Button,
    PlayCircleOutlined,
    StopOutlined,
  },
  computed: {
    getAnimationCss() {
      return this.animationStore.selectedAnimation?.css;
    },
    selected() {
      return this.elementStore.selectedElementIndex === this.index;
    },
    elementStyle() {
      const stepStyle =
        this.animationStore.selectedStep &&
        this.element.id === this.animationStore.selectedStep.animation.element.id
          ? this.animationStore.selectedStep.css
          : {};
      return { ...this.element.style, ...stepStyle };
    },
  },
  methods: {
    playAnimation() {
      throw new Error("Method not implemented.");
    },
    stopAnimation() {
      throw new Error("Method not implemented.");
    },
  },
  setup() {
    const animationStore = useAnimationStore();
    const elementStore = useElementStore();
    return { animationStore, elementStore };
  },
};
</script>

<template>
  <div
    @click="elementStore.selectElement(index)"
    class="element"
    ref="element"
    :class="{ 'element--selected': selected, [element.className]: true }"
    :style="elementStyle"
  >
    <Button @click="playAnimation"> Play </Button>
    <Button @click="stopAnimation"> Stop </Button>
  </div>
</template>

<style scoped>
.element {
  min-width: 64px;
  min-height: 64px;
  cursor: pointer;
  transition: filter 0.15s ease-in-out;
  background: #ccc;
}
.element--selected {
  border: 2px dashed #000;
}
.element:hover:not(.element--selected) {
  border: 2px dashed #555;
  filter: brightness(0.9);
}
.element__name {
  position: absolute;
  place-self: center;
  background: #eee;
  padding: 0.25em;
  border-radius: 5px;
  bottom: 0.25em;
  margin: 0 auto;
}
</style>
