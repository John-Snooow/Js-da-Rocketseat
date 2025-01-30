
const address1 ={
    street: "Av Brasil",
    number: 20,
}
/*
//isto não é uma cópia.É uma referencia.
const address2 = address1;
address2.number = 30
*/

//aqui estamos criando um novo objeto ultilizando as propiedades e valores do address1 (opição 1)
// const address2 = {...address1};
// address2.number = 30

const address2 = {...address1, number: 30}
console.log(address1, address2)

const list1 = ["apple", "banana"]

//Exemplo de referencia de array
//const list2 = list1
//list2.push("watermelon")// adiciona watermelo ao final da lista

const list2 = [...list1, "watermelon"]//cria uma cópia da lista
//list2.push("watermelon")

console.log(list1, list2)
