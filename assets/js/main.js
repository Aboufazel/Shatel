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
       proBox.classList.remove("product-d-none");
    }
)

/************product select**********/