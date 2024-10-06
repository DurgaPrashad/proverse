let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

menuIcon.onclick=()=>
{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

};
window.onscroll = () => {  
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;

    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
      });
      
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });
};



window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});
document.getElementById('menu-icon').addEventListener('click', function() {
   document.querySelector('.navbar').classList.toggle('active');
 });