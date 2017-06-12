<script>
  import PageHeader from '../components/page-header/page-header.vue';
  import ImageContent from '../components/image-content/image-content.vue';

  export default {
    components: { PageHeader, ImageContent },
  };
</script>

<template>
  <body>
    <page-header />

    UI Kit
      <image-content></image-content>
  </body>
</template>
