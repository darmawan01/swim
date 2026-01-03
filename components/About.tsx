
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STATS } from '../constants';
import { CheckCircle2, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <img src="https://images.unsplash.com/photo-1600965962371-951881c17185?q=80&w=2070&auto=format&fit=crop" className="rounded-[2rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-all border-4 border-white" alt="Coach" />
                <div className="bg-sky-500 p-8 rounded-[2rem] text-white shadow-xl transform rotate-2">
                   <Zap className="w-10 h-10 mb-4 fill-current" />
                   <p className="text-3xl font-black leading-none">FASTER.</p>
                   <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Than ever before</p>
                </div>
              </div>
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1534253102088-cdd98b2f8232?q=80&w=2070&auto=format&fit=crop" className="rounded-[2rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-all border-4 border-white" alt="Action" />
                <img src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070&auto=format&fit=crop" className="rounded-[2rem] shadow-2xl transform -rotate-1 hover:rotate-0 transition-all border-4 border-white" alt="Training" />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-sky-600 font-black uppercase tracking-tighter text-xl mb-3 flex items-center gap-2">
                <span className="w-8 h-1 bg-sky-600"></span>
                {t.about.tag}
              </h4>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                {t.about.title}
              </h2>
            </div>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              {t.about.desc}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Olympic Standard Training",
                "Certified Safety Instructors",
                "Heated Indoor Facilities",
                "Personalized Growth Tracking",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-sky-500" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm uppercase">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t-4 border-slate-900">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-[10px] text-sky-600 uppercase font-black tracking-widest">{t.about.stats[stat.label.toLowerCase().split(' ')[0] as keyof typeof t.about.stats] || stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
