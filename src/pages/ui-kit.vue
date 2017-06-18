<script>
import PageHeader from '../components/page-header/page-header.vue';
import ImageContent from '../components/image-content/image-content.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import SearchBox from '../components/search-box/search-box.vue';
import ButtonControl from '../components/button-control/button-control.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import MainMenu from '../components/main-menu/main-menu.vue';
import TileSmall from '../components/tile-small/tile-small.vue';
import TileMedium from '../components/tile-medium/tile-medium.vue';
import TileLarge from '../components/tile-large/tile-large.vue';
import LinkExternal from '../components/link-external/link-external.vue';


export default {
	components: {
		PageHeader,
		ImageContent,
		TagItem,
		SearchBox,
		ButtonControl,
		ContentWrapper,
		PageFooter,
		MainMenu,
		TileSmall,
		TileMedium,
		TileLarge,
		LinkExternal,
		BreadcrumbsNavigation,
		TopBar,
	}
};
</script>

<template>
	<body>
	
		<page-header></page-header>
		<content-wrapper>
	
			<main-menu /> UI Kit
			<top-bar/>
			<breadcrumbs-navigation/>
			<image-content></image-content>
	
			<tag-item></tag-item>
	
			<a href="">Open Sans</a>
	
			<search-box></search-box>
	
			<LinkExternal></LinkExternal>
			</br>
	
			<button-control></button-control>
	
				<tabs></tabs>
	
				<tile-small></tile-small>
	
				<tile-medium></tile-medium>

				<tile-large></tile-large>
				
	
				<tabs></tabs>
	
		</content-wrapper>
	
		<page-footer></page-footer>
	
	</body>
</template>