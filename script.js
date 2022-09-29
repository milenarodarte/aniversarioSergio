const container = document.querySelector('.container')

let deadline = new Date('oct 01, 2022 00:00').getTime

let mensagem = [{
    id: 1,
    msg: 'Feliz aniversário, Sérgio!',
    class: 'happyBirthday',
},
{
    id: 2,
    msg: 'Volte aqui em:'
}]

function criandoPagina() {
    

    const sergioPhotoShell = document.createElement('picture')
    sergioPhotoShell.setAttribute('id', 'photoSergio')

    const sergioPhoto = document.createElement('img')
    sergioPhoto.setAttribute('src', "./img/sergiosemchapeu.png")
    sergioPhoto.setAttribute('id', 'mainPhoto')
    sergioPhoto.setAttribute('class', 'semChapeu')
    sergioPhotoShell.appendChild(sergioPhoto)

    const button = document.createElement('button')
    button.setAttribute('class', 'buttonVela')
    button.innerText = "sopre a vela"
    
    
    const h1 = document.createElement('h1')
    criandoTextoH1()
  

    container.append(sergioPhotoShell, h1, button)   
}
criandoPagina()


function trocarFoto () {
    document.addEventListener('click', function(e){
        const el = e.target
        if ( el.classList.contains('buttonVela') && sergioPhoto.classList.contains('semChapeu')) {
            sergioPhoto.setAttribute('src', "./img/sergiodechapeu.png")
            sergioPhoto.setAttribute('class', 'comChapeu')
           
        }
        else if ( el.classList.contains('buttonVela') && sergioPhoto.classList.contains('comChapeu')) {
            sergioPhoto.setAttribute('src', "./img/sergiosemchapeu.png")
            sergioPhoto.setAttribute('class', 'semChapeu')
            
        }
    })
}
trocarFoto()

function criandoTextoH1 () {

    if (h1.classList.contains('happyBirthday')){
        h1.innerText = 'Feliz aniversário, Sérgio!'
    }
    else if (h1.classList.contains('noBirthday')) {
        h1.innerText = 'Volte aqui em:'
    }
}

function criandoCronometro () {
    // vai ter o cronometro e do cronometro vai dizer qual a classe do h1
    // vai vincular o cronometro na página 
    // vai soltar confete quando clicar no assoprar vela
}