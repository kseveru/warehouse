var navToggle = document.querySelector(".catalog-nav__btn");
var navCatalog = document.querySelector(".catalog-nav");

navCatalog.classList.remove("nojs");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navCatalog.classList.toggle("catalog-nav--open");
});
