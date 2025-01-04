<template>
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
         class="hover:text-blue-300">
          <font-awesome-icon icon="fa-brands fa-linkedin-in"/>
      </a>
      <a href="https://x.com/GionnyBismondo" title="X" target="_blank" class="ml-5 hover:text-blue-300">
        <font-awesome-icon icon="fa-brands fa-x-twitter"/>
      </a>
      
      <a href="https://bsky.app/profile/igionny.bsky.social" title="Blue Sky" target="_blank" class="ml-5 hover:text-blue-300">
        <font-awesome-icon icon="fa-brands fa-bluesky"/>
      </a>
      
      <a href="https://github.com/IGionny/" title="GitHub" target="_blank" class="ml-5 hover:text-blue-300">
        <font-awesome-icon icon="fa-brands fa-github"/>
      </a>
      <a href="mailto:gbismondo@gmail.com" title="mail-me" class="ml-5 hover:text-blue-300">
          <font-awesome-icon icon="fa-solid fa-envelope"/>
      </a>
    </span>
  </div>
</template>

<script setup lang="ts">
import {WindowStatus} from "../@types/WindowStatus";

defineProps<{
  currentStatus: WindowStatus
}>()

</script>