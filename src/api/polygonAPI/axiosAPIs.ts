import axios from "axios";
import * as Sentry from "@sentry/react";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/1923b4d57a5f00f2dbf71492808189f670d7a2a67b5374b76471e439ffd3d9a7/polygon`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postPolygonSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/polygonyAPI | ", URL, error);
    Sentry.captureException(error);
  }
};
