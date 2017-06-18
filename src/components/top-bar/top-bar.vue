

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
		<breadcrumbs-navigation/>
		<h1> active-class="current"</h1>
	</div>
</template>
  