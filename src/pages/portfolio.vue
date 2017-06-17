<style src="../styles/common.css"/>

<script>
	import PageHeader from '../components/page-header/page-header.vue';
<<<<<<< HEAD
	import TilesGrid from '../components/tiles-grid/tiles-grid.vue';
	import TileSmall from '../components/tile-small/tile-small.vue';

	export default {
		components: { PageHeader, TilesGrid, TileSmall }
=======
	import PageFooter from '../components/page-footer/page-footer.vue';
	import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
	import TagItem from '../components/tag-item/tag-item.vue';

	export default {
		components: {
			PageHeader,
			PageFooter,
			ContentWrapper,
			TagItem
		}
>>>>>>> 8c93273b4e07ddf248a0efb35ff89c21525b0fa4
	};
</script>

<template>
	<body>
		
		<page-header />

		
		<content-wrapper>
		
		
		<h1>Portfolio</h1>

		<tag-item></tag-item>

<<<<<<< HEAD
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

=======
		</content-wrapper>
		<page-footer></page-footer>
>>>>>>> 8c93273b4e07ddf248a0efb35ff89c21525b0fa4
	</body>
</template>
