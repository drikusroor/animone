import type { IAnimationStep } from "./IAnimationStep";

export interface IAnimation {
    name: string;
    steps: IAnimationStep[];
}