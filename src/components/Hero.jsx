import React from 'react';
import { ArrowRight, LogIn } from 'lucide-react';

const Hero = ({ t, navT }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero_background_1778919687201.png" alt="Village Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-saffron-500/20 text-saffron-300 font-medium text-sm mb-4 border border-saffron-500/30 backdrop-blur-sm">
              #DigitalIndia #RuralDevelopment
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg shadow-lg shadow-saffron-500/30 transition-all flex items-center justify-center space-x-2 hover:-translate-y-0.5">
                <span>{t.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-3.5 rounded-full font-semibold text-lg transition-all flex items-center justify-center md:hidden space-x-2">
                <LogIn className="w-5 h-5" />
                <span>{navT.login}</span>
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-indiaGreen-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-3xl relative">
                <img src="/hero_character_1778919736269.png" alt="Hero Character" className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-slate-800 px-4 py-2 rounded-full shadow-xl font-medium text-sm flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                  <span>{t.leader}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
