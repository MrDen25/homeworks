let burgerIcon = document.querySelector(".header__icon")
let burgerMenu = document.querySelector(".menu-header")
let logo = document.querySelector(".header__logo")
burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("menu-header__active")
    burgerIcon.classList.toggle('header__icon-active')
    logo.classList.toggle("header__logo-active")
})

const headerElement = document.querySelector(".header__container")
window.addEventListener("scroll", headerscroll);
function headerscroll(e) {
    if (window.scrollY > 0) {
        headerElement.parentElement.classList.add("header__wrapper--scroll")
    }
    else {
        headerElement.parentElement.classList.remove("header__wrapper--scroll")
    }

}
const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",

    threshhold: 0.1,
}

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        const targetElement = entry.target;
        if (entry.isIntersecting) {
            targetElement.classList.add("about-us__container--animate");
            // console.log("елемент видно");
        } else {
            targetElement.classList.remove("about-us__container--animate");
            // console.log("елемент не видно");
        }
    })
}




let observer = new IntersectionObserver(callback, options);
let target = document.querySelector(".about-us__container")

observer.observe(target);






// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

// const items = document.querySelectorAll(".item")
// items.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("item--active")
//     })
// })


// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
// window.addEventListener("load", pageLoaded);
// function pageLoaded(e) {
//     document.body.classList.add("load")
//     console.log("load");

// }
// body {
//   opacity: 0;
//   transition: opacity 0.3s;
// }
// body.load {
//   opacity: 1;
// }


// Задача №3
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

// let header = document.querySelector("header")
// let footer = document.querySelector("footer")
// header.addEventListener("mouseenter", () => {
//     footer.classList.add("footer--active")
// })
// header.addEventListener("mouseleave", () => {
//     footer.classList.remove("footer--active")
// })


// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

// let callbackTwo = (entries, observerTwo) => {
//     entries.forEach((entry) => {
//         const targetElement = entry.target;
//         const startValue = +targetElement.dataset.valueStart || 1
//         const endValue = +targetElement.dataset.valueEnd || 5
//         if (entry.isIntersecting) {
//             let counter = startValue
//             targetElement.textContent = counter
//             const interval = setInterval(() => {
//                 counter++
//                 targetElement.textContent = counter
//                 if (counter >= endValue) {
//                     clearInterval(interval)
//                 }

//             }, 1000)
//             observerTwo.unobserve(entry.target)
//         }
//     })
// }
// let observerTwo = new IntersectionObserver(callbackTwo, options);
// let target = document.querySelector(".about-us__container");
// let item = document.querySelector(".item")
// observerTwo.observe(item);