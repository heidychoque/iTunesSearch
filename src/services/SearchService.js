import axios from 'axios'

export default {
  getRequest (url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}
