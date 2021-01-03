export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false,
    isShowRNB: false
  }),
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    onNav ({ commit }, name) {
      commit('updateState', {
        [`isShow${name}`]: true
      })
    },
    offNav ({ commit }, name) {
      commit('updateState', {
        [`isShow${name}`]: false
      })
    }
  }
}
