import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/f234247312e24d7766fa0b24d6eccb9828c69b4377a57e7824a9353c10169ce5/uniswap/glq/trades`;
export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postGlqTradesSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
