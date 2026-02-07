import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    // Replace with actual business number
    const phoneNumber = '15551234567'; 
    const message = encodeURIComponent('Hello Peulla, I am interested in your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
      <div className="relative bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform group-hover:scale-110 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-semibold">
          Chat with us
        </span>
      </div>
    </button>
  );
};

export default FloatingWhatsApp;