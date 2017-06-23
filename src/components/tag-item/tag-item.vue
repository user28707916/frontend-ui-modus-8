<style src="./tag-item.css" />

<template>
	 <tag-item class="tag-item">
		<tag-item class="tag-design">
				<tag-item class="item-menu"><a href="#">ALL</a></tag-item>
				<tag-item class="item-menu"><a href="#">WEB DESIGN</a></tag-item>
				<tag-item class="item-menu logo"><a href="#">LOGO DESIGN</a>
				    <slot></slot>
				</tag-item>
				<tag-item class="item-menu"><a href="#">PHOTOGRAPHY</a></tag-item>
				<tag-item active class="item-menu"><a href="#">WORDPRESS</a></tag-item>
		</tag-item> 
	 </tag-item>
</template>

