import axios from 'axios'

export default {
  async getAll() {
    const response = await axios.get(
      `http://travel-api.clicksomeone.com/destinations`
    )

    return {
      destinations: response.data,
    }
  },
  async getById(id) {
    const response = await axios.get(
      `http://travel-api.clicksomeone.com/destinations` + id
    )
    const d = response.data
    return d
  },
}
