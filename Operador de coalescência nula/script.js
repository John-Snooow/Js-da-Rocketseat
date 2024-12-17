// Declara uma variável chamada 'content' e a inicializa como 'undefined'
let content = undefined;

// Usa o operador de coalescência nula (??) para verificar se 'content' é null ou undefined.
// Se 'content' for null ou undefined, será exibido "Conteúdo padrão" no console.
console.log(content ?? "Conteúdo padrão");

// Declara um objeto chamado 'user' com duas propriedades: 'name' e 'avatar'.
// A propriedade 'avatar' é inicializada como 'undefined'.
const user = {
    name: "João",
    avatar: undefined,
};

// Usa o operador de coalescência nula (??) novamente para verificar se 'user.avatar' é null ou undefined.
// Se 'user.avatar' for null ou undefined, será exibido "default.png" no console.
console.log(user.avatar ?? "default.png");