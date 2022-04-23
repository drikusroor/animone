import type { IElement } from "@/interfaces/IElement";
import { defineStore } from "pinia";

export const useElementStore = defineStore({
  id: "elements",
  state: () => ({
    elements: [] as IElement[],
    selected: -1,
  }),
  getters: {
    element: (state) => state.selected > -1 ?? state.elements[state.selected],
  },
  actions: {
    createElement(element: IElement) {
      this.elements = [...this.elements, element];
    },
    updateElement(element: IElement, index: number) {
      this.elements[index] = element;
    },
    selectElement(index: number) {
      this.selected = index;
    },
  },
});
