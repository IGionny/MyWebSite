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
        <span title="from 2005">{{ getYearsFrom(2005) }} Yrs 🎄</span>
      </p>

      <ul class="list-disc ml-10 font-light">
        <li>
          Web Development Asp.Net Mvc
          <ul>
            <li>
              😍 Asp.Net Core >= 2 <= 9 (current)
            </li>
            <li>
              🤮 Asp.Net Framework >= 2 <= 4.8
            </li>
          </ul>
        </li>
        <li>Tests (xUnit, NSubstitute, Coverlet)</li>
        <li>Analyzers (StyleCop, SonarCube)</li>
        <li>Patterns (Singleton, Factory and so on..)</li>
        <li>SOLID / CLEAN / KISS / DRY Principles</li>
      </ul>
    </div>
    <div class="mb-1">
      <p class="text-gray-5 text-sm p-1 font-bold flex justify-between">
        <span title="from 2018">Typescript / VueJS 2 and 3</span>
        <span>{{ getYearsFrom(2018) }} Yrs 🎄</span>
      </p>
      <p class="text-gray-5 text-sm p-1 font-bold flex justify-between">
        <span title="from 2000">Javascript & Jquery</span>
        <span>{{ getYearsFrom(2000) }} Yrs 🎄</span>
      </p>
      <ul class="list-disc ml-10 font-light">
        <li>SPA</li>
        <li>Big Apps</li>
        <li>Bundling optimizations</li>
        <li>Tests (QUnit, Jest, Vitest, Cypress)</li>
      </ul>
    </div>
    <div class="mb-1">
      <p class="text-gray-5 text-sm p-1 font-bold flex justify-between">
        <span title="from 2018">Linux / Docker / CI-CD</span>
        <span>{{ getYearsFrom(2018) }} Yrs 🎄</span>
      </p>
      <ul class="list-disc ml-10 font-light">
        <li>Debian (servers)</li>
        <li>Docker (local registry, dockerfile, docker compose etc..)</li>
        <li>GitLab (installation/pipelines etc..)</li>
        <li>GitHub (Copilot etc..)</li>
        <li>Nuget/Npm local</li>
      </ul>
    </div>
    <div class="mb-1">
      <p class="text-gray-5 text-sm p-1 font-bold flex justify-between">
        <span>Agile / Jira / GitFlow</span>
      </p>
      <ul class="list-disc ml-10 font-light">
        <li>Agile / Sprint / Kanban / Jira / Confluence..</li>
        <li>GitFlow Branching strategies</li>
        <li>Conventional Commits</li>
        <li>Pull Request / Squash</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

function getYearsFrom(year: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}
</script>
