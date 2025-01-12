//for.. in executa interações a partir de um objeto e percorre as propriedades.

let person = {
    name: 'João',
    age: "30",
    occupation: 'Desenvolvedor',
    email: "johrank.jf25@gmail.com",
}

// Início do loop for..in para iterar sobre as propriedades do objeto 'person'
for (let property in person){

    // exibe o nome da propiedade.
    console.log(property);

    // exibe o conteudo da propiedade
    console.log(person[property]);
}
// Declaração de um array 'students' com três elementos
let students = ["John", "Ana", "Paula"]

// Início do loop for..in para iterar sobre os índices do array 'students'
for (let index in students){
    //cosole.log(index)
    console.log(students[index]);
}