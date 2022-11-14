import axios from "axios";



export class UserService {
    
    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'https://whoiswhosql.cancargol.net:3000/api/v1/'
    baseURL = this.baseURL_API + "users"
    constructor(token = null) {
     //   console.log("token: " + token);
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }


    async getLogin(Credentials) {

        const response = await axios.post(this.baseURL + "/login", Credentials);
   //     console.log(JSON.stringify(response.data));
        return response.data;
    }

    async createUser(Credentials) { 
     //   console.log("Credentials: " + JSON.stringify(Credentials));   

        const response = await axios.post(this.baseURL + "/", Credentials);
       // console.log(JSON.stringify(response.data));
        return response.data;
    }



}