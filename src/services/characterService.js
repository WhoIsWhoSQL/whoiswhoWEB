
import axios from "axios";



export class CharacterService {

    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'https://whosqlwho.org:3000/api/v1/'
    baseURL = this.baseURL_API + "characters"
    constructor(token = null) {
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    async getCharacters(pin) {
     //   console.log("holaaaa")
        const url =this.baseURL + "/" + pin;
       // console.log("url: " + url);
        const response = await axios.get(url, this.config).catch(function (error) {
            if (error.response) {
         //       console.log(error.response.data);
            }
           // console.log("Error en axios");
            return []
        });
        return response.data;
    }
}
