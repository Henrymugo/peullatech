import React from 'react';
import { ShieldCheck, Activity, Server, Layers, ArrowDown } from 'lucide-react';
import { useData } from '../context/DataContext';

const About: React.FC = () => {
  const { aboutContent } = useData();

  return (
    <div className="container mx-auto px-6 pb-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Left Side - Sticky Header */}
        <div className="lg:w-5/12">
          <div className="lg:sticky lg:top-32 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
              {aboutContent.headline.split(' ').map((word, i) => (
                 i === aboutContent.headline.split(' ').length - 1 ? 
                 <span key={i} className="text-peulla-neonBlue block">{word}</span> : 
                 <span key={i}>{word} </span>
              ))}
            </h1>
            
            <p className="text-xl text-gray-400 border-l-2 border-peulla-neonPurple pl-6 py-2 leading-relaxed">
              {aboutContent.intro}
            </p>
            
            <div className="hidden lg:flex h-[300px] w-full bg-gradient-to-b from-peulla-neonBlue/5 to-transparent rounded-2xl border border-white/5 backdrop-blur-sm p-6 relative overflow-hidden items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 animate-pulse">
                    <Layers size={180} className="text-white" />
                </div>
                <div className="relative z-10 text-center">
                    <div className="text-xs font-mono text-peulla-neonBlue mb-2">SCROLL TO EXPLORE</div>
                    <ArrowDown className="mx-auto w-5 h-5 text-white animate-bounce" />
                </div>
            </div>
          </div>
        </div>

        {/* Right Side - Scrollable Story */}
        <div className="lg:w-7/12 space-y-32 pt-12 lg:pt-0">
          
          {/* Section 1: Scalability */}
          <section className="space-y-6 group">
            <div className="flex items-center gap-4 text-peulla-neonBlue mb-2">
               <div className="p-2 bg-peulla-neonBlue/10 rounded-lg group-hover:bg-peulla-neonBlue/20 transition-colors">
                 <Server className="w-6 h-6" />
               </div>
               <span className="uppercase tracking-widest font-semibold text-sm">Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-peulla-neonBlue transition-colors duration-300">Uncompromising Scalability</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                In 2026, downtime is obsolete. Our architecture is built on the principle of infinite elasticity. Whether you are serving ten users or ten million, Peulla's systems adapt instantly to demand without degradation.
              </p>
              <p>
                We utilize edge computing, serverless functions, and distributed databases to ensure that your application logic resides as close to the user as possible. This results in sub-millisecond latency and a user experience that feels instantaneous, regardless of geography.
              </p>
            </div>
          </section>

          {/* Section 2: Healthcare */}
          <section className="space-y-6 group">
             <div className="flex items-center gap-4 text-peulla-neonPurple mb-2">
               <div className="p-2 bg-peulla-neonPurple/10 rounded-lg group-hover:bg-peulla-neonPurple/20 transition-colors">
                 <Activity className="w-6 h-6" />
               </div>
               <span className="uppercase tracking-widest font-semibold text-sm">Healthcare Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-peulla-neonPurple transition-colors duration-300">Mission-Critical Systems</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                The healthcare industry demands precision. A dropped packet isn't just an error; it's a risk. We specialize in building HIPAA-compliant, secure hospital management systems that integrate Electronic Health Records (EHR) with patient-facing mobile applications.
              </p>
              <p>
                Our systems facilitate real-time doctor-patient communication, automated appointment scheduling, and AI-driven diagnostic assistance, all wrapped in a secure, intuitive interface designed for high-stress environments where clarity is paramount.
              </p>
            </div>
          </section>

          {/* Section 3: Hospitality */}
          <section className="space-y-6 group">
             <div className="flex items-center gap-4 text-green-400 mb-2">
               <div className="p-2 bg-green-400/10 rounded-lg group-hover:bg-green-400/20 transition-colors">
                 <ShieldCheck className="w-6 h-6" />
               </div>
               <span className="uppercase tracking-widest font-semibold text-sm">Hospitality & Enterprise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Redefining Management</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                For hotels and large-scale venues, operational efficiency is profit. Peulla engineers custom Property Management Systems (PMS) that unify housekeeping, front-desk operations, and guest services into a single, real-time dashboard.
              </p>
              <p>
                We enable contactless check-ins, smart-room controls via PWAs, and personalized guest experiences driven by data analytics. We help you transform a simple stay into an immersive experience.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="pt-12 border-t border-white/10">
             <h3 className="text-2xl font-bold mb-8">Ready to scale your vision?</h3>
             <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-peulla-neonBlue hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon">
               Contact Our Engineers
             </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;