import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/fe6d7662f7df17ed666878f23140017c8f7154e19070b96641ea5293d2514641/uniswap/lptoken_v2?lptoken=0x7d9c8d888d03df89461c645bd1108ae138b63a2a`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postLiquiditySelectInfo = async (state: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/liquidityAPI | ", URL, error);
  }
};
