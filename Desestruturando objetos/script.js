//destruturing assinment (desestrturação) permite extrair dados de arrays e objetos de variaveis distintas

const product ={
    description: "teclado",
    price: 100.00,
}

const {description, price} = product
console.log("Descrição: ", description)
console.log("Preço: ", price)


//desestruturando uma função 
function newProduct ({price, description}){
    console.log("## NOVO PREÇO ##")
    console.log("Descrição: ", description)
    console.log("preço: R$", price)
}

newProduct({
    description: "mouse",
    price: 100,
})