<template>
  <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">👋 About me</p>
  <section class="block relative">
    <div class="fixed z-40">
      <div class="relative block">
        <div class="z-0 h-6 absolute left-0 bg-gray-4 bg-gradient-to-bl w-full p-1 rounded-md transition-all"
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
    </div>
  </section>
</template>

<script setup lang="ts">
import Knowledge from "./Knowledge.vue";
import LeftMenuItem from "./LeftMenuItem.vue";
import {computed, ref} from "vue";

const activeMenuItem = ref("Summary");

const select = (voice: string) => {
  activeMenuItem.value = voice;
}

const summaryClass = "top-1";
const experiencesClass = "top-9";
const passionsClass = "top-[85px]";
const toolsClass = "top-[124px]";

const menuSelector = computed(() => {
  const classes = ["animate-all"];
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
