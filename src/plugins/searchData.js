import axios from 'axios'

export default {
  install (Vue) {
    Vue.prototype.$search = async payload => {
      const { searchText } = payload
      const res = await axios.get(`/.netlify/functions/search?apiKey=${process.env.API_KEY}&searchText=${searchText}`)
      return res.data
    }
  }
}
