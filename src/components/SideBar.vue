<template>
  <nav class="sticky top-0">
    <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">👋 About me</p>
    <div class="relative block height-[130px]">
      <div class="z-0 h-6 absolute left-0 bg-gray-4 bg-gradient-to-bl w-[95%] p-1 rounded-md transition-all"
           :class="menuSelector">
        &nbsp;
      </div>
      <LeftMenuItem name="Summary" icon="fa-arrows-to-dot" @click="select('Summary')"/>
      <LeftMenuItem name="Experiences" icon="fa-route" @click="select('Experiences')"/>
      <LeftMenuItem name="Passions" icon="fa-gamepad" @click="select('Passions')"/>
      <LeftMenuItem name="Tools" icon="fa-wrench" @click="select('Tools')"/>
    </div>

    <hr class="mt-2 mb-4 border-gray-2">

    <Knowledge/>
  </nav>
</template>

<script setup lang="ts">
import Knowledge from "./Knowledge.vue";
import LeftMenuItem from "./LeftMenuItem.vue";
import {computed, ref} from "vue";

const activeMenuItem = ref("Summary");

const select = (voice: string) => {
  activeMenuItem.value = voice;
}

const summaryClass = "top-[3%]";
const experiencesClass = "top-[29%]";
const passionsClass = "top-[54%]";
const toolsClass = "top-[78%]";

const menuSelector = computed(() => {
  const classes = [];
  switch (activeMenuItem.value) {
    case "Summary":
      classes.push(summaryClass);
      break;
    case "Experiences":
      classes.push(experiencesClass);
      break;
    case "Passions":
      classes.push(passionsClass);
      break;
    case "Tools":
      classes.push(toolsClass);
      break;
  }
  return classes;
});

</script>
