import axios from "axios";

const URL = "https://api.livecoinwatch.com/coins/single";

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL);
}

export const postUncxSelectInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL, {
      'code': 'UNCX',
      'currency': 'USD',
      'meta': true
    }, {
      headers: {
        'content-type': 'application/json',
        'x-api-key': '750842a1-6b4b-4c00-a585-bad05ceb1824'
      }
    }
    );
    return response.data;
  } catch (error) {
    console.error("Axios Error: src/api/uncxAPI | ", URL, error);
  }
};
