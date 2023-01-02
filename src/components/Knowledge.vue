<template>
  <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">📚  My knowledge in short</p>
  <div v-for="kl in knowledgeList" :key="kl.Name" class="mb-1">
    <p class="text-gray-5 text-sm p-1">{{kl.Name}}</p>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div class="bg-blue-600 text-xs font-sm text-blue-100 text-center p-0.1 leading-none rounded-full"
           :style="{width: kl.Value + '%'}"> {{kl.Value}}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const knowledgeList = [{
  Name: "C# / .NET Core",
  Value: 90
},
  {
    Name: "Typescript / VueJS",
    Value: 70
  },
  {
    Name: "Linux / Docker / CI-CD",
    Value: 60
  },
];

</script>
