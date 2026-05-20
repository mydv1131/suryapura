import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-indiaGreen-500 rounded-md flex items-center justify-center opacity-80">
            <span className="text-white font-bold text-sm">सू</span>
          </div>
          <span className="font-bold text-xl text-slate-200">सूर्यपुरा</span>
        </div>
        <p className="text-sm font-medium">{t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
