import type { TAnimationType } from "@/types/TAnimationType";

export interface IAnimationEntry {
    type: TAnimationType | string;
    value: string;
}