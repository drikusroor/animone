import { hyphenify } from "@/helpers/style";
import type { AnimationElement, IAnimationElement } from "./AnimationElement";
import { AnimationStep } from "./AnimationStep";

export class Animation {
  name: string;
  element: AnimationElement;
  steps: AnimationStep[];
  keyframe: number;

  public get css(): string {
    const declareAnimation = `animation-name: ${this.animationName};\nanimation-duration: 5s;`;

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

    const keyframesCss = `
      @keyframes ${this.animationName} {
        ${stepsCss}
      }
    `;

    return [declareAnimation, keyframesCss].join("\n");
  }

  public get animationName(): string {
    return hyphenify(this.name);
  }

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
  steps: AnimationStep[];
  keyframe: number;
}
