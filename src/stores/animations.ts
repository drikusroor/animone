import type { IAnimation } from "@/interfaces/IAnimation";
import type { IAnimationEntry } from "@/interfaces/IAnimationEntry";
import type { IAnimationStep } from "@/interfaces/IAnimationStep";
import { defineStore } from "pinia";

export const useAnimationStore = defineStore({
  id: "animations",
  state: () => ({
    animations: [] as IAnimation[],
    selected: -1,
  }),
  getters: {
    selectedAnimation: (state) => {
      if (state.selected > -1) {
        return state.animations[state.selected];
      }
    },
  },
  actions: {
    createAnimation(elementId: number, keyframe: number = 0) {

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
      this.selected = index;
    },
  },
});
