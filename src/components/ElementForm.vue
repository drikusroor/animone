<script lang="ts">
import { useElementStore } from "../stores/elements";

const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

export default {
  data() {
    style: 'background: red;\nwidth: 100px;\nheight: 100px;'
  },
  methods: {
    createElement(e, store) {
      e.preventDefault();

      const { name, style } = this;

      const styles = style.split(/;/).map((line) => {
        const [key, value] = line.split(":").map((v) => v.trim());
        const styleObject = { [camelize(key)]: value };
        console.log({ styleObject });
        return styleObject;
      });

      console.log({ styles });

      store.createElement({ name, style: styles });
    },
    toJson(value) {
      return JSON.stringify(value, null, 2);
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
    <form @submit="(e) => createElement(e, store)">
      <input v-model="name" type="text" name="name" placeholder="Name" />
      <textarea
        v-model="style"
        name="style"
        placeholder="Enter styling \n color: 'red'; \n backgroundColor: 'blue',\nwidth: '300px'"
      />
      <button type="submit">Add</button>
    </form>
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
