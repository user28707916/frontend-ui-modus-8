<script>
import PageHeader from '../components/page-header/page-header.vue';

export default {
	components: { ExpandableBox }
};
</script>
<style src="./accordion-list.css"/>

<template>
<div class="accordion-list" :class="{expanded: expanded}">
	<expandable-box></expandable-box>
	<expandable-box></expandable-box>
	<expandable-box></expandable-box>
</div>
</template>

<script src="./accordion-list.js"></script>