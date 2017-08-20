import Axios from 'axios'
import Config from '../config'

export default class EntryAPI {
  static getEntries () {
    return Axios.get(`${Config.apiUrl}/entry`)
  }

  static getEntry (id) {
    return Axios.get(`${Config.apiUrl}/entry/${id}`)
  }
}
