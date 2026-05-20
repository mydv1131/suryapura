import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Initiatives from './components/Initiatives';
import SocialHighlights from './components/SocialHighlights';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [lang, setLang] = useState('hi');
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t.hero} navT={t.nav} />
      <Initiatives t={t.initiatives} />
      <SocialHighlights t={t.social} lang={lang} />
      <Footer t={t.footer} />
    </div>
  );
}

export default App;
