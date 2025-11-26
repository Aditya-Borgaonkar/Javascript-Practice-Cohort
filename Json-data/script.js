let main=document.querySelector('.main')

const users = [
    {
        fullName: "Amit Barge",
        image: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Web Developer",
        description: "Frontend specialist with a passion for smooth UI and modern web trends.",
        button: "Follow"
    },
    {
        fullName: "Sneha Patil",
        image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "UI/UX Designer",
        description: "Creates minimal, user-focused designs and enjoys prototype building.",
        button: "Follow"
    },
    {
        fullName: "Rahul Sharma",
        image: "https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Software Engineer",
        description: "Enjoys solving complex problems and writing clean, scalable code.",
        button: "Follow"
    },
    {
        fullName: "Priya Kulkarni",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Digital Marketer",
        description: "Focused on SEO, branding, and building strong digital presence.",
        button: "Follow"
    },
    
];

let sum=''
users.forEach(function(elem){

    sum=sum+` <div class="card">
            <img src="${elem.image}"
                alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
            <button>Follow</button>
        </div>`
})
main.innerHTML=sum;
console.log(sum);

