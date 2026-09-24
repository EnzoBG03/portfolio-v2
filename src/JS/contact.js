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

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const entreprise = document.getElementById('entreprise').value;
      //const telephone = document.getElementById('telephone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      const formattedText = `${message}
      
Nom : ${name}
Entreprise : ${entreprise}
Email : ${email}`;

      const mailtoLink = `mailto:enzo.benoist-gimet@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedText)}`;
      
      window.location.href = mailtoLink;
    });

    // Card hover animations
    const cards = document.querySelectorAll('.contact-method-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Mobile menu toggle functionality
    /*const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileToggle.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });*/

    // Initialize
    createParticles();

    // Form input focus animations
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
      });
      
      input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
      });
    });