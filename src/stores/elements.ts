import { parseStyleString, stringifyStyle } from "@/helpers/style";
import { AnimationElement } from "@/models/AnimationElement";
import { defineStore } from "pinia";

export const useElementStore = defineStore({
  id: "elements",
  state: () => ({
    elements: [] as AnimationElement[],
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
      };
      const styleString = stringifyStyle(style);
      this.elements = [
        ...this.elements,
        new AnimationElement({ id, name, style, styleString }),
      ];
      return this.elements.length - 1;
    },
    updateElement(element: AnimationElement, index: number) {
      element.style = parseStyleString(element.styleString);
      this.elements[index] = element;
    },
    selectElement(index: number) {
      this.selectedElementIndex = index;
    },
  },
});
