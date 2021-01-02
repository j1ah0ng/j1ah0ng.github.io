<script>
    import Icon from 'svelte-awesome';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<svelte:head>
    <title>👋</title>
    <link rel="shortcut icon"
          type="image/png"
          href="favicon.png"
          sizes="64x64"
    />
    <link rel="shortcut icon"
          type="image/png"
          href="fav16.png"
          sizes="16x16"
    />
    <link rel="shortcut icon"
          type="image/png"
          href="fav96.png"
          sizes="96x96"
    />
</svelte:head>

<main>
	<h1>Hi, I'm Jiahong.</h1>

    This webpage is a work-in-progress! <br><br>

    <nav><ul>
        <li><a href="https://github.com/j1ah0ng" aria-label="github">
            <Icon data={faGithub} scale="2" style="color:#5e81ac"/>
            <br>
        </a></li>
        <li><a href="https://linkedin.com/in/jiahonglong" aria-label="linkedin">
            <Icon data={faLinkedin} scale="2" style="color:#5e81ac"/>
            <br>
        </a></li>
    </ul></nav>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #3b4252;
		font-size: 3.5em;
	}

    nav ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style: none;
    }

    li {
        padding-right: 5px;
        padding-left: 5px;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
