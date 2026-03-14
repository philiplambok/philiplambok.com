<template>
  <div class="top-bar"></div>
  <div class="site">
    <header class="site-header">
      <NuxtLink to="/" class="logo-link">
        <div class="logo-box">
          <span class="logo-text">slice of life blog</span>
        </div>
      </NuxtLink>
      <nav class="site-nav">
        <NuxtLink to="/">blog</NuxtLink>
        <span class="sep">|</span>
        <NuxtLink to="/about">about</NuxtLink>
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
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 19px;
}

body {
  font-family: sans-serif;
  font-style: normal;
  color: #000;
  background: #fff;
  line-height: 1.6;
}

a {
  color: #0074D9;
}

a:visited {
  color: #0041A6;
}

.top-bar {
  height: 6px;
  background: #333;
  width: 100%;
}

.site {
  max-width: 640px;
  margin: 0 auto;
  padding: 1.2rem 1.5rem 3rem;
}

.site-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo-link {
  text-decoration: none;
  display: inline-block;
}

.logo-box {
  display: inline-block;
  background: #F5A9B8;
  border: solid black;
  padding: 1em 2em;
  box-shadow: 6px 6px 0px #5BCEFA;
  margin-bottom: 0.8rem;
  transition: transform 0.2s ease;
}

.logo-link:hover .logo-box {
  transform: rotate(0deg);
}

.logo-text {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 2rem;
  font-weight: 900;
  color: #000;
}

.site-nav {
  font-size: 1rem;
}

.site-nav a {
  color: #1862c5;
  text-decoration: underline;
}

.site-nav a:hover {
  color: #0f4a96;
}

.sep {
  margin: 0 0.3rem;
  color: #000;
}

.site-main {
  min-height: 60vh;
}

.site-footer {
  margin-top: 4rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  font-size: 0.85rem;
  color: #666;
}

/* Prose styling for content pages */
.prose h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.prose h2 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
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
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  background: #f4f4f4;
  padding: 0.1em 0.35em;
  border-radius: 3px;
}

.prose pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem 1.2rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1.2rem 0;
  font-size: 0.88rem;
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
  color: #1862c5;
  text-decoration: underline;
}

.post-date-long {
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
}

.back-link {
  display: inline-block;
  margin-top: 2.5rem;
  font-size: 0.95rem;
}

@media (max-width: 480px) {
  html {
    font-size: 19px;
  }

  .site {
    padding: 1rem 1.2rem 2rem;
  }

  .logo-text {
    font-size: 1.8rem;
  }
}
</style>
