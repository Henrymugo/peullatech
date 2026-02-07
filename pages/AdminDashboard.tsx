import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Navigate } from 'react-router-dom';
import ProjectForm from '../components/admin/ProjectForm';
import { Project } from '../types';
import GlassCard from '../components/GlassCard';
import { Edit2, Trash2, Plus, LogOut, Layout, FolderKanban, CheckCircle, AlertTriangle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { 
    isAuthenticated, logout, 
    projects, addProject, updateProject, deleteProject,
    homeContent, updateHomeContent,
    aboutContent, updateAboutContent
  } = useData();
  
  const [activeTab, setActiveTab] = useState<'content' | 'projects'>('content');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  // New State for Notifications and Modals
  const [notification, setNotification] = useState<string | null>(null);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveProject = (project: Project) => {
    if (editingProject) {
      updateProject(project);
      setEditingProject(null);
      showNotification('Project updated successfully.');
    } else {
      addProject(project);
      setIsAddingProject(false);
      showNotification('New project added successfully.');
    }
  };

  const handleDeleteClick = (id: string) => {
    setProjectToDelete(id);
  };

  const confirmDelete = () => {
    if (projectToDelete) {
      deleteProject(projectToDelete);
      setProjectToDelete(null);
      showNotification('Project deleted successfully.');
    }
  };

  const handleSaveContent = () => {
     // Wrapper for content updates if we had a specific save button, 
     // but currently content updates live. We can add a manual notification here if desired.
     showNotification('Content updated successfully.');
  }

  return (
    <div className="container mx-auto px-6 pb-20 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
           <h1 className="text-3xl font-bold">Management Hub</h1>
           <p className="text-gray-400">System status: <span className="text-green-500">Active</span></p>
        </div>
        <button 
          onClick={logout} 
          className="px-6 py-2 border border-red-500/30 text-red-500 hover:bg-red-500/10 rounded-lg flex items-center gap-2 transition-colors"
        >
          <LogOut className="w-4 h-4" /> Disconnect
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-white/10 pb-1">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-6 py-3 rounded-t-lg font-bold flex items-center gap-2 transition-colors ${activeTab === 'content' ? 'bg-peulla-neonBlue/10 text-peulla-neonBlue border-b-2 border-peulla-neonBlue' : 'text-gray-400 hover:text-white'}`}
        >
          <Layout className="w-4 h-4" /> Content Editor
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-6 py-3 rounded-t-lg font-bold flex items-center gap-2 transition-colors ${activeTab === 'projects' ? 'bg-peulla-neonBlue/10 text-peulla-neonBlue border-b-2 border-peulla-neonBlue' : 'text-gray-400 hover:text-white'}`}
        >
          <FolderKanban className="w-4 h-4" /> Project Manager
        </button>
      </div>

      {/* Content Editor Tab */}
      {activeTab === 'content' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up">
          <GlassCard>
            <h2 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Home Page Configuration</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-semibold">Headline Prefix</label>
                <input 
                  value={homeContent.headlinePrefix}
                  onChange={(e) => updateHomeContent({...homeContent, headlinePrefix: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-peulla-neonBlue focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-semibold">Gradient Headline</label>
                <input 
                  value={homeContent.headlineGradient}
                  onChange={(e) => updateHomeContent({...homeContent, headlineGradient: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded p-3 text-peulla-neonBlue focus:border-peulla-neonBlue focus:outline-none font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-semibold">Subheadline</label>
                <textarea 
                  value={homeContent.subheadline}
                  onChange={(e) => updateHomeContent({...homeContent, subheadline: e.target.value})}
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded p-3 text-gray-300 focus:border-peulla-neonBlue focus:outline-none"
                />
              </div>
              <button 
                onClick={handleSaveContent}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-sm rounded border border-white/10 text-gray-300 transition-colors"
              >
                Save Changes Trigger
              </button>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">About Page Configuration</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-semibold">Main Headline</label>
                <input 
                  value={aboutContent.headline}
                  onChange={(e) => updateAboutContent({...aboutContent, headline: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-peulla-neonBlue focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-semibold">Intro Text</label>
                <textarea 
                  value={aboutContent.intro}
                  onChange={(e) => updateAboutContent({...aboutContent, intro: e.target.value})}
                  rows={6}
                  className="w-full bg-black/40 border border-white/10 rounded p-3 text-gray-300 focus:border-peulla-neonBlue focus:outline-none"
                />
              </div>
              <button 
                onClick={handleSaveContent}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-sm rounded border border-white/10 text-gray-300 transition-colors"
              >
                Save Changes Trigger
              </button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Project Manager Tab */}
      {activeTab === 'projects' && (
        <div className="space-y-6 animate-fade-in-up">
           {!isAddingProject && !editingProject && (
             <button 
               onClick={() => setIsAddingProject(true)}
               className="w-full py-4 border-2 border-dashed border-white/20 hover:border-peulla-neonBlue text-gray-400 hover:text-peulla-neonBlue rounded-xl flex items-center justify-center gap-2 transition-all mb-8"
             >
               <Plus className="w-5 h-5" /> Add New Project Case Study
             </button>
           )}

           {(isAddingProject || editingProject) && (
             <ProjectForm 
               project={editingProject || undefined} 
               onSave={handleSaveProject} 
               onCancel={() => { setIsAddingProject(false); setEditingProject(null); }}
             />
           )}

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map(project => (
               <div key={project.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col group hover:border-peulla-neonBlue/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-peulla-neonBlue/10 text-peulla-neonBlue text-xs px-2 py-1 rounded">{project.category}</div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setEditingProject(project)} className="p-1 hover:text-peulla-neonBlue"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDeleteClick(project.id)} className="p-1 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md mt-auto opacity-70 group-hover:opacity-100 transition-opacity" />
               </div>
             ))}
           </div>
        </div>
      )}

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
            <GlassCard className="flex items-center gap-3 border-green-500/50 !p-4 bg-peulla-dark/90 shadow-neon">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="font-semibold text-white">{notification}</span>
            </GlassCard>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {projectToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <GlassCard className="max-w-md w-full border-red-500/30 bg-peulla-dark shadow-neon-purple">
                <div className="flex items-center gap-3 text-red-500 mb-4">
                    <AlertTriangle className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Delete Project?</h3>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                    Are you sure you want to delete this project? This action cannot be undone and will remove it from the public portfolio immediately.
                </p>
                <div className="flex gap-4 justify-end">
                    <button 
                        onClick={() => setProjectToDelete(null)}
                        className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={confirmDelete}
                        className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-red-500/30"
                    >
                        Confirm Delete
                    </button>
                </div>
            </GlassCard>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;