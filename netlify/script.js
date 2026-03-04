// Custom ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".gsap-hero", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-brand-dark/95');
        navbar.classList.remove('bg-brand-dark/80');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-brand-dark/95');
        navbar.classList.add('bg-brand-dark/80');
    }
});

// Fade Up Animations
gsap.utils.toArray('.gsap-fade-up').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// Fade Left Animations
gsap.utils.toArray('.gsap-fade-left').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// Kotter Cards Stagger
gsap.from('.kotter-card', {
    scrollTrigger: {
        trigger: '#kotter',
        start: "top 60%",
        toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
});

// ADKAR Items Stagger
gsap.from('.adkar-item', {
    scrollTrigger: {
        trigger: '#adkar',
        start: "top 60%",
        toggleActions: "play none none reverse"
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
