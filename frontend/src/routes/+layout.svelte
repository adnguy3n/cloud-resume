<script>
    import Navbar from "$lib/components/Navbar.svelte";
	let { children } = $props()
</script>

<Navbar />

<article class="wrapper">
    {@render children()}
</article>