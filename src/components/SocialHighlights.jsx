import React from 'react';
import { ArrowRight } from 'lucide-react';
import SocialPost from './SocialPost';

const SocialHighlights = ({ t, lang }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.title}</h2>
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
  );
};

export default SocialHighlights;
