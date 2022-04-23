import type { IAnimation } from "./IAnimation";

export interface IAnimationGroup {
    ref: string;
    animations: IAnimation[];
}