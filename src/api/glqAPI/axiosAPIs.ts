import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/706364f99ee8354232b99bc8060fe59b0442986c1e5b147900e825f905080245/glq`;

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
