import type { Animation } from "@/models/Animation";

export interface IGenerateAnimationsCssOptions {
  keyframesPerSecond: number;
}

export interface IGenerateAnimationsCss {
  animations: Animation[];
  css: string;
}

export function generateAnimationsCss(
  animations: Animation[],
  options: IGenerateAnimationsCssOptions
): IGenerateAnimationsCss {
  if (!options) {
    throw new Error("Options are required");
  }

  const css = animations.map((animation) => animation.keyframesCss).join("\n");

  return {
    animations,
    css,
  };
}
