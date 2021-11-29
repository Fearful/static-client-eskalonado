<script>
	import Logo from '../Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	import Menu from './Menu.svelte'
	
	export let sidebar = false
</script>
<div class="container mx-auto dark:text-blue-200 text-blue-800">
	<header class="flex justify-between p-2 items-center">
		<nav class="flex">
			<Hamburger bind:open={sidebar}/>
			<a href="/en/">
				<Logo/>	
			</a>
		</nav>
		
		<Menu />
	</header>
</div>