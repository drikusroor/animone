import type { ICombineAnimationOptions } from "@/helpers/generateAnimationsCss";
import { hyphenify } from "@/helpers/style";
import type { AnimationElement, IAnimationElement } from "./AnimationElement";
import type { AnimationStep } from "./AnimationStep";

export class Animation {
  name: string;
  element: AnimationElement;
  steps: AnimationStep[];
  keyframe: number;

  /** Get duration in keyframes */
  public get totalDuration(): number {
    return this.steps.reduce((acc, step) => acc + step.totalDuration, 0);
  }

  public get keyframesCss(): string {
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

  constructor({ name, element, steps, keyframe }: IAnimation) {
    this.name = name;
    this.element = element;
    this.steps = steps;
    this.keyframe = keyframe;
  }

  public animationDeclaration(options: ICombineAnimationOptions): string {
    return `${this.animationName} ${this.totalDuration / options.keyframesPerSecond
      }s linear ${Math.round((this.keyframe / options.keyframesPerSecond) * 100) / 100
      }s`;
  }
}

export interface IAnimation {
  name: string;
  element: IAnimationElement;
  steps: AnimationStep[];
  keyframe: number;
}
