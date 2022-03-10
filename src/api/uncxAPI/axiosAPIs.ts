import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/a438d29e02e929664848336d0f43effcdb118fb2fc8028ce4cc0a9da542f01e5/uncx`;

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
