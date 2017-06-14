<style src="./search-box.css" />

<template>
  <div class="search-box">
	 <div id="show-input">
	 	<button class="search-box-button" v-on:click="showDiv"></button>
	 </div>
	 <div class="search-box-input">
	 	<input type="text" placeholder="Search the site">
	 </div>
  </div>  
</template>

<script src="./search-box.js"></script>
