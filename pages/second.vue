<template>
  <div>
    <nuxt-link to="/">Main page</nuxt-link>
    <SecondComp />
  </div>
</template>

<script>
  import SecondComp from '../components/second-comp/second-comp.vue';
  import axios from 'axios';

  export default {
    name: 'SecondPage',
    components: {
      SecondComp
    },
    asyncData(context) {
      const API_KEY = 'bbfd85156d89fe431af1b3fbb9552aa3',
        cityId = 675810;

        return axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&&id=${cityId}`)
            .then(res =>  {
              context.store.commit('addweather', res.data);
              return {
                weatherData: res.data
              }
            })
            .catch(err => {
              return {weatherData: {'error': err}}
            })
  }
}
</script>
