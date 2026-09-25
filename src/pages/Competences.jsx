
import { Link } from 'react-router-dom';
import '../styles/competences.css';

function Competences() {
  return (
    <>

  {/*  Animated particles background  */}
  <div className="particles" id="particles"></div>

  {/*  Header  */}
  <header className="header">
    <nav className="nav-container">
      <Link to="/" className="logo">Enzo BENOIST-GIMET</Link>

      {/*  Menu hamburger  */}
      <button className="menu-toggle" id="menuToggle">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>

      <ul className="nav-menu" id="navMenu">
        <li><Link to="/" className="nav-link">Accueil</Link></li>
        <li><Link to="/moi" className="nav-link">À propos</Link></li>
        <li><Link to="/etudes" className="nav-link">Études</Link></li>
        <li><Link to="/competences" className="nav-link active">Compétences</Link></li>
        <li><Link to="/experience" className="nav-link">Expérience</Link></li>
        <li><Link to="/projets" className="nav-link">Projets</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  </header>

  <main className="main-content">
    {/*  Hero Skills Section  */}
    <section className="hero-skills">
      <div className="hero-skills-container">
        <div className="hero-skills-content">
          <h1 className="hero-skills-title">Voici</h1>
          <h2 className="hero-skills-name">l'ensemble de mes compétences</h2>
          <h3 className="hero-skills-subtitle">Réparties en plusieurs catégories</h3>
          <p className="hero-skills-description">
            Au fil de mon parcours académique, j'ai appris à découvrir différents types de langages de programmation, les bases
            de l'infrastructure réseau ainsi que les enjeux de la cybersécurité à tous les niveaux. Que ce soit lors des cours ou
            lors d'un apprentissage personnel, j'ai su acquérir et améliorer des compétences qui me seront utiles à l'avenir. Même
            à l'heure actuelle, je continue d'apprendre afin d'aiguiser mes connaissances.
          </p>
          <p className="hero-skills-description">
            Voici ces compétences, réparties selon leur fonction principale :
          </p>
        </div>

        <div className="hero-skills-visual">
          <div className="hero-skills-image">
            <div style={{"width":"90%","height":"90%","borderRadius":"50%","background":"var(--bg-dark)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"3rem","position":"relative","zIndex":"2","color":"var(--accent-color)"}}>
              <img src="./Images/moi4.png" style={{"width":"100%","height":"100%","borderRadius":"50%","objectFit":"cover"}} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  Skills Section  */}
    <section className="skills-section">
      <div className="section-container">
        {/*  Skills Legend  */}
        <div className="skills-legend">
          <div className="legend-item">
            <div className="skill-level-indicator level-beginner"></div>
            <span>Débutant</span>
          </div>
          <div className="legend-item">
            <div className="skill-level-indicator level-intermediate"></div>
            <span>Intermédiaire</span>
          </div>
          <div className="legend-item">
            <div className="skill-level-indicator level-advanced"></div>
            <span>Avancé</span>
          </div>
          <div className="legend-item">
            <div className="skill-level-indicator level-confirmed"></div>
            <span>Confirmé</span>
          </div>
          <div className="legend-item">
            <div className="skill-level-indicator level-expert"></div>
            <span>Expert</span>
          </div>
        </div>

        {/*  Development Skills  */}
        <div className="skills-category">
          <h2 className="skills-category-title">Développement</h2>

          <div className="category">
            <h3 className="category-title">Langages et frameworks Web</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">HTML</span>
                  <div className="skill-level-indicator level-confirmed"></div>
                </div>
                <div className="skill-level-text">Confirmé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">CSS</span>
                  <div className="skill-level-indicator level-confirmed"></div>
                </div>
                <div className="skill-level-text">Confirmé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-level-indicator level-advanced"></div>
                </div>
                <div className="skill-level-text">Avancé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name"><a href="https://www.typescriptlang.org/fr/" className="progress-link" target="_blank" rel="noopener noreferrer">TypeScript</a></span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name"><a href="https://fr.react.dev/" className="progress-link" target="_blank" rel="noopener noreferrer">React</a></span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">ASP.NET</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name"><a href="https://angular.dev/" className="progress-link" target="_blank" rel="noopener noreferrer">Angular</a></span>
                  <div className="skill-level-indicator level-beginner"></div>
                </div>
                <div className="skill-level-text">Débutant</div>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Langages et frameworks mobile</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Xamarin.Forms (C#)</span>
                  <div className="skill-level-indicator level-confirmed"></div>
                </div>
                <div className="skill-level-text">Confirmé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name"><a href="https://dart.dev/" className="progress-link" target="_blank" rel="noopener noreferrer">Dart</a></span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name"><a href="https://flutter.dev/" className="progress-link" target="_blank" rel="noopener noreferrer">Flutter</a></span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Langages et frameworks orientés objet</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">C#</span>
                  <div className="skill-level-indicator level-expert"></div>
                </div>
                <div className="skill-level-text">Expert</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">C++</span>
                  <div className="skill-level-indicator level-advanced"></div>
                </div>
                <div className="skill-level-text">Avancé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">PHP</span>
                  <div className="skill-level-indicator level-advanced"></div>
                </div>
                <div className="skill-level-text">Avancé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Python</span>
                  <div className="skill-level-indicator level-advanced"></div>
                </div>
                <div className="skill-level-text">Avancé</div>
              </div>

              {/* <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name"><a href="https://symfony.com/" className="progress-link" target="_blank" rel="noopener noreferrer">Symfony</a></span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Débutant</div>
              </div> */}
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Système de gestion de base de données (SGBD)</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">SQL</span>
                  <div className="skill-level-indicator level-confirmed"></div>
                </div>
                <div className="skill-level-text">Confirmé</div>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Système de gestion de versions</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Git</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Moteurs de jeu</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Unreal Engine</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>
            </div>
          </div>
        </div>

        {/*  Network Skills  */}
        <div className="skills-category">
          <h2 className="skills-category-title">Réseau</h2>

          <div className="category">
            <h3 className="category-title">Infrastructure réseau</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Adressage</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Diagnostic</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Protocoles</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Configuration</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>
            </div>
          </div>
        </div>

        {/*  Cybersecurity Skills  */}
        <div className="skills-category">
          <h2 className="skills-category-title">Cybersécurité</h2>

          <div className="category">
            <h3 className="category-title">Sécurité et conformité</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name"><a href="https://cnil.fr/fr" className="progress-link" target="_blank" rel="noopener noreferrer">CNIL & RGPD</a></span>
                  <div className="skill-level-indicator level-confirmed"></div>
                </div>
                <div className="skill-level-text">Confirmé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Principes</span>
                  <div className="skill-level-indicator level-advanced"></div>
                </div>
                <div className="skill-level-text">Avancé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Analyse d'impact</span>
                  <div className="skill-level-indicator level-advanced"></div>
                </div>
                <div className="skill-level-text">Avancé</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Cryptologie</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">Failles PHP</span>
                  <div className="skill-level-indicator level-intermediate"></div>
                </div>
                <div className="skill-level-text">Intermédiaire</div>
              </div>
            </div>
          </div>
        </div>

        {/*  Certifications Section  */}
        <div className="certifications-container">
          <h2 className="certifications-title">Mes certifications OpenClassrooms</h2>
          <div className="certifications-wrapper">
            <img className="certifications-image" src="./Images/Certifications.png" alt="Certifications OpenClassrooms" />
            <div className="certifications-overlay">
              <div className="certifications-caption">Progression des cours suivis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  {/*  Footer  */}
  <footer className="footer">
    <p>&copy; 2026 Enzo BENOIST-GIMET</p>
  </footer>



    </>
  );
}

export default Competences;
