<script>
    import { goto } from '$app/navigation';
    import * as config from '$lib/config';
    import { formatDate } from '$lib/utils';
    export let data;

    function goToHome() {
        goto('/'); 
    }
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

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
        width: 100%;
        max-width: 800px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin: 0 auto; 
    }
    
    .posts {
        display: grid;
        gap: var(--size-7);
    }
    
    .post {
        max-inline-size: var(--size-content-3);
        padding: 15px;
        border-radius: 8px;
        transition: box-shadow 0.3s ease; 
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--size-7);
    }

    .post:hover {
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1); 
    }
    
    .header {
        margin-bottom: 20px; 
        text-align: center;
    }
    
    .header h1 {
        margin-bottom: 10px;
        font-size: 2.5rem;
        font-weight: bold;
    }
    
    .header hr {
        width: 475px;
        margin: 10px auto;
        border: none;
        border-top: 2px solid white;
        box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1); 
    }
    
    .posts {
        list-style: none;
        padding: 0;
        width: 100%;
    }
    
    .posts li {
        margin-bottom: 20px;
        opacity: 0;
        animation: fadeIn 0.5s forwards;
        animation-delay: calc(0.1s * var(--i));
    }

    .title {
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease; 
    }
    
    .title:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
        text-decoration-color: rgba(255, 255, 255, 0.7);
    }
    
    .date {
        margin-top: 5px;
        font-size: 0.9rem;
        color: #aaa;
    }
    
    .description {
        margin-top: 10px;
        font-size: 1rem;
        color: white;
    }
    
    .home {
        margin-left: 40px;
        cursor: pointer;
        margin-top: 20px;
        font-size: 1rem;
        color: white; 
    }
    
    .home:hover {
        text-decoration: underline;
    }

    .dashed-line {
    border: none;
    border-top: 2px dashed #888888; 
    margin: 20px 0;
}

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media screen and (max-width: 768px) {
        .header h1 {
            font-size: 2rem; 
        }

        .header hr {
            width: 75%; 
        }

        .title {
            font-size: 1.2rem; 
        }

        .description {
            font-size: 0.9rem; 
        }

        .home {
            margin-left: 20px;
            margin-top: 10px;
            font-size: 0.9rem; 
        }
    }
</style>

<div class="home" on:click={goToHome}>Home</div>
<title>Ehteshaam's Blog</title>
<div class="page">
    <div class="header">
        <h1 id="title">Ehteshaam's Blog</h1>
        <hr>
    </div>

    <div class="blogs">
        <section>
            <ul class="posts">
                {#each data.posts as post, i}
                <li style="--i: {i}">
                    <a href="{post.slug}" class="title">{post.title}</a>
                    <p class="date">{formatDate(post.date)}</p>
                    <p class="description">{post.description}</p>
                    <hr class="dashed-line">
                </li>
                {/each}
            </ul>
        </section>
    </div>
</div>
