//Vai servir para encontrar a posição de uma palavra ou uma frase dentro da string.

let message = "Estou estudando os fundamentos de Javascript"

//Quando não encontra a palavra vai retornar -1
console.log(message.indexOf("estudano"))// aqui o errado para simular o retorno do -1

console.log(message.indexOf("estudando"))// aqui ele encontyrou e indica que começa apatir da posição 6

//verifica se existe a palavra na strige
console.log(message.includes("estudando"))//retorna true pois a palavra existe na string

console.log(message.includes("estudano"))//retorna false pois a palavra não existe na string

