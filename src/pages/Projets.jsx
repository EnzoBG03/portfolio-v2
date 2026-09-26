import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';
import '../styles/projets.css';

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || project.targets.includes(activeFilter);
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const stats = useMemo(() => {
    return {
      total: projects.length,
      completed: projects.filter(p => p.status === 'completed').length,
      techs: new Set(projects.flatMap(p => p.tech ? p.tech.split(',').map(t => t.trim()) : [])).size
    };
  }, []);

  const handleFilterClick = (target) => {
    setActiveFilter(target);
    setSearchQuery(''); // Reset search when clicking filter
  };

  return (
    <Layout>
      <main className="main-content">
        <section className="hero-projects">
          <div className="hero-projects-container">
            <h1 className="hero-projects-title">Mes projets</h1>
            <p className="hero-subtitle">Découvrez des réalisations utilisant des technologies diverses et variées</p>
          </div>
        </section>

        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Projets</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Terminés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.techs}</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>

        <div className="search-container">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher un projet..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setActiveFilter('all');
            }}
          />
        </div>

        <div className="filter-nav">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')} title="Tous les projets">
            <i className="fa-solid fa-house"></i>
          </button>
          <button className={`filter-btn ${activeFilter === 'tie' ? 'active' : ''}`} onClick={() => handleFilterClick('tie')} title="Projets professionnels">
            <i className="fa-solid fa-user-tie"></i>
          </button>
          <button className={`filter-btn ${activeFilter === 'graduate' ? 'active' : ''}`} onClick={() => handleFilterClick('graduate')} title="Projets académiques">
            <i className="fa-solid fa-user-graduate"></i>
          </button>
          <button className={`filter-btn ${activeFilter === 'user' ? 'active' : ''}`} onClick={() => handleFilterClick('user')} title="Projets personnels">
            <i className="fa-solid fa-user"></i>
          </button>
          <button className={`filter-btn ${activeFilter === 'helmet' ? 'active' : ''}`} onClick={() => handleFilterClick('helmet')} title="En cours">
            <i className="fa-solid fa-helmet-safety"></i>
          </button>
          <button className={`filter-btn ${activeFilter === 'update' ? 'active' : ''}`} onClick={() => handleFilterClick('update')} title="En cours d'amélioration">
            <i className="fa-solid fa-wrench"></i>
          </button>
          <button className={`filter-btn ${activeFilter === 'pause' ? 'active' : ''}`} onClick={() => handleFilterClick('pause')} title="En pause">
            <i className="fa-solid fa-pause"></i>
          </button>
          <button className={`filter-btn ${activeFilter === 'check' ? 'active' : ''}`} onClick={() => handleFilterClick('check')} title="Terminé">
            <i className="fa-solid fa-check"></i>
          </button>
        </div>

        <section className="projects-gallery">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>
      </main>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Layout>
  );
}