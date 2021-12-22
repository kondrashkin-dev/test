<template>
  {{ mySlot }}
</template>

<script>
export default {
  inject: ["mySlot"],
};
</script>
