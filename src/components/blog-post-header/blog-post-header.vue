<style src="./blog-post-header.css"/>


<script>

import ContentWrapper from '../content-wrapper/content-wrapper.vue';



export default {
	components: {
		ContentWrapper

	}
};
</script>

<template>
	<content-wrapper>
	<div class="blog-post-header">
		<div class="blog-title">
			<h3>
				<slot> Duis dapidus aliquam mi, eget euismod sem scelerisque ut.</slot>
			</h3>
		</div>
		<div class="image-file-container"></div>
		<div class="datum">
			<slot>25 May 2013</slot>
		</div>
		<div class="author">
			<slot>
				Hosted by <a href="#">Admin</a> in <a href="#">Wordpress</a>
			</slot>
		</div>
		<div class="categhory">
		<div class="for-icon-cathegory"></div>
			<slot>
				<a href="#">Design</a> ,
				<a href="#">Template</a>
			</slot>
		</div>
		<div class="comments">
		<div class="for-icon-comments"></div>
			<slot>
				<a href="#">22</a>
			</slot>
		</div>
	</div>
	</content-wrapper>

</template>