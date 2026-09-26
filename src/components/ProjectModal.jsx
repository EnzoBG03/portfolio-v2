import { useState } from 'react';
import { getAssetUrl } from '../utils/assetHelper';

function generateVersionContent(versionData) {
  if (!versionData) return null;
  const hasNextVersion = versionData.nextVersion && versionData.nextVersionFeatures;
  const nextVersionClass = hasNextVersion ? '' : 'no-update';
  const nextVersionNumber = versionData.nextVersion || 'Aucune';
  const nextVersionFeatures = versionData.nextVersionFeatures || 'Aucune mise à jour majeure prévue pour le moment : cette version est considérée comme stable.';

  return (
    <div className="version-details-card">
      <div className="version-current">
        <div className="version-header">
          <h4>Version actuelle</h4>
          <span className="version-number">{versionData.currentVersion}</span>
        </div>
        <p className="version-description">{versionData.versionDetails}</p>
      </div>

      <div className="version-divider">
        <i className="fas fa-arrow-right"></i>
      </div>

      <div className={`version-next ${nextVersionClass}`}>
        <div className="version-header">
          <h4>Prochaine version</h4>
          <span className={`version-number next ${nextVersionClass}`}>{nextVersionNumber}</span>
        </div>
        <p className={`version-description ${nextVersionClass}`}>{nextVersionFeatures}</p>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, isOpen, onClose }) {
  // We can track the project to reset state using simple state mapping
  const [currentProjectTitle, setCurrentProjectTitle] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeVersionKey, setActiveVersionKey] = useState(null);

  if (project && project.title !== currentProjectTitle) {
    setCurrentProjectTitle(project.title);
    setCurrentImageIndex(0);
    if (project.hasMultipleVersions && project.versions) {
      setActiveVersionKey(Object.keys(project.versions)[0]);
    } else if (project.currentVersion) {
      setActiveVersionKey('main');
    } else {
      setActiveVersionKey(null);
    }
  }

  if (!isOpen || !project) return null;

  let versions = {};
  if (project.hasMultipleVersions && project.versions) {
    versions = project.versions;
  } else if (project.currentVersion) {
    versions = {
      main: {
        name: "Version principale",
        currentVersion: project.currentVersion,
        versionDetails: project.versionDetails || 'Aucune information disponible',
        nextVersion: project.nextVersion,
        nextVersionFeatures: project.nextVersionFeatures
      }
    };
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const getIconForVersion = (key, data) => {
    if (key.includes('react') || data.name.toLowerCase().includes('react')) return 'fab fa-react';
    if (key.includes('csharp') || key.includes('c#') || data.name.toLowerCase().includes('c#')) return 'fas fa-desktop';
    if (key.includes('mobile') || data.name.toLowerCase().includes('mobile')) return 'fas fa-mobile-alt';
    if (key.includes('web') || data.name.toLowerCase().includes('web')) return 'fas fa-globe';
    if (key === 'main') return 'fas fa-star';
    return 'fas fa-code';
  };

  const renderLinks = () => {
    const linkConfig = [
      { key: 'subject', text: 'Voir le sujet', icon: 'fas fa-file-pdf' },
      { key: 'subjectTwo', text: 'Voir le second sujet', icon: 'fas fa-file-pdf' },
      { key: 'link', text: 'Voir le projet en ligne', icon: 'fas fa-external-link-alt' },
      { key: 'linkReact', text: 'Version React', icon: 'fab fa-react' },
      { key: 'download', text: 'Télécharger les fichiers', icon: 'fas fa-download' },
      { key: 'downloadCsharp', text: 'Code C#', icon: 'fab fa-github' },
      { key: 'downloadReact', text: 'Code React', icon: 'fab fa-github' },
      { key: 'pictures', text: 'Voir les captures', icon: 'fas fa-images' },
      { key: 'downloadApk', text: 'Fichier APK', icon: 'fas fa-mobile-android-alt' }
    ];

    const availableLinks = linkConfig.filter(config => project[config.key]);

    if (availableLinks.length === 0) {
      return <div className="modal-no-data">Aucun lien disponible pour ce projet</div>;
    }

    return availableLinks.map(config => (
      <a key={config.key} href={getAssetUrl(project[config.key])} className="modal-link" target="_blank" rel="noreferrer">
        <i className={config.icon}></i>
        {config.text}
      </a>
    ));
  };

  return (
    <div id="modal" className="modal" style={{ display: 'flex', opacity: 1 }} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="modal-project-tech">{project.tech}</div>
        </div>

        {project.isBeingUpdated && project.updateDetails && (
          <div className="modal-update-info">
            <div className="update-banner">
              <i className="fas fa-wrench"></i>
              <strong>Projet en cours d'amélioration</strong> {project.updateDetails}
            </div>
          </div>
        )}

        <p id="modal-description">{project.details || project.description}</p>

        {project.images && project.images.length > 0 && (
          <div className="modal-gallery-section" style={{ display: 'block' }}>
            <h3 className="modal-gallery-title">
              <i className="fas fa-images"></i>
              Aperçu du projet
            </h3>

            <div className="gallery-container">
              <img
                className="gallery-main-image"
                src={getAssetUrl(project.images[currentImageIndex].src)}
                alt={project.images[currentImageIndex].alt || "Image du projet"}
              />

              {project.images.length > 1 && (
                <>
                  <button className="gallery-nav prev" onClick={handlePrevImage}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="gallery-nav next" onClick={handleNextImage}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <div className="image-counter">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="gallery-thumbnails">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={getAssetUrl(img.src)} alt={img.alt || `Miniature ${idx}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {project.targets && project.targets.includes('user') && Object.keys(versions).length > 0 && (
          <div className="modal-version-section" style={{ display: 'block' }}>
            <h3 className="modal-version-title">
              <i className="fas fa-code-branch"></i>
              Informations de version
            </h3>

            <div className="unified-version-container">
              <div className="version-tabs">
                {Object.entries(versions).map(([key, data]) => (
                  <button
                    key={key}
                    className={`version-tab ${activeVersionKey === key ? 'active' : ''}`}
                    onClick={() => setActiveVersionKey(key)}
                  >
                    <i className={getIconForVersion(key, data)}></i> {data.name}
                  </button>
                ))}
              </div>

              <div className="version-content">
                {activeVersionKey && versions[activeVersionKey] ? generateVersionContent(versions[activeVersionKey]) : null}
              </div>
            </div>
          </div>
        )}

        <div className="modal-links">
          {renderLinks()}
        </div>
      </div>
    </div>
  );
}