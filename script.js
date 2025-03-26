const menuMobile = document.getElementById("menu")
const btnOpen = document.getElementById("btn-open")

function toggleMenu() {
    if (menuMobile.classList.contains("hidden")) {
        menuMobile.classList.remove("hidden")
        menuMobile.classList.add("flex")
    } else {
        menuMobile.classList.remove("flex")
        menuMobile.classList.add("hidden")
    }
}