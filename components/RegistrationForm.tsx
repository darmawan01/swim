
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COURSES } from '../constants';
import { geminiService } from '../services/geminiService';
import { Send, Sparkles, MessageSquare, Loader2, Heart } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: COURSES[0].id,
    message: ''
  });
  
  const [aiLevel, setAiLevel] = useState('Beginner');
  const [aiGoal, setAiGoal] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleAiAdvice = async () => {
    if (!aiGoal) return;
    setIsAiLoading(true);
    // Request advice in specific language
    const langContext = language === 'id' ? 'dalam Bahasa Indonesia' : 'in English';
    const advice = await geminiService.getSwimAdvice(aiLevel, `${aiGoal} (${langContext})`);
    setAiResponse(advice);
    setIsAiLoading(false);
  };

  return (
    <section id="register" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Gen Z Floating Bubbles */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          
          <div className="space-y-12 text-white">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                {t.register.title}
              </h2>
              <p className="text-2xl text-slate-400 font-bold leading-tight max-w-md">
                {t.register.desc}
              </p>
            </div>

            {/* AI Swim Coach Tool */}
            <div className="bg-white/5 backdrop-blur-3xl border-2 border-white/10 rounded-[3rem] p-10 space-y-8 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-tr from-sky-400 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{t.register.aiTitle}</h3>
                  <p className="text-sky-300 text-[10px] font-black uppercase tracking-widest">Available 24/7 for the fam</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Level</label>
                      <select 
                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:border-sky-500 outline-none transition-all"
                        value={aiLevel}
                        onChange={(e) => setAiLevel(e.target.value)}
                      >
                        <option value="Beginner" className="bg-slate-900">Beginner</option>
                        <option value="Intermediate" className="bg-slate-900">Intermediate</option>
                        <option value="Advanced" className="bg-slate-900">Advanced</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Your Goal</label>
                      <input 
                        type="text" 
                        placeholder={t.register.placeholderGoal} 
                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-bold placeholder:text-white/20 focus:border-sky-500 outline-none transition-all"
                        value={aiGoal}
                        onChange={(e) => setAiGoal(e.target.value)}
                      />
                   </div>
                </div>
                <button 
                  onClick={handleAiAdvice}
                  disabled={isAiLoading || !aiGoal}
                  className="w-full bg-white text-slate-950 font-black text-lg py-5 rounded-2xl transition-all hover:bg-sky-400 hover:text-white flex items-center justify-center gap-3 disabled:opacity-30"
                >
                  {isAiLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <MessageSquare className="w-6 h-6" />}
                  {t.register.aiAdvice}
                </button>
              </div>

              {aiResponse && (
                <div className="bg-sky-500/10 p-6 rounded-3xl border-2 border-sky-500/30 text-sky-50 animate-fadeIn text-sm font-bold leading-relaxed relative">
                   <div className="absolute -top-3 left-6 bg-sky-500 text-[10px] font-black px-2 py-0.5 rounded text-white uppercase">Coach Lalu Says:</div>
                   {aiResponse}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl relative border-[12px] border-sky-500/10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-center animate-fadeIn py-20">
                 <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                    <Heart className="w-12 h-12 fill-current" />
                 </div>
                 <div className="space-y-2">
                   <h3 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">LETS GOOO!</h3>
                   <p className="text-slate-500 font-bold text-lg">We got you. Check your email for the next steps.</p>
                 </div>
                 <button onClick={() => setIsSubmitted(false)} className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest hover:bg-sky-500 transition-colors">Go Back</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.register.form.name}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-4 border-slate-50 focus:border-sky-500 focus:bg-white outline-none transition-all font-bold text-lg"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.register.form.email}</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-4 border-slate-50 focus:border-sky-500 focus:bg-white outline-none transition-all font-bold text-lg"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.register.form.phone}</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-4 border-slate-50 focus:border-sky-500 focus:bg-white outline-none transition-all font-bold text-lg"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.register.form.course}</label>
                  <select 
                    className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-4 border-slate-50 focus:border-sky-500 focus:bg-white outline-none transition-all font-black text-lg appearance-none"
                    value={formData.courseId}
                    onChange={(e) => setFormData({...formData, courseId: e.target.value})}
                  >
                    {COURSES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full bg-slate-900 hover:bg-sky-500 text-white font-black text-2xl py-6 rounded-[2rem] shadow-2xl transition-all flex items-center justify-center gap-4 active:scale-95 uppercase tracking-tighter">
                  {t.register.form.submit}
                  <Send className="w-7 h-7" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
