<template>
  <router-link @click="emit('click')" :to="'/home/' + name"
               class="z-10 h-6 text-gray-5 inline-block relative cursor-pointer w-full mb-2 p-1  group  bg-transparent">
    <font-awesome-icon :icon="'fa-solid ' + icon" class="text-orange-1 group-hover:rotate-45 mr-1"/>
    {{ name }}
  </router-link>
</template>

<script setup lang="ts">
defineProps<{ icon: string, name: string }>();
const emit = defineEmits<{
  (e: "click"): void
}>();
</script>
