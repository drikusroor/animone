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

export default {
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
    };
  },
  computed: {
    elements() {
      return this.elementStore.elements;
    },
  },
  methods: {
    getElementAnimations(e) {
      return this.animationStore.animations.filter(
        (a) => a.element?.id === e.id
      );
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
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
};
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
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu :key="eIndex" v-for="(element, eIndex) in elements">
        <template #icon>
          <PictureOutlined />
        </template>
        <template #title>{{ element.name }}</template>
        <a-sub-menu
          v-for="(animation, animationIndex) in getElementAnimations(element)"
          :key="`${elementIndex}-${animationIndex}`"
        >
          <template #icon> <VideoCameraOutlined /> </template>
          <template #title>{{ animation.name }}</template>
          <a-menu-item
            v-for="(step, stepIndex) in animation.steps"
            :key="stepIndex"
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
