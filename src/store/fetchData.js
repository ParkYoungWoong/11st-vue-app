import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    navDrawers: {},
    rankings: {}
  }),
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async fetchData ({ commit }, payload) {
      const { requestName } = payload
      const res = await axios.get(`/.netlify/functions/main?apiKey=${process.env.API_KEY}&requestName=${requestName}`)
      commit('updateState', {
        [requestName]: res.data
      })
    }
  }
}
