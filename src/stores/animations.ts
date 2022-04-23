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
    updateAnimationGroup(group: IAnimationGroup, groupIndex: Number) {
      throw new Error('Not yet implemented')
    },
    updateAnimation(animation: IAnimation, groupIndex: Number, animationIndex: Number) {
      throw new Error('Not yet implemented')
    },
    updateAnimationStep(animationStep: IAnimationStep, groupIndex: Number, animationIndex: Number, stepIndex: Number) {
      throw new Error('Not yet implemented')
    },
    updateAnimationEntry(animationEntry: IAnimationEntry, groupIndex: Number, animationIndex: Number, stepIndex: Number, entryIndex: Number) {
      throw new Error('Not yet implemented')
    },
  }
})
