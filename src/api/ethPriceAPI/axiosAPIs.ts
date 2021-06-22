import axios from "axios";

const URL = `https://api-hosted.graphlinq.io/79d2fb12383272485f12f8fa0feae1cc0f41a8e0e5016cb361913631b5a409b1/uniswap/eth/price`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postEthPriceSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
