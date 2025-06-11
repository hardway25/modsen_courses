'use strict'
function calcFactorial (num) {
    let i = 1
    for (; num >= 1; num--) {
        i *= num
    }
    return i
}

console.log (calcFactorial(5))