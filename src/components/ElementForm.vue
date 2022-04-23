<script lang="ts">
import { useElementStore } from "../stores/elements";

const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

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
  methods: {
    updateElement(e, store) {
      e.preventDefault();

      const { name, style } = this.element;

      const styles = style.split(/;/).map((line) => {
        const [key, value] = line.split(":").map((v) => v.trim());
        const styleObject = { [camelize(key)]: value };
        return styleObject;
      });

      store.updateElement({ name, style: styles });
    },
    createElement(store) {
      const name = "New element";
      const style = {
        background: "deepskyblue",
        width: '128px',
        height: '128px',
        padding: '0.5em'
      };

      store.createElement({ name, style });
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
    <form v-if="!!element" @submit="(e) => updateElement(e, store)">
      <input
        v-model="element.name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <textarea
        v-model="element.style"
        name="style"
        placeholder="Enter styling \n backgroundColor: blue';\nwidth: 300px;\nheight: 100px;"
      />
      <button type="submit">Update element</button>
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
