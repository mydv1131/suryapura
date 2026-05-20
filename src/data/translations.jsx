import React from 'react';
import { GraduationCap, Tractor, Route, Building2, ShieldCheck } from 'lucide-react';

export const translations = {
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
