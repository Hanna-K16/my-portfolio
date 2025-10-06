// Select the menu icon and navbar elements
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle menu and navbar visibility on click
menu.onclick = () => {
  menu.classList.toggle('bx-x');      // Switch icon style
  navbar.classList.toggle('active');  // Show/hide navbar
};

// Reset menu and navbar state on scroll
window.onscroll = () => {
  menu.classList.remove('bx-x');      // Revert icon style
  navbar.classList.remove('active');  // Hide navbar
}
const typed = new Typed('.multiple-text', {
    strings: ['Web Design', 'Backend Developer', 'Blockchain Developer', 'Web Designer', 'YouTuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});
