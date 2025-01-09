let date = new Date("2025-01-08T22:30:00");

console.log(date.toLocaleString());

console.log(date.toLocaleString("en"));

//Exibe data e hora em Styles diferentes
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "short",
  })
);

//8 de janeiro de 2025
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "long",
  })
);

//8 de jan. de 2025
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "medium",
  })
);

//quarta-feira, 8 de janeiro de 2025
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "full",
  })
);

//edita dia mês e horas com dois digitos
console.log(
  date.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);

//formanta a moeda local
let amount = 12.5
console.log(amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
}))