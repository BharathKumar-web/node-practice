import axios from "axios";
const BASE_URL_PROPEL = `http://192.168.29.171:8080/api/propel_admin`;



class BackendService {
 
  getAllPathways() {
    
    return axios.get(`${BASE_URL_PROPEL}/pathways`);
  }


}
export default new BackendService();
