<script lang="ts">
	export let title: string;
	export let image: string;
	export let description: string[];
</script>

<div class="flex justify-center items-center flex-col mx-10 hover:bg-black">
	<img src={image} alt="xbox" class="w-[600px] h-[600px]">
	<h1 class="text-white underline text-4xl py-10 text-center">{title}</h1>
	{#each description as text}
		<p class="text-white py-1">✓ {text}</p>
	{/each}
</div>
