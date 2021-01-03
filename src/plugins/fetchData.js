import axios from 'axios'

export default {
  install (Vue) {
    Vue.prototype.$fetch = async payload => {
      const { requestName } = payload
      const res = await axios.get(`/.netlify/functions/main?apiKey=${process.env.API_KEY}&requestName=${requestName}`)
      return res.data
    }
  }
}
