<!-- Force to render full HTML page for crawling -->
<script context="module">
	export const prerender = true;
</script>

<!-- Meta Information to inject -->
<svelte:head>
	<title>Eskalonado - El Calafate</title>
	<meta name="description" content="Bienvenidos al eskalonado, desde El Calafate para el mundo. Welcome to the eskalonado, from El Calafate to the world." />
	<meta name="keywords" content="El Calafate, calfate, hospedaje, booking, lago argentino">
</svelte:head>

<!-- content -->
<img src="img/4.jpg" class="h-full w-full object-cover absolute" alt="vista al Lago Argentino" style="filter: brightness(50%);"/>
<div class="container mx-auto px-6 md:px-12 relative z-2 flex h-screen items-center py-32 xl:py-40">
	<div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-2">
		<span class="font-bold uppercase text-blue-200 dark:text-blue-300">
			El Calafate, Santa Cruz - Argentina
		</span>
		<h1 class="font-bold text-6xl sm:text-7xl text-white dark:text-blue-200 leading-tight mt-4">
			El Sur Profundo
			<br/>
				desde el Eskalonado
		</h1>
		<a href="/reservas" class="block dark:text-blue-200 text-blue-800 dark:bg-blue-900 bg-blue-100 hover:bg-blue-600 hover:text-blue-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
			Descubre Calafate
		</a>
	</div>
</div>