
import axios from "axios";



export class ClassroomService {
    
    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'http://localhost:4000/api/v1/'
    baseURL = this.baseURL_API + "classrooms"
    constructor(token = null) {
        console.log("token: " + token);
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    async getClassrooms() {
        console.log(this.baseURL)
            const response = await axios.get(this.baseURL + "/", this.config);
            console.log(JSON.stringify(response.data));
            return response.data;
    }
}