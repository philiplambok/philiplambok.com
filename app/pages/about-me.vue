<script setup lang="ts">
useHead({ title: 'slice of life blog | About Me' })

const { data: page } = await useAsyncData('about', () => {
  return queryCollection('content').path('/about-me').first()
})
</script>

<template>
  <article class="prose">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>
