
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background - more dynamic gradients and animated noise */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-sky-500/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        
        {/* Main background video overlay for that "premium" look */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
           <video 
             autoPlay 
             muted 
             loop 
             playsInline 
             className="w-full h-full object-cover grayscale"
           >
             <source src="https://assets.mixkit.co/videos/preview/mixkit-man-swimming-in-a-pool-2121-large.mp4" type="video/mp4" />
           </video>
        </div>

        {/* Animated Water Svg */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-[200%] h-32 text-slate-50 wave-animation opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,42.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-violet-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sky-300 font-black text-xs uppercase tracking-widest animate-bounce">
            <Sparkles className="w-4 h-4" />
            {t.hero.badge}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-violet-400 drop-shadow-2xl">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-tight">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
            <a href="#register" className="group bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-2 transition-all hover:bg-sky-50 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:-translate-y-2 active:scale-95">
              {t.hero.cta}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <button className="flex items-center justify-center gap-4 text-white font-black uppercase text-sm tracking-widest hover:text-sky-400 transition-colors">
              <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group bg-white/5 backdrop-blur-sm">
                <Play className="w-6 h-6 fill-white group-hover:scale-110 transition-transform ml-1" />
              </div>
              {t.hero.video}
            </button>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start pt-8">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=student${i}`} className="w-12 h-12 rounded-2xl border-2 border-slate-900 object-cover rotate-3 hover:rotate-0 transition-all hover:scale-110" alt="Student" />
                ))}
             </div>
             <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">{t.hero.members.replace('{count}', '2,500')}</p>
          </div>
        </div>

        <div className="relative hidden lg:block group">
          {/* Main Video Box */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl transform hover:rotate-1 hover:scale-105 transition-all duration-700 aspect-[4/5] bg-slate-900">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="https://images.unsplash.com/photo-1530549387634-e797ea754a96?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-underwater-shot-of-a-woman-swimming-with-flippers-41804-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform border border-white/30">
                   <Play className="w-10 h-10 fill-white ml-1" />
                </div>
            </div>
          </div>
          
          {/* Fun "Stickers" */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-yellow-400 rounded-full flex flex-col items-center justify-center rotate-12 animate-pulse shadow-2xl z-20 border-4 border-slate-950 p-2">
             <span className="text-slate-950 font-black text-2xl leading-none">NO</span>
             <span className="text-slate-950 font-black text-2xl leading-none">CAP!</span>
          </div>
          <div className="absolute bottom-10 -left-12 px-6 h-16 bg-sky-500 rounded-2xl flex items-center justify-center -rotate-6 shadow-2xl z-20 border-4 border-slate-950">
             <span className="text-white font-black text-lg uppercase tracking-tighter">ELITE SQUAD</span>
          </div>
          
          {/* Glassmorphism Badge */}
          <div className="absolute top-20 -left-16 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl z-20 shadow-2xl space-y-2 animate-fadeIn">
             <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
             </div>
             <p className="text-white font-bold text-sm tracking-tight">"Best swim class in town!"</p>
             <p className="text-sky-300 text-xs font-black uppercase">@Sarah_J</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
