import axios from "axios";

export class ExerciseService {
    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'http://whoiswhosql.cancargol.net:3000/api/v1/'
    baseURL = this.baseURL_API + "exercises"
    constructor(token = null) {
        console.log("token: " + token);
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    async getExercises() {
        console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/", this.config);
        console.log(JSON.stringify(response.data));
        return response.data;
    }
}
