const product ={
    name: "teclado",
    quantity:100,
}

//Atualiza o valor de uma propiedade.
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

console.log(product.name)
product.name = "mouse"
console.log(product.name)

//Notação de colchetes.
product["quantity"] = 50
console.log(product)