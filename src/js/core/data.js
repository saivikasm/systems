const axios = require('axios');
class Data {
    constructor(url){
        this.url=url
    }
  async  get(){
let resp=await axios.get(this.url);
console.log(resp)
    }
}
export default new Data()