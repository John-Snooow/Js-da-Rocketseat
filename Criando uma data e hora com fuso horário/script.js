//aplicando o fuso fazendo o deslocamento de 3 horas
const dateWithTimezone = new Date("2025-01-08T22:50:00.603+03:00")

// hora atual
console.log(new Date().toLocaleString())
//hora deslocada menos 3, se eu colocar -03:00 ele vai ser adiantado 
console.log(dateWithTimezone.toLocaleString())