<style src="./search-box.css" />

<template>
  <div class="search-box">
	 <div class="search-box-button"><slot></slot></div> 
	 <div class="search-box-input"><slot><input type="text"></slot></div>
  </div>  
</template>
