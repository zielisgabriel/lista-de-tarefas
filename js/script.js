// SISTEMA DE CHECK
const check = document.getElementById('check')

check.addEventListener('click', () => {
    check.classList.toggle('hide')
})

// SISTEMA PARA APAGAR UMA TAREFA
const trashButton = document.querySelector('.trash-button')
trashButton.addEventListener('click', (event) => {
    event.preventDefault()
})