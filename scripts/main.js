const menu_btn = document.querySelector('.test__header-burger')
const menu = document.querySelector('.test__header__menu')

menu_btn.addEventListener("click", (e) => {
    e.preventDefault()
    menu.classList.toggle('test__header__menu_active');
    menu_btn.classList.toggle('test__header-burger_active');
});






const slideLeftControler = document.querySelector(".next");
const slideRightControler = document.querySelector(".prev");
const glider = document.querySelector(".test__second-block__glider");
const sliders = document.querySelectorAll(".test__second-block__container");

glideOffset = 0;
slideLeftControler.addEventListener("click", () => {
    glideOffset -= 100;
    if (glideOffset < -100 * (sliders.length - 1)) {
        glideOffset = 0;
    }
    glider.style.transform = `translateX(${glideOffset}%)`;
});
slideRightControler.addEventListener("click", () => {
    glideOffset += 100;
    if (glideOffset > 0) {
        glideOffset = -100 * (sliders.length - 1);
    }
    glider.style.transform = `translateX(${glideOffset}%)`;
});