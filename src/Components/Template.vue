<script lang="ts">
import Aside from "../Components/Aside.vue";

export default {
  name: "Template",
  components: { child: Aside },
};
</script>

<template>
  <div class="w-full h-full grid overflow-hidden grid-cols-3 grid-rows-2 gap-0">
    <child></child>
  </div>
</template>

<style lang="scss" scoped></style>
