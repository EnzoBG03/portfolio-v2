
import { Link } from 'react-router-dom';
import '../styles/projets.css';

function Projets() {
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
        <li><Link to="/competences" className="nav-link">Compétences</Link></li>
        <li><Link to="/experience" className="nav-link">Expérience</Link></li>
        <li><Link to="/projets" className="nav-link active">Projets</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  </header>

  <main className="main-content">
    {/*  Hero Section  */}
    <section className="hero-projects">
      <div className="hero-projects-container">
        <h1 className="hero-projects-title">Mes projets</h1>
        <p className="hero-subtitle">Découvrez des réalisations utilisant des technologies diverses et variées</p>
      </div>
    </section>

    {/*  Projects Stats  */}
    <div className="projects-stats">
      <div className="stat-item">
        <span className="stat-number" id="totalProjects">16</span>
        <span className="stat-label">Projets</span>
      </div>
      <div className="stat-item">
        <span className="stat-number" id="completedProjects">12</span>
        <span className="stat-label">Terminés</span>
      </div>
      <div className="stat-item">
        <span className="stat-number" id="technologiesUsed">8</span>
        <span className="stat-label">Technologies</span>
      </div>
    </div>

    {/*  Search Bar  */}
    <div className="search-container">
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
      <input type="text" className="search-input" placeholder="Rechercher un projet..." id="searchInput" />
    </div>

    {/*  Filter Navigation  */}
    <div className="filter-nav">
      <button className="filter-btn active" data-target="all" title="Tous les projets">
        <i className="fa-solid fa-house"></i>
      </button>
      <button className="filter-btn" data-target="tie" title="Projets professionnels">
        <i className="fa-solid fa-user-tie"></i>
      </button>
      <button className="filter-btn" data-target="graduate" title="Projets académiques">
        <i className="fa-solid fa-user-graduate"></i>
      </button>
      <button className="filter-btn" data-target="user" title="Projets personnels">
        <i className="fa-solid fa-user"></i>
      </button>
      <button className="filter-btn" data-target="helmet" title="En cours">
        <i className="fa-solid fa-helmet-safety"></i>
      </button>
      <button className="filter-btn" data-target="update" title="En cours d'amélioration">
        <i className="fa-solid fa-wrench"></i>
      </button>
      <button className="filter-btn" data-target="pause" title="En pause">
        <i className="fa-solid fa-pause"></i>
      </button>
      <button className="filter-btn" data-target="check" title="Terminé">
        <i className="fa-solid fa-check"></i>
      </button>
    </div>

    {/*  Projects Gallery  */}
    <section className="projects-gallery">
      <div className="projects-grid" id="projectsGrid">
        {/*  Project cards will be generated here  */}
      </div>
    </section>
  </main>

  {/*  Modal améliorée  */}
  <div id="modal" className="modal">
    <div className="modal-content">
      <span className="close">&times;</span>
      <div className="modal-header">
        <h2 id="modal-title"></h2>
        <div className="modal-project-tech" id="modal-tech"></div>
      </div>
      <p id="modal-description"></p>

      {/*  Nouvelle section galerie  */}
    <div className="modal-gallery-section" id="modal-gallery-section" style={{"display":"none"}}>
      <h3 className="modal-gallery-title">
        <i className="fas fa-images"></i>
        Aperçu du projet
      </h3>

      <div className="gallery-container">
        <img id="gallery-main-image" className="gallery-main-image" src="" alt="Image du projet" />

        <button className="gallery-nav prev" id="gallery-prev">
          <i className="fas fa-chevron-left"></i>
        </button>

        <button className="gallery-nav next" id="gallery-next">
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="image-counter" id="image-counter">1 / 1</div>
      </div>

      <div className="gallery-thumbnails" id="gallery-thumbnails">
        {/*  Les miniatures seront générées ici  */}
      </div>
    </div>


{/*  Section versions unifiée  */}
<div className="modal-version-section" id="modal-version-section" style={{"display":"none"}}>
  <h3 className="modal-version-title">
    <i className="fas fa-code-branch"></i>
    Informations de version
  </h3>

  <div className="unified-version-container" id="unified-version-container">
    <div className="version-tabs" id="version-tabs">
      {/*  Les onglets seront générés dynamiquement  */}
    </div>

    <div className="version-content" id="version-content">
      {/*  Le contenu sera généré dynamiquement  */}
    </div>
  </div>
</div>

      <div id="modal-links" className="modal-links"></div>
    </div>
  </div>

  {/*  Footer  */}
  <footer className="footer">
    <p>&copy; 2026 Enzo BENOIST-GIMET</p>
  </footer>



    </>
  );
}

export default Projets;
