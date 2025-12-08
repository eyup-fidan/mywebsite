// mywebsite/components/Footer.tsx
'use client';
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="py-8 text-center text-slate-200 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6">
        <p>
            {language === 'en' 
             ? "© 2025 Eyüp Fidan. All rights reserved." 
             : "© 2025 Eyüp Fidan. Tüm hakları saklıdır."
            }
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xl">
            <a href="https://www.linkedin.com/in/ey%C3%BCp-fidan-114386220/" target='_blank' className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
            <a href="https://github.com/eyup-fidan" target='_blank' className="hover:text-slate-400 transition-colors"><FaGithub /></a>
            <a href="https://www.instagram.com/_eyup.fidan_/" target='_blank' className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61550531052700" target='_blank' className="hover:text-blue-600 transition-colors"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
}