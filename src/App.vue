<template>

  <div class="container flex flex-row divide-x divide-black mx-auto m-10">
    <div class="basis-1/4 pt-1 pl-4 pr-2 bg-gray-1 rounded-l-xl">

      <div class="flex items-center h-9">
        <WindowButtons/>
      </div>

      <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">Me</p>
      <p class="text-gray-5 mb-2 bg-gray-2 rounded-md p-1">
        <font-awesome-icon icon="fa-solid fa-arrows-to-dot" class="text-orange-1"/>
        Summary
      </p>
      <p class="text-gray-5 mb-2 p-1 hover:bg-gray-2 hover:rounded-md">
        <font-awesome-icon icon="fa-solid fa-route" class="text-orange-1"/>
        Experiences
      </p>
      <p class="text-gray-5 p-1 hover:bg-gray-2 hover:rounded-md">
        <font-awesome-icon icon="fa-solid fa-gamepad" class="text-orange-1"/>
        Passions
      </p>
    </div>
    <div class="basis-3/4 bg-gray-3 rounded-r-xl">
      <div class="h-9 bg-gray-2 rounded-tr-xl font-bold pl-4 flex items-center">
        <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-gray-400" />
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-gray-400" />
        <span class="ml-4">Terminal</span>
      </div>
      <Terminal class="rounded-br-xl"/>
    </div>
  </div>


</template>
<script setup lang="ts">

import WindowButtons from "./components/WindowButtons.vue";
import Terminal from "./components/Terminal.vue";
</script>

