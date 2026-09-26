import { useState } from 'react';
import Layout from '../components/Layout';
import { getAssetUrl } from '../utils/assetHelper';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    entreprise: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedText = `${formData.message}

Nom : ${formData.name}
Entreprise : ${formData.entreprise}
Email : ${formData.email}`;

    const mailtoLink = `mailto:enzo.benoist-gimet@outlook.fr?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formattedText)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      <main className="main-content">
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
                <div style={{ width: '90%', height: '90%', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', position: 'relative', zIndex: 2, color: 'var(--accent-color)' }}>
                  <img src={getAssetUrl('/src/assets/moi6.png')} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Moi" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-methods-section">
          <div className="section-container">
            <div className="contact-methods-grid">
              <a href="mailto:enzo.benoist-gimet@outlook.fr" className="contact-method-card" data-color="email">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-method-info">
                  <h3>Email</h3>
                  <p>enzo.benoist-gimet@outlook.fr</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/enzobenoistgimet/" target="_blank" rel="noreferrer" className="contact-method-card" data-color="linkedin">
                <div className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="contact-method-info">
                  <h3>LinkedIn</h3>
                  <p>Enzo BENOIST-GIMET</p>
                </div>
              </a>

              <a href="https://github.com/EnzoBG03" target="_blank" rel="noreferrer" className="contact-method-card" data-color="github">
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

        <section className="contact-form-section">
          <div className="form-container">
            <h2 className="form-title">Envoyez-moi un message</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Nom *</label>
                  <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="entreprise">Entreprise *</label>
                  <input type="text" id="entreprise" name="entreprise" className="form-input" value={formData.entreprise} onChange={handleChange} required />
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="subject">Objet du message *</label>
                  <input type="text" id="subject" name="subject" className="form-input" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" className="form-textarea" value={formData.message} onChange={handleChange} required placeholder="Décrivez votre projet ou vos questions..."></textarea>
                </div>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}