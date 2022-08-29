var $ = document;

const header__right__Mobile = $.querySelector('.header__right__Mobile');
const list = $.querySelector('.menu__item__burger');


 var bool =true;
 header__right__Mobile.addEventListener('click', ()=>{
    if (bool == true) {
        header__right__Mobile.classList.add('open');
        list.style.top='50px';
        bool = false;
    }
    else{
        header__right__Mobile.classList.remove('open');
        list.style.top='-100%';
        bool = true;
    }
})


// javascript slider main
function classSwitcher() {
  slide.forEach(slide =>slide.classList.remove('active'));
  slide[active].classList.add('active');

}


let goNext =() =>{
  console.log(active);
  active++;
  if (active == slide.length ) {
    active = 0;
  }
  else{
    active+1;
  }
  classSwitcher()
}
// variables
let active = 0;
let timer =8000
let slider__main = document.querySelector('.slider__main');
let slide =document.querySelectorAll('.slide');
let prev =document.querySelector('.prev');
let next =document.querySelector('.next');

// setInterval
let stop = setInterval(goNext , timer);

// prev event
prev.addEventListener('click',e=>goNext())
// next event
next.addEventListener('click',e=>goNext())

// mouseover
slider__main.addEventListener('mouseover',e=>clearInterval(stop))
// mouseleave
slider__main.addEventListener('mouseleave',e=>setInterval(goNext , timer));