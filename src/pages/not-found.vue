<script>
  import PageHeader from '../components/page-header/page-header.vue';
  import MainMenu from '../components/main-menu/main-menu.vue';

  export default {
    components: { PageHeader, MainMenu },
  };
</script>

<template>
  <body>
    <page-header></page-header>

    <main-menu />

    Page not found

  </body>
</template>
