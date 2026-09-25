
import { Link } from 'react-router-dom';
import '../styles/style.css';

export default function Home() {
  return (
    <>
      <div className="particles" id="particles"></div>

      <header className="header">
        <nav className="nav-container">
          <Link to="/" className="logo">Enzo BENOIST-GIMET</Link>

          <button className="menu-toggle" id="menuToggle">
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>

          <ul className="nav-menu" id="navMenu">
            <li><Link to="/" className="nav-link active">Accueil</Link></li>
            <li><Link to="/moi" className="nav-link">À propos</Link></li>
            <li><Link to="/etudes" className="nav-link">Études</Link></li>
            <li><Link to="/competences" className="nav-link">Compétences</Link></li>
            <li><Link to="/experience" className="nav-link">Expérience</Link></li>
            <li><Link to="/projets" className="nav-link">Projets</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>

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
              <a href="./Fichiers/CV - BENOIST-GIMET Enzo.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
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
                <img src="./Images/moi.png" style={{ width: '450px', height: '450px', marginLeft: '0.5rem' }} alt="Photo de profil" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projets Réalisés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Années d'Expérience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Technologies Maîtrisées</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Enzo BENOIST-GIMET</p>
      </footer>
    </>
  );
}
