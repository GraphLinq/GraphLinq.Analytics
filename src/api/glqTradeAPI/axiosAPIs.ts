import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/908384af82593a4445d9a06bf182d833cab1d3c1e60b2cf7e3704d27a093b65e/uniswap/glq/trades`;
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
