import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/f13079043c284d7459afd8561e62dcf6521f1608eec05f7449a72e378eef7604/glq`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postGlqSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
