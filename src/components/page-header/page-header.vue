 <style src="./page-header.css" />

<script>
	import MainLogo from '../main-logo/main-logo.vue';
	import Mainmenu from '../main-menu/main-menu.vue';
	 import SearchBox from '../search-box/search-box.vue';
	
	export default {
		components: {
		MainLogo,
		Mainmenu,
		 SearchBox
		}
	};
</script>




<template>
<header class="page-header">
	
	<main-logo class="header-logo"> </main-logo>

	<search-box class="search-header"> </search-box>
	
</header>
</template>
