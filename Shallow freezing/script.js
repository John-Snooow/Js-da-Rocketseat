const book ={
    title:"Objeto indisponivel",
    category: "javascript",
    autor:{
        name: "João",
        email:"joão@gmail.com",
    },
}

//Ojavascript em sí não impõe restrição à modificação dos objetos
//book.category = "HTML"

//congela e impede a modificação 
Object.freeze(book)
book.category = "CSS"//não modifica

//Oobject.freeze() não impõe modificações profundas em objetos ininhados (shallow freezing)
book.autor.nome = "João"

console.log(book)