import { stringifyStyle } from "@/helpers/style";
import { AnimationElement } from "@/models/AnimationElement";
import { defineStore } from "pinia";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

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
      const name = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
        length: 2,
        separator: ' ',
      });

      const style = {
        background: "deepskyblue",
        width: "128px",
        height: "128px",
        left: "0px",
        top: "0px",
      };
      const styleString = stringifyStyle(style);
      this.elements = [
        ...this.elements,
        new AnimationElement({ id, name, styleString }),
      ];
      return this.elements.length - 1;
    },
    updateElement(element: AnimationElement, index: number) {
      this.elements[index] = element;
    },
    selectElement(index: number) {
      this.selectedElementIndex = index;
    },
  },
});
