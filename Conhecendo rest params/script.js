//Rest params (...) permite representar um número indefinido de argumentos como um array

//possso usar o "args" no lugar de "rest"

function values (...rest){
    console.log(rest.length)// mostra a quantidade de parametrso
    console.log(...rest)// Visualiza o conteudo do array 
    console.log(rest) //visualisa como array no console
}

values(1,2,3,4,5); // [1,2,3,