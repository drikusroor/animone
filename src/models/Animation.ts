import type { ICombineAnimationOptions } from "@/helpers/generateAnimationsCss";
import { kebabify } from "@/helpers/style";
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

  /** Get duration of preceding steps in duration */
  public precedingStepsDuration(index: number): number {
    if (index === 0) {
      return 0;
    }

    return this.steps
      .slice(0, index)
      .reduce((acc, step) => acc + step.totalDuration, 0);
  }

  public get keyframesCss(): string {
    const stepsCss = this.steps
      .reduce((acc, step, i, array) => {
        const precedingStepsDuration = this.precedingStepsDuration(i);

        const percentage =
          precedingStepsDuration !== 0
            ? Math.round(
              (100 * precedingStepsDuration) / (this.totalDuration - 1)
            )
            : 0;

        acc = [...acc, { percentage, step }];

        if (i === array.length - 1 && step.duration >= 1) {
          return [...acc, { percentage: 100, step }];
        }

        return acc;
      }, [] as { percentage: number; step: AnimationStep }[])
      .map(({ percentage, step }) => `${percentage}% { ${step.styleString} } `)
      .join("\n");

    const keyframes = `
      @keyframes ${this.animationName} {
        ${stepsCss}
      }
    `;

    return keyframes;
  }

  public get animationName(): string {
    return kebabify(this.name);
  }

  constructor({ name, element, steps, keyframe }: IAnimation) {

    if (!name) {
      throw new Error("Name is required");
    }

    this.name = name;

    if (!element) {
      throw new Error("Element is required");
    }

    this.element = element;
    this.steps = steps;

    if (keyframe === undefined) {
      throw new Error("Keyframe is required");
    }
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
