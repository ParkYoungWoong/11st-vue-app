export default {
  namespaced: true,
  state: () => ({
    isShow: false
  }),
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    onNav ({ commit }) {
      commit('updateState', {
        isShow: true
      })
    },
    offNav ({ commit }) {
      commit('updateState', {
        isShow: false
      })
    }
  }
}
