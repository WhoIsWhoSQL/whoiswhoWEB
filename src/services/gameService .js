
import axios from "axios";



export class GameService {

    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'http://whoiswhosql.cancargol.net:3000/api/v1/'
    baseURL = this.baseURL_API + "games"
    constructor(token = null) {
        console.log("token: " + token);
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    async getGames() {
        //console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/", this.config);
       // console.log(JSON.stringify(response.data));
        return response.data;
    }


    async findGame(gameId) {
        //console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/" + gameId, this.config);
       // console.log(JSON.stringify(response.data));
        return response.data;
    }


    async create(ExerciseId) {
       // console.log(this.baseURL)
        const data = { exerciseId:ExerciseId };
        const response = await axios.post(this.baseURL + "/", data, this.config);
        console.log(JSON.stringify(response.data));
        return response.data;
    }
}
