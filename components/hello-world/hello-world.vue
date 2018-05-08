<template>
  <div>
    <div id="hello">{{ message }}</div>
    <p>troloo</p>
    <p>{{ $store.state.counter }}</p>
    <p> {{ JSON.stringify($store.state.weatherData) }} </p>
</div>
</template>

<script>
import Vue from 'vue';
//import template from './hello-world.html';
import axios from 'axios';

export default Vue.component('HelloWorld', {
  data: function () {
    return {
      message: 'Hello Vue.js!'
    }
  }
  // render: template.render,
  // staticRenderFns: template.staticRenderFns
});
</script>

