import type { Animation } from "./Animation";
import type { AnimationStep } from "../models/AnimationStep";
import type { AnimationElement } from "./AnimationElement";

export class Keyframe {
  keyframe: number;
  type: EKeyframe;
  step?: AnimationStep;
  relativeAnimationKeyframe?: number;
  relativeStepKeyframe?: number;

  public get animation(): Animation | undefined {
    return this.step?.animation;
  }

  public get element(): AnimationElement | undefined {
    return this.step?.animation.element;
  }

  constructor(
    keyframe: number,
    type: EKeyframe,
    step?: AnimationStep,
    relativeAnimationKeyframe?: number,
    relativeStepKeyframe?: number
  ) {
    this.keyframe = keyframe;
    this.type = type;
    this.step = step;
    if (
      relativeAnimationKeyframe !== undefined &&
      relativeStepKeyframe !== undefined
    ) {
      this.relativeAnimationKeyframe = relativeAnimationKeyframe;
      this.relativeStepKeyframe = relativeStepKeyframe;
    }
  }
}

export enum EKeyframe {
  EMPTY = "EMPTY",
  STEP = "STEP",
  STEP_DURATION = "STEP_DURATION",
  STEP_TRANSITION = "STEP_TRANSITION",
}
