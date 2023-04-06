import axios from "axios";
import * as Sentry from "@sentry/react";

const URL = "https://api-hosted.graphlinq.io/3657fe25fe3f14ac5bb194420c9a49e1d0c74248cd9a822299cdbe7839e0541c/uniswap/uncx/trades";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxTradesSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/uncxTradeAPI | ", URL, error);
    Sentry.captureException(error);
  }
};
