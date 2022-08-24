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




