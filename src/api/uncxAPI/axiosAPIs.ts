import axios from "axios";
import * as Sentry from "@sentry/react";

const URL = "https://api-hosted.graphlinq.io/5462472655de3e14dfc103b933a6b017f6a526abcff21e30bc018c33d653370a/uncx";

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
