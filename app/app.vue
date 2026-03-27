<template>
  <div class="site">
    <header class="site-header">
      <NuxtLink to="/" class="site-title">Philip Lambok</NuxtLink>
      <nav class="site-nav">
        <NuxtLink to="/">Blog</NuxtLink>
        <span class="sep">|</span>
        <NuxtLink to="/about-me">About Me</NuxtLink>
      </nav>
    </header>

    <main class="site-main">
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} Philip Lambok</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 18px;
}

body {
  font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  font-style: normal;
  color: #111;
  background: #fff;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: #1a0dab;
  text-decoration: underline;
}

a:visited {
  color: #1a0dab;
}

a:hover {
  color: #000;
}

.site {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2.5rem;
  padding-bottom: 0.5rem;
}

.site-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #111;
  text-decoration: none;
  letter-spacing: -0.01em;
}

.site-title:visited {
  color: #111;
}

.site-title:hover {
  color: #444;
}

.site-nav {
  font-size: 0.95rem;
}

.site-nav a {
  color: #111;
  text-decoration: underline;
}

.site-nav a:visited {
  color: #111;
}

.site-nav a:hover {
  color: #555;
}

.sep {
  margin: 0 0.35rem;
  color: #999;
}

.site-main {
  min-height: 60vh;
}

.site-footer {
  margin-top: 4rem;
  padding-top: 1.2rem;
  text-align: center;
  font-size: 0.85rem;
  color: #777;
}

/* Prose styling for content pages */
.prose h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.prose h2 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-top: 2.2rem;
  margin-bottom: 0.5rem;
}

.prose h2 a {
  color: #111;
  text-decoration: none;
}

.prose p {
  margin-bottom: 1.2rem;
}

.prose ul, .prose ol {
  margin-bottom: 1.2rem;
  padding-left: 2rem;
}

.prose li {
  margin-bottom: 0.3rem;
}

.prose blockquote {
  border-left: 3px solid #ccc;
  padding-left: 1rem;
  margin: 1.2rem 0;
  color: #555;
  font-style: italic;
}

.prose code {
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
  font-size: 0.88em;
  background: #f5f5f5;
  padding: 0.15em 0.4em;
  border-radius: 3px;
}

.prose pre {
  background: #2b2b2b;
  color: #f8f8f2;
  padding: 1rem 1.2rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1.2rem 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.prose pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.prose img {
  max-width: 100%;
  height: auto;
}

.prose a {
  color: #1a0dab;
  text-decoration: underline;
}

.post-date-long {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.back-link {
  display: inline-block;
  margin-top: 2.5rem;
  font-size: 0.95rem;
}

@media (max-width: 480px) {
  html {
    font-size: 17px;
  }

  .site {
    padding: 1.5rem 1.2rem 2rem;
  }

  .site-title {
    font-size: 1.2rem;
  }
}
</style>
