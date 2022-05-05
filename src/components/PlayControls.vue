<script lang="ts">
import { PlayCircleOutlined } from "@ant-design/icons-vue";
import { generateAnimationsCss } from "../helpers/generateAnimationsCss";
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
import { Animation } from "../models/Animation";
import { AnimationElement } from "../models/AnimationElement";

export default {
  components: { PlayCircleOutlined },
  data() {
    return {
      animationTimeout: null,
      framesPerSecond: 3,
      isPlaying: false,
      size: "large",
    };
  },
  methods: {
    playAnimation() {
      const styleElement = this.$refs.styleContainer.querySelector("style");
      if (styleElement) {
        return; // already playing
      }

      const elements = this.elementStore.elements as AnimationElement[];
      const animations = this.animationStore.animations as Animation[];

      const combinedElementAnimations = elements.map((element) => {
        const elementAnimations = animations.filter(
          (animation) => animation.element.id === element.id
        );

        const declarations = `
          .${element.className} {
            animation: ${elementAnimations
              .map((animation) => {
                return animation.animationDeclaration({
                  keyframesPerSecond: this.framesPerSecond,
                });
              })
              .join(", ")};
          }
        `;

        const totalElementAnimationsDuration = elementAnimations.reduce(
          (total, animation) => total + animation.totalDuration,
          0
        );

        return {
          ...generateAnimationsCss(elementAnimations, {
            keyframesPerSecond: this.framesPerSecond,
          }),
          totalElementAnimationsDuration,
          declarations,
        };
      });

      const lastKeyframe = this.getLastKeyframe(animations);

      const totalDurationMs = (lastKeyframe * 1000) / this.framesPerSecond;

      const declarations = combinedElementAnimations
        .map((animation) => animation.declarations)
        .join("\n");

      const keyframesCss = combinedElementAnimations
        .map((animation) => animation.css)
        .join("\n");

      const styles = `
          ${declarations}
          ${keyframesCss}
        `;

      const el = document.createElement("style");

      el.innerHTML = styles;
      this.$refs.styleContainer.appendChild(el);
      this.isPlaying = true;
      this.animationTimeout = setTimeout(() => {
        this.stopAnimation();
      }, totalDurationMs);
    },
    stopAnimation() {
      this.isPlaying = false;
      this.animationTimeout = null;
      const styleElement = this.$refs.styleContainer.querySelector("style");
      if (styleElement) {
        this.$refs.styleContainer.removeChild(styleElement);
      }
    },
    getLastKeyframe(animations: Animation[]) {
      return animations.reduce(
        (latestKeyframe, animation) =>
          latestKeyframe > animation.keyframe + animation.totalDuration
            ? latestKeyframe
            : animation.keyframe + animation.totalDuration,
        0
      );
    },
  },
  setup() {
    return {
      animationStore: useAnimationStore(),
      elementStore: useElementStore(),
    };
  },
};
</script>

<template>
  <div>
    <div class="play-controls">
      <a-button
        type="primary"
        shape="circle"
        :size="size"
        @click="playAnimation"
      >
        <template #icon>
          <PlayCircleOutlined />
        </template>
      </a-button>
      <a-button
        type="primary"
        shape="circle"
        :size="size"
        @click="stopAnimation"
      >
        <template #icon>
          <div class="play-controls__stop"></div>
        </template>
      </a-button>
      <a-input-number
        title="Frames per second"
        placeholder="Frames per second"
        v-model:value="framesPerSecond"
      >
      </a-input-number>
    </div>
    <div ref="styleContainer"></div>
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
