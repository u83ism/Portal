<script setup lang="ts">
import { categories, myApps, serviceAccounts } from "./data";

import HelloWorld from './components/HelloWorld.vue'
import AppTable from './components/AppTable.vue'
import AppList from './components/AppList.vue'
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <img alt="ゆうやみロゴ" src="./assets/logo.png" class="mx-auto h-24 mb-4" />
      <HelloWorld msg="ゆうやみポータル" />
    </div>
    
    <AppList :apps="myApps" />
    <AppTable :accounts="serviceAccounts" />
    
    <footer class="mt-12 pt-8 border-t text-center text-gray-500">
      <p>© 2025 ゆうやみ. All rights reserved.</p>
    </footer>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
