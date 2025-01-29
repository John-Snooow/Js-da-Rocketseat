// O método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ["javascript", "HTML", "CSS", "web"]
//filtrando palavra que tenham mais do que 3 letras
 const resut = words.filter((word) => word.length >3)
 console.log(resut)

 const products = [
    {description: "Teclado", price: 150, promotion: true},
    {description: "Mouse", price: 70, promotion: false},
    {description: "Monitor", price: 1500, promotion: true},
 ]

 //exemplo filtro de produtos na promoção 
 const promotion = products.filter((product) => product.promotion === true)

 console.log(promotion)