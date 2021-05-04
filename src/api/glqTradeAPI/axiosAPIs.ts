import axios from 'axios';

const URL = `${process.env.REACT_APP_PROXY_API_URL}/888fb44f5436a7d0db4b4eeae437df9efea008575904a3102b9cb5bab8f2331a/uniswap/glq/trades`;

export function result(endPointURL: any) {
    return axios.post(URL + endPointURL)
}

export const postGlqTradesSelectInfo = async (partient: any): Promise<any> => {
    try {
        const response = await axios.post(URL);
        return response.data;
    } catch (error) {
        console.log(error, 'axios error')
    }
}