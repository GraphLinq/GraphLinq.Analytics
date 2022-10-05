import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/24dbfe60744d2f40dbdd09d490964467d882a1e25d94e3fd91897f5c6362c411/glq?apiHistory`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postGlqHistoryInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
