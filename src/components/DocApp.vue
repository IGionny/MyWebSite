<template>
  <button ref="el" class="text-white text-2xl font-bold rounded-xl"
          :style="{ width: size, height: size }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useMouse} from "@vueuse/core";
const { x, y } = useMouse({ touch: false })

const el = ref<HTMLButtonElement | null>(null);

const size = computed(() => {
  if (!el.value) return 0;
  let rect = el.value.getBoundingClientRect();
  let dx = Math.abs(x.value - (rect.left + rect.right) / 2.0);
  let dy = Math.abs(y.value - (rect.top + rect.bottom) / 2.0);
  let dist = Math.sqrt(dx ** 2 + dy ** 2);
  const scaleFactor = Math.min(Math.max(1.0, (2.0 - (dist - 20) / 120)), 2.0);
  
  return String(Math.round(48 * scaleFactor)) + 'px';
});

//tnx to: https://codepen.io/eshnil/pen/rNzEbKR
</script>
