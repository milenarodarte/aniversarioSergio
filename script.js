const felizAniversario = document.querySelector('.felizAniversario2')
const aniversario3 = document.querySelector('.felizAniversario3')
const aniversario4 = document.querySelector('.felizAniversario4')

const imgSergioChapeu = document.querySelector('.sergioComChapeu')

const botaoChapeu = document.querySelector('.botaoChapeu')

function adicionarEventoClick () {

botaoChapeu.addEventListener('click', function (e){
    const el = e.target
    console.log(el)

    if (el.classList.contains('botaoChapeu') ){
        console.log(felizAniversario.classList)
        felizAniversario.classList.toggle('showChapeu');
        aniversario3.classList.toggle('showChapeu');
        aniversario4.classList.toggle('showChapeu');

        imgSergioChapeu.classList.toggle('showChapeu')
    }
})
}
adicionarEventoClick()