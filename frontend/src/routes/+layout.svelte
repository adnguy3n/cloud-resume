<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Contact from "$lib/components/Contact.svelte"
	let { children } = $props()
</script>

<Navbar />

<article class="wrapper">
    {@render children()}
</article>

<Contact />