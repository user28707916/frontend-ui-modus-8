<script>
import PageHeader from '../components/page-header/page-header.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import TileMedium from '../components/tile-medium/tile-medium.vue';
import PaginationMenu from '../components/pagination-menu/pagination-menu.vue';
import TagItem from '../components/tag-item/tag-item.vue';


export default {
	components: {
		PageHeader,
		PageFooter,
		ContentWrapper,
		TagItem,
		TileMedium,
		PaginationMenu
	}
};
</script>

<template>
	<body>
	
		<page-header />
	
		<content-wrapper>
			<tag-item>
				<h1>Portfolio 3 columns</h1>
				<tile-medium class="medium" />
				<pagination-menu class="pagination" />
		</content-wrapper>
		<page-footer></page-footer>
	</body>
</template>
