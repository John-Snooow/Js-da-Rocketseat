let text = "Estudar, Aprender, Praticar"

//Separando string
let separate = text.split(",")//Vai fazer uma separação dentro de um arrey onde estiver ",".
console.log(separate) 

let message = "Estou aprendendo JavaScript"
console.log(message.split("en"))//Vai onde estiver "en" nas palavras da variavel

//Unir a string
let joined = separate.join(" - ")// aqui eu coloquei o ifem para subistituir a virgula
console.log(joined)//Vai juntar a string colocando a vigula novamente caso eu não altere a linha a cima.