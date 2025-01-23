//destructuring assignment (desestruturação) permite extraiur dados de arrays ou objetos em variaveis distintas

const data = ["John frank", "johnfrank.jf25@gmail.com"]

//Desestrutura array
const [usernome, email] = data
console.log("nome: ", usernome)
console.log("email: ", email)

const fruits = ["Banana", "Apple", "Orange"]

//Desestruturando somente o primeiro array
const [banana] = fruits
console.log(banana) //vai imprimir Banana não mesmo com letra maiuscolas

//Ignora o promeiro na desestruturação
const [_,apple] = fruits
console.log(apple) //vai imprimir Apple

//Ignora o promeiro e o segundo na desestruturação
const [,,orange] = fruits
console.log(orange) //vai imprimir Orange

