<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import { goto } from '$app/navigation';

  let loaded = false;

  onMount(() => {
    const elements = {
      'github': 'https://github.com/LeEhteshaam',
      'linkedin': 'https://www.linkedin.com/in/ehteshaam-paracha-66a5572b6/',
      'resume': 'https://drive.google.com/file/d/1bgN-gp5cPRijx9skf52S6hFrXPpLIE4C/view?usp=sharing'
    };
    Object.entries(elements).forEach(([id, url]) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => window.open(url, '_blank'));
      }
    });

    // Trigger animation when component has mounted
    loaded = true;
  });

  function goToBlog() {
    goto('/blog');
  }
</script>

<style>

:global(html), :global(body) {
  background-color: black;
  font-family: system-ui;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  color: white;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

}

.header {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

}

.nameIntroduction, .frame {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  width: 50%; 
 
}

.nameIntroduction {
  margin-top: 50px;
}

.frame {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 450px; 
  margin-right: 50px;
}

.frame img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.aboutMe {
  font-size: larger;
}

.fa-brands.fa-github.fa-2x, .fa-brands.fa-linkedin.fa-2x {
  padding: 10px;
  border-radius: 5px;
  color: white;
}

.fa-brands.fa-github.fa-2x:hover, .fa-brands.fa-linkedin.fa-2x:hover {
  background-color: #212121;
  cursor: pointer;
}

#blog, #resume {
  color: white;
  cursor: pointer;
}

#blog:hover, #resume:hover {
  text-decoration: underline;
}

.importantInfo {
  margin-top: 30px;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  gap: 20px;
}

.page, .header, .nameIntroduction, .frame {
  will-change: transform, opacity;
}

.loaded .fadeInElement {
    animation: fadeInContent 0.75s ease forwards;
  }

  @keyframes fadeInContent {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
  }

  .nameIntroduction, .frame {
    width: 100%; 
    text-align: center; 
  }

  .nameIntroduction {
    margin-top: 20px;
  }

  .frame {
    margin: 20px auto;
    max-width: 300px; 
  }

  .aboutMe {
    font-size: medium; 
  }
}
</style>

<div class="page">
  <div class="header {loaded ? 'loaded fadeInElement' : ''}"> <!-- Updated here -->
    <div class="nameIntroduction fadeInElement"> <!-- Apply animation class -->
      <h1 id="Name">Ehteshaam Fareed Paracha</h1>
      <hr>
      <div class="aboutMe">
        I am a Grade 12 student based in Ontario. I like all things Sports, Video Games, and Computers; I also enjoy working out occasionally. Keep track of my blog to see my new projects, my reviews of television shows, films or video games and just news that either excites or slightly freights me. As I aspire to follow a career in Mathematics and Computer Science, I hope that I can shake the world within my pursuit of passion.
      </div>
      <div class="importantInfo">
        <div id="blog" on:click={goToBlog}>Blog</div>
        <div id="resume">Resume</div>
        <i id="github" class="fa-brands fa-github fa-2x"></i>
        <i id="linkedin" class="fa-brands fa-linkedin fa-2x"></i>
      </div>
    </div>
    <div class="frame fadeInElement"> <!-- Apply animation class -->
      <img src="/src/lib/images/Ehteshaam.jpg" alt="Ehteshaam" />
    </div>
  </div>
</div>