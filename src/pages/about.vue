<script>
  import PageHeader from '../components/page-header/page-header.vue';
  import MainMenu from '../components/main-menu/main-menu.vue';

  export default {
    components: { PageHeader, MainMenu },
  };
</script>

<template>
  <body>
    <page-header>About page</page-header>

    <main-menu />

  </body>
</template>
