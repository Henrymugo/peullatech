import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project, HomeContent, AboutContent, DataContextType } from '../types';
import { projectsData as initialProjects } from '../data/projectsData';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Content State
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [homeContent, setHomeContent] = useState<HomeContent>({
    headlinePrefix: "Peulla: Engineering",
    headlineGradient: "High-Performance Digital Systems.",
    subheadline: "We architect scalable, fail-safe digital ecosystems for enterprise leaders. From next-gen PWAs to complex hospital management systems."
  });
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    headline: "Built for Scale.",
    intro: "We don't just build websites. We engineer digital infrastructure that powers the next generation of industry leaders."
  });

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Actions
  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const updateProject = (updatedProject: Project) => {
    setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const login = (password: string) => {
    // Mock secure password
    if (password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <DataContext.Provider value={{
      projects,
      addProject,
      updateProject,
      deleteProject,
      homeContent,
      updateHomeContent: setHomeContent,
      aboutContent,
      updateAboutContent: setAboutContent,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};