const sidebar = document.getElementById('sidebar');
const mainPart = document.getElementById('mainpart');
const effectBtn = document.getElementById('btn-effect');
const toggleBtn = document.querySelector('.mobile-nav__toggle');
const dropdown = document.querySelector('.dropdown');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__link');
const dropdownList = document.querySelector('.dropdown__item');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

console.log(dropdownList);

// Click handler for smooth scrolling
const handleSmoothScrolling = (arr) => {
  arr.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent sudden jumps
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 54, // Header height
          behavior: 'smooth',
        });
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  handleSmoothScrolling(navLinks);
  handleSmoothScrolling(dropdownLinks);

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent sudden jumps
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 54, // Header height
          behavior: 'smooth',
        });
      }
    });
  });

  // Automatically activate when scrolling to a section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const navItem = document.querySelector(`.nav__link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('link--active'));
          navItem.classList.add('link--active');
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
});

// Handle show/hidden sidebar
effectBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hide-sidebar');
  mainPart.classList.toggle('pl-0');
});

// Handle show/hidden mobile-nav
toggleBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show-dropdown');
  toggleBtn.classList.toggle('show-icon');
});

dropdownLinks?.forEach((dropdownItem) => {
  dropdownItem.addEventListener('click', () => {
    dropdown.classList.remove('show-dropdown');
    toggleBtn.classList.remove('show-icon');
  });
});
