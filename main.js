const nav = document.querySelector("nav")
const mobilenav = document.querySelector('nav.mobile')

menuIcon = document.querySelector('.menu-icon')
closeIcon = document.querySelector('.close-icon')
mobileContainer = document.querySelector('.mobile-container')
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 60) {
        nav.classList.add('scrolled')
        mobilenav.classList.add('scrolled')
    }else{
        nav.classList.remove('scrolled')
        mobilenav.classList.remove('scrolled')
    }
})

menuIcon.addEventListener( 'click' , ()=> {
    mobileContainer.classList.add('active')
})

closeIcon.addEventListener("click", ()=>{
    mobileContainer.classList.remove('active')
})