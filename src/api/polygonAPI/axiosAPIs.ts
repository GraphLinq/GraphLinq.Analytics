import axios from "axios";
import * as Sentry from "@sentry/react";

const URL = `${process.env.REACT_APP_PROXY_API_URL}/6183005bf6098b482534cf92e2d167c461051065243ae5854dba547a724b50f2/polygon`;

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
