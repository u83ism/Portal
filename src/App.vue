<script setup lang="ts">
import { myApps, serviceAccounts } from "./data";

import HelloWorld from './components/HelloWorld.vue'
import AppTable from './components/AppTable.vue'
import AppList from './components/AppList.vue'
</script>

<template>
  <div class="min-h-screen bg-cover bg-center bg-fixed" style="background-image: url('/background.jpg')">
    <div class="min-h-screen" style="background-color: rgba(0, 0, 0, 0.5);">
      <section class="container mx-auto px-4 py-8 text-white">
        <div class="text-center mb-8">
          <img alt="ゆうやみロゴ" src="./assets/logo.png" class="mx-auto h-24 mb-4" />
          <HelloWorld msg="ゆうやみポータル" />
        </div>

        <AppList :apps="myApps" />
        <AppTable :accounts="serviceAccounts" />

        <footer class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 ゆうやみ. All rights reserved.</p>
        </footer>
      </section>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f9fafb;
}
</style>
