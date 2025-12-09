'use client';
import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa'; 
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();

  const projectData = [
    {
      id: 1,
      imageSrc: "/ProductManangementSystem.jpg", 
      title: language === 'en' ? "E-Commerce Application" : "E-Ticaret Uygulaması", 
      description: language === 'en' 
        ? "A modern e-commerce platform built with Next.js. Features include cart management, payment integration, and user auth."
        : "Next.js ile geliştirilmiş modern bir e-ticaret platformu. Sepet yönetimi, ödeme entegrasyonu ve kullanıcı girişi özelliklerini içerir.",
      techs: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Responsive Design"],
      status: "dev"
    },
    {
      id: 2,
      imageSrc: "/Fitness&Nutrition.jpg",
      title: language === 'en' ? "Fitness & Nutrition Tracking App" : "Fitness ve Beslenme Takip Uygulaması",
      description: language === 'en' 
        ? "A modern fitness app where users can track their daily nutrition, calorie and workout data. It offers personalized health tracking with analysis screens, graphs and smart suggestions."
        : "Kullanıcıların günlük beslenme, kalori ve egzersiz verilerini takip edebilecekleri modern bir fitness uygulaması. Analiz ekranları, grafikler ve akıllı önerilerle kişiye özel sağlık takibi sunar.",
      techs: ["React Native", "Node.js", "PostgreSQL","Supabase","Next.js", "Tailwind CSS", "React"],
      status: "soon"
    },
    {
      id: 3,
      imageSrc: "/OnlineEducation.jpg",
      title: language === 'en' ? "Online Course & Education Platform" : "Online Kurs & Eğitim Platformu",
      description: language === 'en' 
        ? "A full-fledged training platform that supports course management, video content, user registrations, and payment structure. It provides high scalability with its optimized interface and secure backend architecture."
        : "Kurs yönetimi, video içeriği, kullanıcı kayıtları ve ödeme yapısını destekleyen tam kapsamlı bir eğitim platformu. Optimize edilmiş arayüz ve güvenli backend mimarisiyle yüksek ölçeklenebilirlik sağlar.",
      techs: ["TypeScript", "OpenAI API", "Docker","Tailwind CSS","PostgreSQL","PRISMA ORM","Node.js","React Native"],
      status: "soon"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Bölüm Başlığı */}
        <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-blue-500 pb-2">
                {language === 'en' ? "My Projects" : "Projelerim"}
            </span>
        </h2>
        
        {/* Grid Yapısı - Boşluklar (gap) azaltıldı: gap-6 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
             <div key={project.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-2">
             
             {/* --- GÖRSEL ALANI --- */}
             <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
               <Image 
                 src={project.imageSrc} 
                 alt={project.title}
                 fill
                 quality={100}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                 onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none'; 
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
             </div>
             
             {/* Kart İçeriği - Padding p-6 (Kompakt) */}
             <div className="p-6 flex flex-col flex-grow relative">
               
               {/* Başlık (Sabit Mavi) */}
               <h3 className="text-xl font-bold mb-3 text-blue-400 transition-colors">
                 {project.title}
               </h3>
               
               {/* Açıklama (Sabit Beyaz) - Alt boşluk mb-4 */}
               <p className="text-slate-200 text-sm mb-4 leading-relaxed min-h-[80px]">
                  {project.description}
               </p>
               
               {/* Teknolojiler - Alt boşluk mb-6 */}
               <div className="flex flex-wrap gap-2 mb-6">
                 {project.techs.map((tech, index) => (
                   <span 
                    key={index} 
                    className="px-3 py-1 text-[11px] font-semibold bg-slate-950 text-slate-300 border border-slate-800 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                   >
                     {tech}
                   </span>
                 ))}
               </div>
               
               {/* --- ALT KISIM (Footer) --- */}
               <div className="mt-auto pt-5 border-t border-slate-800/50 flex items-center justify-between">
                  
                  {/* SOL: GitHub İkonu (Hover Efekti Eklendi) */}
                  <div className="p-2.5 bg-slate-800 rounded-full text-white text-lg shadow-lg border border-slate-700 flex items-center justify-center opacity-90 cursor-default transition-all duration-300 hover:bg-slate-700 hover:text-slate-300 hover:border-slate-600">
                    <FaGithub />
                  </div>

                  {/* SAĞ: Durum Belirteçleri (Hover Eklendi) */}
                  
                  {/* DURUM 1: Geliştiriliyor */}
                  {project.status === 'dev' && (
                    <div className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all duration-300 cursor-default hover:bg-amber-500/20 hover:border-amber-500/40 hover:shadow-amber-500/30 hover:-translate-y-0.5">
                        <span className="text-[10px] font-bold text-amber-400 tracking-wide uppercase">
                            {language === 'en' ? "Under Development" : "Geliştirilme Aşamasında"}
                        </span>
                    </div>
                  )}

                  {/* DURUM 2: Yakında */}
                  {project.status === 'soon' && (
                    <div className="px-3 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default hover:bg-blue-600/20 hover:border-blue-500/40 hover:shadow-blue-500/30 hover:-translate-y-0.5">
                        <span className="text-[10px] font-bold text-blue-300 tracking-wide uppercase bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                            {language === 'en' ? "Coming Soon" : "Yakında"}
                        </span>
                    </div>
                  )}

               </div>
             </div>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
}