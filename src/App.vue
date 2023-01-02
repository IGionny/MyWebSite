<template>
  
  <div class="container flex flex-row items-stretch md:divide-x divide-black mx-auto m-10">
    <div class="md:block md:basis-1/4 pt-1 pl-4 pr-2 pb-4 bg-gray-1 rounded-l-xl hidden backdrop-blur-sm bg-gray-1/60 drop-shadow-xl">

      <div class="flex items-center h-9">
        <WindowButtons/>
      </div>

      <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">👋 About me</p>
      <p class="text-gray-5 mb-2 bg-gray-2 rounded-md p-1">
        <font-awesome-icon icon="fa-solid fa-arrows-to-dot" class="text-orange-1 mr-1"/>
        Summary
      </p>
      <p class="text-gray-5 mb-2 p-1 hover:bg-gray-2 group hover:rounded-md">
        <font-awesome-icon icon="fa-solid fa-route" class="text-orange-1 group-hover:rotate-45 mr-1"/>
        Experiences
      </p>
      <p class="text-gray-5 p-1 hover:bg-gray-2 group hover:rounded-md">
        <font-awesome-icon icon="fa-solid fa-gamepad" class="text-orange-1 group-hover:rotate-45 mr-1"/>
        Passions
      </p>

      <hr class="mt-2 mb-4 border-gray-2">
      
     <Knowledges />
      
    </div>
    <div class="md:basis-3/4 bg-gray-3 md:rounded-r-xl flex flex-col drop-shadow-md">
      <div class="h-9 bg-gray-2 md:rounded-tr-xl font-bold pl-4 flex items-center">
        <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-gray-400" />
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-gray-400" />
        <span class="ml-4">Terminal</span>
      </div>
      <Terminal class="md:rounded-br-xl flex-1"/>
    </div>
  </div>


</template>
<script setup lang="ts">

import WindowButtons from "./components/WindowButtons.vue";
import Terminal from "./components/Terminal.vue";
import Knowledges from "./components/Knowledges.vue";
</script>

