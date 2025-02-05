// setTimeout() executa um intervalo de tempo após um intervalo de tempo especificado.

setTimeout(() => {
    console.log('Hello, World!'); // imprime 'Hello, World!' após 2
}, 3000) // tempo em milissegundos 3s.

setTimeout(() => {
    console.log('Bora'); 
}, 4000)

setTimeout(() => {
    console.log('Codar?'); 
}, 5000)

//setInterval () execulta um função após um intervalo de tempo especificado.

let value =  10 
setInterval(() => {
    console.log("Oi!")
},1000)