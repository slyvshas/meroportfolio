import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      info: 'Kathmandu, Nepal'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+977 9817925380'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'sasankkarkii@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl mb-8 hover:bg-white/10 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. I typically respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-lg backdrop-blur-xl">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-white/70">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl hover:bg-white/10 transition-all duration-500">
            <h3 className="text-xl font-bold text-white mb-4">Current Availability</h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400/80 rounded-full animate-pulse"></div>
              <span className="text-white/80">Available for new projects</span>
            </div>
            <p className="text-white/70 text-sm">
              I'm currently accepting new freelance projects and full-time opportunities. 
              Let's discuss how we can work together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;