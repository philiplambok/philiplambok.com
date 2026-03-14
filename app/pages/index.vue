<script setup lang="ts">
useHead({ title: 'slice of life blog | Blog' })

const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})
</script>

<template>
  <div class="blog-list">
    <p class="intro">
      If you have comments, questions, or feedback, you can email
      <a href="mailto:philiplambok@gmail.com">my personal email</a>.
      There is also an <NuxtLink to="/feed.xml">RSS feed</NuxtLink>.
    </p>

    <ul class="post-list">
      <li v-for="post in posts" :key="post.path">
        {{ post.date }}: <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>

    <p v-if="!posts?.length" class="empty">No posts yet.</p>
  </div>
</template>

<style scoped>
.intro {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.post-list {
  padding-left: 2rem;
}

.post-list li {
  margin-bottom: 0.65rem;
  line-height: 1.5;
}

.empty {
  color: #666;
  font-style: italic;
}
</style>
