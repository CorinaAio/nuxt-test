<template>
  <div>
    <div>{{ message }}</div>
    <button @click="$store.commit('increment')">{{ $store.state.counter }} click</button>
  </div>
</template>
<script>
//import template from './second-comp.html';
import Vue from 'vue';

export default Vue.component('SecondComp', {
  data: function () {
    return {
      message: 'Second comp!'
    }
  },
  // render: template.render,
  // staticRenderFns: template.staticRenderFns
});
</script>