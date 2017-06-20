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
import BreadcrumbsNavigation from '../components/breadcrumbs-navigation/breadcrumbs-navigation.vue';
import TopBar from '../components/top-bar/top-bar.vue';
import ListCross from '../components/list-cross/list-cross.vue';
import ListArrow from '../components/list-arrow/list-arrow.vue';
import ListCheck from '../components/list-check/list-check.vue';
import ListUnordered from '../components/list-unordered/list-unordered.vue';
import BlogSideBar from '../components/blog-side-bar/blog-side-bar.vue';

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
		ListCross,
		ListArrow,
		ListCheck,
		ListUnordered,
		BlogSideBar
	}
};
</script>

<template>
	<body>
	
		<page-header></page-header>
		<top-bar/>
		<content-wrapper>

		    
	
			<main-menu /> UI Kit
	
			<breadcrumbs-navigation/>
			<image-content></image-content>
	
			<tag-item></tag-item>
	
			<a href="">Open Sans</a>
	
	
			<LinkExternal></LinkExternal>
			</br>
	
			<button-control></button-control>
			<tile-small>
			</tile-small>
	
			<tabs></tabs>
	
			<tile-small>
	
			</tile-small>
	
			<tile-medium></tile-medium>
			<tabs></tabs>

			<list-cross></list-cross>

			<list-arrow></list-arrow>

			<list-check></list-check>

			<list-unordered></list-unordered>

			<blog-side-bar></blog-side-bar>

		</content-wrapper>

		<page-footer></page-footer>
	
	</body>
</template>