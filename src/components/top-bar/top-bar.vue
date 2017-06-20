
<script>
import BreadcrumbsNavigation from '../breadcrumbs-navigation/breadcrumbs-navigation.vue';
import ContentWrapper from '../content-wrapper/content-wrapper.vue';

export default {
	components: {
		BreadcrumbsNavigation,
		ContentWrapper
	}
};

</script>
<style src="./top-bar.css" />

<template>
	<content-wrapper>
	<div class="top-bar">
		<h1 class="naiming">
			<slot>Blog</slot>
		</h1>
		<breadcrumbs-navigation class="breadcrumbs"></breadcrumbs-navigation>
	</div>
	</content-wrapper>
</template>

  