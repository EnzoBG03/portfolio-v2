
import { Link } from 'react-router-dom';
import '../styles/experience.css';

export default function Experience() {
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
            <li><Link to="/" className="nav-link">Accueil</Link></li>
            <li><Link to="/moi" className="nav-link">À propos</Link></li>
            <li><Link to="/etudes" className="nav-link">Études</Link></li>
            <li><Link to="/competences" className="nav-link">Compétences</Link></li>
            <li><Link to="/experience" className="nav-link active">Expérience</Link></li>
            <li><Link to="/projets" className="nav-link">Projets</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-experience">
          <div className="hero-experience-container">
            <div className="hero-experience-content">
              <h1 className="hero-experience-title">Voici</h1>
              <h2 className="hero-experience-name">mon parcours professionnel</h2>
              <h3 className="hero-experience-subtitle">Dans le domaine de l'informatique</h3>
              <p className="hero-experience-description">
                Le BTS SIO a été bénéfique pour moi, dans le sens où j'ai pu commencer à me
                familiariser avec le monde professionnel qui couvre le domaine informatique. J'ai pu apprendre
                les bases de ce monde, à savoir le travail collaboratif, ainsi que le sens de l'organisation et de la ponctualité.
                Je suis certain que mon cursus en école d'ingénieurs, ainsi que mes expériences passées et futures sauront enrichir mes connaissances,
                ainsi que moi-même.
              </p>
            </div>

            <div className="hero-experience-visual">
              <div className="hero-experience-image">
                <div style={{ width: '90%', height: '90%', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', position: 'relative', zIndex: 2 }}>
                  <img src="./Images/moi5.png" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Moi" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <div className="section-container">
            <ul className="timeline">
              <li className="experience">
                <div className="date">21 mai - 21 juin 2024</div>
                <div className="content">
                  <div className="title">Stagiaire en développement - Nexus/France (Bellerive-sur-Allier)</div>
                  <div className="description">
                    Ce premier stage m'a appris à travailler en équipe, et surtout à mettre en place un projet à partir d'un
                    cahier des charges. J'ai également pu me familiariser avec les outils de développement de l'entreprise, ce qui m'a
                    permis de mieux m'intégrer au contexte professionnel.
                  </div>
                  <div className="buttons">
                    <a href="https://www.nexus-france.fr/" target="_blank" rel="noreferrer" className="experience-button">En savoir plus sur l'entreprise</a>
                  </div>
                </div>
              </li>

              <li className="experience">
                <div className="date">13 janvier - 21 février 2025</div>
                <div className="content">
                  <div className="title">Stagiaire en développement - Yansys (Vichy)</div>
                  <div className="description">
                    Ce deuxième stage m'a permis de renforcer mes acquis, mais également d'acquérir de nouvelles facultés.
                    Cette nouvelle expérience m'a également permis de développer mes capacités d'adaptation face à un environnement dont je
                    ne connais pas toutes les particularités.
                  </div>
                  <div className="buttons">
                    <a href="https://yansys-medical.fr/" target="_blank" rel="noreferrer" className="experience-button">En savoir plus sur l'entreprise</a>
                  </div>
                </div>
              </li>

              <li className="experience">
                <div className="date">Depuis le 1er septembre 2025</div>
                <div className="content">
                  <div className="title">Développeur polyvalent en apprentissage - Fleurus (Bellerive-sur-Allier)</div>
                  <div className="description">
                    Nouvelle étape de mon parcours professionnel, cet apprentissage me permettra d'approfondir mes compétences techniques
                    tout en poursuivant ma formation d'ingénieur : il s'agit d'une opportunité unique d'allier théorie et pratique dans un
                    environnement professionnel stimulant.
                  </div>
                  <div className="buttons">
                    <a href="https://www.fleurus.fr/" target="_blank" rel="noreferrer" className="experience-button">En savoir plus sur l'entreprise</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Enzo BENOIST-GIMET</p>
      </footer>
    </>
  );
}
