import axios from 'axios'

export default {
  install (app) {
    app.config.globalProperties.$fetch = async payload => {
      const { requestName } = payload
      const res = await axios.get(`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=1216&requestName=${requestName}`)
      return res.data
    }
  }
}
