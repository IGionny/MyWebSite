<template>
  <div>
    <p class="text-1xl text-gray-4 fond-bold text-sm">
      <font-awesome-icon icon="fa-solid fa-certificate" class="text-yellow-200 mr-1"/>
      Certifications
    </p>
    <ul class="text-gray-5 text-sm mt-2">
      <li>
        <router-link to="/case" title="CERTIFIED APPLICATION SECURITY ENGINEER - .NET">CASE .NET - 2022</router-link>
        <p class="text-xs underline">
          Certified Application Security Engineer .NET
        </p>
        <!--<a href="https://aspen.eccouncil.org/Verify" target="_blank"
            ></a>-->
      </li>
    </ul>

    <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-5">🧠 My knowledge in short</p>

    <div class="mb-1">
      <p class="text-gray-5 text-sm p-1 font-bold flex justify-between">
        <span>.NET Core (C#)</span>
        <span>20 Yrs 🎄</span>
      </p>

      <ul class="list-disc ml-10 font-light">
        <li>Web Development Asp.Net Mvc</li>
        <li>Tests (xUnit, FluentAssertions)</li>
        <li>Patterns (Singleton, Factory and so on..)</li>
      </ul>
    </div>
    <div class="mb-1">
      <p class="text-gray-5 text-sm p-1 font-bold flex justify-between">
        <span>Typescript / VueJS 2 and 3</span>
        <span>7 Yrs 🎄</span>
      </p>
      <div>
        (previously Javascript and JQuery)
      </div>
      <ul class="list-disc ml-10 font-light">
        <li>SPA</li>
        <li>Big Apps</li>
        <li>Bundling optimizations</li>
        <li>Tests (QUnit, Jest, Vitest, Cypress)</li>
      </ul>
    </div>
    <div class="mb-1">
      <p class="text-gray-5 text-sm p-1 font-bold flex justify-between">
        <span>Linux / Docker / CI-CD</span>
        <span>7 Yrs 🎄</span>
      </p>
      <ul class="list-disc ml-10 font-light">
        <li>Debian (servers)</li>
        <li>Docker (local registry, dockerfile, docker compose etc..)</li>
        <li>GitLab (installation/pipelines etc..)</li>
        <li>GitHub (Copilot etc..)</li>
        <li>Nuget/Npm local</li>
      </ul>
    </div>

    <p class="text-1xl text-gray-4 fond-bold text-sm mb-2 mt-5">📚 My library: new entries</p>
    <ul class="list-disc ml-10 font-light mt-2">
      <li><a href="https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638/">Designing
        Distributed Systems</a></li>
    </ul>

  </div>
</template>

<script setup lang="ts">
</script>
