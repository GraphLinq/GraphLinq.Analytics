import axios from "axios";

const URL = "https://api-hosted.graphlinq.io/5462472655de3e14dfc103b933a6b017f6a526abcff21e30bc018c33d653370a/glq";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postGlqSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, "axios error");
  }
};
