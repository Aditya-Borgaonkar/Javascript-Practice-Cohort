let body = document.querySelector('body');
let cursor = document.querySelector('#cursor');

body.addEventListener('mousemove',function(dats){
    // console.log(dats.x);
    cursor.style.left = dats.x+'px';
    cursor.style.top = dats.y+'px';
    
})