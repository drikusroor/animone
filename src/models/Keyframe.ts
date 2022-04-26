import type { Animation } from "./Animation";
import type { AnimationStep } from "../models/AnimationStep";
import type { AnimationElement } from "./AnimationElement";

export class Keyframe {
  keyframe: number;
  type: EKeyframe;
  step?: AnimationStep;

  public get animation() : Animation | undefined {
    return this.step?.animation;
  }

  public get element() : AnimationElement | undefined {
    return this.step?.animation.element;
  }

  constructor(keyframe: number, type: EKeyframe, step?: AnimationStep) {
    this.keyframe = keyframe;
    this.type = type;
    this.step = step;
  }
}

export enum EKeyframe {
  EMPTY = "EMPTY",
  STEP = "STEP",
  STEP_DELAY = "STEP_DELAY",
  STEP_DURATION = "STEP_DURATION",
}
