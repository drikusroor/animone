import type { AnimationElement, IAnimationElement } from "./AnimationElement";
import type { IAnimationStep } from "./AnimationStep";

export class Animation {
  name: string;
  element: AnimationElement;
  steps: IAnimationStep[];
  keyframe: number;

  constructor({ name, element, steps, keyframe }: IAnimation) {
    this.name = name;
    this.element = element;
    this.steps = steps;
    this.keyframe = keyframe;
  }
}

export interface IAnimation {
  name: string;
  element: IAnimationElement;
  steps: IAnimationStep[];
  keyframe: number;
}
