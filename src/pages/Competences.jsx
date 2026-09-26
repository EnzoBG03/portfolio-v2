import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAssetUrl } from '../utils/assetHelper';
import { skillsData } from '../data/skills';
import '../styles/competences.css';

export default function Competences() {
  const renderSkillCard = (skill) => (
    <div className="skill-card" key={skill.name}>
      <div className="skill-header">
        <span className="skill-name">
          {skill.link ? (
            <a href={skill.link} className="progress-link" target="_blank" rel="noopener noreferrer">
              {skill.name}
            </a>
          ) : (
            skill.name
          )}
        </span>
        <div className={`skill-level-indicator level-${skill.level}`}></div>
      </div>
      <div className="skill-level-text">{skill.text}</div>
    </div>
  );

  const renderCategory = (categoryData) => (
    <div className="category" key={categoryData.category}>
      <h3 className="category-title">{categoryData.category}</h3>
      <div className="skills-grid">
        {categoryData.skills.map(renderSkillCard)}
      </div>
    </div>
  );

  return (
    <Layout>
      <main className="main-content">
        <section className="hero-skills">
          <div className="hero-skills-container">
            <div className="hero-skills-content">
              <h1 className="hero-skills-title">Voici</h1>
              <h2 className="hero-skills-name">mes différentes compétences</h2>
              <h3 className="hero-skills-subtitle">Toutes regroupées par domaine</h3>
              <p className="hero-skills-description">
                À travers mon <Link className="section-link" to="/etudes">parcours académique</Link> et mes
                projets personnels, j'ai pu développer des compétences variées dans le domaine de
                l'informatique : mes années de BTS ont mis l'accent sur le développement d'applications logicielles, tout en
                initiant des notions de réseau et de cybersécurité. Mon alternance dans mon école d'ingénieurs ne cesse d'approfondir ces dernières.
              </p>
              <p className="hero-skills-description">
                Voici mes différentes compétences, réparties selon 3 domaines distincts :
              </p>
            </div>

            <div className="hero-skills-visual">
              <div className="hero-skills-image">
                <div style={{ width: '90%', height: '90%', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', position: 'relative', zIndex: 2 }}>
                  <img src={getAssetUrl('/src/assets/moi4.png')} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Moi" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-container">
            <div className="skills-legend">
              <div className="legend-item">
                <div className="legend-color level-expert"></div>
                <span>Expert</span>
              </div>
              <div className="legend-item">
                <div className="legend-color level-advanced"></div>
                <span>Avancé</span>
              </div>
              <div className="legend-item">
                <div className="legend-color level-confirmed"></div>
                <span>Confirmé</span>
              </div>
              <div className="legend-item">
                <div className="legend-color level-intermediate"></div>
                <span>Intermédiaire</span>
              </div>
            </div>

            <div className="skills-category">
              <h2 className="skills-category-title">Développement</h2>
              {skillsData.developpement.map(renderCategory)}
            </div>

            <div className="skills-category">
              <h2 className="skills-category-title">Réseau</h2>
              {skillsData.reseau.map(renderCategory)}
            </div>

            <div className="skills-category">
              <h2 className="skills-category-title">Cybersécurité</h2>
              {skillsData.cybersecurite.map(renderCategory)}
            </div>

            <div className="certifications-container">
              <h2 className="certifications-title">Mes certifications OpenClassrooms</h2>
              <div className="certifications-wrapper">
                <img className="certifications-image" src={getAssetUrl('/src/assets/Certifications.png')} alt="Certifications OpenClassrooms" />
                <div className="certifications-overlay">
                  <div className="certifications-caption">Progression des cours suivis</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}