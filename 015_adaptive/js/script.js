let burgerIcon = document.querySelector(".header__icon")
let burgerMenu = document.querySelector(".menu-header")
burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("menu-header__active")
    burgerIcon.classList.toggle('header__icon-active')
})
