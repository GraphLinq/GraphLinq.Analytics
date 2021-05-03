import axios from 'axios';

const URL = `${process.env.REACT_APP_PROXY_API_URL}/b03a5a2462cb7df99f85daff6f97a8a7abc462c80ac8fd98d3a6205ce29df20f/uniswap/total_liquidity_v2`;

export function result(endPointURL: any) {
    return axios.post(URL + endPointURL)
}

export const postTotalLiquiditySelectInfo = async (state: any): Promise<any> => {
    try {
        const response = await axios.post(URL);
        return response.data;
    } catch (error) {
        console.log(error, 'axios error')
    }
}