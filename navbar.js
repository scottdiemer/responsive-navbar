const menu = document.querySelector('.menu');
const ul = document.querySelector('ul');
menu.onclick = function() {
  ul.classList.toggle('active');
}
