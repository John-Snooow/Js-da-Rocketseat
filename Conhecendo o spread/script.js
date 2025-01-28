//spred (espalhar)  permite que um objeto interável como uma expressão de array ou um atring seja enpandido para ser usado onde zero ou mais argumentos

const number = [1, 2, 3]
console.log(number)

//spred
console.log(...number)

//criando objetos
const data = [
    {
        name: "john",
        email: "john@gamil.com",
        avatar: "j.png"
    },
    {
        name: "ana",
        email: "Ana@gamil.com",
        avatar: "A.png"
    }
]

console.log(data)
//ultilizando o spred no array comobjetos
console.log(...data)