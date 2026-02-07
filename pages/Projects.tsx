import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects } = useData();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'FinTech', 'HealthTech', 'E-Commerce', 'Security', 'EdTech'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-24">
      {/* Header */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-block p-2 rounded-full bg-white/5 border border-white/10 mb-4 animate-fade-in-up">
            <span className="text-xs font-mono text-peulla-neonBlue px-2">PORTFOLIO_V2.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-peulla-neonBlue to-peulla-neonPurple">Excellence</span>
          </h1>
          <p className="text-gray-400 text-lg">
            A showcase of technical excellence and creative innovation. We build software that matters, scaling from startup MVPs to enterprise ecosystems.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="container mx-auto px-6">
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-6 py-2 rounded-full border transition-all duration-300 font-medium tracking-wide text-sm
                ${filter === cat 
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/40 hover:text-white'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-peulla-neonBlue/5 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            Our team of architects and engineers is ready to analyze your requirements and build a scalable solution.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-peulla-neonBlue to-peulla-neonPurple text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;