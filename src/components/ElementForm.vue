<script lang="ts">
import { parseStyleString, useElementStore } from "../stores/elements";

export default {
  data() {
    return {
      defaultStyle: {
        background: "deepseagreen",
        width: 100,
        height: 100,
      },
    };
  },
  props: {
    element: {
      required: false,
    },
  },
  computed: {
    selectedElement() {
      return this.store.selectedElement;
    },
  },
  methods: {
    onChangeStyle() {
      this.store.updateElement(this.store.selectedElement, this.index)
    },
    createElement() {
      this.store.createElement();
    },
  },
  setup() {
    const store = useElementStore();

    return {
      store,
    };
  },
};
</script>

<template>
  <div class="element-form">
    <h2>Add new element</h2>
    <form v-if="!!selectedElement" @submit="(e) => updateElement(e, store)">
      <input
        v-model="selectedElement.name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <textarea
        v-model="selectedElement.styleString"
        name="style"
        placeholder="Enter styling \n backgroundColor: blue';\nwidth: 300px;\nheight: 100px;"
        @input="(e) => onChangeStyle(selectedElement.styleString)"
      />
    </form>
    <button @click="createElement(store)">New element</button>
    <div v-for="element in store.elements" :key="element.name">
      {{ element.name }}
    </div>
  </div>
</template>

<style scoped>
.element-form {
  padding: 0.5em;
}
</style>
