<script>
import InputText from '../input-text/input-text.vue';
import InputUrl from '../input-url/input-url.vue';
import InputEmail from '../input-email/input-email.vue';
import InputMultiline from '../input-multiline/input-multiline.vue';
import Formlabel from '../form-label/form-label.vue';

export default {
	components: {
		InputText,
		InputUrl,
		InputEmail,
		InputMultiline,
		Formlabel
	}
};

</script>
<style src="./form-feedback.css" />
<template>
	<form-feedback class="feedback-section">
		<form-label title="Name">
			<input-text /> Name
		</form-label>
		<form-label title="E-mail">
			<input-url /> E-mail
		</form-label>
		<form-label title="Web site">
			<input-email /> Web site
		</form-label>
		<input-multiline />
	</form-feedback>
</template>