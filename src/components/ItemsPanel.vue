<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
import { useKeyframeStore } from "../stores/keyframes";
import {
  ExpandOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import type { IAnimation } from "@/models/Animation";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ExpandOutlined,
    PictureOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    return {
      collapsed: false,
      openPaths: [] as string[],
      selectedPaths: [] as string[],
    };
  },
  computed: {
    elements() {
      return this.elementStore.elements;
    },
  },
  methods: {
    getElementAnimations(e): IAnimation[] {
      return this.animationStore.animations.filter(
        (a) => a.element?.id === e.id
      );
    },
    getAnimationIndex(animation) {
      return this.animationStore.animations.indexOf(animation);
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    updatePaths() {
      const elementIndex = this.elementStore.selectedElementIndex;
      const animationIndex = this.animationStore.selectedAnimationIndex;
      const stepIndex = this.animationStore.selectedStepIndex;
      let path = null;

      if (elementIndex === -1) {
        return;
      } else if (animationIndex === -1) {
        path = `${elementIndex}`;
      } else if (stepIndex === -1) {
        path = `${elementIndex}-${animationIndex}`;

        const elementPath = `${elementIndex}`;
        const elementPathExists = this.openPaths.includes(elementPath);
        if (!elementPathExists) {
          this.openPaths.push(elementPath);
        }
      } else {
        path = `${elementIndex}-${animationIndex}-${stepIndex}`;

        const elementPath = `${elementIndex}`;
        const elementPathExists = this.openPaths.includes(elementPath);
        if (!elementPathExists) {
          this.openPaths.push(elementPath);
        }

        const animationPath = `${elementIndex}-${animationIndex}`;
        const animationPathExists = this.openPaths.includes(animationPath);
        if (!animationPathExists) {
          this.openPaths.push(animationPath);
        }
      }

      this.selectedPaths = [path];

      const exists = this.openPaths.includes(path);
      if (!exists) {
        this.openPaths = [...this.openPaths, path];
      }

      console.log(elementIndex, animationIndex, stepIndex, path);
      console.log(this.openPaths);
      console.log(this.selectedPaths);
    },
  },
  setup() {
    const elementStore = useElementStore();
    const animationStore = useAnimationStore();
    const keyframeStore = useKeyframeStore();

    return {
      animationStore,
      elementStore,
      keyframeStore,
    };
  },
  watch: {
    collapsed(val) {
      if (val) {
        this.openPaths = [];
      }
    },
    "elementStore.selectedElementIndex"() {
      this.updatePaths();
    },
    "animationStore.selectedAnimationIndex"() {
      this.updatePaths();
    },
    "animationStore.selectedStepIndex"() {
      this.updatePaths();
    },
  },
});
</script>

<template>
  <div class="items-panel" :class="{ 'items-panel__collapsed': collapsed }">
    <a-button
      class="items-panel__toggle-button"
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>

    <a-menu
      mode="inline"
      :inline-collapsed="collapsed"
      v-model:open-keys="openPaths"
      v-model:selected-keys="selectedPaths"
    >
      <a-sub-menu :key="`${element.id}`" v-for="element in elements">
        <template #icon>
          <PictureOutlined />
        </template>
        <template #title>{{ element.name }} </template>
        <a-sub-menu
          v-for="animation in getElementAnimations(element)"
          :key="`${element.id}-${getAnimationIndex(animation)}`"
        >
          <template #icon> <VideoCameraOutlined /> </template>
          <template #title>{{ animation.name }} </template>
          <a-menu-item
            v-for="(step, stepIndex) in animation.steps"
            :key="`${element.id}-${getAnimationIndex(animation)}-${stepIndex}`"
          >
            <template #icon>
              <ExpandOutlined />
            </template>
            {{ stepIndex }} - {{ step.name }}
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<style scoped>
.items-panel {
  width: 240px;
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1);
  display: flex;
  flex-direction: column;
}
.items-panel__collapsed {
  width: 80px;
}
.items-panel__toggle-button {
  margin: 17px;
  /* align right */
  align-self: flex-end;
}
</style>
