<script setup lang="ts">
import AnimationForm from './AnimationForm.vue';
import ElementForm from './ElementForm.vue';
import StepForm from './StepForm.vue';
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
