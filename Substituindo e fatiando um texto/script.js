// substituindo partes de um texto 

let message = "Estou estudando os fundamentos do JavaScrip"

console.log(
message.replace("os fundamentos do JavaScrip", "Métodoas de string")// vai substituir a primeira mengasem pela segunda
)

console.log(message) // imprime a mensagem original completa

//Extraindo uma parte da String (start, end)
console.loig(message.slice(6,30))// aqui ele vai pegar apartir do caractere 6 ate o 30 e imprimir no console

//Extraindo uma parte da string de traz para frente.
console.log(message.slice(-11))// aqui ele vai pegar apartir do caractere 11


let textWithSpace = "            Texto de exemplo            "
console.log(textWithSpace.length)// vai imprimir a quantidade de string a cima contando com os espaços

//Remove espaços em branco "espeços" do incio e do fim da string
console.log(textWithSpace.trim().length)