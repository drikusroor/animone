<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
import { useKeyframeStore } from "../stores/keyframes";
import { Button } from "ant-design-vue";
import {
  FieldTimeOutlined,
  BorderOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { Keyframe, EKeyframe } from "../models/Keyframe";

export default {
  components: {
    BorderOutlined,
    Button,
    FieldTimeOutlined,
    PlusOutlined,
  },
  computed: {},
  methods: {
    addStepToAnimation(elementIndex, keyframeIndex) {
      const { keyframes } = this.keyframeStore;
      const keyframeNotEmpty =
        keyframes[elementIndex][keyframeIndex].type !== EKeyframe.EMPTY;

      if (keyframeNotEmpty) {
        return;
      }

      const animation =
        keyframes[elementIndex][keyframeIndex - 1].step.animation;
      const animationIndex = this.animationStore.animations.indexOf(animation);
      const newStepIndex =
        this.animationStore.createAnimationStep(animationIndex);
      this.elementStore.selectElement(elementIndex);
      this.animationStore.selectAnimation(animationIndex);
      this.animationStore.selectStep(newStepIndex);
    },
    createElement() {
      this.animationStore.deselectAnimation();
      const elementIndex = this.elementStore.createElement();
      this.elementStore.selectElement(elementIndex);
    },
    createAnimation(elementIndex, keyframeIndex) {
      const element = this.elementStore.elements[elementIndex];
      const animationIndex = this.animationStore.createAnimation(
        element,
        keyframeIndex
      );

      // select element
      this.elementStore.selectElement(elementIndex);

      // select animation
      this.animationStore.selectAnimation(animationIndex);
      const stepIndex = this.animationStore.createAnimationStep(
        animationIndex,
        0
      );

      // select step
      this.animationStore.selectStep(stepIndex);
    },

    selectStep(keyframe: Keyframe) {
      // get element id
      const { element, animation, step } = keyframe;

      // get element index
      const elementIndex = this.elementStore.elements.indexOf(element);

      // get animation index
      const animationIndex = this.animationStore.animations.indexOf(animation);

      // get step index
      const stepIndex = animation.steps.indexOf(step);

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
    const keyframeStore = useKeyframeStore();

    return {
      animationStore,
      elementStore,
      keyframeStore,
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
        :key="elementIndex"
      >
        <div
          @click="elementStore.selectElement(elementIndex)"
          class="timeline__element-name"
          :class="{
            'timeline__element-name--selected':
              elementIndex === elementStore.selectedElementIndex,
          }"
          :style="{ background: element.style.background }"
        >
          {{ element.name }}
        </div>
        <template
          v-for="(keyframe, keyframeIndex) in keyframeStore.keyframes[
            element.id
          ]"
          :key="keyframeIndex"
        >
          <div
            v-if="keyframe.type === 'STEP_DELAY'"
            class="timeline__keyframe timeline__keyframe--step-delay"
            :class="{
              'timeline__keyframe--selected':
                keyframe.step === animationStore.selectedStep,
            }"
            @click="selectStep(keyframe)"
          >
            <FieldTimeOutlined v-if="keyframe.relativeStepKeyframe === 0" />
          </div>
          <div
            v-else-if="keyframe.type === 'STEP'"
            class="timeline__keyframe timeline__keyframe--step"
            :class="{
              'timeline__keyframe--selected':
                keyframe.step === animationStore.selectedStep,
            }"
            @click="selectStep(keyframe)"
          >
            <BorderOutlined />
          </div>
          <div
            v-else-if="keyframe.type === 'STEP_DURATION'"
            class="timeline__keyframe timeline__keyframe--step-duration"
            :class="{
              'timeline__keyframe--selected':
                keyframe.step === animationStore.selectedStep,
            }"
            @click="selectStep(keyframe)"
          ></div>
          <div
            v-else-if="
              keyframeStore.keyframes[element.id][keyframeIndex - 1]?.step
            "
            class="timeline__keyframe timeline__keyframe--new-step"
            @click="addStepToAnimation(elementIndex, keyframeIndex)"
          >
            <PlusOutlined />
          </div>
          <div
            v-else
            class="timeline__keyframe timeline__keyframe--empty"
            @click="createAnimation(elementIndex, keyframeIndex)"
          ></div>
        </template>
      </div>
      <div class="timeline__element-row">
        <div class="timeline__element-name">
          <Button
            @click="createElement()"
            class="timeline__element-name--create"
          >
            Create Element
            <template #icon><PlusOutlined /></template>
          </Button>
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
  padding: 0.25em;
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
  border-top: 0;
  border-left: 0;
  transition: filter 0.15s ease-in-out;
  cursor: pointer;
}
.timeline__keyframe:hover {
  filter: brightness(0.9);
}
.timeline__keyframe--selected {
  background: aquamarine;
}
.timeline__keyframe--selected::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: white;
}
.timeline__keyframe--step {
  background: aquamarine;
}
.timeline__keyframe--step-duration {
  background: aquamarine;
}
.timeline__keyframe--step-delay {
  background: rgb(255, 110, 110);
}
.timeline__keyframe--new-step,
.timeline__keyframe--empty {
  background: #eee;
  border-right: 1px solid #ddd;
}
.timeline__keyframe--empty:hover::before {
  content: "🎞️";
}
</style>
