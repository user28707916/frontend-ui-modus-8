<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import ImageContent from '../components/image-content/image-content.vue';
	import TagItem from '../components/tag-item/tag-item.vue';
	import SearchBox from '../components/search-box/search-box.vue';
	import ButtonControl from '../components/button-control/button-control.vue';
    import MainLogo from '../components/main-logo/main-logo.vue';

	export default {
		components: { PageHeader, ImageContent, TagItem, SearchBox, ButtonControl, MainLogo }
	};
</script>

<template>
	<body>
		<page-header />
		
		UI Kit

	    <main-logo></main-logo>

		<image-content></image-content>

		<tag-item></tag-item>

		

		<a href="">Open Sans</a>

		<search-box></search-box>
		
		<button-control></button-control>

	</body>
</template>