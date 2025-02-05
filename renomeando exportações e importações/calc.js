
function sum (a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

//aqui estou renomeando a exportação
/*
export {
    sum as sumTowNumbers, multiply as multiplyTowNumbers
}
*/

// A exportação final das funções sum e multiply
export{ sum, multiply}