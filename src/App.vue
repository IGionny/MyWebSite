<template>
  <div v-show="currentStatus === WindowStatus.NORMAL || currentStatus === WindowStatus.MAXIMIZED">
    <div class="flex flex-row items-stretch md:divide-x divide-black mb-0 transition-all duration-500 ease-in-out"
         :class="{'container mt-10 mx-auto' : currentStatus === WindowStatus.NORMAL }">
      <div
          class="md:block md:basis-1/4 pt-1 pl-4 pr-2 pb-4 bg-gray-1 rounded-tl-xl hidden backdrop-blur-sm bg-gray-1/60 drop-shadow-xl ">

        <div class="flex items-center h-9">
          <WindowButtons @maximize="maximize" @minimize="minimize" @close="close"/>
        </div>
        
        <SideBar/>

      </div>
      <div class="md:basis-3/4 bg-gray-3 md:rounded-r-xl flex flex-col ">
        <div class="h-9 bg-gray-2 md:rounded-tr-xl font-bold pl-4 flex items-center">
          <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-gray-400"/>
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-gray-400"/>
          <span class="ml-4">Terminal</span>
        </div>

        <router-view/>

      </div>
    </div>
    <div
        class="m-0 backdrop-blur-sm bg-gray-1/60 drop-shadow-md pl-3 pt-1 pb-1 pr-3 flex justify-between text-orange-1 rounded-b-xl"
        :class="{'container m-10 mt-0 mx-auto' : currentStatus === WindowStatus.NORMAL }">
    <span>
      <router-link to="/">🖖</router-link>
    </span>
      <span class="text-sm">
      Made by myself™
    </span>
      <span>
      <a href="https://www.linkedin.com/in/giovanni-bismondo-033b7465/" title="Linkedin" target="_blank"
         class="ml-5 hover:text-blue-300"><font-awesome-icon
          icon="fa-brands fa-linkedin-in" class="ml-2 hover:text-blue-300"/></a>
    <a href="https://twitter.com/GionnyBismondo" title="Twitter" target="_blank" class="ml-5 hover:text-blue-300"><font-awesome-icon
        icon="fa-brands fa-twitter" class="hover:text-blue-300"/></a>
    <a href="https://github.com/IGionny/" title="GitHub" target="_blank" class="ml-5 hover:text-blue-300"><font-awesome-icon
        icon="fa-brands fa-github"/></a>
      
    <a href="mailto:gbismondo@gmail.com" title="mail-me"><font-awesome-icon icon="fa-solid fa-envelope"
                                                            class="ml-5 hover:text-blue-300"/></a>
      </span>
    </div>
  </div>
  <div v-if="currentStatus === WindowStatus.MINIMIZED">
    <div class="min-h-screen flex flex-col items-center">
      <footer
          class="fixed bg-gray-1 border-gray-2 border-1 bottom-2 p-4 mb-4 rounded-lg mx-auto w-auto shadow-2xl z-10 flex items-end"
          style="height: 80px">
        <div class="flex items-end gap-x-4" style="height: 96px">
          <DocApp @click.stop.prevent="backToNormal" class="bg-blue-300">
            <img :src="x" class="rounded-full fa-shake" alt="Me"/>
          </DocApp>
          <DocApp @click.stop.prevent="backToNormal" class="bg-green-300">
            <img :src="x" class="rounded-full  fa-shake" alt="Me"/>
          </DocApp>
          <DocApp @click.stop.prevent="backToNormal" class="bg-red-300">
            <img :src="x" class="rounded-full  fa-shake" alt="Me"/>
          </DocApp>
        </div>
      </footer>
    </div>
  </div>

  <div v-if="currentStatus === WindowStatus.CLOSED">
    <div class="flex h-screen">
      <div class="m-auto">
        <a v-show="!showConfetti" href="#" class="text-9xl" @click.stop.prevent="reOpen">😥</a>
        <span v-show="showConfetti" class="text-9xl">🙌</span>
        <ConfettiExplosion v-if="showConfetti"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import WindowButtons from "./components/WindowButtons.vue";
import {ref} from "vue";
import DocApp from "./components/DocApp.vue";
import x from "./assets/icons/android-chrome-192x192.png";
import ConfettiExplosion from "vue-confetti-explosion";
import SideBar from "./components/SideBar.vue";

enum WindowStatus {
  NORMAL = 0,
  MAXIMIZED = 1,
  MINIMIZED = 2,
  CLOSED = 3
}

const currentStatus = ref<WindowStatus>(WindowStatus.NORMAL);

const maximize = () => {
  currentStatus.value = WindowStatus.MAXIMIZED;
}

const minimize = () => {
  if (currentStatus.value === WindowStatus.MINIMIZED) {
    currentStatus.value = WindowStatus.NORMAL;
  } else {
    currentStatus.value = WindowStatus.MINIMIZED;
  }
}

const backToNormal = () => {
  currentStatus.value = WindowStatus.NORMAL;
}

const close = () => {
  currentStatus.value = WindowStatus.CLOSED;
}

const showConfetti = ref(false);
const reOpen = async () => {
  showConfetti.value = true;
  window.setTimeout(() => {
    showConfetti.value = false;
    currentStatus.value = WindowStatus.NORMAL;
  }, 2000);
}

</script>

