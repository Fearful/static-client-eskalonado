<!-- Force to render full HTML page for crawling -->
<script context="module">
	export const prerender = true;
</script>

<!-- Meta Information to inject -->
<svelte:head>
	<title>Gallery - Eskalonado</title>
	<meta name="description" content="Photo gallery of the eskalonado." />
	<meta name="keywords" content="El Calafate, calafate, hostel, hotel, argentinian lake, photos, rooms">
</svelte:head>

<!-- content -->
<div class="bg-fixed w-full h-20 bg-no-repeat md:h-44 xl:h-72 md:bg-top md:bg-contain object-cover" style="background-image: url(/galeria1.jpg)"></div>
<section class="body-font">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
	  <div class="flex flex-wrap sm:-m-1 md:-m-2 -m-1">
		<div class="flex flex-wrap w-full md:w-1/2">
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Photography of the Eskalonado building" class="w-full object-cover h-full object-center block" src="/img/9.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Photography of the view from the Eskalonado" class="w-full object-cover h-full object-center block" src="/img/13.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-full">
			<img alt="Photography of the day view from the Eskalonado" class="w-full h-full object-cover object-center block" src="/img/14.jpg">
		  </div>
		</div>
		<div class="flex flex-wrap w-full md:w-1/2">
		  <div class="md:p-2 p-1 w-full">
			<img alt="Photography of the breakfast section of the apartment" class="w-full h-full object-cover object-center block" src="/img/6.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Photography of an apartment with two beds" class="w-full object-cover h-full object-center block" src="/img/8.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Photography of kitchen utencils and the kitchen sink" class="w-full object-cover h-full object-center block" src="/img/2.jpg">
		  </div>
		</div>
	  </div>
	</div>
	<div class="container px-5 py-0 mx-auto flex flex-wrap mb-5">
		<div class="flex flex-wrap sm:-m-1 md:-m-2 -m-1">
		  <div class="flex flex-wrap w-full md:w-1/2">
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Photography of the private bathroom per apartment" class="w-full object-cover h-full object-center block" src="/img/3.jpg">
			</div>
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Photography of the view from the eskalonado" class="w-full object-cover h-full object-center block" src="/img/5.jpg">
			</div>
			<div class="md:p-2 p-1 w-full">
			  <img alt="Photography of an apartment with two beds" class="w-full h-full object-cover object-center block" src="/img/10.jpg">
			</div>
		  </div>
		  <div class="flex flex-wrap w-full md:w-1/2">
			<div class="md:p-2 p-1 w-full">
			  <img alt="Photography of an apartment with a double size bed" class="w-full h-full object-cover object-center block" src="/img/u4.jpeg">
			</div>
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Photography of a couples apartment" class="w-full object-cover h-full object-center block" src="/img/u1.jpeg">
			</div>
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Photography of the breakfast area and the included cooler on every unit" class="w-full object-cover h-full object-center block" src="/img/u2.jpeg">
			</div>
		  </div>
		</div>
	  </div>
  </section>