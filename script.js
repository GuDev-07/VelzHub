const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item'); //All, ou seja, tudo que contenha a class "item"
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers'); //O número que indica o slide atual
const list = document.querySelector('.list');

let active = 0; //let pq o valor vai mudar
const total = items.length //const pq o valor não vai mudar
let timer;


function update(direction) {
    document.querySelector('.item.active').classList.remove('active'); //Remove a class active do item que a possui
    document.querySelector('.dot.active').classList.remove('active');

    //PARA FRENTE
    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0
        } //Se o ativo for maior ou igual ao total de itens

    }

    //PARA TRÁS
    else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1
        }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2, '0')

}

clearInterval(timer); //Limpa o timer para reiniciar a contagem
timer = setInterval(() => {
    update(1)
}, 10000); //Muda o slide a cada 10 segundos




prevButton.addEventListener('click', () => {
    update(-1) //função com parâmetro -1 (voltar um slide)
}); //Toda vez que clicar no botão, chama a função Update (que muda a tela)

nextButton.addEventListener('click', () => {
    update(1) //função com parâmetro 1 (avançar um slide)
});

//MENU HAMBURGUER
const toggle = document.getElementById('menuToggle');
const navList = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.navbar-links a');
const closeMenu = document.querySelector('.close-menu a');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  navList.classList.remove('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});


