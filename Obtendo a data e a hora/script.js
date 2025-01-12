// Exibe a data e hora atual

console.log(new Date())

//Exibe a data e hora de referencia (considera o fuso)
console.log(new Date(0))

//exibe o numero de milessegundos
console.log(new Date().getTime())

//define com ano,mês (0-11), dia.
console.log(new Date(2024, 3, 2))

//define ano, mês (0-11) e dia/ hora, minutos e sgundos
console.log(new Date(2024, 4, 2, 10, 30,0))

//Define data e hora com string
console.log(new Date("2025-01-03T22:18:00"))

console.log(new Date("July 3, 2025 22:19:25"))