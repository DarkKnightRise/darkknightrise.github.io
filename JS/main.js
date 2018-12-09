const navBar = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');
const navList = document.querySelector('li');


navBar.addEventListener('click', function() {
	navBar.classList.toggle('active');
	nav.classList.toggle('active');    
});


