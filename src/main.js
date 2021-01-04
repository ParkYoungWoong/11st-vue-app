import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App'
import { store } from './store'
import fetchData from './plugins/fetchData'
import lazyLoad from './plugins/lazyLoad'

Vue.use(fetchData)
Vue.use(lazyLoad)

new Vue({
  // render: createElement => createElement(App)
  render: h => h(App),
  store
}).$mount('#app')
