<script lang="ts">
	export let title: string;
	export let image: string;
	export let description: string[];
</script>

<div>
	<img src={image} alt="xbox" class="w-[600px] h-[600px]">
	<h1 class="text-white underline text-4xl">{title}</h1>
	{#each description as text}
		<p class="text-white">✓ {text}</p>
	{/each}
</div>
