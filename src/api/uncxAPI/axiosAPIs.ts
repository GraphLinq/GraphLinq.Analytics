import axios from "axios";
import * as Sentry from "@sentry/react";

const URL = "https://api-hosted.graphlinq.io/af2777c4d09b28b941489ef2869f696ce54058ad486969940e000b79ae96a809/uncx";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/uncxAPI | ", URL, error);
    Sentry.captureException(error);
  }
};
