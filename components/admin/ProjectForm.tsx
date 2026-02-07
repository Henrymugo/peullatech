import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import { Save, X } from 'lucide-react';

interface ProjectFormProps {
  project?: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Project>({
    id: '',
    title: '',
    category: 'FinTech',
    description: '',
    image: '',
    tags: [],
    link: ''
  });

  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData(prev => ({ ...prev, id: Date.now().toString() }));
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">{project ? 'Edit Project' : 'Add New Project'}</h3>
        <button type="button" onClick={onCancel} className="text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs uppercase text-gray-500 font-semibold">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-white/10 rounded p-2 text-white focus:border-peulla-neonBlue focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase text-gray-500 font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded p-2 text-white focus:border-peulla-neonBlue focus:outline-none"
          >
            {['FinTech', 'HealthTech', 'E-Commerce', 'Security', 'EdTech', 'Smart City', 'Other'].map(cat => (
              <option key={cat} value={cat} className="bg-peulla-dark">{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase text-gray-500 font-semibold">Image URL</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          placeholder="https://..."
          className="w-full bg-black/40 border border-white/10 rounded p-2 text-white focus:border-peulla-neonBlue focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase text-gray-500 font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
          className="w-full bg-black/40 border border-white/10 rounded p-2 text-white focus:border-peulla-neonBlue focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase text-gray-500 font-semibold">Tags (Press Enter)</label>
        <input
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
          className="w-full bg-black/40 border border-white/10 rounded p-2 text-white focus:border-peulla-neonBlue focus:outline-none"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-peulla-neonBlue/10 text-peulla-neonBlue rounded flex items-center gap-1">
              {tag}
              <button type="button" onClick={() => removeTag(tag)} className="hover:text-white"><X className="w-3 h-3" /></button>
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-peulla-neonBlue text-black font-bold rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
      >
        <Save className="w-4 h-4" /> Save Project
      </button>
    </form>
  );
};

export default ProjectForm;