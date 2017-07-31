<script>
import ExpandableBox from '../expandable-box/expandable-box.vue';

export default {
	components: { ExpandableBox }
};
</script>

<style src="./accordion-list.css"/>

<template>
<div class="accordion-list">
	<expandable-box></expandable-box>
	<expandable-box></expandable-box>
	<expandable-box></expandable-box>
</div>
</template>

<script src="./accordion-list.js"></script>