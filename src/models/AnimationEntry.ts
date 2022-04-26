import type { TAnimationType } from "@/types/TAnimationType";

export class AnimationEntry {
  type: TAnimationType | string;
  value: string;

  constructor(type: TAnimationType | string, value: string) {
    this.type = type;
    this.value = value;
  }
}
