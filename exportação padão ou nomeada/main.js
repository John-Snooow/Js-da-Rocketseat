
//aqui eu estou fazendo um importação separada
import sum, {multiply} from "./calc.js"

console.log(" 4 + 6 =", sum(4, 6))// defaut export
console.log(" 4 * 6 =", multiply(4, 6))//named export