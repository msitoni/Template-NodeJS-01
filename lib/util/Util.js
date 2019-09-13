'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toJSON = exports.search = exports.converterFormatoNumeroAmericanoParaBrasileiro = exports.converterFormatoNumeroBrasileiroParaAmericano = undefined;

var _Config = require('../Config');

var converterFormatoNumeroBrasileiroParaAmericano = function converterFormatoNumeroBrasileiroParaAmericano(number) {
    if (!number) {
        return '0.00';
    }
    if (number.toString().indexOf(',') == -1) {
        return parseFloat(number);
    } else {
        return parseFloat(number.replace(/[.]/g, "").replace(",", "."));
    }
};

var converterFormatoNumeroAmericanoParaBrasileiro = function converterFormatoNumeroAmericanoParaBrasileiro(number) {
    if (!number) {
        return "0,00";
    }
    number = parseFloat(number);
    return parseFloat(number).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
};

var search = function search(query, type) {
    var TOKEN_API = 'BQA1wiuoe92XJgv62D5ut7RfPSL6F9AON_Qs2Fr0nUEhw1ev35A36F9gQUzYEnqm62pqFCcNVzo6Gnhqv6-U-nPGpDulbHvHcXSM2fVKrdO8jF2_q9d6RYJMi7aB0JuuX5CaHFOx8pLOTyI';
    var HEADERS = {
        headers: {
            'Authorization': '\'Bearer  ' + TOKEN_API + ' \''
        }
    };

    return fetch(_Config.API_URL + '/search?q=' + query + '&type=' + type, HEADERS).then(toJSON);
};

var toJSON = function toJSON(data) {
    return data.json();
};

exports.converterFormatoNumeroBrasileiroParaAmericano = converterFormatoNumeroBrasileiroParaAmericano;
exports.converterFormatoNumeroAmericanoParaBrasileiro = converterFormatoNumeroAmericanoParaBrasileiro;
exports.search = search;
exports.toJSON = toJSON;