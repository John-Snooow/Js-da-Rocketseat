const creditCard = "1234567812344928" // para simular os numeros de um cartão de credito 
console.log(creditCard.length)// vai imprimir a quantidade de caracteres

const lastDigits = creditCard.slice(-4) // aqui vai imporimir os quatro ultimos números
console.log(lastDigits)

// O padStart preenche a string do início.
const maskedNumber = lastDigits.padStart
(creditCard.length, "x") // aqui vai os ultimos numeros e subistituir os outros por X

console.log(maskedNumber)

// O padEnd preenche a string do final.
const number = "1234"
console.log(number.padEnd(10, "#"))//Aqui vai ser imprimido os números e vai ser completado 10 digitos com os símbolo.
