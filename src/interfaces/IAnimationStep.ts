import type { IAnimationEntry } from "./IAnimationEntry";

export interface IAnimationStep {
  name: string;
  delay: number;
  duration: number;
  easing: string;
  entries: IAnimationEntry[];
  keyframe: number;
}
