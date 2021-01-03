import Vue from 'vue'
import 'regenerator-runtime/runtime'
import App from './App'
import { store } from './store'
import fetchData from './plugins/fetchData'

Vue.use(fetchData)

new Vue({
  // render: createElement => createElement(App)
  render: h => h(App),
  store
}).$mount('#app')
