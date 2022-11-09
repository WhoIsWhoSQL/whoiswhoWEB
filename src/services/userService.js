import axios from "axios";

const baseURL_API = process.env.REACT_APP_BASE_URL_API || 'http://localhost:4000/api/v1/'

const baseURL = baseURL_API + "users"

 export const loginService = async Credential => {

    const response = await axios.post(baseURL + "/login", Credential);
    console.log(JSON.stringify(response.data));
    return response.data;

}
