<template>
  <component-b />
</template>

<script>
import ComponentB from "./ComponentB.vue";
export default {
  components: { ComponentB },
  provide() {
    return {
      mySlot: this.$slots.default()[0].children,
    };
  },
};
</script>
