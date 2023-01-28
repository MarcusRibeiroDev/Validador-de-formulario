
    'use-strict'

    const form = document.querySelector('.validator--form')
    const inputUser = document.querySelector('#user-name')
    const inputEmail = document.querySelector('#email')
    const inputSubject = document.querySelector('.list')
    const feedbackMessageError = document.querySelector('.feedbackMessageError')
    const feedbackMessageSuccess = document.querySelector('.feedbackMessageSuccess')
    const btnClose = document.querySelector('.btn--close')
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    // CRIANDO BLOQUEIO DE ENVIO DE FORMULÁRIO CASO OS CAMPOS NÃO SEJAM PRENCHIDOS CORRETAMENTE

    form.addEventListener('submit',function(e){
        if(!inputUser.value || !inputEmail.value || !inputSubject.value){
            showError('Existem campos vazios', function(){
                inputUser.focus()
            })
            e.preventDefault()
        }
        else if(inputUser.value.length < 3 && !emailRegex.test(inputEmail.value)){
            showError('Nome de usuário e e-mail são invalidos', function(){
                inputUser.focus()
            })
            e.preventDefault()
        }
        else if(inputUser.value.length < 3){
            showError('Nome de usuário é invalido', function(){
                inputUser.focus()
            })
            e.preventDefault()
        }
        else if(!emailRegex.test(inputEmail.value)){
            showError('O e-mail é invalido', function(){
                inputEmail.focus()
            })
            e.preventDefault()
        }
    })

    function showError(msg,cb){
        const spanElement = document.querySelector('.span--1')
        const createdElement = document.createElement('p')

        feedbackMessageError.classList.add('show')
        createdElement.textContent = msg
        spanElement.appendChild(createdElement)
        
        function hideFeedBack(){
            feedbackMessageError.classList.remove('show')
            feedbackMessageError.removeEventListener('click', hideFeedBack)
            createdElement.remove()
            cb()
        }
        btnClose.addEventListener('click', hideFeedBack)
    }

    // CRIAR BLOQUEIO DO BOTÃO





    