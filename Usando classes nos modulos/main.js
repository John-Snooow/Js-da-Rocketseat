
// Importa a classe Calc do módulo calc.js
import {Calc} from "./calc.js"

// Cria uma nova instância da classe Calc
const calc = new Calc()

console.log(" 4 + 6 =", calc.sum(4, 6))
console.log(" 4 * 6 =", calc.multiply(4, 6))
console.log(calc.name)
