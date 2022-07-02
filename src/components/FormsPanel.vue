<script lang="ts">
import AnimationForm from "./AnimationForm.vue";
import ElementForm from "./ElementForm.vue";
import StepForm from "./StepForm.vue";
import { defineComponent } from "vue";
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";
import { CloseOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    AnimationForm,
    CloseOutlined,
    ElementForm,
    StepForm,
  },
  methods: {
    deselect() {
      this.elementStore.deselectElement();
      this.animationStore.deselectAnimation();
      this.animationStore.deselectStep();
    },
    isCollapsed() {
      return (
        this.elementStore.selectedElementIndex === -1 &&
        this.animationStore.selectedAnimationIndex === -1 &&
        this.animationStore.selectedStepIndex === -1
      );
    },
  },
  setup() {
    const elementStore = useElementStore();
    const animationStore = useAnimationStore();

    return {
      animationStore,
      elementStore,
    };
  },
});
</script>

<template>
  <div
    class="forms-panel"
    :class="{
      collapsed: isCollapsed(),
    }"
  >
    <a-button @click="deselect()" class="close-button" shape="text">
      <template #icon><CloseOutlined /></template>
    </a-button>
    <div class="inner">
      <ElementForm
        v-if="
          elementStore.selectedElementIndex >= 0 &&
          animationStore.selectedAnimationIndex < 0
        "
      />
      <AnimationForm
        v-if="
          animationStore.selectedAnimationIndex >= 0 &&
          animationStore.selectedStepIndex < 0
        "
      />
      <StepForm v-if="animationStore.selectedStepIndex >= 0" />
    </div>
  </div>
</template>

<style scoped>
.forms-panel {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 320px;
  transition: opacity 0.2s ease-in-out, width 0.2s ease-in-out;
  opacity: 1;
  overflow: hidden;
}
.forms-panel.collapsed {
  width: 0;
  opacity: 0;
}
.inner {
  width: 320px;
  overflow: hidden;
}
.close-button {
  margin: 0.5em;
  margin-bottom: 0;
  align-self: flex-end;
}
</style>
