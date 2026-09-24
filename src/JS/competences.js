// Particles Animation
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
      }
    }

    // Menu hamburger functionality
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Header background on scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 35, 0.95)';
      } else {
        header.style.background = 'rgba(15, 15, 35, 0.8)';
      }
    });

    // Card hover animations with enhanced effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        
        // Add a subtle glow effect based on skill level
        const indicator = this.querySelector('.skill-level-indicator');
        if (indicator.classList.contains('level-expert')) {
          this.style.boxShadow = '0 15px 35px rgba(29, 229, 255, 0.3)';
        } else if (indicator.classList.contains('level-confirmed')) {
          this.style.boxShadow = '0 15px 35px rgba(13, 206, 255, 0.3)';
        } else if (indicator.classList.contains('level-advanced')) {
          this.style.boxShadow = '0 15px 35px rgba(0, 179, 255, 0.3)';
        } else if (indicator.classList.contains('level-intermediate')) {
          this.style.boxShadow = '0 15px 35px rgba(0, 119, 255, 0.3)';
        } else if (indicator.classList.contains('level-beginner')) {
          this.style.boxShadow = '0 15px 35px rgba(0, 77, 179, 0.3)';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
      });
    });

    // Skills categories animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.skills-category').forEach(category => {
      category.style.opacity = '0';
      category.style.transform = 'translateY(30px)';
      category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(category);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Initialize particles
    createParticles();

    // Enhanced skill level indicators animation
    const indicators = document.querySelectorAll('.skill-level-indicator');
    indicators.forEach(indicator => {
      indicator.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
        this.style.filter = 'brightness(1.2)';
      });
      
      indicator.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.filter = 'brightness(1)';
      });
    });

    // Staggered animation for skill cards
    const skillCardsForAnimation = document.querySelectorAll('.skill-card');
    skillCardsForAnimation.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 200 + (index * 100));
    });

    // Certifications container hover effect
    const certificationsContainer = document.querySelector('.certifications-container');
    if (certificationsContainer) {
      certificationsContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      certificationsContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    }

    // Dynamic background color change based on scroll position
    let ticking = false;
    function updateBackground() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      document.body.style.background = `linear-gradient(135deg, 
        hsl(${210 + scrolled * 0.05}, 20%, 17%) 0%, 
        hsl(${220 + scrolled * 0.03}, 25%, 12%) 100%)`;
      
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateBackground);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick);