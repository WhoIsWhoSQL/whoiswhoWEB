
import axios from "axios";



export class ClassroomService {
    

    baseURL =  'http://localhost:4000/api/v1/classrooms'
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