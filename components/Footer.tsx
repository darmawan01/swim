
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Droplets, Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-10">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-gradient-to-tr from-sky-400 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Droplets className="text-white w-8 h-8" />
              </div>
              <span className="text-4xl font-black tracking-tighter uppercase">
                Lalu<span className="text-sky-500">Swim</span>
              </span>
            </a>
            <p className="text-2xl text-slate-400 font-bold leading-tight max-w-md italic">
              "Turning water-fears into core-memories since day one. No cap, just swimming."
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border-2 border-white/5 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all hover:-translate-y-2">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-sky-500 mb-8">Navigation</h4>
              <ul className="space-y-4 text-xl font-bold">
                <li><a href="#home" className="hover:text-sky-400 transition-colors uppercase tracking-tighter">{t.nav.home}</a></li>
                <li><a href="#about" className="hover:text-sky-400 transition-colors uppercase tracking-tighter">{t.nav.about}</a></li>
                <li><a href="#courses" className="hover:text-sky-400 transition-colors uppercase tracking-tighter">{t.nav.courses}</a></li>
                <li><a href="#stories" className="hover:text-sky-400 transition-colors uppercase tracking-tighter">{t.nav.stories}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-sky-500 mb-8">Get in Touch</h4>
              <ul className="space-y-6 font-bold">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-violet-500 flex-shrink-0" />
                  <span className="text-slate-300">123 Aquamarine Dr, Deep End City. Main Character Blvd.</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-violet-500 flex-shrink-0" />
                  <span className="text-slate-300">+1 (555) 987-6543</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-violet-500 flex-shrink-0" />
                  <span className="text-slate-300">hello@laluswim.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <p>© 2024 Lalu Swim Academy. Built different.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sky-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
