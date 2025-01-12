// for ..of itera sobre os valores de um objeto iterável

// Array de estudantes
let students = ["Rodrigo", "Ana", "John"];

// Loop para imprimir cada estudante
for (let student of students) {
    console.log(student);
}

// Array de usuários
let user = [
    {
        name: "Rodrigo",
        email: "rodrigo@gmail.com",
    },
];

// Loop para imprimir o email de cada usuário
for (let value of user) {
    console.log(value.email);
}