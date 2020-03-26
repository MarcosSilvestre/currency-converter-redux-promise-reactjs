import {API_KEY} from './../currency-api-key';
import axios from 'axios';

const BASE_URL = 'http://api.currencylayer.com';

export const CONVERTE_MOEDAS = 'CONVERTE_MOEDAS';

export function convertCurrencies(converteObj){
    
    const url = `${BASE_URL}/live?access_key=${API_KEY}&source=${converteObj.from}&currencies=${converteObj.to}&format=1`;
    
    console.log('**** CONVERTE MOEDAS ********');
    console.log('url; ', url);
    alert(url);

    const request = axios.get(url); 
    
    return {
        type: CONVERTE_MOEDAS,
        payload: request
    }
}