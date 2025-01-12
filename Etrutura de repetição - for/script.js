/*FOR repete até que a condição  especificada seja FALSA

- variavel de controle
- condição
- incremeto ou decremento da variavel do controle
*/

for (step = 0; step < 10; step++){
    console.log(step);
}


/*
maneira dificio
conole.log("### TABUADA ###")
//EXEMPLO DE TABUADA
console.log(`7x0 = ${7 * 0}`)
console.log(`7x1 = ${7 * 1}`)
console.log(`7x2 = ${7 * 2}`)
console.log(`7x3 = ${7 * 3}`)
console.log(`7x4 = ${7 * 4}`)
console.log(`7x5 = ${7 * 5}`)
console.log(`7x6 = ${7 * 6}`)
console.log(`7x7 = ${7 * 7}`)
console.log(`7x8 = ${7 * 8}`)
console.log(`7x9 = ${7 * 9}`)
console.log(`7x10 = ${7 * 10}`)

*/

//aqui vamos ter o mesmo resultado só que de forma simplificada 

let number = 7

for (step = 0; step <= 10; step++){
    console.log(`${number} x ${step} = ${number * step}`)
}