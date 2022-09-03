const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
const boxProduct = document.querySelector(".box__product");
boxProduct.addEventListener("click", function (e) {
  boxProduct.classList.toggle("click");
});
