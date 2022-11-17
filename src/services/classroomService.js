
import axios from "axios";



export class ClassroomService {

    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'https://whoiswhosql.cancargol.net:3000/api/v1/'
    baseURL = this.baseURL_API + "classrooms"
    constructor(token = null) {
        //   console.log("token: " + token);
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    async getClassrooms() {

        const response = await axios.get(this.baseURL + "/", this.config).catch(function (error) {
            if (error.response) {
                //         console.log(error.response.data);
                //       console.log(error.response.status);
                //     console.log(error.response.headers);
            }
            console.log("Error en axios");
            return []
        });
        //     console.log(JSON.stringify(response.data));
        return response.data;

    }


    async create(name) {
        // console.log(this.baseURL)
        const data = { name: name };
        const response = await axios.post(this.baseURL + "/", data, this.config);
        //   console.log(JSON.stringify(response.data));
        return response.data;
    }


    async join(pin) {
        const data = { pin: pin };
        const url = this.baseURL + "/join/" + pin
        console.log(url);
        const response = await axios.post(url,data, this.config);
        return response.data;
    }



    async findClassroom(classId) {
        //console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/" + classId, this.config);
        //  console.log(JSON.stringify(response.data));
        return response.data;
    }

    async remove(classId) {
        //console.log(this.baseURL)
        const response = await axios.delete(this.baseURL + "/" + classId, this.config);
        // console.log(JSON.stringify(response.data));
        return response.data;
    }

}