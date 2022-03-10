import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/aba3784ebadfbcf16a8034ba067b57f3fb6452b540c260f4a0c4246570745694/glq?apiHistory`;

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
