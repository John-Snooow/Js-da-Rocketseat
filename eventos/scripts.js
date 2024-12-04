const ul = document.querySelector("ul")

ul.addEventListener("scroll", ()=>{ // Adiciona um evento de rolagem (scroll) ao elemento <ul>
    console.log(ul.scrollTop)
    if(ul.scrollTop > 300){     // Verifica se a posição do scroll é maior que 300 pixels

        console.log("Fim da rolagem")

        ul.scroll({         // Rola suavemente o elemento <ul> de volta para o topo
            top: 0,
            behavior: 'smooth'
        })
    }
})


const button = document.querySelector("button")// Seleciona o primeiro elemento <button> no documento HTML
button.addEventListener("click", (event)=>{ // Adiciona um evento de clique (click) ao botão
    event.preventDefault()     // Previne o comportamento padrão de recarregar a pagina (como o envio de um formulário, se o botão estiver dentro de um)
    console.log("CLICOU")
})