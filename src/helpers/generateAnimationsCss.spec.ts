import { AnimationElement } from "@/models/AnimationElement";
import { describe, it, expect } from "vitest";
import {
  generateAnimationsCss,
  type IGenerateAnimationsCssOptions,
} from "@/helpers/generateAnimationsCss";
import { Animation } from "@/models/Animation";
import { AnimationStep } from "@/models/AnimationStep";

describe.skip("combineAnimations", () => {
  it("should combine animations", () => {
    const element = createMockElement(1);
    const animationOne = createMockAnimation("animation-1", 0, element);
    animationOne.steps = [
      createMockStep(animationOne),
      createMockStep(animationOne),
      createMockStep(animationOne),
    ];

    const animationTwo = createMockAnimation("animation-2", 10, element);
    animationTwo.steps = [
      createMockStep(animationTwo),
      createMockStep(animationTwo),
      createMockStep(animationTwo),
    ];

    const animations = [animationOne, animationTwo];

    const generatedCss = generateAnimationsCss(animations, {
      keyframesPerSecond: 1,
    });

    expect(generatedCss).toBe(
      `
      @keyframes animation-1 {
        0% { transform: translateX(0px); }
50% { transform: translateX(0px); }
100% { transform: translateX(0px); }
      }

      @keyframes animation-2 {
        0% { transform: translateX(0px); }
50% { transform: translateX(0px); }
100% { transform: translateX(0px); }
      }
    `
    );

  });

  it("should throw error if options are not provided", () => {
    const element = createMockElement(1);
    const animationOne = createMockAnimation("animation-1", 0, element);
    animationOne.steps = [createMockStep(animationOne)];

    const animations = [animationOne];

    const emptyOptions: unknown = null;

    expect(() =>
      generateAnimationsCss(animations, emptyOptions as IGenerateAnimationsCssOptions)
    ).toThrowError("Options are required");
  });
});

function createMockElement(id: number) {
  return new AnimationElement({
    id,
    className: `element-${id}`,
    name: `element-${id}`,
    styleString: "",
  });
}

function createMockAnimation(
  name: string,
  keyframe: number,
  element: AnimationElement
) {
  return new Animation({
    name,
    element,
    keyframe,
    steps: [],
  });
}

function createMockStep(animation: Animation) {
  const step = new AnimationStep({
    name: "step",
    delay: 0,
    duration: 1,
    animation,
    easing: "linear",
    entries: [],
  });

  step.styleString = "transform: translateX(0px);";

  return step;
}
