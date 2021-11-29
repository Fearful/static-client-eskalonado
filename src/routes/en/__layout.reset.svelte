<script lang="ts">
	import '../../style/tailwind.scss';
	import { navigating } from '$app/stores';
	import Header from '$lib/Layout/en/Header.svelte';
	import Footer from '$lib/Layout/Footer.svelte';
	import LoadingIndicator from '$lib/Layout/LoadingIndicator.svelte';
	import Sidebar from '$lib/Layout/en/Sidebar.svelte';
	const test = new Array(50);
	let open = false
</script>
  
<!-- content -->
{#if $navigating}
	<LoadingIndicator />
{/if}
<!-- <Header bind:sidebar={openMenu} /> -->
<div class="absolute overflow-hidden h-screen" style="pointer-events: none">
	<div class="snow-container">
		{#each test as item}
			<div class="snow"></div>
		{/each}
	</div>
</div>

<Sidebar bind:open />
<Header bind:sidebar={open} />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	@use "sass:math";

	.snow-container {
		z-index: 1;
		height: 100vh;
		overflow: hidden;
		pointer-events: none;
		position: fixed;
		width: 100vw;
	}

	@function random_range($min, $max) {
		$rand: random();
		$random_range: $min + floor($rand * (($max - $min) + 1));
		@return $random_range;
	}

	.snow {
	$total: 200;
	position: absolute;
	width: 10px;
	height: 10px;
	background: white;
	border-radius: 50%;

		@for $i from 1 through $total {
			$random-x: random(1000000) * 0.0001vw;
			$random-offset: random_range(-100000, 100000) * 0.0001vw;
			$random-x-end: $random-x + $random-offset;
			$random-x-end-yoyo: $random-x + math.div($random-offset, 2);
			$random-yoyo-time: math.div(random_range(30000, 80000), 100000);
			$random-yoyo-y: $random-yoyo-time * 100vh;
			$random-scale: random(10000) * 0.0001;
			$fall-duration: random_range(10, 30) * 1s;
			$fall-delay: random(30) * -1s;

			&:nth-child(#{$i}) {
			opacity: random(10000) * 0.0001;
			transform: translate($random-x, -10px) scale($random-scale);
			animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
			}

			@keyframes fall-#{$i} {
			#{percentage($random-yoyo-time)} {
				transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
			}

			to {
				transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
			}
			}
		}
	}
</style>