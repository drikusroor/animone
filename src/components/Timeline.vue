<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
export default {
  data() {
    return {
      keyframes: Array.from(Array(100).keys()),
    };
  },
  computed: {
    animationStore() {
      return useAnimationStore();
    },
    elementStore() {
      return useElementStore();
    },
  },
  methods: {
    createAnimation(elementIndex, index) {
      const animationIndex = this.animationStore.createAnimation(
        elementIndex,
        index
      );
      this.animationStore.selectAnimation(animationIndex);
      const stepIndex = this.animationStore.createAnimationStep(
        animationIndex,
        0
      );
      this.animationStore.selectStep(stepIndex);
    },
    isStep(elementId: number, index: number) {
      const animations = this.animationStore.animations.filter(
        (animation) => animation.elementId === elementId
      );

      const step = animations.some((animation) => {
        return animation.steps.some((step) => {
          return animation.keyframe + step.keyframe === index;
        });
      });
      return step;
    },
    isInStep(elementId: number, index: number) {
      const animations = this.animationStore.animations.filter(
        (animation) => animation.elementId === elementId
      );

      const step = animations.some((animation) => {
        return animation.steps.some((step) => {
          const duration = step.duration;
          const stepKeyframes = Array.from(Array(duration).keys());

          return stepKeyframes.some((keyframe) => {
            return animation.keyframe + step.keyframe + keyframe === index;
          });
        });
      });
      return step;
    },
    selectStep(elementIndex: number, index: number) {
      // get element id
      const elementId = this.elementStore.elements[elementIndex].id;

      // get animation index
      const animationIndex = this.animationStore.animations.findIndex(
        (animation) =>
          animation.elementId === elementId && animation.keyframe === index
      );

      const animation = this.animationStore.animations[animationIndex];

      // get step index
      const stepIndex = animation.steps.findIndex(
        (step) => animation.keyframe + step.keyframe === index
      );

      // select element
      this.elementStore.selectElement(elementIndex);

      // select animation
      this.animationStore.selectAnimation(animationIndex);

      // select step
      this.animationStore.selectStep(stepIndex);
    },
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
  <div class="timeline">
    <div class="timeline__inner">
      <div
        class="timeline__element-row"
        v-for="(element, elementIndex) in elementStore.elements"
        :key="index"
      >
        <div
          @click="elementStore.selectElement(elementIndex)"
          class="timeline__element-name"
          :class="{
            'timeline__element-name--selected': index === elementStore.selected,
          }"
        >
          {{ element.name }}
        </div>
        <template v-for="(_keyframe, index) in keyframes" :key="index">
          <div
            v-if="isStep(element.id, index)"
            class="timeline__keyframe timeline__keyframe--step"
            @click="selectStep(elementIndex, index)"
          ></div>
          <div
            v-else-if="isInStep(element.id, index)"
            class="timeline__keyframe timeline__keyframe--in-step"
          ></div>
          <div
            v-else
            class="timeline__keyframe timeline__keyframe--empty"
            @click="createAnimation(elementIndex, index)"
          ></div>
        </template>
      </div>
      <div class="timeline__element-row">
        <div class="timeline__element-name">
          <button
            @click="elementStore.createElement()"
            class="timeline__element-name--create"
          >
            Create Element ➕
          </button>
        </div>
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
  color: #000;
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
  border-top: 0;
  border-left: 0;
  transition: filter 0.15s ease-in-out;
  cursor: pointer;
}
.timeline__keyframe--step {
  background: chartreuse;
}
.timeline__keyframe--in-step {
  background: aquamarine;
}
.timeline__keyframe:hover {
  filter: brightness(0.95);
}
.timeline__keyframe--selected {
  background: greenyellow;
}
.timeline__keyframe--empty {
  background: #eee;
}
.timeline__keyframe:hover::before,
.timeline__keyframe--empty:hover::before {
  content: "➕";
}
</style>
