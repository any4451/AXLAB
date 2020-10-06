///////////////////     Burger Menu    

const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const menu = document.querySelector('.burger-menu');



burger.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    burger.classList.remove('burger--fixed');
    body.classList.remove('overlay');
    

    if(!menu.classList.contains('active')) {
        menu.classList.add('active');
        body.classList.add('overflow');
        body.classList.add('overlay');
        burger.classList.add('burger--active');
    } else {
        menu.classList.remove('active');
        body.classList.remove('overflow');
    }


    if(form.classList.contains('active')) {
        form.classList.remove('active');
        phoneMenu.classList.remove('menu--hide');
    }
    
});

menu.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    
    if(!form.classList.contains('active')) {
        menu.classList.remove('active');
        body.classList.remove('overflow');
        body.classList.remove('overlay');
    }
});

/////// Open Form for Mobile

const formBtn = document.querySelector('.btn--phone');
const form = document.querySelector('.form--phone');
const phoneMenu = document.querySelector('.menu');


formBtn.addEventListener('click', function () {
    if(!menu.classList.contains('active')) {
        menu.classList.add('active');
        body.classList.add('overflow');
        form.classList.add('active');
        phoneMenu.classList.add('menu--hide');
        burger.classList.add('burger--active');
        burger.classList.add('burger--fixed');
    } else {
        menu.classList.remove('active');
        body.classList.remove('overflow');
        form.classList.remove('active');
        phoneMenu.classList.remove('menu--hide');
        burger.classList.remove('burger--active');
        burger.classList.remove('burger--fixed');
    }
});

///// animation
var $target = $('.show');
var hold = 120;


$.each($target, function(i,t){
     var $this = $(t);
     setTimeout(function(){ 
        $this.show().css('display', 'flex'); },i*hold);
});

///// hero video play

const playBtns = document.querySelectorAll('.btn-play');
const heroVideo = document.querySelector('.hero-video');

playBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        if(!heroVideo.classList.contains('playing')) {
            heroVideo.classList.add('playing')
        } else {
            heroVideo.classList.remove('playing');
        }    
    });
});
