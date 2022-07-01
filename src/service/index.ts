import axios from 'axios';

const ServerAccountAddress = 'http://localhost:3000/'

const axiosIns = axios.create({
    baseURL: ServerAccountAddress,
});

axiosIns.interceptors.request.use((config: any) => {
    // const apiToken = sessionStorage.getItem('api_token')!;
    // config.headers = {
    //     token: apiToken,
    // };
    return config;
});

// await axiosIns.post('/mail/send', params);

//  /game/treasure/query?wallet_address=0x4E1Dd68a0607Ca6Aa3b5C09e69ba0BC5EAbf706E
export async function getGameTreasure(wallet_address: string) {
    const response = await axiosIns.get('/game/treasure/query?wallet_address=' + wallet_address);
    return response.data;
}
