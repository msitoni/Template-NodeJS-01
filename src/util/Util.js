brTOus = function(number) {
    !number ? number = "0,00" : number = number;
    if (number.toString().indexOf(',') == -1) {
        return parseFloat(number);
    } else {
        value = parseFloat(number.replace(/[.]/g, "").replace(",", "."));
        return value;
    }
};


function usTObr(n) {
    n = parseFloat(n);
    if (!n) {
        n = 0;
    }
    return parseFloat(n).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
};