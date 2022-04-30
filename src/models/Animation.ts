import { hyphenify } from "@/helpers/style";
import type { AnimationElement, IAnimationElement } from "./AnimationElement";
import type { AnimationStep } from "./AnimationStep";

export class Animation {
  name: string;
  duration: string;
  element: AnimationElement;
  steps: AnimationStep[];
  keyframe: number;

  public get keyframes(): string {
    const stepsLength = this.steps.length;

    const stepsCss = this.steps
      .map((step, i) => {
        const percentage =
          i === 0
            ? "0"
            : i === stepsLength - 1
            ? "100"
            : Math.round((100 * i) / (stepsLength - 1));

        return `${percentage}% { ${step.styleString} } `;
      })
      .join("\n");

    const keyframes = `
      @keyframes ${this.animationName} {
        ${stepsCss}
      }
    `;

    return keyframes;
  }

  public get animationName(): string {
    return hyphenify(this.name);
  }

  constructor({ name, duration, element, steps, keyframe }: IAnimation) {
    this.name = name;
    this.duration = duration ?? "5s";
    this.element = element;
    this.steps = steps;
    this.keyframe = keyframe;
  }
}

export interface IAnimation {
  name: string;
  duration: string;
  element: IAnimationElement;
  steps: AnimationStep[];
  keyframe: number;
}
