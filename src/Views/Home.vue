<script lang="ts">
import Aside from "../Components/Aside.vue";
import Template from "../Components/Template.vue";

export default {
  name: "Home",
  components: {
    Aside,
    Template,
  },
};
</script>

<template>
  <Template>
    <Aside />
  </Template>
</template>

<style scoped></style>
