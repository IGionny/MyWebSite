<template>
  <div class="flex-1 p-1 pl-2 pt-3 h-auto text-green-200 font-mono text-md bg-black" id="section-summary">
    <Summary/>
    <Experiences/>
    <Passions/>
    <Tools/>
    <Courses/>
    <Books/>
    
    <p class="pt-3 pb-3 text-orange-1 text-">
      Thank you for having me! 🙏 Feel free to contact me
    </p>

    <Knowledge class="sm:hidden md:hidden l:hidden xl:hidden mb-3"/>
  </div>
</template>
<script setup lang="ts">
import Knowledge from "./Knowledge.vue";
import Summary from "./Home/Summary.vue";
import Experiences from "./Home/Experiences.vue";
import Passions from "./Home/Passions.vue";
import Tools from "./Home/Tools.vue";
import Books from "./Home/Books.vue";
import Courses from "./Home/Courses.vue";
</script>
