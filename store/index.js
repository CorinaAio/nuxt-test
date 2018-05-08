import Vuex from 'vuex'
import axios from 'axios';


const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      weatherData: {}
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        const API_KEY = 'bbfd85156d89fe431af1b3fbb9552aa3',
        cityId = 2759794;

        return axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&&id=${cityId}`)
            .then(res =>  {
              commit('addweather', res.data);
              //callback(null, {weatherData: res.data});
            })
            .catch(err => {
              return {weatherData: {'error': err}}
            })
      }
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      addweather(state, data) {
        console.log('data', data);
        state.weatherData = {...data};
      }
    }
  })
}

export default createStore