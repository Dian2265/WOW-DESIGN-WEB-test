import React from 'react';
import { Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-24 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">准备好开始了吗？</h2>
            <a 
              href="mailto:hello@wowdesign.studio" 
              className="text-4xl md:text-6xl lg:text-7xl font-bold hover:text-gray-300 transition-colors tracking-tight underline decoration-1 decoration-gray-700 underline-offset-8"
            >
              hello@wow.design
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl pt-12 border-t border-white/10">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={20} />
                <span>上海市静安区南京西路1266号恒隆广场</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} />
                <span>career@wow.design (求职)</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-4">
               <span className="text-gray-500 uppercase tracking-widest text-sm">Follow Us</span>
               <div className="flex space-x-6">
                 <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                 <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
                 <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin /></a>
               </div>
            </div>
          </div>
          
          <div className="pt-20 text-gray-600 text-sm">
            © {new Date().getFullYear()} WOW DESIGN. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;