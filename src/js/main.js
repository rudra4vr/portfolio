// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const cursorText = document.querySelector('.cursor-text');

// Text elements that should show cursor text
const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, .project-title, .education-title, .skill-name, .stat-label');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorFollower.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
});

// Enhanced hover effects
const hoverElements = document.querySelectorAll('a, button, .project-card, .education-card, .skill-item, .timeline-content, .stat-item, .form-group input, .form-group textarea');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.borderColor = 'transparent';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.borderColor = 'var(--primary-color)';
    });
});

// Text hover effects
textElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorText.textContent = element.textContent;
        cursorText.style.left = (event.clientX + 20) + 'px';
        cursorText.style.top = (event.clientY + 20) + 'px';
        cursorText.style.opacity = '1';
        cursorText.style.transform = 'scale(1)';
        
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursorFollower.style.width = '50px';
        cursorFollower.style.height = '50px';
    });
    
    element.addEventListener('mousemove', (e) => {
        cursorText.style.left = (e.clientX + 20) + 'px';
        cursorText.style.top = (e.clientY + 20) + 'px';
    });
    
    element.addEventListener('mouseleave', () => {
        cursorText.style.opacity = '0';
        cursorText.style.transform = 'scale(0)';
        
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
});

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.02,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Education card hover effect
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.02,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Skill item hover effect
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.1,
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Timeline content hover effect
const timelineContents = document.querySelectorAll('.timeline-content');
timelineContents.forEach(content => {
    content.addEventListener('mouseenter', () => {
        gsap.to(content, {
            x: 5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    content.addEventListener('mouseleave', () => {
        gsap.to(content, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Form field hover effect
const formFields = document.querySelectorAll('.form-group input, .form-group textarea');
formFields.forEach(field => {
    field.addEventListener('mouseenter', () => {
        gsap.to(field, {
            boxShadow: '0 0 0 2px rgba(255, 111, 97, 0.2)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    field.addEventListener('mouseleave', () => {
        gsap.to(field, {
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#FF6F61'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#FF6F61',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// GSAP Animations
gsap.from('.hero-title', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.hero-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: 'power3.out'
});

gsap.from('.image-container', {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Contact Form Animation
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');
    
    input.addEventListener('focus', () => {
        gsap.to(label, {
            y: -20,
            fontSize: '0.8rem',
            color: 'var(--primary-color)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            gsap.to(label, {
                y: 0,
                fontSize: '1rem',
                color: 'var(--light-text)',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    });
});

// Initialize animations when the page loads
window.addEventListener('load', () => {
    gsap.from('.about-stats .stat-item', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
}); 