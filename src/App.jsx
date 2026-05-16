import React, { useState } from 'react';
import { Globe, GraduationCap, Tractor, Route, Building2, ShieldCheck, ArrowRight, BookOpen, ThumbsUp, MessageCircle, Share2, LogIn } from 'lucide-react';

const translations = {
  hi: {
    nav: { dev: "विकास", edu: "शिक्षा", farmer: "किसान", panchayat: "पंचायत", login: "डिजिटल पहचान लॉगिन" },
    hero: { 
      title: "सूर्यपुरा ग्राम विकास पोर्टल", 
      subtitle: "सपनों का गांव, विकास की ओर। एक उन्नत, सशक्त और आत्मनिर्भर समाज का निर्माण।", 
      cta: "विकास यात्रा देखें",
      leader: "श्री रामेश्वर सिंह - ग्राम विकास दूत"
    },
    initiatives: { 
      title: "ग्राम विकास की प्रमुख पहलें", 
      items: [ 
        { title: "डिजिटल शिक्षा", desc: "हर बच्चे के लिए गुणवत्तापूर्ण और आधुनिक शिक्षा, स्मार्ट क्लासरूम के साथ।", icon: <GraduationCap className="w-8 h-8 text-saffron-500" /> }, 
        { title: "आधुनिक कृषि", desc: "किसानों के लिए उन्नत उपकरण, बीज और सिंचाई की नवीनतम तकनीक।", icon: <Tractor className="w-8 h-8 text-indiaGreen-500" /> }, 
        { title: "पक्की सड़कें", desc: "हर गांव को शहर से जोड़ने वाली पक्की और सुरक्षित सड़कें।", icon: <Route className="w-8 h-8 text-slate-700" /> }, 
        { title: "ई-पंचायत", desc: "पारदर्शी शासन और ऑनलाइन नागरिक सेवाएं सीधे आपके फोन पर।", icon: <Building2 className="w-8 h-8 text-blue-600" /> },
        { title: "डिजिटल पहचान", desc: "हर ग्रामीण की सुरक्षित डिजिटल पहचान और डेटा सुरक्षा।", icon: <ShieldCheck className="w-8 h-8 text-indigo-600" /> }
      ] 
    },
    social: { title: "नवीनतम अपडेट्स" },
    footer: { rights: "© 2026 सूर्यपुरा ग्राम पंचायत. सर्वाधिकार सुरक्षित।" }
  },
  en: {
    nav: { dev: "Development", edu: "Education", farmer: "Farmers", panchayat: "Panchayat", login: "Digital ID Login" },
    hero: { 
      title: "Suryapura Village Portal", 
      subtitle: "A village of dreams, marching towards progress. Building an advanced, empowered, and self-reliant society.", 
      cta: "Explore Our Journey",
      leader: "Shri Rameshwar Singh - Rural Dev. Ambassador"
    },
    initiatives: { 
      title: "Key Development Initiatives", 
      items: [ 
        { title: "Digital Education", desc: "Quality modern education with smart classrooms for every child.", icon: <GraduationCap className="w-8 h-8 text-saffron-500" /> }, 
        { title: "Modern Farming", desc: "Advanced tools, seeds, and irrigation tech for farmers.", icon: <Tractor className="w-8 h-8 text-indiaGreen-500" /> }, 
        { title: "Paved Roads", desc: "Safe all-weather roads connecting the village to the city.", icon: <Route className="w-8 h-8 text-slate-700" /> }, 
        { title: "E-Panchayat", desc: "Transparent governance and online citizen services on your phone.", icon: <Building2 className="w-8 h-8 text-blue-600" /> },
        { title: "Digital Identity", desc: "Secure digital identity and data protection for all citizens.", icon: <ShieldCheck className="w-8 h-8 text-indigo-600" /> }
      ] 
    },
    social: { title: "Latest Updates" },
    footer: { rights: "© 2026 Suryapura Gram Panchayat. All rights reserved." }
  }
};

const SocialPost = ({ author, time, content, image, likes, comments }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 transition-transform hover:scale-[1.02]">
    <div className="p-4 flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 font-bold">
        {author.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{author}</h4>
        <p className="text-xs text-slate-500">{time}</p>
      </div>
    </div>
    <p className="px-4 pb-3 text-slate-700 text-sm leading-relaxed">{content}</p>
    <img src={image} alt="Post Update" className="w-full h-48 object-cover" />
    <div className="p-4 border-t border-slate-50 flex justify-between text-slate-500 text-sm">
      <button className="flex items-center space-x-1 hover:text-indiaGreen-600 transition-colors"><ThumbsUp className="w-4 h-4"/> <span>{likes}</span></button>
      <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors"><MessageCircle className="w-4 h-4"/> <span>{comments}</span></button>
      <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors"><Share2 className="w-4 h-4"/> <span>Share</span></button>
    </div>
  </div>
);

function App() {
  const [lang, setLang] = useState('hi');
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Header */}
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

      {/* Hero Section */}
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
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg shadow-lg shadow-saffron-500/30 transition-all flex items-center justify-center space-x-2 hover:-translate-y-0.5">
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-3.5 rounded-full font-semibold text-lg transition-all flex items-center justify-center md:hidden space-x-2">
                  <LogIn className="w-5 h-5" />
                  <span>{t.nav.login}</span>
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
                    <span>{t.hero.leader}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t.initiatives.title}</h2>
            <div className="w-24 h-1 bg-saffron-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.initiatives.items.map((item, idx) => (
              <div key={idx} className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Highlights */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.social.title}</h2>
              <p className="text-slate-500 mt-2 font-medium">#SuryapuraRising</p>
            </div>
            <a href="#" className="hidden md:flex text-indiaGreen-600 hover:text-indiaGreen-700 font-medium items-center space-x-1 group">
              <span>View all</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <SocialPost 
              author={lang === 'hi' ? "ग्राम पंचायत कार्यालय" : "Gram Panchayat Office"}
              time={lang === 'hi' ? "2 घंटे पहले" : "2 hours ago"}
              content={lang === 'hi' ? "आज हमारे स्कूल में बच्चों को स्मार्ट टैबलेट बांटे गए। डिजिटल शिक्षा से जुड़ेगा हमारा सूर्यपुरा!" : "Today smart tablets were distributed in our school. Suryapura will connect with digital education!"}
              image="/social_post_education_1778919791890.png"
              likes="1.2k"
              comments="142"
            />
            <SocialPost 
              author={lang === 'hi' ? "विकास समिति" : "Development Committee"}
              time={lang === 'hi' ? "कल" : "Yesterday"}
              content={lang === 'hi' ? "ग्राम संपर्क योजना के तहत नई पक्की सड़क का उद्घाटन। अब शहर पहुंचना हुआ और भी आसान और सुरक्षित।" : "Inauguration of the new paved road under the village connectivity scheme. Reaching the city is now easier and safer."}
              image="/social_post_road_1778919897289.png"
              likes="856"
              comments="64"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-indiaGreen-500 rounded-md flex items-center justify-center opacity-80">
              <span className="text-white font-bold text-sm">सू</span>
            </div>
            <span className="font-bold text-xl text-slate-200">सूर्यपुरा</span>
          </div>
          <p className="text-sm font-medium">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
