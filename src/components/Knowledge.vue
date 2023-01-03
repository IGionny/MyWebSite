<template>
  <div>
    <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2">📚 My knowledge in short</p>
    <div v-for="kl in knowledgeList" :key="kl.Name" class="mb-1">
      <p class="text-gray-5 text-sm p-1">{{ kl.Name }}</p>
      <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-blue-600 text-xs font-sm text-blue-100 text-center p-0.1 leading-none rounded-full"
             :style="{width: kl.Value + '%'}"> {{ kl.Value }}%
        </div>
      </div>
    </div>
    <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2 pt-2">
      <font-awesome-icon icon="fa-solid fa-certificate" class="text-yellow-200 mr-1"/>
      Certifications
    </p>
    <ul class="text-gray-5 text-sm">
      <li><a href="https://aspen.eccouncil.org/Verify" target="_blank"
             title="CERTIFIED APPLICATION SECURITY ENGINEER - .NET">CASE .NET - 2022</a></li>
    </ul>
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
