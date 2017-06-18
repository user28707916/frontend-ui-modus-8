
<script>
import PageHeader from '../components/page-header/page-header.vue';
import TilesGrid from '../components/tiles-grid/tiles-grid.vue';
import TileSmall from '../components/tile-small/tile-small.vue';
import TileMedium from '../components/tile-medium/tile-medium.vue';
import TileLarge from '../components/tile-large/tile-large.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import ImageContent from '../components/image-content/image-content.vue';
import TopBar from '../components/top-bar/top-bar.vue';

export default {
	components: {
		PageHeader,
		TilesGrid,
		TileSmall,
		TileMedium,
		TileLarge,
		PageFooter,
		ContentWrapper,
		TagItem,
		ImageContent,
		TopBar
	}
};
</script>
<style src="../styles/common.css"/>
<template>
	<body>
	
		<page-header />
		<top-bar/>
	
		<content-wrapper>
	
			<tag-item></tag-item>
	
			<tiles-grid>
				<tile-small></tile-small>
				<tile-small></tile-small>
				<tile-small></tile-small>
				<tile-small></tile-small>
				<tile-medium></tile-medium>
				<tile-medium></tile-medium>
				<tile-medium></tile-medium>
				<tile-large></tile-large>
				<tile-large></tile-large>
			</tiles-grid>
	
		</content-wrapper>
		<page-footer></page-footer>
	
	</body>
</template>
