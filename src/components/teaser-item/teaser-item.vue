<style src="./teaser-item.css" />

<script>
import ImagePlaceholder from '../image-placeholder/image-placeholder.vue';
import LinkExternal from '../link-external/link-external.vue';
import ButtonControl from '../button-control/button-control.vue';

export default {
	components: {
		ImagePlaceholder,
		LinkExternal,
		ButtonControl
	}
};
</script>

<template>
	<article class="teaser-item" >
		<div class="teaser-img"><image-placeholder></image-placeholder></div>
		<h4>Donec faucibus ultricies congue</h4>
		<p class="teaser-text">Maecenas eget turpis turpis. Nunc vel metus augue. Aenean euismod cursus ligula eget dapibus. Praesent vel erat in tortor placerat dignissim. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
		<link-external>www.project.dom</link-external>

		<button-control>View details</button-control>

	</article>
</template>
