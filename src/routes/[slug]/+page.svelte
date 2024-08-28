<script lang="ts">
  import { goto } from '$app/navigation';
  import { formatDate } from '$lib/utils';
  export let data;

  function goToBlog() {
    goto('/blog');
  }
</script>

<div class="navigation">
  <div id="home" on:click={() => goto('/')}>Home</div>
  <div id="blog" on:click={goToBlog}>Blog</div>
</div>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <header>
    <h1>{data.meta.title}</h1>
    <hr>
    <p>Published on {formatDate(data.meta.date)}</p>
  </header>

  <div class="tags">
    {#each data.meta.categories as category}
      <span class="tag">&num;{category}</span>
    {/each}
  </div>

  {#if data.meta.image}
    <div class="image-wrapper">
      <img src={data.meta.image} alt={data.meta.title} />
    </div>
  {/if}

  <section class="content markdown">
    <svelte:component this={data.content} />
  </section>
</article>

<style>

@import url('https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-okaidia.min.css');


  :global(html), :global(body) {
    background-color: black;
    font-family: system-ui;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

article, .content {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
  animation-delay: 0.5s; /* Optional: delay for content fade-in */
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

  /* Only target code blocks and preformatted text inside the .markdown class */
.markdown pre[class*="language-"], 
.markdown code[class*="language-"], 
body .markdown pre[class*="language-"], 
body .markdown code[class*="language-"] {
  background: #2d2d2d !important; /* Correct background color for code */
  color: #f8f8f2 !important; /* Correct text color for code */
  padding: 1em !important;
  margin: .5em 0 !important;
  overflow-x: auto !important;
  border-radius: .3em !important;
  font-family: 'Fira Code', monospace; /* Font for code */
  font-size: 1em !important; /* Font size for code */
}

/* Specifically target syntax tokens within code blocks */
.markdown code[class*="language-"] .token {
  color: inherit !important; /* Ensure tokens inherit the correct color */
}

/* General resets for preformatted and code elements */
.markdown pre, 
.markdown code {
  color: #f8f8f2 !important; /* Text color for code blocks */
  background: #2d2d2d !important; /* Background color for code blocks */
}



/* If needed, explicitly reset color for code and preformatted text */
.markdown pre, 
.markdown code {
  color: #f8f8f2 !important; /* Ensure the correct text color */
  background: #2d2d2d !important; /* Ensure the correct background color */
}

/* Override global white color specifically for .markdown content */
html, body {
  color: inherit; /* Reset the global white color for all elements */
}
  .navigation {
    display: flex;
    justify-content: center;
    gap: 30px;
    color: white;
  }

  #home, #blog {
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px;
  }

  #home:hover, #blog:hover {
    text-decoration: underline;
  }
  
  article {
    max-width: 800px;
    margin: 0 auto;
    color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 16px; 
    font-family: system-ui;
  }

  header {
    text-align: center;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-size: 1em;
    color: #cccccc;
  }

  .tags {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .tag {
    padding: 5px 10px;
    background-color: #333333;
    color: #ffffff;
    border-radius: 50px;
  }

  .content {
    line-height: 1.6;
    font-size: 1em;
  }

  .image-wrapper {
    text-align: center;
    margin: 20px 0;
  }

  .image-wrapper img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style>
