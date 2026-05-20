import React from 'react';
import { Globe, LogIn } from 'lucide-react';

const Header = ({ lang, setLang, t }) => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-indiaGreen-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">सू</span>
            </div>
            <span className="font-bold text-xl md:text-2xl text-slate-800 tracking-tight">सूर्यपुरा</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#dev" className="text-slate-600 hover:text-indiaGreen-600 font-medium transition-colors">{t.nav.dev}</a>
            <a href="#edu" className="text-slate-600 hover:text-indiaGreen-600 font-medium transition-colors">{t.nav.edu}</a>
            <a href="#farmer" className="text-slate-600 hover:text-indiaGreen-600 font-medium transition-colors">{t.nav.farmer}</a>
            <a href="#panchayat" className="text-slate-600 hover:text-indiaGreen-600 font-medium transition-colors">{t.nav.panchayat}</a>
          </nav>

          <div className="flex items-center space-x-3 md:space-x-4">
            <button 
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors border border-slate-200"
            >
              <Globe className="w-4 h-4 text-slate-500" />
              <span>{lang === 'hi' ? 'EN' : 'हिंदी'}</span>
            </button>
            
            <button className="hidden md:flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-medium shadow-md shadow-indigo-200 transition-transform active:scale-95">
              <LogIn className="w-4 h-4" />
              <span>{t.nav.login}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
