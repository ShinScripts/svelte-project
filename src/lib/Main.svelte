<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import MainXbox from "./components/MainXbox.svelte";	
  import xbox_logo from '../assets/main/xbox.png'
  import series_x from '../assets/main/xbox series x.webp'
  import one_x from '../assets/main/xbox one x.webp'
</script>

<section>
	<Navbar />

	<div class="flex justify-center items-center h-[600px] bg-gradient-to-b from-nav-primary to-primary ">
		<img src={xbox_logo} alt="xbox logo" class="w-[400px] h-[400px] hover:saturate-200 transition duration-500">
	</div>

	<div class="flex justify-around flex-wrap bg-primary pt-20">
		<MainXbox title='Xbox Series X' image={series_x} description={[	
			'4 Generations of Gaming',
			'12 Teraflops of RDNA 2 Power',
			'1 TB Custom NVME SSD',
			'Up to 8k and 120 FPS',
			'4k UHD Blu-Ray Playback',
			'Dolby Atmos Sound',
			'Variable Refresh Rate',
			'Hardware Accelerated DirectX Ray Tracing',
			'Variable Rate Shading'
			]} />
		<MainXbox title='Xbox One X' image={one_x} description={[
			'3 Generations of Gaming',
			'6 Teraflops of GCN Power',
			'1 TB HDD',
			'Up to 4k and 60 FPS',
			'4k UHD Blu-Ray Playback',
			'Dobly Atmos Sound',
			'Variable Refresh Rate',
			]} />
	</div>
	
</section>