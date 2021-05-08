import axios from 'axios';

const URL = `${process.env.REACT_APP_PROXY_API_URL}/b03a5a2462cb7df99f85daff6f97a8a7abc462c80ac8fd98d3a6205ce29df20f/uniswap/lptoken_v2?lptoken=0x7d9c8d888d03df89461c645bd1108ae138b63a2a`;

export function result(endPointURL: any) {
    return axios.post(URL + endPointURL)
}

export const postLiquiditySelectInfo = async (state: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, 'axios error')
  }
}
