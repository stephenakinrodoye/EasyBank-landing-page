/*when open-mobile-menu is clicked
open-mobile-menu = display none

close-mobile-menu = display block
*/

const hamburgerbtn = document.querySelector('#hamburger-btn');

hamburgerbtn.addEventListener('click', function() {
  if (hamburgerbtn.classList.contains('open')) {
    hamburgerbtn.classList.remove('open');    
  } else {
    hamburgerbtn.classList.add('open');
  }

  console.log(hamburgerbtn);
});
