let date = new Date("2025-01-07T14:30:00")

//Exibi a data e hora no formato Local.
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(date.toLocaleString())

//Exibe data e hora no formato escolhido de um outro local
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))
