<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import XboxInfo from "./components/XboxInfo.svelte";
  import XboxSkin from "./components/XboxSkin.svelte";

  import xbox_logo from '../assets/main/xbox.png';
  import series_x from '../assets/main/xbox series x.webp';
  import one_x from '../assets/main/xbox one x.webp';

  import re3 from '../assets/main/series x re3.webp';
  import cyberpunk from '../assets/main/series x cyberpunk.webp';
  import crysis from '../assets/main/series x crysis.webp';
  import outriders from '../assets/main/series x outriders.webp';
  import so2 from '../assets/main/series x so2.webp';
  import crackdown from '../assets/main/one x crackdown.webp';
  import cyberpunk2 from '../assets/main/one x cyberpunk.webp';
  import diablo from '../assets/main/one x diablo.webp';
  import outer from '../assets/main/one x outer worlds.webp';
  import rdr2 from '../assets/main/one x red dead.webp';
</script>

<section>
	<Navbar />

	<div class="flex justify-center items-center h-[600px] bg-gradient-to-b from-nav-primary to-primary ">
		<img src={xbox_logo} alt="xbox logo" class="w-[400px] h-[400px] hover:saturate-200 transition duration-500">
	</div>

	<div class="flex justify-around flex-wrap bg-primary py-20">
		<XboxInfo title='Xbox Series X' image={series_x} description={[	
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
		<XboxInfo title='Xbox One X' image={one_x} description={[
			'3 Generations of Gaming',
			'6 Teraflops of GCN Power',
			'1 TB HDD',
			'Up to 4k and 60 FPS',
			'4k UHD Blu-Ray Playback',
			'Dobly Atmos Sound',
			'Variable Refresh Rate',
			]} />
	</div>
	
	<div class="flex flex-col bg-secondary items-center pb-20">
		<div class="grid grid-rows-1 grid-cols-5 grid-flow-row pt-10">
			<XboxSkin classes='origin-left' image={re3} />
			<XboxSkin image={cyberpunk} />
			<XboxSkin image={crysis} />
			<XboxSkin image={outriders} />
			<XboxSkin classes='origin-right' image={so2} />
		</div>
		<div class="grid grid-rows-1 grid-cols-5 pb-10">
			<XboxSkin classes='origin-left' image={crackdown} />
			<XboxSkin image={cyberpunk2} />
			<XboxSkin image={diablo} />
			<XboxSkin image={outer} />
			<XboxSkin classes='origin-right' image={rdr2} />
		</div>
		
		<button class="w-60 p-5 bg-[#323232] hover:bg-nav-primary text-white text-2xl font-bold rounded-xl transition duration-200">Purchase Now</button>
	</div>
</section>