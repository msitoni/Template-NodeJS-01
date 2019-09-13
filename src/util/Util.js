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

const converterDataFormatoAmericano = (data) => {

    if (data != null && data.indexOf == -1) {
        return dataFormatoAmericano = new Date(data.split('/').reverse().join('-')); //moment().format('YYYY-MM-DD');
    } else {
        return null;
    }

};

export { converterFormatoNumeroBrasileiroParaAmericano, converterFormatoNumeroAmericanoParaBrasileiro, converterDataFormatoAmericano }
