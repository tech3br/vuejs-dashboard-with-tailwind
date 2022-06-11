<script lang="ts">
export default {
  name: "Aside",
};
</script>

<template>
  <aside
    class="w-8 h-full flex flex-col items-start content-center bg-gray-900"
  >
    <div class="w-full max-h-4 flex flex-col items-center content-center my-1">
      <img class="w-4 h-4" src="../Assets/logo_new.png" alt="" />
    </div>

    <ul class="w-full h-full flex flex-col items-center content-center">
      <li class="w-6 text-center">
        <fa
          icon="home"
          size="2xs"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center">
        <fa
          icon="ticket"
          size="2xs"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center">
        <fa
          icon="briefcase"
          size="2xs"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center">
        <fa
          icon="money-bill"
          size="2xs"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center">
        <fa
          icon="calendar"
          size="2xs"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center">
        <fa
          icon="gear"
          size="2xs"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
    </ul>
  </aside>
</template>
