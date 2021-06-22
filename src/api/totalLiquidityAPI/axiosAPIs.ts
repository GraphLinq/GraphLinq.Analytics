import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/83c5816ca5f37df77a048a87642d889ed67eb5c5a36f2022ad514640b7471dfb/uniswap/total_liquidity_v2`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postTotalLiquiditySelectInfo = async (
  state: any
): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
