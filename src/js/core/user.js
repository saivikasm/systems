import Data from "./data"
const User_Server="https://api.github.com/users"

class User extends Data{
    constructor(){
      super(User_Server)
    }
    // Get users
    async getUsers(){
        this.url=User_Server;
     return await  this.get();
    }
    // Get user detail page
   async getUserPageDetails(userLogin){
        this.url=User_Server+"/"+userLogin+"/repos";
        return await  this.get();

    }
  
}
export default new User()