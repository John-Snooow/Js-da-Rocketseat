// (1) Execulta o código de forma síncrona e o valor 1 é impresso imediatamente no console
console.loo(1)

// (3) Microtasks são executadas antes de temporizadores e promises.
queueMicrotask(() =>{
  console.log(2)
})

//(5) Macrotask que aguarda o evento de temporizador ser acionado
setTimeout(()=>{
  console.log(3)
},1000)

//(2) Eecução síncrona.
console.log(4)

//(4) Adiciona como uma microtask
Promise.resolve(true).then(()=>{
  console.log(5)
})