'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
// DÜZELTME 1: Dosya yolu garanti olsun diye '../' olarak değiştirildi
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all animate-fade-up h-20 flex items-center">
      
      <div className="container mx-auto px-6 md:px-12 lg:pl-24 lg:pr-56 flex justify-between items-center w-full">
        
        {/* LOGO */}
        <div 
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer tracking-tight" 
          onClick={scrollToTop}
        >
          EYÜP FİDAN
        </div>
        
        {/* LİNKLER */}
        <div className="hidden md:flex items-center gap-14 text-lg font-medium text-slate-300">
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            {language === 'en' ? 'About' : 'Hakkımda'}
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition-colors">
            {language === 'en' ? 'Skills' : 'Yetenekler'}
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            {language === 'en' ? 'Projects' : 'Projeler'}
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">
            {language === 'en' ? 'Contact' : 'İletişim'}
          </Link>
          
          {/* DİL DEĞİŞTİRME BUTONU */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-semibold group"
          >
            {/* DÜZELTME 2: İkonu span içine aldık, class'ı span'a verdik */}
            <span className="text-xl group-hover:rotate-180 transition-transform duration-500 flex items-center">
                <MdLanguage />
            </span>
            <span>{language === 'en' ? 'TR' : 'EN'}</span>
          </button>
        </div>

        {/* MOBİL */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-slate-300 font-bold border border-slate-700 px-2 py-1 rounded text-sm"
          >
            <span>{language === 'en' ? 'TR' : 'EN'}</span>
          </button>

          <div className="text-3xl cursor-pointer text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-6 text-center shadow-2xl md:hidden">
          <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl text-slate-300 hover:text-blue-400">
            {language === 'en' ? 'About' : 'Hakkımda'}
          </Link>
          <Link href="#skills" onClick={() => setIsMenuOpen(false)} className="text-xl text-slate-300 hover:text-blue-400">
             {language === 'en' ? 'Skills' : 'Yetenekler'}
          </Link>
          <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="text-xl text-slate-300 hover:text-blue-400">
             {language === 'en' ? 'Projects' : 'Projeler'}
          </Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl text-slate-300 hover:text-blue-400">
             {language === 'en' ? 'Contact' : 'İletişim'}
          </Link>
        </div>
      )}
    </nav>
  );
}