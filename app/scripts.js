
const hamburgerbtn = document.querySelector('#hamburger-btn');
const overlay = document.querySelector('#overlay');
const menuContainer = document.querySelector('#menu-container');

hamburgerbtn.addEventListener('click', function() {
  hamburgerbtn.classList.toggle('open');

  if (hamburgerbtn.classList.contains('open')) {
    overlay.style.display = 'block';
    menuContainer.style.display = 'flex';
  } else {
    overlay.style.display = 'none';
    menuContainer.style.display = 'none';
  }
});