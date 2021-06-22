import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/7b5390e2418c2f01902f1d0e3e5fe0985668cf2bb388e92d0942a048fe2faa91/uniswap/uncx/trades`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxTradesSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
