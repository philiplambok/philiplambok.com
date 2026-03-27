<script setup lang="ts">
const route = useRoute()
const path = '/blog/' + (Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug)

const { data: post } = await useAsyncData('post-' + path, () => {
  return queryCollection('blog').path(path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useHead({ title: `Philip Lambok | ${post.value.title}` })

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="post" class="prose">
    <h1>{{ post.title }}</h1>
    <p class="post-date-long">{{ formatDate(post.date) }}</p>
    <ContentRenderer :value="post" />
    <NuxtLink to="/" class="back-link">&larr; back to all posts</NuxtLink>
  </article>
</template>
