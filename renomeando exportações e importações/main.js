
//aqui estou renomeando a importação de "sum" para "s" e "multiply" para "mult"
import {sum as s, multiply as mult} from "./calc.js"

console.log(" 4 + 6 =", s(4, 6))
console.log(" 4 * 6 =", mult(4, 6))

//Vai ser útil para quando eu tiver com algum outro módulo com o mesmo nome e quero renomear a importação para que não haja conflitos entre os códigos por serem iguais.