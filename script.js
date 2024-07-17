let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.oneclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
let sections=document.querySelector('section');
let navLinks=document.querySelector('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=> {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttrbute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id+ ']').classList.add('active');
                
            });
        };
    });
    let header=documnet.querySelector('header');
    header.classList.toggle('sticky',window.scrolly>100)
    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active');


};
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay: 200
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,skills-container,.project-box',{origin:'button'});


const typed=new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Designer'],
    typeSpeed:70,
    backSpeed: 70,
    backDelay: 1000,
    loop:true,
});
