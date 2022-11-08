import axios from "axios";

const baseURL = 'http://localhost:4000/api/v1/users/'


 export const loginService = async Credential => {

    const response = await axios.post(baseURL + "login", Credential);
    console.log(JSON.stringify(response.data));
    return response.data;

}
