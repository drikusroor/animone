import { AnimationElement } from "@/models/AnimationElement";
import { describe, it, expect } from "vitest";
import { combineAnimations, type ICombineAnimationOptions } from "@/helpers/combineAnimations";
import { Animation } from "@/models/Animation";
import { AnimationStep } from "@/models/AnimationStep";

describe("combineAnimations", () => {
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

    const combinedAnimations = combineAnimations(animations, {
      keyframesPerSecond: 1,
    });

    expect(combinedAnimations.declarations).toBe(
      `animation-1 3s linear 0s, animation-2 3s linear 10s`
    );

    const combinedAnimationsFaster = combineAnimations(animations, {
      keyframesPerSecond: 2,
    });

    expect(combinedAnimationsFaster.declarations).toBe(
      `animation-1 1.5s linear 0s, animation-2 1.5s linear 5s`
    );
  });

  it("should throw error if options are not provided", () => {
    const element = createMockElement(1);
    const animationOne = createMockAnimation("animation-1", 0, element);
    animationOne.steps = [createMockStep(animationOne)];

    const animations = [animationOne];

    const emptyOptions: unknown = null;

    expect(() => combineAnimations(animations, emptyOptions as ICombineAnimationOptions)).toThrowError(
      "Options are required"
    );
  });
});

function createMockElement(id: number) {
  return new AnimationElement({
    id,
    className: `element-${id}`,
    name: `element-${id}`,
    style: {},
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
