import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAssetUrl } from '../utils/assetHelper';
import '../styles/moi.css';

export default function Moi() {
  const [modalData, setModalData] = useState({ isOpen: false, title: '', description: '' });

  const handleHobbyClick = (title, description) => {
    setModalData({ isOpen: true, title, description });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <Layout>
      <main className="main-content">
        <section className="hero-about">
          <div className="hero-about-container">
            <div className="hero-about-content">
              <h1 className="hero-about-title">Bonjour,</h1>
              <h2 className="hero-about-name">Je m'appelle Enzo BENOIST-GIMET</h2>
              <h3 className="hero-about-subtitle">Étudiant en diplôme d'ingénieur informatique par apprentissage</h3>
              <p className="hero-about-description">
                Étant un passionné d'informatique et de technologie depuis mon plus jeune âge, j'ai décidé de suivre cette voie afin d'affiner mes
                <Link className="section-link" to="/competences">compétences techniques</Link>, et ainsi réaliser mon
                objectif : devenir développeur de logiciels informatiques. Mes études et mon apprentissage personnel m'ont permis d'acquérir des
                connaissances solides en programmation, en gestion des réseaux et en sécurité informatique.
              </p>
            </div>

            <div className="hero-about-visual">
              <div className="hero-about-image">
                <div style={{ width: '90%', height: '90%', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', position: 'relative', zIndex: 2 }}>
                  <img src={getAssetUrl('/src/assets/moi2.png')} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Moi" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="personality-section">
          <div className="section-container">
            <div className="section-intro">
              <h2>Mes traits de personnalité</h2>
              <p>Dans les grandes lignes, voici ce qui me définit :</p>
            </div>

            <div className="cards-grid">
              <div className="personality-card">
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>❓</div>
                </div>
                <div className="card-content">
                  <h3>Curiosité</h3>
                  <p>L'une de mes plus grandes forces, qui me permet d'apprendre en continu dans différents domaines.</p>
                </div>
              </div>

              <div className="personality-card">
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>📋</div>
                </div>
                <div className="card-content">
                  <h3>Organisation</h3>
                  <p>Au cœur de mes méthodes de travail pour répondre efficacement à toutes les situations.</p>
                </div>
              </div>

              <div className="personality-card">
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>💪</div>
                </div>
                <div className="card-content">
                  <h3>Motivation</h3>
                  <p>Un moteur puissant qui m'aide à réaliser mes objectifs et me concentrer sur l'apprentissage.</p>
                </div>
              </div>

              <div className="personality-card">
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>⚡</div>
                </div>
                <div className="card-content">
                  <h3>Efficacité</h3>
                  <p>Ma marque de fabrique pour optimiser mon temps de travail et rester productif.</p>
                </div>
              </div>
            </div>

            <div className="section-intro">
              <h2>Mes loisirs et centres d'intérêt</h2>
              <p>Voici mes principaux loisirs et centres d'intérêt (cliquez sur les cartes pour plus d'informations) :</p>
            </div>

            <div className="cards-grid">
              <div className="hobbies-card" onClick={() => handleHobbyClick('Jeux vidéo', "Cette passion me permet d'affiner mes compétences de réflexion ainsi que d'améliorer ma capacité à travailler en équipe, essentiellement à travers des jeux stratégiques. Lorsque je joue seul, j'apprends à être patient et à persévérer face aux défis.")}>
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>🎮</div>
                </div>
                <div className="card-content">
                  <h3>Jeux vidéo</h3>
                  <p>Ce loisir me permet de travailler mon esprit d'équipe, ma réflexion et avant tout de me divertir.</p>
                </div>
              </div>

              <div className="hobbies-card" onClick={() => handleHobbyClick('Musique', "Mon approche éclectique de la musique nourrit ma créativité et ma capacité d'adaptation. Cette diversité culturelle est une véritable source d'inspiration dans mes projets.")}>
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>🎵</div>
                </div>
                <div className="card-content">
                  <h3>Musique</h3>
                  <p>Cette source de réconfort me permet de stimuler ma créativité, et ce peu importe le genre que j'écoute.</p>
                </div>
              </div>

              <div className="hobbies-card" onClick={() => handleHobbyClick('Sport', "Mon intérêt pour les sports collectifs et individuels développe mon esprit d'analyse tactique et ma compréhension de la performance sous pression. Ma pratique passée du volley-ball et du badminton m'a appris l'importance de la coordination, de la réactivité et de l'esprit d'équipe.")}>
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>⚽</div>
                </div>
                <div className="card-content">
                  <h3>Sport</h3>
                  <p>Que ce soit en le regardant ou en le pratiquant, je peux développer mon esprit de compétition et mon intégration à un collectif.</p>
                </div>
              </div>

              <div className="hobbies-card" onClick={() => handleHobbyClick('Cinéma', "Mon attrait pour la science-fiction et le fantastique est un véritable moteur pour ma capacité à innover : cela me permet de stimuler ma réflexion sur les technologies émergentes et leurs applications futures.")}>
                <div className="card-icon">
                  <div style={{ fontSize: '2rem', position: 'relative', zIndex: 3 }}>🍿</div>
                </div>
                <div className="card-content">
                  <h3>Cinéma</h3>
                  <p>Cette passion me permet de découvrir de nouvelles cultures et de nouveaux genres de films.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {modalData.isOpen && (
        <div id="modal" className="modal" style={{ display: 'flex' }} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 id="modal-title">{modalData.title}</h2>
            <p id="modal-description">{modalData.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
}