
import axios from "axios";



export class GameService {

    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'https://whoiswhosql.cancargol.net:3000/api/v1/'
    baseURL = this.baseURL_API + "games"
    constructor(token = null) {
     //   console.log("token: " + token);
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    async getGames() {
        console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/", this.config);
        console.log(JSON.stringify(response.data));
        return response.data;
    }


    async findGame(gameId) {
        try {
            console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/" + gameId, this.config);
        console.log(JSON.stringify(response.data));
        return response.data;
        } catch (error) {
            console.log("error en la api");
        }
        
    }

    async getResults(gameId) {
        //console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/results/" + gameId, this.config);
       // console.log(JSON.stringify(response.data));
        return response.data;
    }
    async create(ExerciseId) {
       // console.log(this.baseURL)
        const data = { exerciseId:ExerciseId };
        const response = await axios.post(this.baseURL + "/", data, this.config);
     //   console.log(JSON.stringify(response.data));
        return response.data;
    }

    async updateStart(id){
        const path = this.baseURL +'/start/' + id;
        const response = await  axios.put(path,this.config);
        console.log(JSON.stringify(response));
        return response.data;
    }

    async updateStop(id){
        const path = this.baseURL +'/stop/' + id;
        const response = await  axios.put(path,this.config);
        console.log(JSON.stringify(response));
        return response.data;
    }
    async remove(gameId) {
        //console.log(this.baseURL)
        const response = await axios.delete(this.baseURL + "/" + gameId, this.config);
       // console.log(JSON.stringify(response.data));
        return response.data;
    }

    async join(pin) {
        //console.log(this.baseURL)
        const data= {pin:pin};
        const response = await axios.post(this.baseURL + "/join/",data, this.config);
       // console.log(JSON.stringify(response.data));
        return response.data;
    }



}
