import { describe, it, expect } from "vitest";
import { kebabify } from "./style";

describe("kebabify", () => {
  it("should trim the string", () => {
    expect(kebabify(" test ")).toBe("test");
  });

  it("should replace an uppercase character by a lowercase character and a hyphen", () => {
    expect(kebabify("CamelCase")).toBe("camel-case");
  });

  it("should convert all inner spaces to hyphens", () => {
    expect(kebabify("animation    space")).toBe("animation-space");
  });

  it("should successfully convert combine the aforementioned rules", () => {
    expect(kebabify("CamelCase animation space")).toBe(
      "camel-case-animation-space"
    );
  });
});
