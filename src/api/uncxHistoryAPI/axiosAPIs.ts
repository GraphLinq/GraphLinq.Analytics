import axios from "axios";

const URL = "https://api-hosted.graphlinq.io/5462472655de3e14dfc103b933a6b017f6a526abcff21e30bc018c33d653370a/uncx?apiHistory";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxHistoryInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/uncxHistoryAPI | ", URL, error);
  }
};
