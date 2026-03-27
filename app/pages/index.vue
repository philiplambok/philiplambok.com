<script setup lang="ts">
useHead({ title: 'Philip Lambok | Blog' })

const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})
</script>

<template>
  <div class="blog-list">
    <div v-for="post in posts" :key="post.path" class="post-item">
      <span class="post-date">{{ post.date }}:</span>
      <NuxtLink :to="post.path" class="post-link">{{ post.title }}</NuxtLink>
    </div>

    <p v-if="!posts?.length" class="empty">No posts yet.</p>
  </div>
</template>

<style scoped>
.post-item {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.post-date {
  font-variant-numeric: tabular-nums;
}

.post-link {
  color: #1a0dab;
}

.empty {
  color: #777;
  font-style: italic;
}
</style>
