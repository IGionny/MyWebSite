<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-10">
    <div class="flex items-center"><WindowButtons/></div>
    <div class="flex flex-row">
      <div class="basis-1/4">
        <p class="text-3xl text-gray-700 font-bold mb-5">Welcome!
        </p>
       
      </div>
      <div class="basis-3/4">
        <Terminal />
      </div>
      
    </div>
    
    <p class="text-gray-500 text-lg mt-5">
      Vue and Tailwind CSS in action
    </p>
    
  
    
    
  </div>
</template>
<script setup lang="ts">

import WindowButtons from "./components/WindowButtons.vue";
import Terminal from "./components/Terminal.vue";
</script>

