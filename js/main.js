(function(){

    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

   /* desaparece el menú responsivo al darle click en un link */
    window.onscroll = () => {
    list.classList.remove('menu__links--show');
    }



    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{


                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');

                console.log(subMenu.clientHeight);
                
                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        });
    }


    window.addEventListener ('resize', () =>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show')
        }else{
            addClick();
        }
    });

    if(window.innerHeight <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));
})();



//tarjetas nuestros servicios
const showMoreButton = document.getElementById('showMore');
const hiddenCards = document.getElementById('hiddenCards');

showMoreButton.addEventListener('click', () => {
    if (hiddenCards.style.display === 'none') {
        hiddenCards.style.display = 'flex';
        showMoreButton.innerText = '▲';
    } else {
        hiddenCards.style.display = 'none';
        showMoreButton.innerText = 'Ver más ▼';
    }
});





//Contador clientes felices
let counter = 0;
let isCounting = false;

window.addEventListener("scroll", () => {
  // Obtén la posición actual del scroll
  const scrollPosition = window.scrollY;

  // Define la posición del scroll en la que deseas que comience el contador
  const scrollStart = 1200; // Cambia esto según tus necesidades

  // Comienza el contador cuando se alcanza la posición de inicio
  if (scrollPosition >= scrollStart && !isCounting) {
    isCounting = true;
    increaseCounter();
  }
});

function increaseCounter() {
  if (counter < 136) {
    counter++;
    document.getElementById("counter1").textContent = counter;
    setTimeout(increaseCounter, 70); // Aumenta cada 100 milisegundos (ajusta según tu preferencia)
  }
}



//////////////////////////////////////////////////////
let counter2 = 0;
let isCounting2 = false;

window.addEventListener("scroll", () => {
  // Obtén la posición actual del scroll
  const scrollPosition2 = window.scrollY;

  // Define la posición del scroll en la que deseas que comience el contador
  const scrollStart2 = 1200; // Cambia esto según tus necesidades

  // Comienza el contador cuando se alcanza la posición de inicio
  if (scrollPosition2 >= scrollStart2 && !isCounting2) {
    isCounting2 = true;
    increaseCounter2();
  }
});

function increaseCounter2() {
  if (counter2 < 112) {
    counter2++;
    document.getElementById("counter2").textContent = counter2;
    setTimeout(increaseCounter2, 70); // Aumenta cada 100 milisegundos (ajusta según tu preferencia)
  }
}


//////////////////////////////////////////////////////
let counter3 = 0;
let isCounting3 = false;

window.addEventListener("scroll", () => {
  // Obtén la posición actual del scroll
  const scrollPosition3 = window.scrollY;

  // Define la posición del scroll en la que deseas que comience el contador
  const scrollStart3 = 1200; // Cambia esto según tus necesidades

  // Comienza el contador cuando se alcanza la posición de inicio
  if (scrollPosition3 >= scrollStart3 && !isCounting3) {
    isCounting3 = true;
    increaseCounter3();
  }
});

function increaseCounter3() {
  if (counter3 < 69) {
    counter3++;
    document.getElementById("counter3").textContent = counter3;
    setTimeout(increaseCounter3, 70); // Aumenta cada 100 milisegundos (ajusta según tu preferencia)
  }
}