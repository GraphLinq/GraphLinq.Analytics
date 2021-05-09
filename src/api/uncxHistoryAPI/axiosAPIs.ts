import axios from 'axios';

const URL = `${process.env.REACT_APP_PROXY_API_URL}/4967e5f46d786b4bc9deea0644b5ba3202597d7aa87371a70b3ee366432e77bc/uncx?apiHistory`;

export function result(endPointURL: any) {
  return axios.post(URL + endPointURL)
}

export const postUncxHistoryInfo = async (partient: any): Promise<any> => {
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (error) {
    console.log(error, 'axios error')
  }
}
