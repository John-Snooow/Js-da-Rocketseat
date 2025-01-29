//O método every() testa se todos os elementos do array passam na condição e retorna um valor Boolean.

//Exemplo de array de idade.
const ages =[15, 30, 37, 50, 80]

//verifica se todas a idades são maiores ou igual a 18 
const result = ages.every((age) => age >=18)
console.log(result) //false


//O Método some() testa se ao menos um dos elementos do array passam na condição e retorna um valor true ou false.


//Exemplo de array de idade.
const age =[15, 30, 37, 50, 80]

//verifica se alguma das idades é menor que 18  
const res = age.some((age) => age < 18)
console.log(res) //retorna verdadeiro pois temos o 15, se todos fessem maiores que 18 retornaria false
