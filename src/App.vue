<template>
  <div class="container flex flex-row items-stretch md:divide-x divide-black mx-auto mt-10 mb-0">
    <div
        class="md:block md:basis-1/4 pt-1 pl-4 pr-2 pb-4 bg-gray-1 rounded-tl-xl hidden backdrop-blur-sm bg-gray-1/60 drop-shadow-xl ">

      <div class="flex items-center h-9">
        <WindowButtons/>
      </div>

      <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">👋 About me</p>

      <LeftMenuItem name="Summary" icon="fa-arrows-to-dot"/>
      <LeftMenuItem name="Experiences" icon="fa-route"/>
      <LeftMenuItem name="Passions" icon="fa-gamepad"/>

      <hr class="mt-2 mb-4 border-gray-2">

      <Knowledge/>
    </div>
    <div class="md:basis-3/4 bg-gray-3 md:rounded-r-xl flex flex-col ">
      <div class="h-9 bg-gray-2 md:rounded-tr-xl font-bold pl-4 flex items-center">
        <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-gray-400"/>
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-gray-400"/>
        <span class="ml-4">Terminal</span>
      </div>
      <Terminal class="flex-1 "/>
    </div>
  </div>
  <div
      class="container mx-auto m-10 mt-0 backdrop-blur-sm bg-gray-1/60 drop-shadow-md pl-3 pt-1 pb-1 pr-3 flex justify-between text-orange-1 rounded-b-xl">
    <span>🖖</span>
    <span>
      -
    </span>
    <span>
      <a href="https://www.linkedin.com/in/giovanni-bismondo-033b7465/" title="Linkedin" target="_blank"
         class="ml-2 hover:text-blue-300"><font-awesome-icon
          icon="fa-brands fa-linkedin-in" class="ml-2 hover:text-blue-300"/></a>
    <a href="https://twitter.com/GionnyBismondo" title="Twitter" target="_blank" class="ml-2 hover:text-blue-300"><font-awesome-icon
        icon="fa-brands fa-twitter" class="hover:text-blue-300"/></a>
    <a href="https://github.com/IGionny/" title="GitHub" target="_blank" class="ml-2 hover:text-blue-300"><font-awesome-icon
        icon="fa-brands fa-github"/></a>
      
    <a href="mailto:gbismondo@gmail.com"><font-awesome-icon icon="fa-solid fa-envelope"
                                                            class="ml-2 hover:text-blue-300"/></a>
      </span>
  </div>


</template>
<script setup lang="ts">

import WindowButtons from "./components/WindowButtons.vue";
import Terminal from "./components/Terminal.vue";
import Knowledge from "./components/Knowledge.vue";
import LeftMenuItem from "./components/LeftMenuItem.vue";
</script>

