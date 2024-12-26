
let fruits = ["Apple", "watermelon", "Lemon", "Strawberry"]

//Encontra e retorna o éndice do elemento no Array
let position = fruits.indexOf("Lemon")
console.log(position)

//qiando eu tento procurar um elemento que não tem no array retorna (-1)

//para remover um item ou quantidades
//fruits.splice(1, 2) //apatir do 1 ele vai apagar dois itens

//ou se eu quiser apagar apenas um item
fruits.splice(position, 1)

console.log(fruits)