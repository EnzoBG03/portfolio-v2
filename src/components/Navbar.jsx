import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/style.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" style={{ background: isScrolled ? 'rgba(15, 15, 35, 0.95)' : 'rgba(15, 15, 35, 0.8)' }}>
      <nav className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>Enzo BENOIST-GIMET</Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          id="menuToggle"
          onClick={toggleMenu}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/moi" className={`nav-link ${location.pathname === '/moi' ? 'active' : ''}`} onClick={closeMenu}>À propos</Link></li>
          <li><Link to="/etudes" className={`nav-link ${location.pathname === '/etudes' ? 'active' : ''}`} onClick={closeMenu}>Études</Link></li>
          <li><Link to="/competences" className={`nav-link ${location.pathname === '/competences' ? 'active' : ''}`} onClick={closeMenu}>Compétences</Link></li>
          <li><Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`} onClick={closeMenu}>Expérience</Link></li>
          <li><Link to="/projets" className={`nav-link ${location.pathname === '/projets' ? 'active' : ''}`} onClick={closeMenu}>Projets</Link></li>
          <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}