<script lang="ts">
  import { onMount } from 'svelte';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import { goto } from '$app/navigation';
  import img from '../lib/images/Ehteshaam.jpg';

  let loaded = false;

  onMount(() => {
    const elements = {
      'github': 'https://github.com/LeEhteshaam',
      'linkedin': 'https://www.linkedin.com/in/ehteshaam-paracha-66a5572b6/',
      'resume': 'https://drive.google.com/file/d/1pr0R_ME_56tSD2PTLC5uh_Kw8dp-zOJ9/view?usp=sharing'
    };
    Object.entries(elements).forEach(([id, url]) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => window.open(url, '_blank'));
      }
    });

    // Hide elements initially and then show them after a delay
    const fadeInElements = document.querySelectorAll('.fadeInElement');
    fadeInElements.forEach(el => el.classList.add('hidden'));

    setTimeout(() => {
      fadeInElements.forEach(el => el.classList.remove('hidden'));
      loaded = true;
    }, 100); // Adjust the delay time if necessary
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

.hidden {
  visibility: hidden;
}

.loaded .fadeInElement {
  visibility: visible;
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
  <title>Ehteshaam's website</title>
  <div class="header {loaded ? 'loaded' : ''}">
    <div class="nameIntroduction fadeInElement hidden">
      <h1 id="Name">Ehteshaam Fareed Paracha</h1>
      <hr>
      <div class="aboutMe">
        My name is Ehteshaam, and I'm a first-year student in the Waterloo Computer Science and Business Administration (CS/BBA) Dual Degree program. I like playing sports, working out and solving interesting problems. Feel free to hit me up!
    </div>
      <div class="importantInfo">
        <div id="blog" on:click={goToBlog}>Blog</div>
        <div id="resume">Resume</div>
        <i id="github" class="fa-brands fa-github fa-2x"></i>
        <i id="linkedin" class="fa-brands fa-linkedin fa-2x"></i>
      </div>
    </div>
    <div class="frame fadeInElement hidden">
      <img src={img} alt="Ehteshaam" />
    </div>
  </div>
</div>
