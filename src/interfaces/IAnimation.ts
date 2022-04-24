import type { IAnimationStep } from "./IAnimationStep";

export interface IAnimation {
    name: string;
    elementId: number;
    steps: IAnimationStep[];
    keyframe?: number;
}