const toggleBtn = document.querySelector('.toggle-button');
const navbar = document.querySelector('.nav-bar')

toggleBtn.addEventListener('click', ()=>{
	navbar.classList.toggle('active');
})