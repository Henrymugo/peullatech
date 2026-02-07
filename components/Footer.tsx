import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin, Mail, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 border-t border-white/5 pt-16 pb-8 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="text-peulla-neonBlue w-6 h-6" />
              <span className="text-xl font-bold text-white">Peulla.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Architecting the digital future with precision, innovation, and bold design. 
              We build scalable solutions for the next generation of tech leaders.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-peulla-neonBlue transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-peulla-neonBlue transition-colors">Our Work</Link></li>
              <li><Link to="/about" className="hover:text-peulla-neonBlue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-peulla-neonBlue transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-peulla-neonBlue transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-peulla-neonBlue transition-colors cursor-pointer">Cloud Architecture</li>
              <li className="hover:text-peulla-neonBlue transition-colors cursor-pointer">AI Integration</li>
              <li className="hover:text-peulla-neonBlue transition-colors cursor-pointer">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-peulla-neonBlue hover:text-black transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-peulla-neonBlue hover:text-black transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-peulla-neonBlue hover:text-black transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-peulla-neonBlue hover:text-black transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2026 Peulla Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500 items-center">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <Link to="/admin" className="text-gray-800 hover:text-peulla-neonBlue transition-colors" aria-label="Admin Access">
              <Lock className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;