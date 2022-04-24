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
    createAnimation(id: number, _keyframe: number) {
      this.animations.push({
        name: "New animation",
        elementId: id,
        steps: [],
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
