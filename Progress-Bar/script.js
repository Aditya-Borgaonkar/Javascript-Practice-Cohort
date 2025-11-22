let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner')
let grow = 0;
btn.addEventListener('click', function () {
    let num=50+Math.floor(Math.random()*50)
    let int=setInterval(() => {
        grow++;
        h2.innerHTML = grow + '%';
        inner.style.width = grow + '%';
    },num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML="Downloded"
        btn.style.opacity="0.5"
        btn.style.pointerEvents='none'
    },num*100 );

})