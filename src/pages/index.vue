<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import MainMenuBg from '../components/main-menu-bg/main-menu-bg.vue';

	export default {
		components: { PageHeader, MainMenuBg }
	};
</script>

<template>
	<body>
		<page-header></page-header>


        <h1>Blog</h1>
		<h4>Список всех пользователей</h4>
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
	</body>

</template>
