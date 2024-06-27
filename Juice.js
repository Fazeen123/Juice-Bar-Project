const btn=document.getElementsByClassName('btn')[0];
const navlink=document.getElementsByClassName('nav-link')[0];

btn.addEventListener('click',()=>{
    navlink.classList.toggle('active');
});