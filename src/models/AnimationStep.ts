import type { Animation } from "./Animation";
import type { AnimationEntry } from "./AnimationEntry";

export class AnimationStep {
  name: string;
  delay: number;
  duration: number;
  easing: string;
  entries: AnimationEntry[];
  animation: Animation;

  public constructor({
    name,
    delay,
    duration,
    easing,
    entries,
    animation,
  }: IAnimationStep) {
    this.name = name;
    this.delay = delay;
    this.duration = duration;
    this.easing = easing;
    this.entries = entries;
    this.animation = animation;
  }
}

export interface IAnimationStep {
  name: string;
  delay: number;
  duration: number;
  easing: string;
  entries: AnimationEntry[];
  animation: Animation;
}
