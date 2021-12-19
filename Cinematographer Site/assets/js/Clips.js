window.onload = ()=>{
const arrow = document.querySelectorAll(".fa-arrow-right");
const nav = document.querySelectorAll(".naav");
const hideOverlay = document.querySelector('.menuNav');
const menuBtn = document.querySelector('.fa-eye');
const menu = document.querySelector('.menu');
const ballText = document.querySelector('.ballText');
const barText = document.querySelector('.baText');
const kuText = document.querySelector('.kuText');
const niText = document.querySelector('.niText');
const leText = document.querySelector('.leText');
const closeBtn = document.querySelector('.fa-times-circle');
const closeBtnBa = document.querySelector('.fba');
const closeBtnKu = document.querySelector('.fku');
const closeBtnNi = document.querySelector('.fni');
const closeBtnLe = document.querySelector('.fle');
var aux = 0;


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
function turnRight(a){
    arrow[a].classList.add("rot");
};
function turnLeft(a){
    arrow[a].classList.remove("rot");
};


function rotate(){
    menuBtn.classList.add('rota');
    aux++;
}
function rotateStart(){
    menuBtn.classList.remove('rota');
    aux--;
}
function showMenu(){

    menu.classList.remove("menuHide");
    menu.classList.add("menuShow");
  
}
function hideMenu(){
    menu.classList.add("menuHide");
    menu.classList.remove("menuShow");
}
menuBtn.addEventListener('click', () => {
    if(aux === 0){
        rotate();
        showMenu();
        ballText.classList.add('indexH');
        barText.classList.add('indexH');
        kuText.classList.add('indexH');
        niText.classList.add('indexH');
        leText.classList.add('indexH');
    } 
});
hideOverlay.addEventListener('click', ()=>{
  
    if(aux === 1){
        rotateStart();
        hideMenu();
        ballText.classList.remove('indexH');
        ballText.classList.add('indexS');
        barText.classList.remove('indexH');
        barText.classList.add('indexS');
        kuText.classList.remove('indexH');
        kuText.classList.add('indexS');
        niText.classList.remove('indexH');
        niText.classList.add('indexS');
        leText.classList.remove('indexH');
        leText.classList.add('indexS');
    }
    
})

function hideImg(){
    const photo = document.querySelector('.photo');
    photo.classList.remove('photo');
    photo.classList.add('photoH');
}
function showImg(){
    const photo = document.querySelector('.photoH');
    photo.classList.remove('photoH');
    photo.classList.add('photo');
}
function hideImgBa(){
    const photo = document.querySelector('.photoBa');
    photo.classList.remove('photoBa');
    photo.classList.add('photoH');
}
function showImgBa(){
    const photo = document.querySelector('.photoH');
    photo.classList.remove('photoH');
    photo.classList.add('photoBa');
}
function hideImgKu(){
    const photo = document.querySelector('.photoKu');
    photo.classList.remove('photoKu');
    photo.classList.add('photoH');
}
function showImgKu(){
    const photo = document.querySelector('.photoH');
    photo.classList.remove('photoH');
    photo.classList.add('photoKu');
}
function hideImgNi(){
    const photo = document.querySelector('.photoNi');
    photo.classList.remove('photoNi');
    photo.classList.add('photoH');
}
function showImgNi(){
    const photo = document.querySelector('.photoH');
    photo.classList.remove('photoH');
    photo.classList.add('photoNi');
}
function hideImgLe(){
    const photo = document.querySelector('.photoLe');
    photo.classList.remove('photoLe');
    photo.classList.add('photoH');
}
function showImgLe(){
    const photo = document.querySelector('.photoH');
    photo.classList.remove('photoH');
    photo.classList.add('photoLe');
}
function navShow(){
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.ballText');
    const imgB = document.querySelector('.balenciaga');
    const vid = document.querySelector('.myVideo');
    const overlay = document.querySelector('.ov');
    const closeBtn = document.querySelector('.fa-times-circle');
    navS.classList.remove('overlayS');
    navS.classList.add('overlayB');
    ballText.classList.remove('overlayS');
    ballText.classList.add('overlayB');
    imgB.classList.remove('overlayS');
    imgB.classList.add('overlayB');
    vid.classList.remove('overlayS');
    vid.classList.add('overlayB');
    overlay.classList.remove('overlayB');
    overlay.classList.add('overlayS');
    closeBtn.classList.remove('overlayB');
    closeBtn.classList.add('far');
}
function navShowBa(){
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.baText');
    const imgB = document.querySelector('.barzoire');
    const vid = document.querySelector('.myVideoBa');
    const overlay = document.querySelector('.ob');
    const closeBtn = document.querySelector('.fa-times-circle');
    navS.classList.remove('overlayS');
    navS.classList.add('overlayB');
    ballText.classList.remove('overlayS');
    ballText.classList.add('overlayB');
    imgB.classList.remove('overlayS');
    imgB.classList.add('overlayB');
    vid.classList.remove('overlayS');
    vid.classList.add('overlayB');
    overlay.classList.remove('overlayB');
    overlay.classList.add('overlayS');
    closeBtn.classList.remove('overlayB');
    closeBtn.classList.add('fba');
}
function navShowKu(){
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.kuText');
    const imgB = document.querySelector('.kultho');
    const vid = document.querySelector('.myVideoKu');
    const overlay = document.querySelector('.ok');
    const closeBtn = document.querySelector('.fa-times-circle');
    navS.classList.remove('overlayS');
    navS.classList.add('overlayB');
    ballText.classList.remove('overlayS');
    ballText.classList.add('overlayB');
    imgB.classList.remove('overlayS');
    imgB.classList.add('overlayB');
    vid.classList.remove('overlayS');
    vid.classList.add('overlayB');
    overlay.classList.remove('overlayB');
    overlay.classList.add('overlayS');
    closeBtn.classList.remove('overlayB');
    closeBtn.classList.add('fku');
}
function navShowNi(){
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.niText');
    const imgB = document.querySelector('.nissa');
    const vid = document.querySelector('.myVideoNi');
    const overlay = document.querySelector('.on');
    const closeBtn = document.querySelector('.fa-times-circle');
    navS.classList.remove('overlayS');
    navS.classList.add('overlayB');
    ballText.classList.remove('overlayS');
    ballText.classList.add('overlayB');
    imgB.classList.remove('overlayS');
    imgB.classList.add('overlayB');
    vid.classList.remove('overlayS');
    vid.classList.add('overlayB');
    overlay.classList.remove('overlayB');
    overlay.classList.add('overlayS');
    closeBtn.classList.remove('overlayB');
    closeBtn.classList.add('fni');
}
function navShowLe(){
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.leText');
    const imgB = document.querySelector('.lensa');
    const vid = document.querySelector('.myVideoLe');
    const overlay = document.querySelector('.ol');
    const closeBtn = document.querySelector('.fa-times-circle');
    navS.classList.remove('overlayS');
    navS.classList.add('overlayB');
    ballText.classList.remove('overlayS');
    ballText.classList.add('overlayB');
    imgB.classList.remove('overlayS');
    imgB.classList.add('overlayB');
    vid.classList.remove('overlayS');
    vid.classList.add('overlayB');
    overlay.classList.remove('overlayB');
    overlay.classList.add('overlayS');
    closeBtn.classList.remove('overlayB');
    closeBtn.classList.add('fle');
}
function overlayHide(){
    const closeBtn = document.querySelector('.fa-times-circle');
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.ballText');
    const imgB = document.querySelector('.balenciaga');
    const vid = document.querySelector('.myVideo');
    const vid2 = document.querySelector('#myVideoB');
    vid2.pause();
    const overlay = document.querySelector('.ov');
    closeBtn.classList.remove('far');
    closeBtn.classList.add('overlayB');
    navS.classList.remove('overlayB');
    navS.classList.add('overlayS');
    ballText.classList.remove('overlayB');
    ballText.classList.add('overlayS');
    overlay.classList.remove('overlayS');
    overlay.classList.add('overlayB');
    vid.classList.remove('overlayB');
    vid.classList.add('overlayS');
    imgB.classList.remove('overlayB');
    imgB.classList.add('overlayS');
}
function overlayHideBa(){
    const closeBtn = document.querySelector('.fba');
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.baText');
    const imgB = document.querySelector('.barzoire');
    const vid = document.querySelector('.myVideoBa');
    const vid2 = document.querySelector('#myVideoBa');
    vid2.pause();
    const overlay = document.querySelector('.ob');
    closeBtn.classList.remove('fba');
    closeBtn.classList.add('overlayB');
    navS.classList.remove('overlayB');
    navS.classList.add('overlayS');
    ballText.classList.remove('overlayB');
    ballText.classList.add('overlayS');
    overlay.classList.remove('overlayS');
    overlay.classList.add('overlayB');
    vid.classList.remove('overlayB');
    vid.classList.add('overlayS');
    imgB.classList.remove('overlayB');
    imgB.classList.add('overlayS');
}
function overlayHideKu(){
    const closeBtn = document.querySelector('.fku');
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.kuText');
    const imgB = document.querySelector('.kultho');
    const vid = document.querySelector('.myVideoKu');
    const vid2 = document.querySelector('#myVideoKu');
    vid2.pause();
    const overlay = document.querySelector('.ok');
    closeBtn.classList.remove('fku');
    closeBtn.classList.add('overlayB');
    navS.classList.remove('overlayB');
    navS.classList.add('overlayS');
    ballText.classList.remove('overlayB');
    ballText.classList.add('overlayS');
    overlay.classList.remove('overlayS');
    overlay.classList.add('overlayB');
    vid.classList.remove('overlayB');
    vid.classList.add('overlayS');
    imgB.classList.remove('overlayB');
    imgB.classList.add('overlayS');
}
function overlayHideNi(){
    const closeBtn = document.querySelector('.fni');
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.niText');
    const imgB = document.querySelector('.nissa');
    const vid = document.querySelector('.myVideoNi');
    const vid2 = document.querySelector('#myVideoNi');
    vid2.pause();
    const overlay = document.querySelector('.on');
    closeBtn.classList.remove('fni');
    closeBtn.classList.add('overlayB');
    navS.classList.remove('overlayB');
    navS.classList.add('overlayS');
    ballText.classList.remove('overlayB');
    ballText.classList.add('overlayS');
    overlay.classList.remove('overlayS');
    overlay.classList.add('overlayB');
    vid.classList.remove('overlayB');
    vid.classList.add('overlayS');
    imgB.classList.remove('overlayB');
    imgB.classList.add('overlayS');
}
function overlayHideLe(){
    const closeBtn = document.querySelector('.fle');
    const navS = document.querySelector('.menu-btn');
    const ballText = document.querySelector('.leText');
    const imgB = document.querySelector('.lensa');
    const vid = document.querySelector('.myVideoLe');
    const vid2 = document.querySelector('#myVideoLe');
    vid2.pause();
    const overlay = document.querySelector('.ol');
    closeBtn.classList.remove('fle');
    closeBtn.classList.add('overlayB');
    navS.classList.remove('overlayB');
    navS.classList.add('overlayS');
    ballText.classList.remove('overlayB');
    ballText.classList.add('overlayS');
    overlay.classList.remove('overlayS');
    overlay.classList.add('overlayB');
    vid.classList.remove('overlayB');
    vid.classList.add('overlayS');
    imgB.classList.remove('overlayB');
    imgB.classList.add('overlayS');
}
closeBtn.addEventListener('click',()=>{
    overlayHide();
})
closeBtnBa.addEventListener('click',()=>{
    overlayHideBa();
})
closeBtnKu.addEventListener('click',()=>{
    overlayHideKu();
})
closeBtnNi.addEventListener('click',()=>{
    overlayHideNi();
})
closeBtnLe.addEventListener('click',()=>{
    overlayHideLe();
})
ballText.addEventListener('click', ()=>{
    navShow();
})
barText.addEventListener('click', ()=>{
    navShowBa();
})
kuText.addEventListener('click', ()=>{
    navShowKu();
})
niText.addEventListener('click', ()=>{
    navShowNi();
})
leText.addEventListener('click', ()=>{
    navShowLe();
})
ballText.addEventListener('mouseover', ()=>{
    hideImg();
})
ballText.addEventListener('mouseout', ()=>{
    showImg();
})
barText.addEventListener('mouseover', ()=>{
    hideImgBa();
})
barText.addEventListener('mouseout', ()=>{
    showImgBa();
})
kuText.addEventListener('mouseover', ()=>{
    hideImgKu();
})
kuText.addEventListener('mouseout', ()=>{
    showImgKu();
})
niText.addEventListener('mouseover', ()=>{
    hideImgNi();
})
niText.addEventListener('mouseout', ()=>{
    showImgNi();
})
leText.addEventListener('mouseover', ()=>{
    hideImgLe();
})
leText.addEventListener('mouseout', ()=>{
    showImgLe();
})

};

