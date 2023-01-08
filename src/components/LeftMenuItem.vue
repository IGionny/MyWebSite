<template>
  <router-link :to="'/home/' + name" class="text-gray-5 inline-block cursor-pointer w-full mb-2 p-1 hover:bg-gray-2 group hover:rounded-md hover:bg-gray-2 group hover:rounded-md">
    <font-awesome-icon :icon="'fa-solid ' + props.icon" class="text-orange-1 group-hover:rotate-45 mr-1"/>
    {{ props.name }}
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>
