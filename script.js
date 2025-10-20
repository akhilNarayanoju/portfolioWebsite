// ===================================
// Smooth Scrolling Navigation
// ===================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('active');

            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===================================
// Sticky Navbar on Scroll
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Active Section Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Scroll Animation Observer
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// ===================================
// Skill Cards Staggered Animation
// ===================================
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===================================
// Project Cards Hover Effect
// ===================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Show success message (you can customize this)
    showNotification('Thank you for your message! I will get back to you soon.', 'success');

    // Reset form
    contactForm.reset();

    // Here you can add your actual form submission logic
    // For example, send data to a backend API or email service
    console.log('Form submitted:', formData);
});

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        animation: 'slideInRight 0.5s ease',
        maxWidth: '400px'
    });

    // Add to page
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Typing Effect for Hero Title (Optional)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect on hero title
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 100);
// });

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / hero.offsetHeight;
    }
});

// ===================================
// Smooth Scroll to Top
// ===================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
Object.assign(scrollToTopBtn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
    transition: 'all 0.3s ease'
});

scrollToTopBtn.addEventListener('click', scrollToTop);
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.backgroundColor = '#1e40af';
});
scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = '#2563eb';
});

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// ===================================
// Form Input Animation
// ===================================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ===================================
// Counter Animation for About Section
// ===================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Observe highlight items for counter animation
const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const counter = entry.target.querySelector('h3');
            const target = parseInt(counter.textContent);
            if (!isNaN(target)) {
                counter.dataset.suffix = counter.textContent.replace(target, '');
                animateCounter(counter, target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.highlight-item').forEach(item => {
    highlightObserver.observe(item);
});

// ===================================
// Initialize on Page Load
// ===================================
window.addEventListener('load', () => {
    // Set first nav link as active
    const firstNavLink = document.querySelector('.nav-link[href="#home"]');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }

    // Add loaded class to body for any load animations
    document.body.classList.add('loaded');
});

// ===================================
// Preload Images
// ===================================
function preloadImages() {
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        const newImg = new Image();
        newImg.src = img.src;
    });
}

preloadImages();

// ===================================
// Dark Mode Toggle (Optional Feature)
// ===================================
// Uncomment to enable dark mode functionality
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
Object.assign(darkModeToggle.style, {
    position: 'fixed',
    bottom: '90px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
    transition: 'all 0.3s ease'
});

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');

    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'disabled');
    }
});

document.body.appendChild(darkModeToggle);

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.querySelector('i').className = 'fas fa-sun';
}
*/

console.log('Portfolio website loaded successfully!');

// ===================================
// Ripple Effect on Click
// ===================================
function createRipple(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';

    const size = Math.max(60, Math.random() * 100);
    ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 100%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%) scale(0);
        animation: rippleAnimation 0.8s ease-out forwards;
    `;

    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleAnimation {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

document.addEventListener('click', createRipple);

// ===================================
// Particle Trail Effect on Mouse Move
// ===================================
let particleTimeout;
document.addEventListener('mousemove', (e) => {
    clearTimeout(particleTimeout);
    particleTimeout = setTimeout(() => {
        if (Math.random() > 0.7) {
            createParticle(e.clientX, e.clientY);
        }
    }, 50);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'mouse-particle';

    const colors = ['#8b5cf6', '#ec4899', '#f97316'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 6 + 3;

    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        box-shadow: 0 0 10px ${color};
        animation: particleFade 1.5s ease-out forwards;
    `;

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1500);
}

const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFade {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// ===================================
// Gradient Animation on Hero Section
// ===================================
let gradientAngle = 135;
const heroSection = document.querySelector('.hero');

if (heroSection) {
    setInterval(() => {
        gradientAngle = (gradientAngle + 0.5) % 360;
        heroSection.style.background = `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`;
    }, 50);
}

// ===================================
// Text Reveal Animation
// ===================================
function revealText() {
    const elements = document.querySelectorAll('.section-title, .hero-name');
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.opacity = '1';

        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.animation = `fadeIn 0.5s ease forwards ${index * 0.05}s`;
            el.appendChild(span);
        });
    });
}

// Add fadeIn animation for text
const textStyle = document.createElement('style');
textStyle.textContent = `
    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
        from {
            opacity: 0;
            transform: translateY(10px);
        }
    }
`;
document.head.appendChild(textStyle);

// ===================================
// Magnetic Button Effect with Glow
// ===================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ===================================
// Glow Effect on Hover for Cards
// ===================================
document.querySelectorAll('.skill-card, .project-card, .highlight-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// ===================================
// Skill Card Sequential Animation
// ===================================
const skillCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    skillCardsObserver.observe(card);
});

// ===================================
// Project Card Tilt Effect
// ===================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// ===================================
// Floating Animation for Hero Image
// ===================================
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    let floatDirection = 1;
    let floatPosition = 0;

    setInterval(() => {
        floatPosition += floatDirection * 0.5;
        if (floatPosition > 10 || floatPosition < -10) {
            floatDirection *= -1;
        }
        heroImage.style.transform = `translateY(${floatPosition}px)`;
    }, 50);
}

// ===================================
// Add Sparkle Effect on Hover
// ===================================
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #8b5cf6, #ec4899);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnimation 0.6s ease-out forwards;
    `;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600);
}

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

document.querySelectorAll('.social-icon, .skill-icon').forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        const rect = el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        for (let i = 0; i < 5; i++) {
            setTimeout(() => createSparkle(x, y), i * 100);
        }
    });
});