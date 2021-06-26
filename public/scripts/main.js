import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// Botão de copiar código da sala
const roomButton = document.querySelector("#room-id")

// Adicionar um Listener com evento de abrir a modal
checkButtons.forEach(button => {
    // Adiciona um event listener
    button.addEventListener("click", handleClick)

})

const deleteButton = document.querySelectorAll(".actions a.delete")

// Adicionar um Listener com evento de abrir a modal
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
    // Metodo antigo
    // button.addEventListener("click", event => {
    //     modal.open()
    // } )
})

function handleClick(event, check = true){    
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    
    const slug = check ? "check" : "delete"    
    const roomId = document.querySelector("#room-id").dataset.id 
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    const formParams = `${roomId}/${questionId}/${slug}`
    form.setAttribute("action", `/question/${formParams}`)
    
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()}  esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    //Abrir modal    
    modal.open()
}