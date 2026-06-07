/* ============================================
   PORTFOLIO JAVASCRIPT
   Animations, Particles, Typewriter, Cursor Trail
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // PRELOADER
    // ==========================================
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1200);
    });

    // Failsafe: hide preloader after 3s even if load event already fired
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 3000);

    // ==========================================
    // CUSTOM CURSOR — GLOWING COMET TRAIL
    // ==========================================
    const cursorCanvas = document.getElementById('cursor-canvas');
    const cursorDot = document.getElementById('cursor-dot');
    const cursorCtx = cursorCanvas.getContext('2d');

    let trail = [];
    const trailLength = 25;
    let mouseX = -100, mouseY = -100;
    let isHovering = false;

    function resizeCursorCanvas() {
        cursorCanvas.width = window.innerWidth;
        cursorCanvas.height = window.innerHeight;
    }
    resizeCursorCanvas();
    window.addEventListener('resize', resizeCursorCanvas);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Hover effect on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .skill-tag, .project-card, .cert-card, input, textarea');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            isHovering = true;
            cursorDot.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            isHovering = false;
            cursorDot.classList.remove('hovering');
        });
    });

    function animateCursorTrail() {
        // Add current position to trail
        trail.unshift({ x: mouseX, y: mouseY, time: Date.now() });
        if (trail.length > trailLength) trail.pop();

        cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

        if (trail.length > 1) {
            for (let i = 1; i < trail.length; i++) {
                const t = 1 - (i / trail.length);
                const size = t * (isHovering ? 8 : 5);
                const alpha = t * 0.6;

                // Dynamic color based on hover state
                const hue = isHovering ? 270 + (i * 3) : 185 + (i * 2);
                const saturation = 80;
                const lightness = 55 + (t * 15);

                cursorCtx.beginPath();
                cursorCtx.arc(trail[i].x, trail[i].y, size, 0, Math.PI * 2);
                cursorCtx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
                cursorCtx.fill();

                // Glow effect
                if (i < 8) {
                    cursorCtx.beginPath();
                    cursorCtx.arc(trail[i].x, trail[i].y, size * 2.5, 0, Math.PI * 2);
                    cursorCtx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha * 0.15})`;
                    cursorCtx.fill();
                }
            }

            // Draw connecting line through the trail
            cursorCtx.beginPath();
            cursorCtx.moveTo(trail[0].x, trail[0].y);
            for (let i = 1; i < trail.length; i++) {
                cursorCtx.lineTo(trail[i].x, trail[i].y);
            }
            cursorCtx.strokeStyle = isHovering
                ? 'rgba(168, 85, 247, 0.15)'
                : 'rgba(6, 182, 212, 0.15)';
            cursorCtx.lineWidth = 1.5;
            cursorCtx.stroke();
        }

        requestAnimationFrame(animateCursorTrail);
    }

    // Only run cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
        animateCursorTrail();
        document.body.style.cursor = 'none';
        document.querySelectorAll('a, button, input, textarea').forEach(el => {
            el.style.cursor = 'none';
        });
    }

    // ==========================================
    // PARTICLE SYSTEM (Hero)
    // ==========================================
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.hue = Math.random() > 0.5 ? 185 : 270; // Cyan or Purple
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        const count = Math.min(80, Math.floor(window.innerWidth / 15));
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    const opacity = (1 - dist / 150) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animationId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Pause particles when not visible
    const heroSection = document.getElementById('hero');
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationId) animateParticles();
            } else {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        });
    }, { threshold: 0.1 });
    heroObserver.observe(heroSection);

    // ==========================================
    // TYPEWRITER EFFECT
    // ==========================================
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
        'AI-powered applications.',
        'full-stack web solutions.',
        'machine learning models.',
        'data-driven insights.',
        'intelligent systems.',
        'generative AI tools.'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    setTimeout(typeWriter, 1500);

    // ==========================================
    // NAVBAR
    // ==========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const backToTop = document.getElementById('back-to-top');
    const scrollIndicator = document.getElementById('scroll-indicator');

    // Scroll Effects
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Hide scroll indicator
        if (scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }

        // Active nav link
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                const sectionId = section.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Mobile nav toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ==========================================
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 80);
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => scrollObserver.observe(el));

    // ==========================================
    // COUNTER ANIMATION
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute('data-count'));
                const isDecimal = el.getAttribute('data-decimal') === 'true';
                const duration = 2000;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = eased * target;

                    el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.textContent = isDecimal ? target.toFixed(2) : target;
                    }
                }

                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    // ==========================================
    // TILT EFFECT ON PROJECT CARDS
    // ==========================================
    const projectCards = document.querySelectorAll('.project-card-inner');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

            // Move glow
            const glow = card.querySelector('.project-glow');
            if (glow) {
                glow.style.left = x - rect.width + 'px';
                glow.style.top = y - rect.height + 'px';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ==========================================
    // CONTACT FORM
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;

        // Animate button
        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Send data to FormSubmit via AJAX
        const formData = new FormData(contactForm);
        
        // Add a hidden field to disable captchas for AJAX requests if desired, though we'll keep it simple
        
        fetch("https://formsubmit.co/ajax/shridharkalasgonda@acpce.ac.in", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';

            setTimeout(() => {
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 3000);
        })
        .catch(error => {
            submitBtn.innerHTML = '<span>Error! Try Again</span><i class="fas fa-exclamation-circle"></i>';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #f59e0b)';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            console.error("Form error:", error);
        });
    });

    // ==========================================
    // MAGNETIC BUTTON EFFECT (on CTA buttons)
    // ==========================================
    const magneticBtns = document.querySelectorAll('.btn-primary');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translateY(-3px) translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // ==========================================
    // SMOOTH REVEAL FOR SKILL TAGS
    // ==========================================
    const skillCategories = document.querySelectorAll('.skill-category');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tags = entry.target.querySelectorAll('.skill-tag');
                tags.forEach((tag, i) => {
                    tag.style.animationDelay = `${i * 0.1}s`;
                    tag.style.animationPlayState = 'running';
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillCategories.forEach(cat => skillObserver.observe(cat));

    // ==========================================
    // PARALLAX EFFECT ON GRADIENT ORBS
    // ==========================================
    const orbs = document.querySelectorAll('.hero-gradient-orb');

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 15;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

});
