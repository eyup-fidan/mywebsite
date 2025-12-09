'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  return (
    // DEĞİŞİKLİK: 'min-h-[calc(100vh-6rem)]' kaldırıldı.
    // Yerine 'pt-40 pb-20 md:pt-48 md:pb-32' gibi sabit boşluklar eklendi.
    // Bu sayede zoom yapıldığında boşluklar aşırı büyümeyecek, düzenli kalacak.
    <section id="about" className="pt-40 pb-20 md:pt-48 md:pb-32 flex items-center justify-center">
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* SOL TARAF: Metin Alanı */}
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-4 animate-fade-up delay-100">
            {language === 'en' ? "Hello, I'm Eyüp " : "Merhaba, Ben Eyüp "}
          </h2>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-up delay-200 tracking-tight">
            {language === 'en' ? "Software Developer" : "Yazılım Geliştirici"} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              {language === 'en' ? "& Computer Engineer" : "& Bilgisayar Mühendisi"}
            </span>
          </h1>

          <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-up delay-300">
            {language === 'en' 
              ? "I am a Computer Engineer and Software Developer who bridges the gap between complex engineering logic and elegant user interfaces. I create scalable, user-friendly solutions grounded in modern software architectures and engineering principles. Focused on crafting seamless digital experiences, I enjoy bringing static designs to life with fluid animations and responsive layouts. I am a lifelong learner and follow technology with passion, constantly refining my skills to build the web of tomorrow."
              : "Karmaşık mühendislik mantığı ile zarif kullanıcı arayüzleri arasında köprü kuran bir Bilgisayar Mühendisi ve Yazılım Geliştiricisiyim. Modern yazılım mimarileri ve mühendislik prensiplerine dayalı, ölçeklenebilir ve kullanıcı dostu çözümler üretiyorum. Akıcı dijital deneyimler tasarlamaya odaklanarak, statik tasarımları akıcı animasyonlar ve duyarlı düzenlerle hayata geçirmekten keyif alıyorum. Teknolojiyi tutkuyla takip eden, yarının web dünyasını inşa etmek için becerilerini sürekli geliştiren, hayat boyu öğrenmeye adamış biriyim."
            }
          </p>
          
          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-6 mb-8 animate-fade-up delay-500">
            <a href="https://github.com/eyup-fidan" target="_blank" className="p-4 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-slate-700 hover:text-white hover:-translate-y-1 transition-all text-2xl text-slate-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ey%C3%BCp-fidan-114386220/" target="_blank" className="p-4 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:-translate-y-1 transition-all text-2xl text-slate-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/_eyup.fidan_/" target="_blank" className="p-4 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-pink-600 hover:border-pink-600 hover:text-white hover:-translate-y-1 transition-all text-2xl text-slate-300">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550531052700" target="_blank" className="p-4 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-blue-700 hover:border-blue-700 hover:text-white hover:-translate-y-1 transition-all text-2xl text-slate-300">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* SAĞ TARAF (Resim) */}
        <div className="flex-1 relative flex justify-center md:justify-end animate-fade-right delay-200 md:-mt-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                <div className="relative w-full h-full rounded-full border-4 border-slate-800/50 shadow-2xl overflow-hidden bg-slate-900 ring-4 ring-blue-500/10">
                    <Image 
                      src="/profile.jpg" 
                      alt="Eyüp Fidan" 
                      fill 
                      className="object-cover" 
                      priority 
                    />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}