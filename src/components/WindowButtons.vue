<template>
  <div @click="emit('close')"
      class="place-items-center text-center border-red-900 bg-red-1 shadow-inner rounded-full w-3 h-3 group cursor-default">
    <div class="invisible group-hover:visible text-black font-light text-xs leading-[0.9] ">🔥</div>
  </div>
  <div @click="emit('minimize')"
      class="place-items-center text-center ml-2 border-yellow-900 bg-yellow-1 shadow-inner rounded-full w-3 h-3 group cursor-default">
    <div class="invisible group-hover:visible text-black font-light text-xs leading-[0.9]">😃</div>
  </div>
  <div  @click="emit('maximize')"
      class="place-items-center ml-2 border-green-900 bg-green-1 shadow-inner rounded-full w-3 h-3 group cursor-default">
    <div class="invisible group-hover:visible text-black font-light text-xs leading-[0.9] ">🚀</div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void,
  (e: "minimize"): void,
  (e: "maximize"): void
}>()
</script>