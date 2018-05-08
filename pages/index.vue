<template>
  <div>
    <nuxt-link to="/second">Second</nuxt-link>
    <HelloWorld />
  </div>
</template>

<script>

  import HelloWorld from '../components/hello-world/hello-world.vue';
  //import template from './main-page-template.html';

  export default {
    name: 'MainPage',
    components: {
      HelloWorld
    },
    // render: template.render,
    // staticRenderFns: template.staticRenderFns
}
</script>

<style>
h1 {
  color: #7a2f93;
  font-size: 20px;
}
</style>
