'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(string) {
    let stepOne = string.replace(/[^a-zA-Z0-9!.-]/g, ' ');
    let stepTwo = stepOne.replace(/\s+/g, ',');
    let newArr = stepTwo.split(',');

    let min = Math.min(...newArr);
    let max = Math.max(...newArr);
    return {min: min, max: max}
}

console.log(getMinMax(inputData));