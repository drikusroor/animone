import type { IAnimation } from '@/interfaces/IAnimation'
import type { IAnimationEntry } from '@/interfaces/IAnimationEntry'
import type { IAnimationGroup } from '@/interfaces/IAnimationGroup'
import type { IAnimationStep } from '@/interfaces/IAnimationStep'
import { defineStore } from 'pinia'

export const useAnimationStore = defineStore({
  id: 'animations',
  state: () => ({
    animationsGroups: [] as IAnimationGroup[]
  }),
  getters: {
  },
  actions: {
    updateAnimationGroup(group: IAnimationGroup, groupIndex: number) {
      throw new Error('Not yet implemented')
    },
    updateAnimation(animation: IAnimation, groupIndex: number, animationIndex: number) {
      throw new Error('Not yet implemented')
    },
    updateAnimationStep(animationStep: IAnimationStep, groupIndex: number, animationIndex: number, stepIndex: number) {
      throw new Error('Not yet implemented')
    },
    updateAnimationEntry(animationEntry: IAnimationEntry, groupIndex: number, animationIndex: number, stepIndex: number, entryIndex: number) {
      throw new Error('Not yet implemented')
    },
  }
})
