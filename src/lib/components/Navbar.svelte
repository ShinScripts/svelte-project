<script lang="ts">
	const categories = [
		'HOME',
		'CLOUD',
		'GAMEPASS',
		'GAMES',
		'CONTACT'
	];
</script>

<nav class="sticky top-0 w-full z-50">
	<ul class="flex flex-wrap justify-around items-center text-2xl h-16 bg-nav-primary">
		{#each categories as category, i}
				<li>
					<a 
					href="/{category.toLowerCase()}"
					class="{i === 0 ? `text-xbox hover:text-white` : 'text-white hover:text-xbox'} transition duration-300">
						{category}
					</a>
				</li>
		{/each}
	</ul>
</nav>