const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit =(event) =>{// adiciona um evento 
    event.preventDefault()// Previne o comportamento padrão do formulário (que seria recarregar a página)

    const value = input.value// Obtém o valor digitado no input
    const hasNumberRegex = /\d+/g// Define uma expressão regular que verifica se há números no texto

    if(hasNumberRegex.test(value)){// Testa se o valor contém números usando a expressão regular
        alert("O texto contém número. Por favor, digite corretamente")
    }else{
        alert("O texto está correto")
    }
}