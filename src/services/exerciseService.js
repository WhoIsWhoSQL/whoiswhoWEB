import axios from "axios";

export class ExerciseService {
    baseURL_API = process.env.REACT_APP_BASE_URL_API || 'https://whoiswhosql.cancargol.net:3000/api/v1/'
    baseURL = this.baseURL_API + "exercises"
    constructor(token = null) {
     //   console.log("token: " + token);
        this.config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    async getExercises() {
       // console.log(this.baseURL)
        const response = await axios.get(this.baseURL + "/", this.config);
       // console.log(JSON.stringify(response.data));
        return response.data;
    }

    async addExerciseToClassroom(classroomId, exerciseId) {
         console.log(this.baseURL)
         console.log("classroomId: " + classroomId);
         const data = { classId:classroomId, exerciseId:exerciseId };
         console.log("data:" + JSON.stringify(data));
         const response = await axios.post(this.baseURL + "/add", data, this.config);
         console.log(JSON.stringify(response.data));
         return response.data;
     }

     async startExercise (exerciseId,classId){
        const data = { classId:classId, exerciseId:exerciseId };
        const response = await axios.post(this.baseURL + "/start", data, this.config);
        //console.log("gameeeeeee" + JSON.stringify(response.data));
        return response.data;
     }
}
