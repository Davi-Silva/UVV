let navigationBar = document.querySelector("nav")
let nextSection = navigationBar.nextElementSibling

window.onscroll = function (e) {
    if(window.scrollY >= 300) {
        navigationBar.style.position = "fixed"
        navigationBar.style.left = "50%"
        navigationBar.style.transform = "translateX(-50%)"
        navigationBar.style.transition = "all .3s ease-in-out"
    } else {
        navigationBar.style.position = "relative"
        navigationBar.style.left = "0%"
        navigationBar.style.transform = "translateX(0%)"
        navigationBar.style.transition = "all .3s ease-in-out"
    }
};