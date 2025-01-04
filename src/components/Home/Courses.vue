<template>
  <h4 class="pt-5 pb-1 text-orange-1" id="section-courses">
    <font-awesome-icon icon="fa-solid fa-person-chalkboard" class="mr-1"/>
    Courses
  </h4>

  <p>
    Here are some of courses that I have taken and I suggest to you:
  </p>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 my-4 justify-between ">
    <a v-for="course in courses" :key="course.title" :href="course.url" :title="course.title"
       class="hover:transform hover:skew-y-6">
      <img :src="course.img" :alt="course.title" loading="lazy" class="max-h-[250px] max-w-[190px]"/>
    </a>
  </div>
</template>
<script setup lang="ts">

interface ICourseInfo {
  title: string;
  url: string;
  img: string;
}

const courses: ICourseInfo[] = [{
  title: "Three.js Journey",
  url: "https://threejs-journey.com",
  img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/64d203d2e313ad76ce021e45/0x0.png",
},{
  title: "Maximilian Schwarzmüller: Vue - The Complete Guide",
  url: "https://www.udemy.com/course/vuejs-2-the-complete-guide",
  img: "https://courselifetime.com/cdn/shop/files/vuejs-2-the-complete-guide.jpg?v=1690878450",
},{
  title: "Eden Marco: Learn LangChain by building FAST a real world generative ai LLM powered application LLM (Python, Latest Version 0.3.0)",
  url: "https://www.udemy.com/course/langchain/",
  img: "https://img-c.udemycdn.com/course/750x422/5281528_8f36.jpg",
}];

</script>