import axios from "axios";
import * as Sentry from "@sentry/react";

const URL = "https://api-hosted.graphlinq.io/06116afa2ee7d4b72204a8588e25a412390e49ec9853030332b381f4ebddf570/glq";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postGlqSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/glqAPI | ", URL, error);
    Sentry.captureException(error);
  }
};
