import { defineStore } from "pinia";
import type { Animation } from "@/models/Animation";
import { EKeyframe, Keyframe } from "@/models/Keyframe";
import { useAnimationStore } from "@/stores/animations";
import { useElementStore } from "@/stores/elements";

export interface IKeyframeStore {
  keyframes: Keyframe[];
}

export const useKeyframeStore = defineStore({
  id: "keyframes",
  state: () => ({ keyframes: [] }),
  getters: {
    keyframes() {
      const { animations } = useAnimationStore();
      const { elements } = useElementStore();
      const animationsKeyframes: Keyframe[][] = animations.map((animation) =>
        this.getAnimationKeyframes(animation)
      );
      const flattenedKeyframes = animationsKeyframes.reduce((acc, curr) => {
        return [...acc, ...curr];
      }, []);
      const flattenedKeyframesNumbers = flattenedKeyframes.map(
        (keyframe) => keyframe.keyframe
      );

      const maxDuration = Math.max(...flattenedKeyframesNumbers);
      const keyframesAmount = Math.max(maxDuration + 25, 50);

      const emptyKeyframes = Array.from(Array(keyframesAmount).keys());

      const keyframes = elements.reduce((acc, element) => {
        let elementKeyframes = flattenedKeyframes.filter(
          (keyframe) => keyframe?.step?.animation.element.id === element.id
        );

        elementKeyframes = emptyKeyframes.map((_keyframe, i) => {
          const elementKeyframe = elementKeyframes.find(
            (eKeyframe) => eKeyframe.keyframe === i
          );

          // return element keyframe if exists, if not return empty keyframe
          return elementKeyframe ?? new Keyframe(i, EKeyframe.EMPTY);
        });

        return {
          ...acc,
          [element.id]: elementKeyframes,
        };
      }, {});

      return keyframes;
    },
  },
  actions: {
    getAnimationKeyframes(animation: Animation) {
      return animation.steps.reduce((keyframes, step): Keyframe[] => {
        const currentKeyframesLength = keyframes.length;

        const stepDelayKeyframes =
          step.delay > 0
            ? Array.from(Array(step.delay).keys()).map((i) => {
                return new Keyframe(
                  animation.keyframe + currentKeyframesLength + i,
                  EKeyframe.STEP_DELAY,
                  step,
                  currentKeyframesLength + i + 1 - animation.keyframe,
                  i
                );
              })
            : [];

        const stepKeyframe = new Keyframe(
          animation.keyframe + currentKeyframesLength + step.delay,
          EKeyframe.STEP,
          step
        );

        const stepDurationKeyframes =
          step.duration > 1
            ? Array.from(Array(step.duration - 1).keys()).map((i) => {
                return new Keyframe(
                  animation.keyframe +
                    currentKeyframesLength +
                    1 +
                    i +
                    step.delay,
                  EKeyframe.STEP_DURATION,
                  step
                );
              })
            : [];

        return [
          ...keyframes,
          ...stepDelayKeyframes,
          stepKeyframe,
          ...stepDurationKeyframes,
        ];
      }, [] as Keyframe[]);
    },
  },
});
