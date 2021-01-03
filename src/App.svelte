<script>
    import Icon from 'svelte-awesome';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from 'svelte';

    export let title;
    $: title = '👋';

    onMount(() => {
            if (title) document.title = title;
    });
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="icon"
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

    <div style="display:flex;justify-content:center;">
    <div style="position:relative;vertical-align:middle;width:600px;text-align:justify">
    I'm a current undergraduate student at the University of California, San
    Diego studying Computer Engineering and Mathematics for Scientific
    Computation. My academic interests lie at the intersection of (discrete and
    numerical) math and computer science. <br><br> </div></div>

    This webpage is a work-in-progress! <br><br>

    <nav><ul>
        <li><a href="https://github.com/j1ah0ng" aria-label="github">
            <Icon data={faGithub} scale="2" style="color:#5e81ac"/>
        </a></li>
        <li><a href="https://linkedin.com/in/jiahonglong" aria-label="linkedin">
            <Icon data={faLinkedin} scale="2" style="color:#5e81ac"/>
        </a></li>
        <li><a href="https://leetcode.com/j1ah0ng" aria-label="leetcode">
                <svg style="fill:#5e81ac" viewbox="2 -2 36 36" width="32"
                    height="32">
                    <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z">
                    </path>
                </svg>
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
        align-items: center;
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
