// Intl é a API de Internacionalização do ECMASript

//obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().
resolvedOptions()

console.log(currentLocale)

//Exibe no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))


const date = new Date()
//Obtém a diferença em minutos do temizone
console.log(date.getTimezoneOffset())
//Obtém a diferença em horas do temizone
console.log(date.getTimezoneOffset() / 60)