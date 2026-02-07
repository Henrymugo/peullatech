import React from 'react';
import { ArrowRight, Smartphone, Building2, Search, AppWindow, Zap, Layers } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Home: React.FC = () => {
  const { homeContent } = useData();

  return (
    <div className="space-y-32 px-6 pb-20">
      {/* Hero Section - Split Layout */}
      <section className="container mx-auto min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-peulla-neonBlue/20 bg-peulla-neonBlue/5 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-peulla-neonBlue animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-peulla-neonBlue">System Architecture 2026</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            {homeContent.headlinePrefix} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-peulla-neonBlue via-purple-400 to-peulla-neonPurple animate-gradient-x">
              {homeContent.headlineGradient}
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            {homeContent.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 bg-peulla-neonBlue text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 flex items-center gap-2">
              Start Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="px-8 py-4 border border-white/20 hover:border-white rounded-lg font-bold transition-all duration-300 backdrop-blur-sm">
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Visual Element - Right Side */}
        <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
             <div className="absolute inset-0 bg-gradient-to-tr from-peulla-neonBlue/20 to-peulla-neonPurple/20 rounded-full blur-[100px] animate-pulse"></div>
             
             {/* Main Graphic */}
             <GlassCard className="relative z-10 w-full max-w-md aspect-square border-peulla-neonBlue/30 flex flex-col items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-peulla-neonBlue/10 to-transparent opacity-50"></div>
                <Layers className="w-32 h-32 text-white/80 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative text-center space-y-2 z-20">
                   <div className="text-5xl font-bold text-white tracking-tighter">99.99%</div>
                   <div className="text-peulla-neonBlue uppercase tracking-widest text-xs font-bold">System Reliability</div>
                </div>
             </GlassCard>
             
             {/* Floating Badge 1 */}
             <div className="absolute top-10 right-0 md:right-10 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-bounce-slow">
                <Zap className="text-yellow-400 w-6 h-6" />
             </div>
             
             {/* Floating Badge 2 */}
             <div className="absolute bottom-0 left-0 md:bottom-12 md:-left-8 px-6 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                <div className="text-xs font-mono text-peulla-neonBlue flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Node_Active: True
                </div>
             </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="container mx-auto">
        <div className="mb-12 border-l-4 border-peulla-neonBlue pl-6">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Competencies</h2>
           <p className="text-gray-400 max-w-2xl">
             Our engineering stack is designed for industries that demand reliability, speed, and precision.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Item 1: PWAs (Large) */}
          <GlassCard className="md:col-span-2 md:row-span-2 min-h-[400px] flex flex-col justify-between relative overflow-hidden group" hoverEffect>
             <div className="relative z-10 p-4">
                <div className="p-3 bg-peulla-neonBlue/10 w-fit rounded-lg mb-6">
                  <AppWindow className="w-10 h-10 text-peulla-neonBlue" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Progressive Web Apps (PWA)</h3>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                   Delivering native-app performance directly in the browser. Offline capabilities, push notifications, and zero install friction for maximum user retention.
                </p>
             </div>
             <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Smartphone size={300} />
             </div>
             <div className="mt-8">
               <span className="text-peulla-neonBlue text-sm font-bold uppercase tracking-wider group-hover:underline decoration-peulla-neonBlue underline-offset-4">Learn More &rarr;</span>
             </div>
          </GlassCard>

          {/* Item 2: Hospital Systems */}
          <GlassCard className="md:col-span-1 group flex flex-col justify-center h-full" hoverEffect>
             <div className="p-3 bg-peulla-neonPurple/10 w-fit rounded-lg mb-4">
                <Building2 className="w-8 h-8 text-peulla-neonPurple" />
             </div>
             <h3 className="text-xl font-bold mb-2">Hospital & Hotel Systems</h3>
             <p className="text-sm text-gray-400">
                Integrated management architectures for real-time booking, patient tracking, and inventory control.
             </p>
          </GlassCard>

          {/* Item 3: Business Directories */}
          <GlassCard className="md:col-span-1 group flex flex-col justify-center h-full" hoverEffect>
             <div className="p-3 bg-green-500/10 w-fit rounded-lg mb-4">
                <Search className="w-8 h-8 text-green-500" />
             </div>
             <h3 className="text-xl font-bold mb-2">Business Directories</h3>
             <p className="text-sm text-gray-400">
                High-performance search engines with geolocation, advanced filtering, and instant indexing.
             </p>
          </GlassCard>

          {/* Item 4: Mobile Apps */}
          <GlassCard className="md:col-span-3 lg:col-span-1 group flex items-center md:items-start lg:flex-col justify-center gap-6 lg:gap-0 h-full" hoverEffect>
             <div className="p-3 bg-pink-500/10 w-fit rounded-lg mb-4">
                <Smartphone className="w-8 h-8 text-pink-500" />
             </div>
             <div>
                <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
                <p className="text-sm text-gray-400">
                    Cross-platform React Native solutions for iOS and Android deployment.
                </p>
             </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Home;