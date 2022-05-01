<script lang="ts">
import AnimationForm from './AnimationForm.vue';
import ElementForm from './ElementForm.vue';
import StepForm from './StepForm.vue';

export default {
  components: {
    AnimationForm,
    ElementForm,
    StepForm,
  },
}
</script>

<template>
  <div class="control-panel">
    <ElementForm />
    <AnimationForm />
    <StepForm />
  </div>
</template>

<style scoped>
.control-panel {
  width: 100%;
  overflow: auto;
}
</style>
