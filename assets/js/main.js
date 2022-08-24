/***********burgerheader js ***********/

const burgerMenuToggle = document.querySelector(".burgerMenu__toggle");
const hiddenMenuBox = document.querySelector(".header__top__menu__box")

const burgerIcon = `<i class="fa-solid fa-bars fa-lg"></i>`
const burgerClose = `<i class="fa fa-xmark fa-lg"></i>`
burgerMenuToggle.addEventListener(
    "click", function (e) {
        hiddenMenuBox.classList.toggle("selected");
        if (hiddenMenuBox.classList.contains("selected")){
            burgerMenuToggle.innerHTML = burgerClose;
        }
        else{
            burgerMenuToggle.innerHTML = burgerIcon;
        }
    });
/*********** burgerheader js ***********/


/************product select**********/

const proBox = document.querySelector(".product-d-none");
const proTitle = document.querySelector(".proTitle");

proTitle.addEventListener(
    "click" , function(e){
       if(proBox.classList.contains("product-d-none")){
        proBox.classList.remove("product-d-none");
       }
       else{
        proBox.classList.toggle("product-d-none");
       }
    }
);

/************product select**********/




/************support select*************/
const supportBox = document.querySelector(".support-d-none");
const supportTitle = document.querySelector(".suppTitle");

supportTitle.addEventListener(
    "click" , function(e){
        if(supportBox.classList.contains("support-d-none")){
            supportBox.classList.remove("support-d-none");
        }
        else{
            supportBox.classList.toggle("support-d-none");
        }
    }
)

/************support select*************/