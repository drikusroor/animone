import type { IAnimation } from '@/interfaces/IAnimation'
import type { IAnimationEntry } from '@/interfaces/IAnimationEntry'
import type { IAnimationGroup } from '@/interfaces/IAnimationGroup'
import type { IAnimationStep } from '@/interfaces/IAnimationStep'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'animations',
  state: () => ({
    animationsGroups: [] as IAnimationGroup[]
  }),
  getters: {
  },
  actions: {
    updateAnimationGroup(groupIndex: Number, updatedGroup: IAnimationGroup) {
      throw new Error('Not yet implemented')
    },
    updateAnimation(groupIndex: Number, animationIndex: Number, updatedAnimation: IAnimation) {
      throw new Error('Not yet implemented')
    },
    updateAnimationStep(groupIndex: Number, animationIndex: Number, stepIndex: Number, updatedAnimationStep: IAnimationStep) {
      throw new Error('Not yet implemented')
    },
    updateAnimationEntry(groupIndex: Number, animationIndex: Number, stepIndex: Number, entryIndex: Number, updatedAnimationEntry: IAnimationEntry) {
      throw new Error('Not yet implemented')
    },
  }
})
