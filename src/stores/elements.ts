import type { IAnimation } from '@/interfaces/IAnimation'
import type { IAnimationEntry } from '@/interfaces/IAnimationEntry'
import type { IAnimationGroup } from '@/interfaces/IAnimationGroup'
import type { IAnimationStep } from '@/interfaces/IAnimationStep'
import type { IElement } from '@/interfaces/IElement'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'elements',
  state: () => ({
    elements: [] as IElement[]
  }),
  getters: {
  },
  actions: {
    updateElement(element: IElement, index: Number) {
      throw new Error('Not yet implemented')
    },
  }
})
