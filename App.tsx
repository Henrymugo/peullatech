import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PageWrapper from './components/PageWrapper';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/admin" element={<PageWrapper><AdminLogin /></PageWrapper>} />
        <Route path="/admin/dashboard" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <HashRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </HashRouter>
    </DataProvider>
  );
};

export default App;