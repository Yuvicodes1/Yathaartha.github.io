let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Machine Learning Engineer', 'Backend Developer', 'Problem Solver'],
    typeSpeed: 120,
    backspeed: 40,
    backDelay:1200,
    loop:true
});

// --- Add this to your existing script.js file ---

// Modal Popup Logic
const readMoreBtn = document.querySelector('#read-more-btn');
const closeModalBtn = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('#about-modal');
const body = document.body;

// Function to open the modal
const openModal = (e) => {
    e.preventDefault(); // Prevents the link from jumping to the top of the page
    modalOverlay.classList.add('active');
    body.classList.add('blur-background');
};

// Function to close the modal
const closeModal = () => {
    modalOverlay.classList.remove('active');
    body.classList.remove('blur-background');
};

// Event Listeners
readMoreBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Also close the modal if the user clicks on the overlay itself
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});