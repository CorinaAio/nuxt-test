<script>
import template from './second-comp-template.html';
import Vue from 'vue';

export default Vue.component('SecondComp', {
  data: function () {
    return {
      message: 'Second comp!'
    }
  },
  render: template.render,
  staticRenderFns: template.staticRenderFns
});
</script>


