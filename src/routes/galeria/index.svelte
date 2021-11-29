<!-- Force to render full HTML page for crawling -->
<script context="module">
	export const prerender = true;
</script>

<!-- Meta Information to inject -->
<svelte:head>
	<title>Galeria - Eskalonado</title>
	<meta name="description" content="Galeria de fotos de el eskalonado." />
	<meta name="keywords" content="El Calafate, calafate, hospedaje, hotel, departamentos, lago argentino, fotos">
</svelte:head>

<!-- content -->
<div class="bg-fixed w-full h-20 bg-no-repeat md:h-44 xl:h-72 md:bg-top md:bg-contain object-cover" style="background-image: url(galeria1.jpg)"></div>
<section class="body-font">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
	  <div class="flex flex-wrap sm:-m-1 md:-m-2 -m-1">
		<div class="flex flex-wrap w-full md:w-1/2">
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Fotografia del edificio Eskalonado" class="w-full object-cover h-full object-center block" src="img/9.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Fotografia de la vista nocturna desde el Eskalonado" class="w-full object-cover h-full object-center block" src="img/13.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-full">
			<img alt="Fotografia de la vista de dia desde el Eskalonado" class="w-full h-full object-cover object-center block" src="img/14.jpg">
		  </div>
		</div>
		<div class="flex flex-wrap w-full md:w-1/2">
		  <div class="md:p-2 p-1 w-full">
			<img alt="Fotografia del sector cocina del departamento" class="w-full h-full object-cover object-center block" src="img/6.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Fotografia de un departamento con dos camas individuales" class="w-full object-cover h-full object-center block" src="img/8.jpg">
		  </div>
		  <div class="md:p-2 p-1 w-1/2">
			<img alt="Fotografia de la mesada y utencillos de cocina" class="w-full object-cover h-full object-center block" src="img/2.jpg">
		  </div>
		</div>
	  </div>
	</div>
	<div class="container px-5 py-0 mx-auto flex flex-wrap mb-5">
		<div class="flex flex-wrap sm:-m-1 md:-m-2 -m-1">
		  <div class="flex flex-wrap w-full md:w-1/2">
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Fotografia del baño del departamento" class="w-full object-cover h-full object-center block" src="img/3.jpg">
			</div>
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Fotografia de la vista desde el eskalonado" class="w-full object-cover h-full object-center block" src="img/5.jpg">
			</div>
			<div class="md:p-2 p-1 w-full">
			  <img alt="Fotografia de un departamento con dos camas" class="w-full h-full object-cover object-center block" src="img/10.jpg">
			</div>
		  </div>
		  <div class="flex flex-wrap w-full md:w-1/2">
			<div class="md:p-2 p-1 w-full">
			  <img alt="Fotografia de un departamento con cama matrimonial" class="w-full h-full object-cover object-center block" src="img/u4.jpeg">
			</div>
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Fotografia de un departamento con una cama matrimonial" class="w-full object-cover h-full object-center block" src="img/u1.jpeg">
			</div>
			<div class="md:p-2 p-1 w-1/2">
			  <img alt="Fotografia del sector cocina y de la heladera incluida en cada unidad" class="w-full object-cover h-full object-center block" src="img/u2.jpeg">
			</div>
		  </div>
		</div>
	  </div>
  </section>