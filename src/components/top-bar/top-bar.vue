
<script>
import BreadcrumbsNavigation from '../breadcrumbs-navigation/breadcrumbs-navigation.vue';

export default {
	components: {
		BreadcrumbsNavigation
	}
};

</script>
<style src="./top-bar.css" />

<template>
	<div class="top-bar">
		<h1 class="naiming">
			<slot>default</slot>
		</h1>
		<breadcrumbs-navigation class="breadcrumbs"></breadcrumbs-navigation>
	</div>
</template>

  