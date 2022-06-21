import { describe, expect, it } from "vitest";
import { Animation, type IAnimation } from "./Animation";
import { AnimationElement } from "./AnimationElement";
import { AnimationStep } from "./AnimationStep";

describe("Animation", () => {
  describe("constructor", () => {
    it("should set properties", () => {
      const animation = new Animation({
        name: "test",
        element: createMockElement(0),
        steps: [],
        keyframe: 0,
      });

      expect(animation.name).toBe("test");
      expect(animation.element).toBeDefined();
      expect(animation.element).toBeInstanceOf(AnimationElement);
    });

    it("should throw error if name is not provided", () => {
      expect(
        () =>
          new Animation({
            element: createMockElement(0),
            steps: [],
            keyframe: 0,
          } as unknown as IAnimation)
      ).toThrowError("Name is required");
    });

    it("should throw error if element is not provided", () => {
      expect(
        () =>
          new Animation({
            name: "test",
            steps: [],
            keyframe: 0,
          } as unknown as IAnimation)
      ).toThrowError("Element is required");
    });

    it("should throw error if keyframe is not provided", () => {
      expect(
        () =>
          new Animation({
            name: "test",
            element: createMockElement(0),
            steps: [],
          } as unknown as IAnimation)
      ).toThrowError("Keyframe is required");
    });
  });

  describe("get totalDuration", () => {
    it("should return total duration", () => {
      const animation = new Animation({
        name: "test",
        element: createMockElement(0),
        steps: [],
        keyframe: 0,
      });

      expect(animation.totalDuration).toBe(0);

      animation.steps = [
        createMockAnimationStep(animation, 1, 0, "test"),
        createMockAnimationStep(animation, 0, 1, "test"),
      ];

      expect(animation.totalDuration).toBe(2);

      animation.steps = [
        createMockAnimationStep(animation, 3, 5, "test"),
        createMockAnimationStep(animation, 8, 13, "test"),
      ];

      expect(animation.totalDuration).toBe(29);
    });
  });

  describe("get animationName", () => {
    it("should return animation name kebabified", () => {
      const animation = new Animation({
        name: "testAnimationZork",
        element: createMockElement(0),
        steps: [],
        keyframe: 0,
      });

      expect(animation.animationName).toBe("test-animation-zork");

      animation.name = "CamelCase";

      expect(animation.animationName).toBe("camel-case");

      animation.name = " animation With spaces And so On ";

      expect(animation.animationName).toBe("animation-with-spaces-and-so-on");
    });
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

function createMockAnimationStep(
  animation: IAnimation,
  transition: number,
  duration: number,
  name: string = "test"
) {
  return new AnimationStep({
    name,
    transition,
    duration,
    easing: "linear",
    entries: [],
    animation,
  });
}
