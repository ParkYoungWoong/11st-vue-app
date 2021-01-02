import Vue from 'vue'
import App from './App'
import { store } from './store'

new Vue({
  // render: createElement => createElement(App)
  render: h => h(App),
  store
}).$mount('#app')
