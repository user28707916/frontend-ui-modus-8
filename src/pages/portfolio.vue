<style src="../styles/common.css"/>

<script>
	import PageHeader from '../components/page-header/page-header.vue';
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
	};
</script>

<template>
	<body>
		
		<page-header />

		
		<content-wrapper>
		
		
		<h1>Portfolio</h1>

		<tag-item></tag-item>

		</content-wrapper>
		<page-footer></page-footer>
	</body>
</template>
