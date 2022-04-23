import type { IAnimationStep } from "./IAnimationStep";

export interface IAnimation {
    name: String;
    steps: IAnimationStep[];
}