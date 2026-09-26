import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAssetUrl } from '../utils/assetHelper';
import '../styles/etudes.css';

export default function Etudes() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');

      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <main className="main-content">
        <section className="hero-studies">
          <div className="hero-studies-container">
            <div className="hero-studies-content">
              <h1 className="hero-studies-title">Voici</h1>
              <h2 className="hero-studies-name">mon parcours académique</h2>
              <h3 className="hero-studies-subtitle">Du lycée jusqu'à aujourd'hui</h3>
              <p className="hero-studies-description">
                Ce parcours académique témoigne de ma réussite et de mes
                <Link className="section-link" to="/competences">compétences</Link>.
                Il m'a permis de m'immerger dans diverses disciplines, et donc de m'orienter vers des formations qui me
                correspondent. Grâce à ce parcours, je suis désormais capable de me confronter au monde professionnel.
              </p>
              <p className="hero-studies-description">
                Voici l'intégralité de mon parcours académique jusqu'à présent :
              </p>
            </div>

            <div className="hero-studies-visual">
              <div className="hero-studies-image">
                <div style={{ width: '90%', height: '90%', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', position: 'relative', zIndex: 2, color: 'var(--accent-color)' }}>
                  <img src={getAssetUrl('/src/assets/moi3.png')} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Moi" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <div className="section-container">
            <div className="timeline" ref={timelineRef}>
              <div className="timeline-item" style={{ opacity: 0, transform: 'translateY(50px)', transition: 'all 0.6s ease' }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Baccalauréat général (2020-2023)</h4>
                  <p>Lycée général et technologique Albert Londres - Cusset</p>
                  <p>Spécialités : Mathématiques, Physique-Chimie (et <a className="section-link" href="https://www.upsti.fr/espace-etudiants/les-sciences-de-l-ingenieur/la-specialite-sciences-de-l-ingenieur" target="_blank" rel="noreferrer">Sciences de l'ingénieur</a>)</p>
                  <p>Mention Assez bien</p>
                  <div className="timeline-buttons">
                    <a href="https://albert-londres-cusset.ent.auvergnerhonealpes.fr/orientation-formations/voie-generale-et-technologique-bac-general-et-technologique-/2nde-generale-et-technologique/" target="_blank" rel="noreferrer" className="timeline-btn">En savoir plus</a>
                  </div>
                </div>
              </div>

              <div className="timeline-item" style={{ opacity: 0, transform: 'translateY(50px)', transition: 'all 0.6s ease' }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>BTS SIO (2023-2025)</h4>
                  <p>Lycées Albert Londres - Cusset</p>
                  <p>Spécialité choisie : <a className="section-link" href={getAssetUrl('/src/assets/Fichiers/Plaquette SLAM.pdf')} target="_blank" rel="noreferrer">SLAM</a></p>
                  <p>Membre du programme IngéPLUS proposé par Clermont Auvergne INP</p>
                  <div className="timeline-buttons">
                    <a href="https://albert-londres-cusset.ent.auvergnerhonealpes.fr/orientation-formations/enseignement-superieur-bts-/bts-services-informatiques-aux-organisations-sio-/" target="_blank" rel="noreferrer" className="timeline-btn">En savoir plus</a>
                    <a href="https://inge-plus.fr/" target="_blank" rel="noreferrer" className="timeline-btn">Découvrir IngéPLUS</a>
                  </div>
                </div>
              </div>

              <div className="timeline-item" style={{ opacity: 0, transform: 'translateY(50px)', transition: 'all 0.6s ease' }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Formation d'ingénieur en informatique par apprentissage (Depuis 2025)</h4>
                  <p>ISIMA - Clermont-Ferrand</p>
                  <p>Entreprise : Fleurus</p>
                  <div className="timeline-buttons">
                    <a href="https://www.isima.fr/formations/formation-ingenieur-par-apprentissage/" target="_blank" rel="noreferrer" className="timeline-btn">En savoir plus</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}