'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20 relative overflow-hidden scroll-mt-24">
      {/* Arka Plan Dekoru */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* BÖLÜM BAŞLIĞI */}
        <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-blue-500 pb-2 text-white">
                {language === 'en' ? "Contact Me" : "İletişim"}
            </span>
        </h2>
        
        {/* PREMIUM KART */}
        <div className="relative group">
            {/* Arkadaki Renkli Çerçeve */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-70 blur transition duration-1000 group-hover:duration-200"></div>
            
            {/* Kart İçeriği */}
            <div className="relative bg-slate-950/90 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
                
                {/* İç Dekoratif Işıklar */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Yüzen İkon */}
                <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-full flex items-center justify-center text-blue-400 text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-12 group-hover:text-white group-hover:border-blue-500/50 transition-all duration-500">
                        <FaPaperPlane />
                    </div>
                </div>

                {/* Başlık */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {language === 'en' ? "Let's Build Something Amazing!" : "Harika Bir Şeyler İnşa Edelim!"}
                </h3>

                {/* Açıklama */}
                <p className="text-slate-300 mb-8 max-w-lg mx-auto text-base leading-relaxed font-light">
                    {language === 'en' 
                    ? "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me."
                    : "Yeni projeleri, yaratıcı fikirleri veya vizyonunuzun bir parçası olma fırsatlarını görüşmeye her zaman açığım. Benimle iletişime geçmekten çekinmeyin."
                    }
                </p>

                {/* MAILTO BUTONU */}
                <div className="flex justify-center relative z-10">
                    <a 
                    href="mailto:fidaneyup76@gmail.com"
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base rounded-xl overflow-hidden shadow-md shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 active:scale-95 border border-white/10"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></div>
                        
                        <span className="text-lg">
                            <FaEnvelope />
                        </span>
                        <span>fidaneyup76@gmail.com</span>
                    </a>
                </div>

                {/* Alt Not */}
                <p className="mt-6 text-slate-500 text-xs font-medium">
                    {language === 'en' 
                    ? "Click the button above to send me an email directly." 
                    : "Doğrudan e-posta göndermek için butona tıklayın."
                    }
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}