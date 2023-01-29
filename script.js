(function(){

    'use-strict'

    const form = document.querySelector('.validator--form')
    let inputUser = document.querySelector('#user-name')
    let inputEmail = document.querySelector('#email')
    let inputSubject = document.querySelector('.list')
    let textArea = document.querySelector('#complaint')
    const feedbackMessageError = document.querySelector('.feedbackMessageError')
    const btnClose = document.querySelector('.btn--close')
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    // Criando bloqueio no envio de formulário para campos invalidos

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
                inputUser.value = ''
                inputEmail.value = ''
            })
            e.preventDefault()
        }
        else if(inputUser.value.length < 3){
            showError('Nome de usuário é invalido', function(){
                inputUser.focus()
                inputUser.value = ''
            })
            e.preventDefault()
        }
        else if(!emailRegex.test(inputEmail.value)){
            showError('O e-mail é invalido', function(){
                inputEmail.focus()
                inputEmail.value = ''
            })
            e.preventDefault()
        }

    })

    function showError(msg,cb){

        const spanElement = document.querySelector('.span--1')
        const createdElement = document.createElement('p')

        inputUser.disabled = true
        inputEmail.disabled = true
        inputSubject.disabled = true
        textArea.disabled = true
        checkBox1.disabled = true
        btnSubmit.disabled = true

        feedbackMessageError.classList.add('show')
        createdElement.textContent = msg
        spanElement.appendChild(createdElement)
        
        function hideFeedBack(){
            feedbackMessageError.classList.remove('show')
            feedbackMessageError.removeEventListener('click', hideFeedBack)
            createdElement.remove()
            
            inputUser.disabled = false
            inputEmail.disabled = false
            inputSubject.disabled = false
            textArea.disabled = false
            checkBox1.disabled = false
            btnSubmit.disabled = false

            cb()
        }
        btnClose.addEventListener('click', hideFeedBack)

    }

    // Criando bloqueio no botão "enviar"

    let btnSubmit = document.querySelector('.btn')

    btnSubmit.disabled = true

    let checkBox1 = document.querySelector('#responsability')

    checkBox1.addEventListener('change',function(){

        btnSubmit.disabled = !this.checked

    })

})()




    