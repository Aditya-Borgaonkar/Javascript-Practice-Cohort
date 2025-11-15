let count=document.querySelector('#count')
let innc=document.querySelector('.inc');
let rec=document.querySelector('.rec');
let dec=document.querySelector('.dec');


var i=0;
innc.addEventListener('click', function(){
    i++;
    count.innerHTML= i;
    
})
rec.addEventListener('click', function(){
    count.innerHTML= 0;
    
})

dec.addEventListener('click', function(){
    i--;
    count.innerHTML= i;
    
})

