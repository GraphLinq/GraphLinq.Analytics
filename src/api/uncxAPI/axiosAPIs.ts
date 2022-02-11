import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/59a59e231c707580afc9417668fb6f71c4aff4e358887895e36a01389010cc58/uncx`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
