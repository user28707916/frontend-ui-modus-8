<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import MotivationInfo from '../components/motivation-info/motivation-info.vue';

	export default {
		components: { PageHeader, MotivationInfo }
	};
</script>

<template>
	<body>
		<page-header></page-header>
		<motivation-info></motivation-info>


        <h1>Blog</h1>
		<h2>H2 smth!</h2>
		<h3>H3 smth!</h3>
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
