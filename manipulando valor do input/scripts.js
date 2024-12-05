const input = document.querySelector("input")
const form = document.querySelector("form")

/*
input.addEventListener("input", ()=>{
    const value = input.value

    const regex = /\D+/g

    //resgata padrão encontrado na string
    //console.log(valeu.match(regex))

    //testa se atende o padrão.
    //const isValid = regex.test(value)
    //console.log(isValid)
})
*/

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = input.value

    const regex = /\D+/g
    
    if(!regex.test(value)){// Se eu digitar apenas números ele vai mostrar a frase abaixo
        alert("Valor inválido. Digite corretamente!")
    }
    
    //const value = input.value.replace(regex, "X")// aqui ele vai trocar as letras digitadas pelo "X" retornado só  os numeros

    //console.log(value)
  })
