const book = {
    title: "Objetos imutáveis",
    category: "javascript",
    autor:{
        nome: "Rodrigo",
        email: "rodrigo.com.br",
    },
}

function deepFreeze(object){
//Obtém um array com todas as propiedades do objeto.
    const props = Reflect.ownKeys(object)
    
    //Intera sobre todas as propiedades do objeto
    for(const prop of props){
        //Obtém o valor associado à propiedade atual 
        const valeu = object[prop]
        
        //verifica se o valor é um objeto ou função para continuar aplicando o deepfreeze em objetos aninhados
        if(valeu && typeof valeu === "object" || typeof valeu === "function"){
            deepFreeze(valeu)
        }
    }
    //retorna o objeto congelado 
    return Object.freeze(object)
}
//Chama a função para congelar o objetop com Deep Freeze (congelamento profundo )
deepFreeze(book)

//esses dois topicos aqui em baixo são para demostrar que não consigo modificar nenhum dos dois niveis devido o congelamento 
book.category = "HTML"
book.autor.name = "João"

console.log(book)