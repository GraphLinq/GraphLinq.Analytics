import axios from "axios";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/132ff433f14b006174b122bbdfb253baa92f92b519688adbae174ec4d5551acc/polygon`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postPolygonSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
