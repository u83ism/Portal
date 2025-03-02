<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">{{ msg }}</h1>
    <p class="text-xl text-gray-600 mb-6">
      ゆうやみのポータルサイトへようこそ！<br>
      私の作品やSNSアカウントをまとめています。
    </p>
  </div>
</template>

<style scoped>
</style>
