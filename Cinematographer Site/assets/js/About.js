const arrow = document.querySelectorAll(".fa-arrow-right");
const nav = document.querySelectorAll(".nav");
const menuBtn = document.querySelector('.fa-eye');
const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
var aux = 0;

function turnRight(a){
    arrow[a].classList.add("rot");
};
function turnLeft(a){
    arrow[a].classList.remove("rot");
};
nav.forEach( (a, i) => {
    a.addEventListener('mouseover', ()=>{
         a.classList.remove("nav");
         a.classList.add("nav-a");
         turnRight(i);
    })
    a.addEventListener('mouseout', ()=> {
        a.classList.add("nav");
        a.classList.remove("nav-a");
        turnLeft(i)
    })
});

function rotate(){
    menuBtn.classList.add('rota');
    console.log("da");
    aux++;
}
function rotateStart(){
    menuBtn.classList.remove('rota');
    aux--;
}
function showMenu(){
    menu.classList.add("menuShow");
    menu.classList.remove("menuHide");
}
function hideMenu(){
    menu.classList.add("menuHide");
    menu.classList.remove("menuShow");
}
menuBtn.addEventListener('click', () => {
    if(aux === 0){
        rotate();
        showMenu();
    } else {
        rotateStart();
        hideMenu();
    }
});

home.addEventListener('click', ()=>{
    rotateStart();
    hideMenu();
})
  



