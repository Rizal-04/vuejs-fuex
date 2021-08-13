import axios from "axios";

const endPoint = "https://fuex-service.herokuapp.com/";

export default {
  actions: {
    GET_DATA({ commit }, { reqUrl, payload, headers }) {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await axios({
            url: `${endPoint}` + `${reqUrl}`,
            method: "GET",
            params: payload,
            headers: headers,
          });
          resolve(resp);
        } catch (error) {
          reject(error);
        }
      });
    },
    POST_DATA({ commit }, { reqUrl, payload, params }) {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await axios({
            url: `${endPoint}` + `${reqUrl}`,
            method: "POST",
            data: payload,
            params: params,
          });
          resolve(resp);
        } catch (error) {
          reject(error);
        }
      });
    },
    LOGIN({ commit }, { reqUrl, payload, headers }) {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await axios({
            url: `${endPoint}` + `${reqUrl}`,
            method: "POST",
            data: payload,
            headers: headers,
          });
          resolve(resp);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};
