<script lang="ts">
export default {
  name: "Aside",
};
</script>

<template>
  <aside class="h-full row-start-1 row-end-6 w-16 bg-gray-900">
    <div class="w-full h-10 flex flex-col items-center content-center my-2">
      <img
        class="w-10 h-10"
        src="../Assets/logo_new.png"
        alt="Logo Principal"
      />
    </div>

    <ul class="w-full h-full flex flex-col items-center content-center">
      <li class="w-6 text-center py-2">
        <fa
          icon="home"
          size="lg"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center py-2">
        <fa
          icon="ticket"
          size="lg"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center py-2">
        <fa
          icon="briefcase"
          size="lg"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center py-2">
        <fa
          icon="money-bill"
          size="lg"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center py-2">
        <fa
          icon="calendar"
          size="lg"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
      <li class="w-6 text-center py-2">
        <fa
          icon="gear"
          size="lg"
          class="text-gray-600 hover:text-custom-orange cursor-pointer"
        />
      </li>
    </ul>
  </aside>
</template>
