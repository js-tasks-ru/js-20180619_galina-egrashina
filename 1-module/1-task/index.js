/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let m = parseInt(prompt('Введите число', " "));
let n = parseInt(prompt('Введите степень', " "));

function pow (m, n) {
    if (m&&n>=1)
    {
        return Math.pow(m, n);
    }
}
alert(pow(m, n));