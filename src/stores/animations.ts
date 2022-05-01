import { Animation } from "@/models/Animation";
import type { AnimationEntry } from "@/models/AnimationEntry";
import { AnimationStep } from "@/models/AnimationStep";
import { defineStore } from "pinia";
import type { AnimationElement } from "@/models/AnimationElement";

export const useAnimationStore = defineStore({
  id: "animations",
  state: () => ({
    animations: [] as Animation[],
    selectedAnimationIndex: -1,
    selectedStepIndex: -1,
  }),
  getters: {
    selectedAnimation: (state) => {
      if (state.selectedAnimationIndex > -1) {
        return state.animations[state.selectedAnimationIndex];
      }
    },
    selectedStep: (state) => {
      if (state.selectedAnimationIndex > -1) {
        const animation = state.animations[state.selectedAnimationIndex];
        if (state.selectedStepIndex > -1) {
          return animation.steps[state.selectedStepIndex];
        }
      }
    },
  },
  actions: {
    createAnimation(element: AnimationElement, keyframe: number) {
      // if elementId is falsy and not zero, throw an error
      if (!element) {
        throw new Error("Element is required");
      }

      if (
        this.animations.find(
          (animation) =>
            animation.element.id === element.id &&
            animation.keyframe === keyframe
        )
      ) {
        throw new Error("Keyframe already exists for this element!");
      }

      const animation = new Animation({
        name: "New animation",
        element,
        steps: [],
        keyframe,
      });

      this.animations.push(animation);

      return this.animations.length - 1;
    },
    createAnimationStep(animationIndex: number) {
      if (animationIndex < 0) {
        throw new Error("Animation index is required");
      }

      const animation = this.animations[animationIndex];

      if (!animation) {
        throw new Error("Animation does not exist!");
      }

      animation.steps.push(
        new AnimationStep({
          name: "New step",
          duration: 1,
          delay: 0,
          easing: "linear",
          entries: [],
          animation,
        })
      );

      return animation.steps.length - 1;
    },
    deselectAnimation(): void {
      this.selectedAnimationIndex = -1;
      this.selectedStepIndex = -1;
    },
    updateAnimation(
      animation: Animation,
      groupIndex: number,
      animationIndex: number
    ) {
      throw new Error("Not yet implemented");
    },
    updateAnimationStep(
      animationStep: AnimationStep,
      groupIndex: number,
      animationIndex: number,
      stepIndex: number
    ) {
      throw new Error("Not yet implemented");
    },
    updateAnimationEntry(
      animationEntry: AnimationEntry,
      groupIndex: number,
      animationIndex: number,
      stepIndex: number,
      entryIndex: number
    ) {
      throw new Error("Not yet implemented");
    },
    selectAnimation(index: number) {
      this.selectedAnimationIndex = index;
    },
    selectStep(index: number) {
      this.selectedStepIndex = index;
    },
  },
});
