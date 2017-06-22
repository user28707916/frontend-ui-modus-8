<script>
	import ButtonControl from '../button-control/button-control.vue';

	export default {
		components: {
			ButtonControl
		}
	};
</script>
<style src="./feature-item.css" />

<template>
	<div class="feature-item">
		<div class="feature-item-content">
			<img src="./Images/thumb.png" alt="">
          	<h4>Suspendisse</h4>
          	<span> Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc. </span>
		</div>
		<button-control>Read more</button-control>
	</div>
</template>