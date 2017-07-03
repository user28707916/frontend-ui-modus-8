<script>
import InputText from '../input-text/input-text.vue';
import InputUrl from '../input-url/input-url.vue';
import InputEmail from '../input-email/input-email.vue';
import InputMultiline from '../input-multiline/input-multiline.vue';
import Formlabel from '../form-label/form-label.vue';
import ButtonControl from '../button-control/button-control.vue';

export default {
	components: {
		InputText,
		InputUrl,
		InputEmail,
		InputMultiline,
		Formlabel,
		ButtonControl
	}
};

</script>
<style src="./form-feedback.css" />
<template>
	<form-feedback class="feedback-section">
		<form-label title="Name">
			<input-text></input-text>
			<span class="form-naming">Name</span>
		</form-label>
		<form-label title="E-mail">
			<input-url></input-url>
			<span class="form-naming"> E-mail </span>
		</form-label>
		<form-label title="Web site">
			<input-email></input-email>
			<span class="form-naming"> Web site </span>
		</form-label>
		<form-label title="Comments">
			<input-multiline></input-multiline>
		</form-label>
		<button-control type="submit"> Send </button-control>
	</form-feedback>
</template>