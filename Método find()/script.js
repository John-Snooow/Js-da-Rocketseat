// O método find() retorna o valor do primeiro elemento do array que satisfiser a condição. Caso contrario, undefined é retornado

const values = [5, 12, 8, 130, 44]

//retorna o primeiro elemento que o valor é maior que 10
const found = values.find((value) => value>10)
console.log(found) // 12 onde find() retorna o valor do elemento encontrado, enquanto findIndex() retornaria a posição do elemento.

//Exemplo com objetos

const fruits = [
    {name: "apple", quantity: 23},
    {name: "banana", quantity: 25},
    {name: "orange", quantity: 52},
]

const result = fruits.find((fruit) => fruit.name === "banana")// se eu colocar alguma outra fruta que não estiver na lista ele vai me retornar undefined
console.log(result) // {name: "banana", quantity: 25}