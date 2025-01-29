// O número findIndex() retorna o indice no array do primeiro elemento que satisfazer a condição. caso encontrado, retorna -1, indicando que nenhum elemento passou no teste.

const values = [4, 6, 8, 12]

//obtem o primeiro indice do elemento que o valor é maior que 4.
const index = values.findIndex((value) => value > 4)
console.log(index) // 1
console.log(values[index])

//Exemplo de quando não encontro 
console.log(values.findIndex((value)=> value >12))