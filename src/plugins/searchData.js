import axios from 'axios'

export default {
  install (app) {
    app.config.globalProperties.$search = async payload => {
      const { searchText } = payload
      const res = await axios.get(`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search?apiKey=1216&searchText=${searchText}`)
      return res.data
    }
  }
}
