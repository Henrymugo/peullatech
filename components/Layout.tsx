import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { LayoutProps } from '../types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-peulla-dark text-white font-sans selection:bg-peulla-neonBlue selection:text-black overflow-x-hidden">
      {/* Background ambient glow effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-peulla-neonBlue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-peulla-neonPurple/10 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;