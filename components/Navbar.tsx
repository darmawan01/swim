
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Droplets, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.stories, href: '#stories' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-sky-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-sky-400 to-violet-500 rounded-xl flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Lalu<span className="text-sky-500">Swim</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-bold text-sm uppercase tracking-widest transition-all hover:scale-110 ${scrolled ? 'text-slate-600 hover:text-sky-600' : 'text-white/80 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${scrolled ? 'border-slate-200 text-slate-600' : 'border-white/20 text-white hover:bg-white/10'}`}
            >
              <Globe className="w-3.5 h-3.5" />
              {language.toUpperCase()}
            </button>
            <a
              href="#register"
              className="bg-sky-500 hover:bg-violet-500 text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-tighter transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] active:scale-90"
            >
              {t.nav.join}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleLang} className={`${scrolled ? 'text-slate-900' : 'text-white'} text-xs font-bold`}>{language.toUpperCase()}</button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={scrolled ? 'text-sky-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-sky-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl py-8 flex flex-col items-center gap-8 animate-fadeIn border-t border-sky-50">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-900 font-black text-2xl uppercase tracking-tighter hover:text-sky-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-sky-500 to-violet-500 text-white px-10 py-4 rounded-full font-black text-xl w-3/4 text-center shadow-xl"
          >
            {t.nav.join}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
