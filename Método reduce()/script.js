/*
    método reduce() é ultilizado para reduzir um array a um unico valor.

Parametros:
- Array original (valores)
- Acumulador (accumulator)
- Valor da interação (currentValue)
- Valor inicial (0)
- Index (index da interação atual - opcional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accmulator, currentValue, index) =>{
    console.log("ACUMULADOR", accmulator)//acumula os valores
    console.log("CURRENT VALUE", currentValue)
    console.log("INDEX", index)

    console.log("SOMA", accmulator + currentValue)
    console.log("##########################")
    
    return accmulator + currentValue
}, 10)//valor inicial

console.log("RESULTADO DA SOMA FINAL", sum)