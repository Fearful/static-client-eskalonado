<script lang="ts">
	import '../../../style/tailwind.scss';
	import { navigating } from '$app/stores';
	import Header from '$lib/Layout/en/Header.svelte';
	import Footer from '$lib/Layout/Footer.svelte';
	import LoadingIndicator from '$lib/Layout/LoadingIndicator.svelte';
	import Sidebar from '$lib/Layout/en/Sidebar.svelte';
	let open = false
</script>
  
<!-- content -->
{#if $navigating}
	<LoadingIndicator />
{/if}

<Sidebar bind:open />
<Header bind:sidebar={open} />

<main>
	<slot />
</main>

<Footer />