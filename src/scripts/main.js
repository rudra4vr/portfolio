// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Video Management
class VideoManager {
    constructor() {
        this.videos = [];
        this.currentVideoIndex = 0;
        this.videoGrid = document.getElementById('videoGrid');
        this.videoModal = document.querySelector('.video-modal');
        this.modalVideo = document.querySelector('.modal-video');
        this.modalTitle = document.querySelector('.modal-title');
        this.modalDescription = document.querySelector('.modal-description');
        this.closeModalBtn = document.querySelector('.close-modal');
        
        this.initialize();
    }

    async initialize() {
        await this.fetchVideos();
        this.renderVideos();
        this.initializeEventListeners();
    }

    async fetchVideos() {
        try {
            const response = await fetch('/videos/list.json');
            const data = await response.json();
            this.videos = data.videos;
        } catch (error) {
            console.error('Error fetching videos:', error);
            this.videos = [
                {
                    id: 1,
                    title: "Cafe 27",
                    description: "A promotional video for Cafe 27 showcasing their ambiance and menu",
                    videoPath: "/videos/CAFE 27.mp4",
                    thumbnailPath: "/videos/thumbnails/cafe27-thumb.jpg"
                },
                {
                    id: 2,
                    title: "Barista Cafe Promo",
                    description: "A promotional video for Barista Cafe highlighting their coffee culture",
                    videoPath: "/videos/BARISTA Cafe Promo Video.mp4",
                    thumbnailPath: "/videos/thumbnails/barista-thumb.jpg"
                }
            ];
        }
    }

    renderVideos() {
        this.videoGrid.innerHTML = '';
        this.videos.forEach((video, index) => {
            const videoCard = this.createVideoCard(video, index);
            this.videoGrid.appendChild(videoCard);
        });
    }

    createVideoCard(video, index) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-thumbnail-container">
                <img src="${video.thumbnailPath}" alt="${video.title}" class="video-thumbnail">
                <div class="video-overlay">
                    <div class="play-button" data-index="${index}">
                        <i class="fas fa-play"></i>
                    </div>
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
                </div>
            </div>
        `;
        return card;
    }

    initializeEventListeners() {
        // Play button click
        document.querySelectorAll('.play-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.openVideoModal(index);
            });
        });

        // Close modal
        this.closeModalBtn.addEventListener('click', () => this.closeVideoModal());

        // Close modal when clicking outside
        this.videoModal.addEventListener('click', (e) => {
            if (e.target === this.videoModal) {
                this.closeVideoModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeVideoModal();
            }
        });
    }

    openVideoModal(index) {
        this.currentVideoIndex = index;
        const video = this.videos[index];
        
        this.modalVideo.src = video.videoPath;
        this.modalTitle.textContent = video.title;
        this.modalDescription.textContent = video.description;
        
        this.videoModal.classList.add('active');
        this.modalVideo.play();
    }

    closeVideoModal() {
        this.videoModal.classList.remove('active');
        this.modalVideo.pause();
        this.modalVideo.currentTime = 0;
    }
}

// Initialize the video manager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoManager();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    try {
        const formData = new FormData(contactForm);
        
        // Convert FormData to URLSearchParams
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: JSON.stringify(formDataObject),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Message sent successfully! I'll get back to you soon.</p>
            `;
            contactForm.reset();
            contactForm.appendChild(successMessage);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <p>Oops! Something went wrong. Please try again later.</p>
        `;
        contactForm.appendChild(errorMessage);
        
        // Remove error message after 5 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    } finally {
        // Reset submit button
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.video-card, .section-header, .about-content, .contact-content').forEach(element => {
    observer.observe(element);
});

// Add hover effect to social links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});