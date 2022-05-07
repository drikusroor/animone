import { parseStyleString } from "@/helpers/style";
import type { IAnimation } from "./Animation";
import type { AnimationEntry } from "./AnimationEntry";

export class AnimationStep {
  name: string;
  delay: number;
  duration: number;
  easing: string;
  entries: AnimationEntry[];
  animation: IAnimation;
  styleString = "";

  public get css(): { [key: string]: string } {
    return parseStyleString(this.styleString);
  }

  /** Get duration in keyframes */
  public get totalDuration(): number {
    return this.delay + this.duration;
  }

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
  animation: IAnimation;
}
