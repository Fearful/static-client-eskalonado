<script>
	export let urlToGo,pt = 20;
</script>

<div class="p-4 w-full lg:w-1/3">
    <div class:pt-20="{pt === 20}" class:pt-40="{pt === 40}" class:pt-28="{pt === 28}" class="h-full bg-opacity-75 px-8 pb-24 rounded-lg overflow-hidden text-center relative">
        <a href={urlToGo} target="_blank">
            <slot></slot>
        </a>
    </div>
</div>