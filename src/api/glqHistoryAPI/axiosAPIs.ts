import axios from "axios";

const URL = "https://api-hosted.graphlinq.io/06116afa2ee7d4b72204a8588e25a412390e49ec9853030332b381f4ebddf570/glq?apiHistory";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postGlqHistoryInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/glqHistoryAPI | ", URL, error);
  }
};
