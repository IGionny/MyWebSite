<template>
  <nav class="sticky top-0">
    <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">👋 About me</p>
    <div class="relative block height-[130px]" :class="'active-' + activeMenuItem">
      <div class="z-0 h-6 menu-selector absolute left-0 bg-gray-4 bg-gradient-to-bl w-[95%] p-1 rounded-md transition-all">
        &nbsp;
      </div>
      <LeftMenuItem name="Summary" icon="fa-arrows-to-dot" @click="select('Summary')"/>
      <LeftMenuItem name="Experiences" icon="fa-route" @click="select('Experiences')"/>
      <LeftMenuItem name="Passions" icon="fa-gamepad" @click="select('Passions')"/>
      <LeftMenuItem name="Tools" icon="fa-wrench" @click="select('Tools')"/>
      <LeftMenuItem name="Courses" icon="fa-person-chalkboard" @click="select('Courses')"/>
      <LeftMenuItem name="Books" icon="fa-book" @click="select('Books')"/>
    </div>

    <hr class="mt-2 mb-4 border-gray-2">

    <Knowledge/>
  </nav>
</template>

<script setup lang="ts">
import Knowledge from "./Knowledge.vue";
import LeftMenuItem from "./LeftMenuItem.vue";
import {ref} from "vue";

const activeMenuItem = ref("Summary");

const select = (voice: string) => {
  activeMenuItem.value = voice;
}

</script>
<style>
.active-Summary > .menu-selector {
  top: 2%;
}

.active-Experiences > .menu-selector {
  top: 19%;
}

.active-Passions > .menu-selector {
  top: 36%;
}

.active-Tools > .menu-selector {
  top: 52%;
}

.active-Courses > .menu-selector {
  top: 68%;
}

.active-Books > .menu-selector {
  top: 86%;
}


</style>