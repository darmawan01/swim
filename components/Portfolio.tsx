
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COURSES } from '../constants';
import { Search, Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('All');
  
  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.level === filter);

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Kids'];

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              {t.portfolio.title}
            </h2>
            <p className="text-xl text-slate-500 font-medium">{t.portfolio.desc}</p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none w-full md:w-80 shadow-inner font-bold"
            />
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap border-4 ${filter === cat ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-400 border-slate-100 hover:border-sky-500 hover:text-sky-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group relative bg-slate-50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
              <div className="relative h-72 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                   <div className="bg-sky-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                    {course.level}
                  </div>
                  <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">{course.title}</h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-slate-500 text-sm font-medium line-clamp-3">{course.description}</p>
                <div className="flex items-center justify-between pt-6 border-t-2 border-slate-100">
                  <span className="text-3xl font-black text-slate-900">{course.price}</span>
                  <a href="#register" className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center transition-all group-hover:bg-sky-500 group-hover:rotate-90">
                    <Plus className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
