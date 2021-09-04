<script setup>
import { categories, myApps, otherServiceAccounts } from "./data";

import HelloWorld from './components/HelloWorld.vue'
import AppTable from './components/AppTable.vue'
</script>

<template>
  <section class="container mx-auto">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="ゆうやみポータル" />
    <AppTable />
    <div>test</div>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
