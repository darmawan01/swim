
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS, IMPROVEMENT_CHART_DATA } from '../constants';
import { Star, TrendingUp, Quote } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="stories" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8 uppercase italic">
                {t.stories.title}
              </h2>
              <p className="text-2xl text-slate-500 font-bold leading-tight">
                {t.stories.desc}
              </p>
            </div>

            <div className="grid gap-8">
              {TESTIMONIALS.map((testi) => (
                <div key={testi.id} className="bg-white p-10 rounded-[3rem] shadow-sm relative group hover:shadow-xl transition-all border-2 border-transparent hover:border-sky-100">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-sky-50 transition-colors" />
                  <div className="flex items-center gap-5 mb-8">
                    <img src={testi.avatar} className="w-16 h-16 rounded-3xl object-cover rotate-3" alt={testi.name} />
                    <div>
                      <h4 className="font-black text-xl text-slate-900 uppercase tracking-tighter">{testi.name}</h4>
                      <p className="text-sky-600 text-sm font-black uppercase tracking-widest">{testi.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 font-bold text-lg leading-relaxed relative z-10 italic">
                    "{testi.content}"
                  </p>
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < testi.rating ? 'text-yellow-400 fill-current' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-16 text-white space-y-10 relative overflow-hidden border-[16px] border-white shadow-2xl">
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px]"></div>
             
             <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-tr from-sky-400 to-violet-600 rounded-3xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{t.stories.progress}</h3>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Real metrics from the squad</p>
                </div>
             </div>

             <div className="h-[400px] w-full mt-8">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={IMPROVEMENT_CHART_DATA}>
                   <defs>
                     <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                       <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                   <XAxis dataKey="week" stroke="#475569" fontSize={12} fontWeight="bold" axisLine={false} tickLine={false} />
                   <YAxis stroke="#475569" fontSize={12} fontWeight="bold" axisLine={false} tickLine={false} />
                   <Tooltip 
                     contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '16px', fontWeight: 'bold' }}
                     itemStyle={{ color: '#fff' }}
                   />
                   <Area type="monotone" dataKey="stamina" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorMain)" strokeWidth={4} />
                   <Area type="monotone" dataKey="speed" stroke="#8b5cf6" fillOpacity={0} strokeWidth={4} strokeDasharray="5 5" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>

             <div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/10 text-center">
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{t.stories.speed}</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">+65%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{t.stories.stamina}</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">+92%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{t.stories.technique}</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">+88%</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
