<script>
import PageHeader from '../components/page-header/page-header.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';


export default {
	components: {
		PageHeader,
		PageFooter,
		ContentWrapper
	}
};
</script>

<template>
	<body>
		
		<page-header />

		<content-wrapper>
		
		<h1>Portfolio 3 columns</h1>

		</content-wrapper>
		<page-footer></page-footer>
	</body>
</template>
