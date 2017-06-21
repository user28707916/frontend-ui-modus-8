<style src="./blog-post-header.css"/>

<template>
	<div class="blog-post-header">
		<div class="blog-title">
			<h2>
				<slot> </slot>
			</h2>
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
			<slot>
				<a href="#">Design</a> ,
				<a href="#">Template</a>
			</slot>
		</div>
		<div class="comments">
			<slot>
				<a href="#">22</a>
			</slot>
		</div>
	</div>


</template>