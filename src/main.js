import { createApp } from 'vue'
import App from '~/App.vue'
import store from '~/store'
import fetchData from '~/plugins/fetchData'
import searchData from '~/plugins/searchData'
import lazyLoad from '~/plugins/lazyLoad'

const app = createApp(App)
app.use(store)
app.use(fetchData)
app.use(searchData)
app.use(lazyLoad)
app.mount('#app')
