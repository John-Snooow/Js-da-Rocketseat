// setTimeout() executa um intervalo de tempo após um intervalo de tempo especificado.

setTimeout(() => {
    console.log('Hello, World!'); // imprime 'Hello, World!' após 2
}, 1000) // tempo em milissegundos 1s.

setTimeout(() => {
    console.log('Bora'); 
}, 2000)

setTimeout(() => {
    console.log('Codar?'); 
}, 3000)

//setInterval () execulta um função após um intervalo de tempo especificado.

/*
let value =  10 
setInterval(() => {
    console.log("Vamos?")
},6000)// aqi o codigo vai ficar repetinho a cada 6s "vamos?" sem perar
*/

let value =  10 
const interval = setInterval(() => {
    console.log(value)
    value-- // para fazer um contaguem regressiva ate o 10

    if(value == 0){
        console.log("Este é o momento.!")
        clearInterval(interval)//para enterronper a contagem Regressiva, e não continuar contando nos numeros negativos ex: -1, -2, -3...
    }
},3000) //faz a contagem  de 3 em 3 segundos