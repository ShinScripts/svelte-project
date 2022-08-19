<script lang="ts">
  let count = 0;

  const countUp = () => count++;
</script>

<section class="flex flex-col items-center">
  <p class="text-5xl text-white">{count}</p>
  <button on:click="{countUp}" class="text-2xl m-5 p-3 bg-gray-700 text-white outline outline-white hover:rounded hover:outline hover:outline-[#747bff] transition-all 1s ease ">Click me to count up</button>
</section>
