<style src="../styles/common.css"/>

<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import TilesGrid from '../components/tiles-grid/tiles-grid.vue';
	import TileSmall from '../components/tile-small/tile-small.vue';
	import PageFooter from '../components/page-footer/page-footer.vue';
	import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
	import TagItem from '../components/tag-item/tag-item.vue';

	export default {
		components: { 
			PageHeader, TilesGrid, TileSmall, PageFooter, ContentWrapper, TagItem 
		}	
	}

</script>

<template>
	<body>

		<page-header />

		<content-wrapper>
		
		<h1>Portfolio</h1>

		<tag-item></tag-item>

		<tiles-grid>
			<tile-small></tile-small>
			<tile-small></tile-small>
			<tile-small></tile-small>
			<tile-small></tile-small>
			<tile-small></tile-small>
			<tile-small></tile-small>
			<tile-small></tile-small>
			<tile-small></tile-small>
		</tiles-grid>
		
		</content-wrapper>
		<page-footer></page-footer>


	</body>
</template>
