import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/edf1172bbc14fea77b40baf0590e9b2a61f10f13778ad2b5d0e5191aa21c3176/uncx?apiHistory`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxHistoryInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
