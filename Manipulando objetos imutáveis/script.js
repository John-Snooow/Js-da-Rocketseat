const book = {
    title: "Objetos imutáveis",
    category: "javascript",
    autor:{
        nome: "Rodrigo",
        email: "rodrigo.com.br",
    },
}

const updatedBook = {
    ...book,
    title: "Criando um front-end moderno com HTML",
    category: "html",
    type: "Programming",// posso acrescentar propiedades
}

//Original intacto
console.log(book)

//Modificado 
console.log(updatedBook)

//ulyilizando operador de desetruturação (rest operador) para remover propiedades.
const{category, ...bookWithoutCategory} = book // removi a categoria mais posso remover as outras propiedades também
console.log(bookWithoutCategory)