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
                <svg style="fill:#5e81ac" viewbox="-1.5 -1.5 35 35" width="32"
                    height="32">
                    <path d="M 21.1752 21.9256 l -2.876 2.7784 c -0.4992 0.5 -1.1872 0.708 -1.9456 0.708 s -1.4456 -0.208 -1.9456 -0.708 l -4.6208 -4.6496 c -0.496 -0.5 -0.7496 -1.2296 -0.7496 -1.988 c 0 -0.7616 0.2536 -1.4496 0.7496 -1.9456 l 4.608 -4.6752 c 0.496 -0.4952 1.2 -0.6872 1.9584 -0.6872 s 1.4464 0.208 1.9456 0.708 l 2.876 2.7784 c 0.5496 0.5504 1.4584 0.5304 2.0288 -0.0416 c 0.5664 -0.5704 0.588 -1.4784 0.0376 -2.0288 l -2.7784 -2.8088 c -0.7208 -0.7128 -1.6256 -1.204 -2.6088 -1.4296 l 2.6296 -2.6664 c 0.5504 -0.5496 0.5336 -1.4584 -0.0376 -2.0288 s -1.4792 -0.588 -2.0288 -0.0416 l -10.7752 10.7752 c -1.0456 1.0496 -1.5912 2.4904 -1.5912 4.0904 c 0 1.5968 0.5464 3.088 1.5912 4.1344 l 4.6376 4.6496 c 1.0456 1.0456 2.492 1.5496 4.092 1.5496 c 1.596 0 3.0408 -0.5464 4.0872 -1.5912 l 2.7832 -2.8168 c 0.5504 -0.5464 0.5288 -1.4536 -0.0416 -2.0248 s -1.4792 -0.592 -2.0248 -0.0416 z M 26.1992 16.6792 h -10.8248 c -0.7456 0 -1.3536 0.6408 -1.3536 1.4328 c 0 0.7928 0.608 1.4376 1.3536 1.4376 h 10.8248 c 0.7464 0 1.3544 -0.6456 1.3544 -1.4376 c 0 -0.7912 -0.608 -1.4328 -1.3544 -1.4328 z M 7 0 h 18 q 7 0 7 7 v 18 q 0 7 -7 7 h -18 q -7 0 -7 -7 v -18 q 0 -7 7 -7 z">
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
