import { useEffect } from 'react';
import '../styles/style.css'; // Assuming this has the .particle classes

export default function Particles() {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Clear existing particles if re-rendering
    particlesContainer.innerHTML = '';

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }, []);

  return <div className="particles" id="particles"></div>;
}