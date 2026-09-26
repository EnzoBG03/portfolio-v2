import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAssetUrl } from '../utils/assetHelper';
import '../styles/style.css';

function StatItem({ target, label, suffix = '' }) {
  const [current, setCurrent] = useState(0);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let currentVal = 0;
        const increment = target / 30;

        const timer = setInterval(() => {
          currentVal += increment;
          if (currentVal >= target) {
            setCurrent(target);
            clearInterval(timer);
          } else {
            setCurrent(Math.floor(currentVal));
          }
        }, 50);

        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item" ref={statRef}>
      <span className="stat-number">{current}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenue sur mon Portfolio</h1>
            <h2 className="hero-subtitle">Développeur & créatif</h2>
            <p className="hero-description">
              Naviguez à travers un portfolio dynamique et personnalisé avec diverses
              informations retraçant ma personnalité, mes compétences, mes expériences et
              mes projets. Découvrez ma créativité et prenez contact avec moi pour en discuter !
            </p>
            <div className="hero-buttons">
              <a href={getAssetUrl('/src/assets/Fichiers/CV - BENOIST-GIMET Enzo.pdf')} target="_blank" rel="noreferrer" className="btn btn-primary">
                📄 Consulter mon CV
              </a>
              <Link to="/contact" className="btn btn-secondary">
                💬 Me contacter
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <div className="profile-placeholder" style={{ width: '90%', height: '90%', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(29, 229, 255, 0.1), rgba(29, 229, 255, 0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                <img src={getAssetUrl('/src/assets/moi.png')} style={{ width: '450px', height: '450px', marginLeft: '0.5rem' }} alt="Photo de profil" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <StatItem target={15} label="Projets Réalisés" suffix="+" />
          <StatItem target={2} label="Années d'Expérience" />
          <StatItem target={12} label="Technologies Maîtrisées" suffix="+" />
        </div>
      </section>
    </Layout>
  );
}