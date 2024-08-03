document.addEventListener('DOMContentLoaded', function(){
const letters = document.querySelectorAll('img');
const sectionImg = document.querySelector('.section-img');

letters.forEach(letter => letter.addEventListener('mousemove', function(){
const data = letter.getAttribute('data-img');
sectionImg.style.backgroundImage = `url(./img/${data}.jpg)`
sectionImg.style.transition = '1000ms ease'
}));
letters.forEach(letter => letter.addEventListener('mouseleave', function(){
sectionImg.style.backgroundImage = 'none'
}));
});
const tl = gsap.timeline();

tl.to('.loading', {
width:'100%',
duration:2.5,
ease:'power1.inOut'
})

tl.to('.intro-container', {
scaleX:0,
duration:2,
ease:'power4.inOut',
transformOrigin:'right'
})
