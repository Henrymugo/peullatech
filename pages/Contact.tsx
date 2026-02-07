import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject) tempErrors.subject = "Please select a subject";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build <br /> Something <span className="text-peulla-neonBlue">Great.</span></h1>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Need a technical consultation? 
              Fill out the form or reach out directly.
            </p>
          </div>

          <div className="space-y-6">
            <GlassCard className="flex items-center gap-4">
              <div className="p-3 bg-peulla-neonBlue/10 rounded-lg">
                <Mail className="w-6 h-6 text-peulla-neonBlue" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Email Us</p>
                <p className="text-white font-medium">hello@peulla.tech</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-4">
              <div className="p-3 bg-peulla-neonPurple/10 rounded-lg">
                <Phone className="w-6 h-6 text-peulla-neonPurple" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Call Us</p>
                <p className="text-white font-medium">+1 (555) 000-PEULLA</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Visit Us</p>
                <p className="text-white font-medium">101 Tech Blvd, Silicon Valley, CA</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Form */}
        <div>
          <GlassCard className="p-8 md:p-10 relative overflow-hidden">
            {isSubmitted && (
              <div className="absolute inset-0 bg-peulla-dark/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-fade-in-up">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for contacting Peulla. We'll be in touch shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-peulla-neonBlue hover:underline text-sm">Send another message</button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black/20 border rounded-lg p-3 text-white focus:outline-none focus:ring-1 transition-all ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-peulla-neonBlue focus:ring-peulla-neonBlue'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/20 border rounded-lg p-3 text-white focus:outline-none focus:ring-1 transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-peulla-neonBlue focus:ring-peulla-neonBlue'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-black/20 border rounded-lg p-3 text-white focus:outline-none focus:ring-1 transition-all ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-peulla-neonBlue focus:ring-peulla-neonBlue'}`}
                >
                  <option value="" className="bg-peulla-dark">Select a topic</option>
                  <option value="Project Inquiry" className="bg-peulla-dark">Project Inquiry</option>
                  <option value="Consultation" className="bg-peulla-dark">Consultation</option>
                  <option value="Careers" className="bg-peulla-dark">Careers</option>
                  <option value="Other" className="bg-peulla-dark">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-black/20 border rounded-lg p-3 text-white focus:outline-none focus:ring-1 transition-all ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-peulla-neonBlue focus:ring-peulla-neonBlue'}`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-peulla-neonBlue to-peulla-neonPurple text-white font-bold py-4 rounded-lg hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;