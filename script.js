// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Typewriter Animation
const typewriterTexts = ["Software Engineer", "Full-Stack Developer", "Tech Problem Solver"];
let typeIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let target = document.getElementById("typewriter");

function type() {
    if (charIndex < typewriterTexts[typeIndex].length) {
        target.textContent += typewriterTexts[typeIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        target.textContent = typewriterTexts[typeIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        typeIndex = (typeIndex + 1) % typewriterTexts.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// Scroll-triggered fade-ins
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Modal Logic for Live Project Previews
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    if (project === 'ajali') {
        modalContent.src = 'https://ajali-1-s5ar.onrender.com/';
    } else if (project === 'car-rental') {
        modalContent.src = 'https://car-rental-booking-system.vercel.app/cars';
    } else if (project === 'weather') {
        modalContent.src = 'https://weather-watch-lite-1-5aa2.onrender.com/'; // This portfolio itself
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modalContent.src = '';
}
