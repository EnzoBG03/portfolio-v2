import { getAssetUrl } from '../utils/assetHelper';

export default function ProjectCard({ project, onClick }) {
  // Try to use main image if available, else fallback to icon rendering logic
  const bgImage = project.images && project.images.length > 0
    ? getAssetUrl(project.images[0].src)
    : null;

  return (
    <div
      className="project-card"
      data-status={project.status}
      onClick={() => onClick(project)}
      style={{
        backgroundImage: bgImage ? `linear-gradient(to bottom, rgba(15, 15, 35, 0.2), rgba(15, 15, 35, 0.9)), url("${bgImage}")` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="project-status">
        <i className={`fas fa-${project.status === 'completed' ? 'check-circle' : project.status === 'progress' ? 'spinner' : 'pause-circle'}`}></i>
        {project.statusText}
      </div>

      {!bgImage && (
        <div className="project-icon">
          <i className={project.icon || "fas fa-project-diagram"}></i>
        </div>
      )}

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">{project.tech}</div>
        <button className="project-link">
          En savoir plus <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}