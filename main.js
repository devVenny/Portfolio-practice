'use strict'

const menu = document.querySelector(".navbar__menus");

const contactBtn = document.querySelector(".contactBtn");
const contact = document.querySelector(".contact");

const toggleBtn = document.querySelector(".toggleBtn");

const arrowUpBtn = document.querySelector(".arrowUpBtn");
const home = document.querySelector(".home");

const navbar = document.querySelector(".navbar");

const navbarHeight = navbar.getBoundingClientRect().height;


// scroll to the linked screen when i click the navbar button

menu.addEventListener('click', (e) => {
    const dataName = e.target.dataset.name;
    if(dataName == null){
        return
    }
    const screen = document.querySelector(dataName);
    screen.scrollIntoView({behavior:"smooth"});
    menu.classList.remove("show");
})

// scroll to contact

contactBtn.addEventListener('click', () => {
    contact.scrollIntoView({behavior:"smooth"});
});

// pop up the toggle btn

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle("show");
})

// arrow up button

arrowUpBtn.addEventListener('click', () => {
  home.scrollIntoView({behavior:"smooth"});  
})

// change the navbar's color as the screen was scrolled

window.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add("colored");
    }else{
        navbar.classList.remove("colored");
    }
})

// transparent home contents not background color

const homeHeight = home.getBoundingClientRect().height;
const homeScreen = document.querySelector(".home__screen");

window.addEventListener('scroll', () => {
    const transparent = 1 - (window.scrollY / homeHeight);
    homeScreen.style.opacity=transparent;
})

// let them showed clicking project button
// animation effect showing projects 

const categoryBtn = document.querySelector(".category-btns");
const projectContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project")


categoryBtn.addEventListener('click', (e) => {
    const dataFilter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(dataFilter == undefined){
        return
    }

    console.log(dataFilter);

    projects.forEach((project) => {
        if(dataFilter == "*" || dataFilter == project.dataset.name){
            project.classList.remove("hide");
        }else{
            project.classList.add("hide");
        }
    })

    projectContainer.classList.add("anim-out");

    });

