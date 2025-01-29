//O método every() testa se todos os elementos do array passam na condição e retorna um valor Boolean.

//Exemplo de array de idade.
const ages =[15, 30, 37, 50, 80]

//verifica se todas a idades são maiores ou igual a 18 
const result = ages.every((age) => age >=18)
console.log(result) //false