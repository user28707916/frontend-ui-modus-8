<style src="./main-menu.css" />

<template>
		<nav class="main-menu">
			<ul class="menu-list">
				<li class="menu-item"<router-link to="/index" active-class="current">Home</router-link></li>
				<li class="menu-item"<router-link to="/about" active-class="current">About</router-link></li>
				<li class="menu-item"<router-link to="/services" active-class="current">Services</router-link></li>
				<li class="menu-item"<router-link to="/portfolio" active-class="current">Portfolio</router-link></li>
				<li class="menu-item-dropdown"<router-link to="/portfolio-2" active-class="current">Portfolio 2</router-link></li>
				<li class="menu-item-dropdown"<router-link to="/portfolio-3" active-class="current">Portfolio 3</router-link></li>
				<li class="menu-item-dropdown"<router-link to="/portfolio-4" active-class="current">Portfolio 4</router-link></li>
				<li class="menu-item"<router-link to="/blog" active-class="current">Blog</router-link></li>
				<li class="menu-item"<router-link to="/features" active-class="current">Features</router-link></li>
				<li class="menu-item"<router-link to="/contacts" active-class="current"Contacts</router-link></li>
				<li class="menu-item"<router-link to="/ui-kit" active-class="current">Examples</router-link></li>
			</ul>
		</nav>
</template>
