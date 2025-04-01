<script setup lang="ts">
import { MyApp } from '../data';

defineProps<{
  apps?: MyApp[]
}>()
</script>

<template>
  <div class="my-8">
    <h2 class="text-2xl font-bold mb-4">マイアプリ</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="app in apps" :key="app.id"
        class="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-semibold mb-2">{{ app.name }}</h3>
        <p class="text-gray-600 mb-2">{{ app.explanation }}</p>
        <p class="text-sm text-gray-500 mb-2">{{ app.category }}</p>
        <a :href="app.url.href" target="_blank" rel="noopener noreferrer"
          class="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300">
          訪問する
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
