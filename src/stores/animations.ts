import type { IAnimation } from "@/interfaces/IAnimation";
import type { IAnimationEntry } from "@/interfaces/IAnimationEntry";
import type { IAnimationStep } from "@/interfaces/IAnimationStep";
import { defineStore } from "pinia";

export const useAnimationStore = defineStore({
  id: "animations",
  state: () => ({
    animations: [] as IAnimation[],
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
    createAnimation(elementId: number, keyframe: number) {
      // if elementId is falsy and not zero, throw an error
      if (!(elementId || elementId === 0)) {
        throw new Error("Element id is required");
      }

      if (
        this.animations.find(
          (animation) =>
            animation.elementId === elementId && animation.keyframe === keyframe
        )
      ) {
        throw new Error("Keyframe already exists for this element!");
      }

      this.animations.push({
        name: "New animation",
        elementId: elementId,
        steps: [],
        keyframe,
      });

      return this.animations.length - 1;
    },
    createAnimationStep(animationIndex: number, keyframe: number) {
      if (animationIndex < 0) {
        throw new Error("Animation index is required");
      }

      const animation = this.animations[animationIndex];

      if (!animation) {
        throw new Error("Animation does not exist!");
      }

      animation.steps.push({
        name: "New step",
        duration: 2,
        delay: 0,
        easing: "linear",
        keyframe,
        entries: [],
      });

      return animation.steps.length - 1;
    },
    updateAnimation(
      animation: IAnimation,
      groupIndex: number,
      animationIndex: number
    ) {
      throw new Error("Not yet implemented");
    },
    updateAnimationStep(
      animationStep: IAnimationStep,
      groupIndex: number,
      animationIndex: number,
      stepIndex: number
    ) {
      throw new Error("Not yet implemented");
    },
    updateAnimationEntry(
      animationEntry: IAnimationEntry,
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
