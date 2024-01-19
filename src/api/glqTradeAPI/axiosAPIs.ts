import axios from "axios";

const URL = "https://api-hosted.graphlinq.io/908384af82593a4445d9a06bf182d833cab1d3c1e60b2cf7e3704d27a093b65e/uniswap/glq/trades";
export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postGlqTradesSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/glqTradeAPI | ", URL, error);
  }
};
