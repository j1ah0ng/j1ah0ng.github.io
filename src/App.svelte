<script>
    import DynamicDate from './DynamicDate.svelte';
    import Icon from 'svelte-awesome';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { faFile } from '@fortawesome/free-solid-svg-icons';
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
          href="images/favicon.png"
          sizes="64x64"
    />
    <link rel="shortcut icon"
          type="image/png"
          href="images/fav16.png"
          sizes="16x16"
    />
    <link rel="shortcut icon"
          type="image/png"
          href="images/fav96.png"
          sizes="96x96"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<main>

    <!-- Splash -->
    <div class="splash">

        <!-- Avatar -->
        <div class="avatar">
            <img class="pfp" src="images/me.jpg" alt="Profile picture">
        </div>
        
        <!-- Title -->
        <h1>Hi, I'm Jiahong!</h1>

        <!-- Blurb -->
        <div class="blurb">
        I'm a current undergraduate student at the University of California, San
        Diego studying Computer Engineering and Mathematics for Scientific
        Computation. My academic interests lie at the intersection of (discrete and
        numerical) math and computer science. <br><br> </div>

        This webpage is a work-in-progress. <br><br>

        <!-- Spacer for mobile -->
        <div class="spacer"></div>
    </div>

    <div class="sep1"></div>

    <!-- First resume section -->
    <div class="sec" id="section1">
        <div class="blurb-subhead">University of California, San Diego / <span
                class="position" style="font-size:0.8em">B.Sc. Computer Engineering and B.Sc.
                Mathematics—Scientific Computation</span></div>
        <div class="blurb">
            <span style="font-family:'IBM Plex Sans Medium'">CS
                Coursework:</span>
            <ul style="padding-top:-10px">
                <li> hi </li>
                <li> hi </li>
                <li> hi </li>
                <li> hi </li>
            </ul>
            <span style="font-family:'IBM Plex Sans Medium'">CS
                Coursework:</span>
            <ul>
                <li> hi </li>
                <li> hi </li>
                <li> hi </li>
                <li> hi </li>
            </ul>
        </div>
        <div class="blurb-subhead">University of California, Berkeley / <span
                class="position" style="font-size:0.8em">Beginning</span></div>
        <div class="blurb">
            Flavour text
        </div>
        <div class="blurb-subhead">Valkyrie Robotics / <span
                class="position" style="font-size:0.8em">Beginning</span></div>
        <div class="blurb">
            Flavour text
        </div>
    </div>

    <div class="sep2"></div>

    <!-- Footer -->
    <div class="social">
        <nav><ul>
            <li><a href="assets/Resume-Dec-2020.pdf" aria-label="resume">
                <Icon data={faFile} scale="1.4"/>
            </a></li>
            <li><a href="https://github.com/j1ah0ng" aria-label="github">
                <Icon data={faGithub} scale="1.5"/>
            </a></li>
            <li><a href="https://linkedin.com/in/jiahonglong" aria-label="linkedin">
                <Icon data={faLinkedin} scale="1.5"/>
            </a></li>
            <li><a href="https://leetcode.com/j1ah0ng" aria-label="leetcode">
                    <svg viewbox="-1.5 -1.5 35 35" width="24"
                        height="24">
                        <path d="M 21.1752 21.9256 l -2.876 2.7784 c -0.4992 0.5 -1.1872 0.708 -1.9456 0.708 s -1.4456 -0.208 -1.9456 -0.708 l -4.6208 -4.6496 c -0.496 -0.5 -0.7496 -1.2296 -0.7496 -1.988 c 0 -0.7616 0.2536 -1.4496 0.7496 -1.9456 l 4.608 -4.6752 c 0.496 -0.4952 1.2 -0.6872 1.9584 -0.6872 s 1.4464 0.208 1.9456 0.708 l 2.876 2.7784 c 0.5496 0.5504 1.4584 0.5304 2.0288 -0.0416 c 0.5664 -0.5704 0.588 -1.4784 0.0376 -2.0288 l -2.7784 -2.8088 c -0.7208 -0.7128 -1.6256 -1.204 -2.6088 -1.4296 l 2.6296 -2.6664 c 0.5504 -0.5496 0.5336 -1.4584 -0.0376 -2.0288 s -1.4792 -0.588 -2.0288 -0.0416 l -10.7752 10.7752 c -1.0456 1.0496 -1.5912 2.4904 -1.5912 4.0904 c 0 1.5968 0.5464 3.088 1.5912 4.1344 l 4.6376 4.6496 c 1.0456 1.0456 2.492 1.5496 4.092 1.5496 c 1.596 0 3.0408 -0.5464 4.0872 -1.5912 l 2.7832 -2.8168 c 0.5504 -0.5464 0.5288 -1.4536 -0.0416 -2.0248 s -1.4792 -0.592 -2.0248 -0.0416 z M 26.1992 16.6792 h -10.8248 c -0.7456 0 -1.3536 0.6408 -1.3536 1.4328 c 0 0.7928 0.608 1.4376 1.3536 1.4376 h 10.8248 c 0.7464 0 1.3544 -0.6456 1.3544 -1.4376 c 0 -0.7912 -0.608 -1.4328 -1.3544 -1.4328 z M 7 0 h 18 q 7 0 7 7 v 18 q 0 7 -7 7 h -18 q -7 0 -7 -7 v -18 q 0 -7 7 -7 z">
                        </path>
                    </svg>
            </a></li>
        </ul></nav>
        <span class="footer">
            <DynamicDate/>
            Made with 💖 in California
        </span>
    </div>
