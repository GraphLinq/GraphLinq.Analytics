import axios from "axios";
import * as Sentry from "@sentry/react";

const URL = "https://api-hosted.graphlinq.io/26f0b60f4a159f7406b8c648788e85e9ea205dc506a4b3331a77ed866f7ff6e7/glq";

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
