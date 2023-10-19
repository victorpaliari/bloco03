function ola(){
    alert ("Olá, mundo!")
}

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

function validarNome() { 
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() { 
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf ('@') == -1 || email.value.indexOf ('.com') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto() { 
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Assunto Inválido'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = 'Assunto Válido'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário correntamente antes de enviar...')
    }
}

