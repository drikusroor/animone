import type { IElement } from '@/interfaces/IElement'
import { defineStore } from 'pinia'

export const useElementStore = defineStore({
  id: 'elements',
  state: () => ({
    elements: [] as IElement[]
  }),
  getters: {

  },
  actions: {
    createElement(element: IElement) {
      this.elements = [...this.elements, element];
    },
    updateElement(element: IElement, index: Number) {
      throw new Error('Not yet implemented')
    },
  }
})
