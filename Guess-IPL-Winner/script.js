let btn = document.querySelector('button')
let main = document.querySelector('body');
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let arr = [
    {
        Team: 'CSK',
        Primary: 'Yellow',
        secondary: 'blue',
        capton: 'MS.DHONI',
        bg: "https://img.ipl.com/upload/20250521/e4754ab78c7117b068efd6cb7a9ddfae.jpg"
    },
    {
        Team: 'MI',
        Primary: 'Blue',
        secondary: 'Goldan',
        capton: 'Hardik Pandya',
        bg: "https://images.mid-day.com/images/images/2025/nov/MI-1763213370760_d.png"
    },
    {
        Team: 'RCB',
        Primary: 'REd',
        secondary: 'Black',
        capton: 'Rajat Patidar',
        bg: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/06/3BG2EKP-scaled.webp"
    },
    {
        Team: 'SRH',
        Primary: 'Orenge',
        secondary: 'Black',
        capton: 'Pat Cummins',
        bg: "https://news24online.com/wp-content/uploads/2024/11/Sunrisers-squad-seems-strong-for-the-upcoming-IPL-season.jpg"
    },
    {
        Team: 'KKS',
        Primary: 'Purpal',
        secondary: 'Goldan',
        capton: 'Ajinkya Rahane',
        bg: "https://images.indianexpress.com/2024/10/KKR-8.jpg"
    },
    {
        Team: 'PBKS',
        Primary: 'red',
        secondary: 'White',
        capton: 'Shreyas Iyer',
        bg: "https://img.ipl.com/upload/20250324/f1c9a1e2a66412352dd2bcafb0cff651.webp"
    },
    {
        Team: 'DD',
        Primary: 'Blue',
        secondary: 'White',
        capton: 'KL Rahul',
        bg: "https://im.rediff.com/cricket/2024/nov/22kiran-grandhi-dc2.jpg"
    },
    {
        Team: 'GT',
        Primary: 'Dark-Blue',
        secondary: 'Yellow',
        capton: 'Shubaman Gil',
        bg: "https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2024-01-16_at_17.42.25.webp?v=1705409494"
    },
    {
        Team: 'RR',
        Primary: 'Pink',
        secondary: 'blue',
        capton: 'Sanju Samson',
        bg: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/10/RR-1.webp"
    },
    {
        Team: 'LSG',
        Primary: 'Green',
        secondary: 'Black',
        capton: 'Rishab Pant',
        bg: "https://media.crictracker.com/media/attachments/1685016797661_Lucknow-Super-Giants.jpeg"
    }
]


btn.addEventListener('click', function () {
    let win = Math.floor(Math.random() * arr.length)
    h1.innerHTML = arr[win].Team;
    h2.innerHTML = arr[win].capton;
    main.style.backgroundImage = `url(${arr[win].bg})`;

})




