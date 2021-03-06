<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
import { useKeyframeStore } from "../stores/keyframes";
import { Button } from "ant-design-vue";
import { PlayCircleOutlined, StopOutlined } from "@ant-design/icons-vue";
import { Animation } from "../models/Animation";
import { AnimationElement } from "../models/AnimationElement";
import config from "../config/config";

const { features } = config;

export default {
  props: {
    element: AnimationElement,
    index: Number,
  },
  components: {
    Button,
    PlayCircleOutlined,
    StopOutlined,
  },
  data() {
    return {
      isDragging: false,
      isPlaying: false,
      animationTimeout: null,
      dragSelector: ".drag-container",
      dragPositionStart: { x: 0, y: 0 },
      dragPositionMove: { x: 0, y: 0 },
      features,
    };
  },
  computed: {
    animationStyles() {
      const animation = this.animationStore.animations.find(
        (animation) => animation.element.id === this.element.id
      ) as Animation;

      return animation?.keyframesCss;
    },
    selected() {
      return this.elementStore.selectedElementIndex === this.index;
    },
    elementStyle() {
      let elementStyle = {};

      if (
        this.element.id ===
          this.animationStore.selectedStep?.animation.element.id &&
        !this.isPlaying &&
        !this.keyframeStore.isPlaying
      ) {
        elementStyle = {
          ...this.elementStore.selectedElement.css,
          ...this.animationStore.selectedStep.css,
        };
      } else {
        elementStyle = this.element.css;
      }

      if (this.selected) {
        elementStyle.zIndex = 100;
      }

      return elementStyle;
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
    onResize: function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    updatePosition(left, top, styleString: string) {
      const regexTop = /(.*(top).*[\n]?)/g;
      const regexLeft = /(.*(left).*[\n]?)/g;

      if (styleString.match(regexTop)) {
        styleString = styleString.replace(regexTop, `top: ${top}px;\n`);
      } else {
        styleString += `\ntop: ${top}px;`;
      }

      if (styleString.match(regexLeft)) {
        styleString = styleString.replace(regexLeft, `left: ${left}px;\n`);
      } else {
        styleString += `\nleft: ${left}px;`;
      }

      return styleString;
    },
    onDragStart(event) {
      const { x, y } = event;
      this.dragPositionStart = { x, y };
      this.isDragging = true;
    },
    onDragMove(event) {
      if (!this.isDragging || !this.selected) {
        return;
      }
      const { x, y } = event;
      this.dragPositionMove = { x, y };

      const leftMovement = this.dragPositionMove.x - this.dragPositionStart.x;
      const topMovement = this.dragPositionMove.y - this.dragPositionStart.y;

      const styleString = this.elementStyle;

      const leftCurrent = parseInt(styleString.left ?? 0);
      const topCurrent = parseInt(styleString.top ?? 0);

      const left = leftCurrent + leftMovement;
      const top = topCurrent + topMovement;

      if (this.animationStore.selectedStep) {
        const { styleString } = this.animationStore.selectedStep;
        this.animationStore.selectedStep.styleString = this.updatePosition(
          left,
          top,
          styleString
        );
      } else if (this.animationStore.selectedAnimation) {
        this.animationStore.selectedAnimation.styleString = this.updatePosition(
          left,
          top,
          this.animationStore.selectedAnimation.styleString
        );
      } else {
        this.elementStore.selectedElement.styleString = this.updatePosition(
          left,
          top,
          this.elementStore.selectedElement.styleString
        );
      }

      this.dragPositionStart = { x, y };
    },
    onDragEnd() {
      this.isDragging = false;
    },
  },
  setup() {
    const animationStore = useAnimationStore();
    const elementStore = useElementStore();
    const keyframeStore = useKeyframeStore();
    return { animationStore, elementStore, keyframeStore };
  },
};
</script>

<template>
  <div
    @click="selectElement()"
    class="element"
    ref="element"
    :id="`element${element.id}`"
    :class="{
      element: true,
      'element--selected': selected,
      [element.className]: true,
    }"
    :style="elementStyle"
    @mousedown="onDragStart"
    @mousemove="onDragMove"
    @mouseup="onDragEnd"
    dragSelector=".drag-selector"
    :fitContent="true"
  >
    <div v-if="features.playStopButtonsEnabled">
      <Button @click="playAnimation" :disabled="isPlaying">
        <PlayCircleOutlined />
      </Button>
      <Button @click="stopAnimation" :disabled="!isPlaying">
        <StopOutlined />
      </Button>
    </div>
    <div class="resizable-content">
      <div class="drag-selector"></div>
    </div>
  </div>
</template>

<style scoped>
.element {
  min-width: 64px;
  min-height: 64px;
  cursor: pointer;
  transition: filter 0.15s ease-in-out;
  background: #ccc;
  position: relative;
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
.resizable-content {
  top: 0;
  height: 100%;
  position: absolute;
  width: 100%;
}

.drag-selector {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.drag-selector:hover {
  background-color: rgba(255, 255, 255, 0.25);
}
</style>
