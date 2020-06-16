import axios from 'axios'
import Urls from '@/config.js'

export default {
  getRequest (artistName) {
    return new Promise((resolve, reject) => {
      axios.get(Urls.api + 'term=' + artistName + '&entity=album' + '&limit=50')
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}
