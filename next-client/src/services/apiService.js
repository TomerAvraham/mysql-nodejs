import axios from "axios";

const API_ENDPOINT = "http://localhost:4001";

class Api {
  async getAllHeroes() {
    try {
      const { data } = await axios.get(API_ENDPOINT + "/hero");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Api();
