<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import ImageContent from '../components/image-content/image-content.vue';
	import TagItem from '../components/tag-item/tag-item.vue';

	export default {
		components: { PageHeader, ImageContent, TagItem }
	};
</script>

<template>
	<body>
		<page-header />

		UI Kit

		<image-content></image-content>

		<tag-item></tag-item>

		<a href="">Open Sans</a>

	</body>
</template>