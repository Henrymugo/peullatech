import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Lock, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login } = useData();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <GlassCard className="w-full max-w-md p-10 border-peulla-neonBlue/20 shadow-neon">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-full bg-peulla-neonBlue/10 mb-4 text-peulla-neonBlue">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold">Admin Access</h1>
          <p className="text-gray-400 text-sm mt-2">Authorized personnel only.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter Access Key..."
              className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-peulla-neonBlue focus:outline-none transition-all text-center tracking-widest"
            />
            {error && <p className="text-red-500 text-xs text-center">Access Denied: Invalid Key</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-peulla-neonBlue text-black font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            Authenticate <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </GlassCard>
    </div>
  );
};

export default AdminLogin;