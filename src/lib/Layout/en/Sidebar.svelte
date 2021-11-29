<script>
	export let open = false
</script>

<aside class="absolute w-full h-full dark:text-blue-200 text-blue-800 dark:bg-blue-900 bg-blue-100 shadow-lg z-10" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="/en/services">Services</a>
        <a class="block" href="/en/gallery">Gallery</a>
		<a class="block" href="/en/book">Reservations</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>