let message = "Estou estudando os fundamentos de Java script"
//comprimento de uma string
console.log(mesage.length)// aqui ele vai me inforrmar quantas letras tem a frase a cima

let password = "123456"

if (password.length < 6){// Aqui vai imprimir a frase a baixo se for digitado menos que 6 caracteres
    console.log("A senha deve ter pelo menos 6 caracteres")
}

//Quantos digitos tem o numero 
let value = 12345
console.log(String(value).length)// transformnando(converter) numero em string
console.log(value.toString().length)