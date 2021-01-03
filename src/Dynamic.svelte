<script>
    import { onMount } from 'svelte';
    let date = '';
    function getCommitDate() {
        fetch(
            "https://api.github.com/repos/j1ah0ng/j1ah0ng.github.io/branches/deploy"
            )
            .then(response => {
                response.json().then(json => {
                    date = new Date(
                        Date.parse(json.commit.commit.author.date))
                        .toLocaleDateString();
                });
            })
            .catch(error => { console.log(error); });
    }
    onMount(() => getCommitDate());
</script>
<p class="footer">Last updated on {date}.</p>
