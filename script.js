
    'use-strict'
    // CRIANDO BLOQUEIO DE ENVIO DE FORMULÁRIO CASO OS CAMPOS NÃO SEJAM PRENCHIDOS CORRETAMENTE

    const form = document.querySelector('.validator--form')

    const inputUser = document.querySelector('#user-name')

    const inputEmail = document.querySelector('#email')

    const inputSubject = document.querySelector('.list')
    
    const feedbackMessage = document.querySelector('.feedbackMessage')

    //

    form.addEventListener('submit',function(e){
        if(!inputUser.value || !inputEmail.value || !inputSubject.value){
            showError('Existem campos vazios')
            e.preventDefault()
        }  
        // Continuar criando o focus e as outras validações
    })

    function showError(msg){
        feedbackMessage.classList.add('show')

        const spanElement = document.querySelector('.span--1')
        const createdElement = document.createElement('p')
        createdElement.textContent = msg
        spanElement.appendChild(createdElement)
    }



    