const burger = document.getElementById('burgerBtn')
const menu = document.getElementById('mobileMenu')
const closeBtn = document.getElementById('closeBtn')


const openMenu = () => {
    menu.classList.add('open')
    menu.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
    menu.classList.remove('open')
    menu.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
}


burger.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)


menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        closeMenu()
    }
})

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu)

})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

burger.addEventListener('click', () => console.log("CLICK!"))