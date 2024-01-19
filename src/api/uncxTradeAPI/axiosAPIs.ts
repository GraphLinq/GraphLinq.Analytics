import axios from "axios";

const URL = "https://api-hosted.graphlinq.io/c1a8c6f6042d2d8af923a77b70eb099026e468a3a010f73398f8d1e3759787b5/uniswap/uncx/trades";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxTradesSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/uncxTradeAPI | ", URL, error);
  }
};
