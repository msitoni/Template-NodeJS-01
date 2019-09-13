import { API_URL } from '../Config';

const converterFormatoNumeroBrasileiroParaAmericano = (number) => {
    if (!number) {
        return '0.00';
    }
    if (number.toString().indexOf(',') == -1) {
        return parseFloat(number);
    } else {
        return parseFloat(number.replace(/[.]/g, "").replace(",", "."));
    }
};


const converterFormatoNumeroAmericanoParaBrasileiro = (number) => {
    if (!number) {
        return "0,00";
    }
    number = parseFloat(number);
    return parseFloat(number).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
};



const search = (query, type) => {
    const TOKEN_API = 'BQA1wiuoe92XJgv62D5ut7RfPSL6F9AON_Qs2Fr0nUEhw1ev35A36F9gQUzYEnqm62pqFCcNVzo6Gnhqv6-U-nPGpDulbHvHcXSM2fVKrdO8jF2_q9d6RYJMi7aB0JuuX5CaHFOx8pLOTyI';
    const HEADERS = {
        headers: {
            'Authorization': `'Bearer  ${TOKEN_API} '`,
        }
    };

    return fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then(toJSON);
};

const toJSON = data => data.json();

export { converterFormatoNumeroBrasileiroParaAmericano, converterFormatoNumeroAmericanoParaBrasileiro, search, toJSON }
