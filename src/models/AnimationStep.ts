import { parseStyleString } from "@/helpers/style";
import type { Animation } from "./Animation";
import type { AnimationEntry } from "./AnimationEntry";

export class AnimationStep {
  name: string;
  transition: number;
  duration: number;
  easing: string;
  entries: AnimationEntry[];
  animation: Animation;
  styleString = "";

  public get css(): { [key: string]: string } {
    return parseStyleString(this.styleString);
  }

  /** Get duration in keyframes */
  public get totalDuration(): number {
    return this.duration + this.transition;
  }

  public constructor({
    name,
    transition,
    duration,
    easing,
    entries,
    animation,
  }: IAnimationStep) {
    this.name = name;
    this.transition = transition;
    this.duration = duration;
    this.easing = easing;
    this.entries = entries;
    this.animation = animation;
  }
}

export interface IAnimationStep {
  name: string;
  transition: number;
  duration: number;
  easing: string;
  entries: AnimationEntry[];
  animation: Animation;
}
