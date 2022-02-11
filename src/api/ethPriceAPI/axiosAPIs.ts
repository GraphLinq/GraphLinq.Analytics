import axios from "axios";

const URL = `https://api-hosted.graphlinq.io/fe6d7662f7df17ed666878f23140017c8f7154e19070b96641ea5293d2514641/uniswap/eth/price`;

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
