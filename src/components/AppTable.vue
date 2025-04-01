<script setup lang="ts">
import { ServiceAccount } from '../data';

defineProps<{
	accounts?: ServiceAccount[]
}>()
</script>

<template>
	<div class="my-8">
		<h2 class="text-2xl font-bold mb-4">サービスアカウント</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div v-for="account in accounts" :key="account.url.href"
				class="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
				<div class="flex items-center mb-2">
					<div class="w-8 h-8 mr-2 flex items-center justify-center" v-html="account.icon"></div>
					<h3 class="text-xl font-semibold">{{ account.serviceName }}</h3>
				</div>
				<p class="text-gray-600 mb-2">{{ account.explanation }}</p>
				<p class="text-sm text-gray-500 mb-2">{{ account.category }}</p>
				<a :href="account.url.href" target="_blank" rel="noopener noreferrer"
					class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300">
					訪問する
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
