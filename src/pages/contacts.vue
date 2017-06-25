<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import TopBar from '../components/top-bar/top-bar.vue';
	import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
	// import MapGoogle from '../components/map-google/map-google.vue';
	import FormFeedback from '../components/form-feedback/form-feedback.vue';
	import AddressInfo from '../components/address-info/address-info.vue';
	import PageFooter from '../components/page-footer/page-footer.vue';
	

	export default {
		components: { 
			PageHeader,
			TopBar,
			ContentWrapper,
			// MapGoogle,
			FormFeedback,
			AddressInfo,
			PageFooter
		 }
	};
</script>

<template>
	<body>

		<page-header />

		<top-bar>
			<h1>Contact us</h1>
		</top-bar>

		<content-wrapper>
			<address-info class="contacts-address"></address-info>
			<span class="contacts-h">Send inquiry</span>
			<form-feedback class="contacts-form"></form-feedback>				
		</content-wrapper>

		<page-footer/>
	</body>
</template>
