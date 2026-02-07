import React from 'react';
import { Project } from '../types';
import GlassCard from './GlassCard';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <GlassCard hoverEffect className="group overflow-hidden flex flex-col h-full !p-0">
        {/* Image Section with Zoom Effect */}
        <div className="relative overflow-hidden h-64 w-full">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <Link to={project.link || '#'} className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="flex items-center gap-2 px-6 py-3 bg-peulla-neonBlue text-black font-bold rounded-full hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-shadow">
                        View Project <ArrowUpRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-peulla-neonBlue transition-colors duration-300">
                    {project.title}
                </h3>
                <span className="text-xs font-bold text-peulla-neonBlue px-3 py-1 bg-peulla-neonBlue/10 rounded-full border border-peulla-neonBlue/20">
                    {project.category}
                </span>
            </div>

            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    </GlassCard>
  );
};

export default ProjectCard;