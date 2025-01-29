// O método nmap() chama a  função callback recebida por parâmetro para cada elemento do Array original. em ordem, e constroi um novo array com base nos retonos de cada chamada. e no final, devolve o novo array.

const products = ["teclado", "Mouse", "Monitor"]

//ercorre os itens do array
products.map((product)=>{
    console.log(product)
})

//sintaxe reduzida
products.map((product) => console.log(product))

//ultilizando o novo objeto formatado
const formatted = products.map((product) =>{
    //return product.toUpperCase()

    return{
        id: Math.random(),
        description: product,
    }
})

console.log(formatted)