</main>

<style>
	main {
        font-family: "IBM Plex Sans", sans-serif;
		text-align: center;
        overflow: auto;
        position: relative;
        background-color: #eceff4;
	}

	h1 {
        padding-left: 10vw;
        padding-right: 10vw;
        font-family: "IBM Plex Sans", sans-serif;
		color: #3b4252;
		font-size: 3.5em;
	}

    div.splash {
        width: 100vw;
        min-height: 100vh;
        height: min-content;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-attachment: fixed;
        background-image: linear-gradient(#88c0d0, #d8dee9);
    }

    img.pfp {
        clip-path: circle(5em at center);
        width: 10em;
    }

    div.blurb {
        color: #3b4252;
        vertical-align: middle;
        text-align: justify;
    }

    div.sep1 {
        background-color: #8fbcbb;
        height: 50px;
    }

    div.sec {
        width: 100vw;
        min-height: 100vh;
        height: min-content;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.blurb-subhead {
        color: #3b4252;
        vertical-align: middle;
        text-align: left;
        font-family: "IBM Plex Sans Medium", sans-serif;
		font-size: 1.5em;
        padding-bottom: 0.3em;
        padding-top: 1em;
    }

    span.position {
        font-family: "IBM Plex Sans Regular", sans-serif;
    }

    div.sep2 {
        background-color: #d08770;
        height: 50px;
    }

    nav ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style: none;
        align-items: center;
    }

    li {
        padding-right: 8px;
        padding-left: 8px;
    }

    div.social {
        padding: 8px;
        display: flex;
        flex-direction: column;
    }

    div.social a, div.social a:visited {
        color: #5e81ac;
        fill: #5e81ac;
    }

    .footer {
        color: #3b4252;
        font-size: 0.7em;
    }

	@media (min-width: 700px) {
		main {
			max-width: none;
		}
        div.blurb {
            width: 600px
        }
        div.blurb-subhead {
            width: 600px
        }
        .footer {
            padding-bottom: 8px;
        }
        div.spacer {
            display: none;
        }
	}

	@media (max-width: 700px) {
		main {
			max-width: none;
		}
        div.blurb-subhead {
            width: 85vw;
        }
        .footer {
            padding-bottom: 10px;
        }
        div.spacer {
            height: 10vh;
        }
	}
</style>
