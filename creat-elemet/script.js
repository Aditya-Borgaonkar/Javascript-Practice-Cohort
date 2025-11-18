let btn=document.querySelector('button');
let main=document.querySelector('body');
let arr=['Hye! I am Aditya','Sheriyians is best','Anubhav is handsom','Harsh! bhaiya is best','Sarthak bhaiya is cool']


btn.addEventListener('click',function(){
    let h1=document.createElement('h1'); 
    let a=Math.floor(Math.random()*arr.length)
    h1.innerHTML=arr[a];

    let x=Math.random()*80;
    let y=Math.random()*80;
    let rot=Math.random()*361;
    let scl=Math.random()*3;

    h1.style.position='absolute';
    h1.style.left=x+'%';
    h1.style.top=y+'%';
    h1.style.rotate=rot+'deg';
    h1.style.scale=scl;
    h1.style.color='#fff'

    main.appendChild(h1);   
})