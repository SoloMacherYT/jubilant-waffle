const menuIcon = document.getElementById('menu-icon');
const mid = document.getElementById('mid');

menuIcon.addEventListener('click', () => {
  mid.classList.toggle('open');
  menuIcon.textContent = mid.classList.contains('open') ? '✖' : '☰';
});
