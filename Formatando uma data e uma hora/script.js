let date = new Date("2025-01-07T14:30:00")//deve ser neste padrão para da certo

// console.log(date)

//formata para o dia ter sempre dois digitos
let day = (date.getDate().toString().padStart(2, "0"))
console.log(day)

//formata para o mês ter sempre dois digitos
let month = (date.getDate().toString().padStart(2, "0"))
console.log(month)


let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

//imprimir dia mês e ano em um linha formatado
console.log(`${day}/${month}/${year} às ${hour}h${minutes}`)