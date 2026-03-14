<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('content').path('/about').first()
})
</script>

<template>
  <article class="prose">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>
