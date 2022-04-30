<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
import { Button } from "ant-design-vue";
import { PlayCircleOutlined, StopOutlined } from "@ant-design/icons-vue";
import { Animation } from "../models/Animation";

export default {
  props: ["element", "index"],
  components: {
    Button,
    PlayCircleOutlined,
    StopOutlined,
  },
  data() {
    return {
      isPlaying: true,
      animationTimeout: null,
    };
  },
  computed: {
    animationStyles() {
      const keyframes = this.animationStore.animations.find(
        (animation) => animation.element.id === this.element.id
      )?.keyframes;

      return keyframes;
    },
    selected() {
      return this.elementStore.selectedElementIndex === this.index;
    },
    elementStyle() {
      const stepStyle =
        this.animationStore.selectedStep &&
        this.element.id ===
          this.animationStore.selectedStep.animation.element.id
          ? this.animationStore.selectedStep.css
          : {};
      return { ...this.element.style, ...stepStyle };
    },
  },
  methods: {
    playAnimation() {
      const styleElement = this.$refs.element.querySelector("style");
      if (styleElement) {
        return; // already playing
      }

      const animation: Animation = this.animationStore.animations.find(
        (animation) => animation.element.id === this.element.id
      );
      const el = document.createElement("style");
      const styles = `
        .${this.element.className} {
          animation-name: ${animation.animationName};
          animation-duration: ${animation.totalDuration}s;
        }

        ${this.animationStyles}
      `;
      el.innerHTML = styles;
      this.$refs.element.appendChild(el);
      this.isPlaying = true;
      this.animationTimeout = setTimeout(() => {
        this.stopAnimation();
      }, animation.totalDuration * 1000);
    },
    stopAnimation() {
      this.isPlaying = false;
      this.animationTimeout = null;
      const styleElement = this.$refs.element.querySelector("style");
      if (styleElement) {
        this.$refs.element.removeChild(styleElement);
      }
    },
    selectElement() {
      if (this.elementStore.selectedElementIndex !== this.index) {
        this.animationStore.deselectAnimation();
      }
      this.elementStore.selectElement(this.index);
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
    @click="selectElement()"
    class="element"
    ref="element"
    :class="{ 'element--selected': selected, [element.className]: true }"
    :style="elementStyle"
  >
    <Button @click="playAnimation" :disabled="isPlaying">
      <PlayCircleOutlined />
    </Button>
    <Button @click="stopAnimation" :disabled="!isPlaying">
      <StopOutlined />
    </Button>
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
