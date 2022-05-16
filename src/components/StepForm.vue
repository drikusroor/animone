<script lang="ts">
import { useAnimationStore } from "../stores/animations";
import { Button } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    Button,
    PlusOutlined,
  },
  data() {
    return {
      defaultStyle: {
        background: "violet",
        width: Math.random() * 100,
        height: Math.random() * 100,
      },
    };
  },
  props: {
    animation: {
      required: false,
    },
  },
  computed: {
    selectedStep() {
      return this.store.selectedStep;
    },
  },
  methods: {
    onChangeStyle() {
      this.store.updateAnimationStep(this.store.selectedAnimation, this.index);
    },
    createStep() {
      this.store.createAnimationStep(this.store.selectedAnimationIndex, 0);
    },
  },
  setup() {
    const store = useAnimationStore();

    return {
      store,
    };
  },
};
</script>

<template>
  <div class="step-form">
    <h2>Steps</h2>
    <hr />
    <Button @click="createStep">
      Add Step
      <template #icon><PlusOutlined /></template>
    </Button>
    <h2>Steps</h2>
    <ul class="step-form__list">
      <li
        class="step-form__item"
        :class="{
          'step-form__item--selected': index === store.selectedStepIndex,
        }"
        v-for="(step, index) in store.selectedAnimation?.steps"
        :key="step.name"
        @click="store.selectStep(index)"
      >
        {{ index + 1 }} - {{ selectedStep.name }}
      </li>
    </ul>
    <form v-if="!!selectedStep">
      <h3>Edit {{ selectedStep.name }} ({{ store.selectedStepIndex + 1 }})</h3>

      <div>
        <textarea
          v-model="selectedStep.styleString"
          name="style"
          :placeholder="'Enter styling, ex:\nbackground: blue;\nwidth: 300px;\nheight: 100px;'"
        />
        <a-row>
          <a-col :span="20"><label for="duration">Duration</label></a-col>
          <a-col :span="16">
            <a-slider
              v-model:value="selectedStep.duration"
              :min="0"
              :max="24"
              :step="1"
            />
          </a-col>
          <a-col :span="4">
            <a-input-number
              name="duration"
              v-model:value="selectedStep.duration"
              :min="0"
              :max="100"
              :step="1"
              style="margin-left: 16px"
            />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="20"> <label for="transition">Transition</label> </a-col>
          <a-col :span="16">
            <a-slider
              v-model:value="selectedStep.transition"
              :min="1"
              :max="100"
              :step="1"
              :disabled="
                store.selectedAnimation.steps.length - 1 ===
                store.selectedStepIndex
              "
            />
          </a-col>
          <a-col :span="4">
            <a-input-number
              name="transition"
              v-model:value="selectedStep.transition"
              :min="1"
              :max="24"
              :step="1"
              :disabled="
                store.selectedAnimation.steps.length - 1 ===
                store.selectedStepIndex
              "
              style="margin-left: 16px"
            />
          </a-col>
        </a-row>
      </div>
    </form>
  </div>
</template>

<style scoped>
.step-form {
  padding: 0.5em;
}
.step-form__list {
  list-style: none;
  padding-left: 0;
}
.step-form__item {
  padding: 0.5em;
  border: 1px solid #ddd;
  border-bottom: 0;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.step-form__item:last-child {
  border-bottom: 1px solid #ddd;
}
.step-form__item:hover {
  background: #eee;
}
.step-form__item--selected {
  border-left: 8px solid #ddd;
}
input[type="text"] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 120px;
}
input,
textarea,
hr,
button {
  margin: 0.5em 0;
}
</style>
