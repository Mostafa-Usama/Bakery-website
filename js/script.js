let menu = document.querySelector(".menu")
let nav = document.querySelector("nav")
let btnOpen = document.getElementById("btnOpen")
let btnClose = document.getElementById("btnClose")
let scrollUp = document.querySelector(".scroll-up")
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".nav-link")


sections.forEach(ele => {
    console.log(String(ele.offsetTop) + " " +String(ele.offsetHeight + ele.offsetTop))
})

btnOpen.addEventListener("click",toggle)
btnClose.addEventListener("click",toggle)

function toggle() {
    menu.classList.toggle("closed")
    
}
window.addEventListener("scroll", () => {
    console.log(this.scrollY)
    this.scrollY > 50 ? nav.classList.add("blur") : nav.classList.remove("blur")
    this.scrollY > 350 ? scrollUp.style.visibility = "visible" : scrollUp.style.visibility = "hidden"
    this.scrollY > 350 ? scrollUp.style.opacity = "1" : scrollUp.style.opacity = "0"

    sections.forEach((section, index) => {
        if (this.scrollY >= section.offsetTop - 180 && this.scrollY <= (section.offsetHeight + section.offsetTop - 180)) {
            section.classList.add("show-animation")
            navLinks[index].classList.add("active-link")
        }
        else {
            navLinks[index].classList.remove("active-link")
        }
    })
})

window.onload = function () {
    sections[0].classList.add("show-animation")
}