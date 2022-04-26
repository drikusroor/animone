import type { IElement } from "@/interfaces/IElement";
import { defineStore } from "pinia";

export function camelize(s: string) {
  return s.replace(/-./g, (x) => x[1].toUpperCase());
}

export function stringifyStyle(style: { [key: string]: string }) {
  return Object.keys(style)
    .map((key) => {
      return `${key}: ${style[key]};`;
    })
    .join("\n");
}

export function parseStyleString(styleString: string): {
  [key: string]: string;
} {
  return styleString.split(/;/).reduce((style, line) => {
    const [key, value] = line.split(":").map((v) => v.trim());
    return { ...style, [camelize(key)]: value };
  }, {});
}

export const useElementStore = defineStore({
  id: "elements",
  state: () => ({
    elements: [] as IElement[],
    selectedElementIndex: -1,
    counter: 0,
  }),
  getters: {
    selectedElement: (state) => {
      if (state.selectedElementIndex > -1) {
        return state.elements[state.selectedElementIndex];
      }
    },
  },
  actions: {
    createElement() {
      const id = this.counter;
      this.counter += 1;
      const name = "New element";
      const style = {
        background: "deepskyblue",
        width: "128px",
        height: "128px",
        padding: "0.5em",
      };
      const styleString = stringifyStyle(style);
      this.elements = [...this.elements, { id, name, style, styleString }];
      return this.elements.length - 1;
    },
    updateElement(element: IElement, index: number) {
      element.style = parseStyleString(element.styleString);
      this.elements[index] = element;
    },
    selectElement(index: number) {
      this.selectedElementIndex = index;
    },
  },
});
