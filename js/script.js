const sidebar = document.getElementById('sidebar');
const mainPart = document.getElementById('mainpart');
const effectBtn = document.getElementById('btn-effect');
const toggleBtn = document.querySelector('.mobile-nav__toggle');
const dropdown = document.querySelector('.dropdown');

effectBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hide-sidebar');
  mainPart.classList.toggle('pl-0');
});

console.log(toggleBtn);
console.log(dropdown);

toggleBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show-dropdown');
  toggleBtn.classList.toggle('show-icon');
  if (nav.classList.contains('show-dropdown')) {
    navList.style.maxHeight = navList.scrollHeight + 'px';
  } else {
    navList.style.maxHeight = '0';
  }
});
