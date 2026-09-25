
import { Link } from 'react-router-dom';
import '../styles/contact.css';

function Contact() {
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
        <li><Link to="/projets" className="nav-link">Projets</Link></li>
        <li><Link to="/contact" className="nav-link active">Contact</Link></li>
      </ul>
      {/* <button className="mobile-menu-toggle">
        <i className="fas fa-bars"></i>
      </button> */}
    </nav>
  </header>

  <main className="main-content">
    {/*  Hero Contact Section  */}
    <section className="hero-contact">
      <div className="hero-contact-container">
        <div className="hero-contact-content">
          <h1 className="hero-contact-title">Voici</h1>
          <h2 className="hero-contact-name">le processus de contact</h2>
          <h3 className="hero-contact-subtitle">Via plusieurs possibilités</h3>
          <p className="hero-contact-description">
            Ci-dessous, vous pouvez retrouver toutes les informations utiles pour me contacter, que ce soit via
            les réseaux sociaux, les plateformes professionnelles, ou par courriel. Mes coordonnées téléphoniques et ma
            localisation principale sont également disponibles. Pour me contacter, vous pouvez vous servir du formulaire
            ci-dessous afin d'obtenir une ou plusieurs réponses à vos questions.
          </p>
        </div>

        <div className="hero-contact-visual">
          <div className="hero-contact-image">
            <div style={{"width":"90%","height":"90%","borderRadius":"50%","background":"var(--bg-dark)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"4rem","position":"relative","zIndex":"2","color":"var(--accent-color)"}}>
              <img src="./Images/moi6.png" style={{"width":"100%","height":"100%","borderRadius":"50%","objectFit":"cover"}} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  Contact Methods Section  */}
    <section className="contact-methods-section">
      <div className="section-container">
        <div className="contact-methods-grid">
          {/* <Link to="tel:0761704368" className="contact-method-card" data-color="phone">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-method-info">
              <h3>Téléphone</h3>
              <p>07 61 70 43 68</p>
            </div>
          </Link> */}

          <a href="mailto:enzo.benoist-gimet@outlook.fr" className="contact-method-card" data-color="email">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-method-info">
              <h3>Email</h3>
              <p>enzo.benoist-gimet@outlook.fr</p>
            </div>
          </a>

          {/* <a href="https://www.google.com/maps/place/Mairie+de+Vichy/@46.1243876,3.42837,16z" target="_blank" className="contact-method-card" data-color="location">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-method-info">
              <h3>Localisation</h3>
              <p>Vichy, France</p>
            </div>
          </a>

          <a href="https://www.instagram.com/enzo.bg03/" target="_blank" className="contact-method-card" data-color="instagram">
            <div className="contact-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="contact-method-info">
              <h3>Instagram</h3>
              <p>@enzo.bg03</p>
            </div>
          </a> */}

          <a href="https://www.linkedin.com/in/enzobenoistgimet/" target="_blank" className="contact-method-card" data-color="linkedin">
            <div className="contact-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="contact-method-info">
              <h3>LinkedIn</h3>
              <p>Enzo BENOIST-GIMET</p>
            </div>
          </a>

          <a href="https://github.com/EnzoBG03" target="_blank" className="contact-method-card" data-color="github">
            <div className="contact-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-method-info">
              <h3>GitHub</h3>
              <p>EnzoBG03</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    {/*  Contact Form Section  */}
    <section className="contact-form-section">
      <div className="form-container">
        <h2 className="form-title">Envoyez-moi un message</h2>
        <form id="contactForm">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="entreprise">Entreprise *</label>
              <input type="text" id="entreprise" name="entreprise" className="form-input" required />
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="subject">Objet du message *</label>
              <input type="text" id="subject" name="subject" className="form-input" required />
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="message">Message *</label>
              <textarea id="message" name="message" className="form-textarea" required placeholder="Décrivez votre projet ou vos questions..."></textarea>
            </div>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane" style={{"marginRight":"0.5rem"}}></i>
              Envoyer le message
            </button>
          </div>
        </form>
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

export default Contact;
