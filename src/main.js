import 'regenerator-runtime/runtime'
import 'intersection-observer'
import Vue from 'vue'
import App from './App'
import store from './store'
import fetchData from './plugins/fetchData'
import searchData from './plugins/searchData'
import lazyLoad from './plugins/lazyLoad'

Vue.use(fetchData)
Vue.use(searchData)
Vue.use(lazyLoad)

new Vue({
  el: '#app',
  // render: createElement => createElement(App)
  render: h => h(App),
  store
})
