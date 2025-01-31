/*
aqui eu estou fazendo um importação separadamento 
import { sum, multiply} from "./calc.js"

console.log(" 4 + 6 =", sum(4, 6))
console.log(" 4 * 6 =", multiply(4, 6))
*/

//aqui eu estou fazendo um importação de tudo 
import * as calc from "./calc.js"

console.log(" 4 + 6 =", calc.sum(4, 6))
console.log(" 4 * 6 =", calc.multiply(4, 6))