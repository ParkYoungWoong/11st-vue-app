import Vue from 'vue'
import Vuex from 'vuex'
import fetchData from './fetchData'
import navigation from './navigation'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    fetchData,
    navigation
  }
})
