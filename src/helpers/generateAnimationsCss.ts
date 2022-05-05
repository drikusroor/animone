import type { Animation } from "@/models/Animation";

export interface IGenerateAnimationsCssOptions {
  keyframesPerSecond: number;
}

export function generateAnimationsCss(
  animations: Animation[],
  options: IGenerateAnimationsCssOptions
): string {
  if (!options) {
    throw new Error("Options are required");
  }

  return animations.map((animation) => animation.keyframesCss).join("\n");
}
