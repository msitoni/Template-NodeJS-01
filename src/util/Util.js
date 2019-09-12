const converterFormatoNumeroBrasileiroParaAmericano = (number) => {
    !number ? number = "0,00" : number = number;
    if (number.toString().indexOf(',') == -1) {
        return parseFloat(number);
    } else {
        return parseFloat(number.replace(/[.]/g, "").replace(",", "."));
    }
};


const converterFormatoNumeroAmericanoParaBrasileiro = (number) => {
    !number ? number = "0,00" : number = number;
    number = parseFloat(number);
    if (!number) {
        number = 0;
    }
    return parseFloat(number).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
};


export { converterFormatoNumeroBrasileiroParaAmericano, converterFormatoNumeroAmericanoParaBrasileiro }
