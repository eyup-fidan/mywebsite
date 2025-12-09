'use client';
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        
        {/* 1. LOGO / İSİM - En Üstte ve Gösterişli */}
        <div 
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer mb-8 hover:opacity-80 transition-opacity" 
          onClick={scrollToTop}
        >
          EYÜP FİDAN
        </div>

        {/* 2. SOSYAL İKONLAR - Yazının Üstünde */}
        <div className="flex gap-8 mb-8">
            <a 
              href="https://www.linkedin.com/in/ey%C3%BCp-fidan-114386220/" 
              target='_blank' 
              className="text-slate-400 hover:text-blue-500 transition-all transform hover:-translate-y-1 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/eyup-fidan" 
              target='_blank' 
              className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.instagram.com/_eyup.fidan_/" 
              target='_blank' 
              className="text-slate-400 hover:text-pink-500 transition-all transform hover:-translate-y-1 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61550531052700" 
              target='_blank' 
              className="text-slate-400 hover:text-blue-600 transition-all transform hover:-translate-y-1 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
        </div>

        {/* Ayırıcı Çizgi (Premium hissi verir) */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"></div>

        {/* 3. TELİF HAKKI - En Altta */}
        <p className="text-slate-500 text-sm text-center">
            {language === 'en' 
             ? "© 2025 Eyüp Fidan. All rights reserved." 
             : "© 2025 Eyüp Fidan. Tüm hakları saklıdır."
            }
        </p>
      </div>
    </footer>
  );
}