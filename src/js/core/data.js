const axios = require("axios");
class Data {
  constructor(url) {
    this.url = url;
  }
  async get() {
    let resp = await axios.get(this.url);
   return resp.data
  }
}
export default Data;
