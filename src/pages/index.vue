<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import MainMenu from '../components/main-menu/main-menu.vue';
	import PageFooter from '../components/page-footer/page-footer.vue';
	import MainMenuBg from '../components/main-menu-bg/main-menu-bg.vue';

	export default {
		components: { PageHeader, MainMenu, PageFooter, MainMenuBg }
	};
</script>

<template>
	<body>
		<page-header>Main page</page-header>

		<main-menu />
		<main-menu-bg></main-menu-bg>

        <h1>BLOG</h1>
		<h2>Список всех пользователей</h2>
		<table class="users-table all-users">
		<thead>
			<tr>
				<th>Фото</th>
				<th>Полное имя</th>
				<th>Активный</th>
				<th>Описание</th>
				<th>Баланс</th>
				<th>Возраст</th>
				<th>Дата регистрации</th>
				<th>Компанния</th>
				<th>Емейл</th>
				<th>Номер телефона</th>
				<th>Адрес</th>
			</tr>
		</thead>
		<tbody>

		</tbody>
		</table>

		<page-footer></page-footer>
	</body>

</template>
