const ul = document.querySelector('.list')

const alertList = document.querySelector('ul .alert-list')


// PEGAR VALOR DO INPUT
const addItem = document.getElementById('add-item')
addItem.addEventListener('input', () => {
    // console.log(addItem.value)
})

// ADICIONAR NA LISTA
const submitForm = document.getElementById('submit-form')
submitForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // Criar li
    const li = document.createElement('li')
    li.classList.add('item')
    li.classList.add('border-r')

    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = addItem.value
    div.append(p)

    const checkSquare = document.createElement('div')
    checkSquare.classList.add('check-square')
    const iconCheck = document.createElement('i')
    iconCheck.classList.add('fa-solid')
    iconCheck.classList.add('fa-check')
    iconCheck.classList.add('hide')
    iconCheck.setAttribute("id", "check")
    div.prepend(checkSquare)

    // SISTEMA DE CHECK
    iconCheck.addEventListener('click', () => {
        iconCheck.classList.toggle('hide')
    })
    

    // Botão para remover o item
    const btnRemove = document.createElement('button')
    btnRemove.classList.add('trash-button')
    const iconTrash = document.createElement('i')
    iconTrash.classList.add('fa-regular')
    iconTrash.classList.add('fa-trash-can')
    iconTrash.classList.add('trash-icon')
    btnRemove.append(iconTrash)
    li.prepend(btnRemove)
    btnRemove.addEventListener('click', (event) => {
        event.preventDefault()
        ul.removeChild(li)
        const alertMessage = document.getElementById('alert')
        alertMessage.style.opacity = "100%"
        setTimeout(() => {
            alertMessage.style.opacity = "0%" 
        }, 2500)

        if(ul.childElementCount > 1){
            alertList.classList.add('hide-full')
        } else {
            alertList.classList.remove('hide-full')
        }
    })

    checkSquare.append(iconCheck)
    li.prepend(div)
    ul.prepend(li)

    if(ul.childElementCount > 1){
        alertList.classList.add('hide-full')
    } else {
        alertList.classList.remove('hide-full')
    }

    console.log(ul.childElementCount)
})