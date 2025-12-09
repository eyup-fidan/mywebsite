'use client';
import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();

  // --- PROJE BİLGİLERİ---
  const projectData = [
    {
      id: 1,
      imageSrc: "/ProductManangementSystem.jpg", 
      title: language === 'en' ? "E-Commerce Application" : "E-Ticaret Uygulaması", 
      description: language === 'en' 
        ? "A modern e-commerce platform built with Next.js. Features include cart management, payment integration, and user auth."
        : "Next.js ile geliştirilmiş modern bir e-ticaret platformu. Sepet yönetimi, ödeme entegrasyonu ve kullanıcı girişi özelliklerini içerir.",
      techs: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Responsive Design"],
      codeLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      imageSrc: "/Fitness&Nutrition.jpg",
      title: language === 'en' ? "Fitness & Nutrition Tracking App" : "Fitness ve Beslenme Takip Uygulaması",
      description: language === 'en' 
        ? "A productivity tool for teams to track tasks. Includes drag-and-drop functionality and real-time updates."
        : "Takımların görevleri takip etmesi için bir üretkenlik aracı. Sürükle-bırak özelliği ve gerçek zamanlı güncellemeler içerir.",
      techs: ["React Native", "Node.js", "PostgreSQL","Supabase","Next.js", "Tailwind CSS", "React"],
      codeLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      imageSrc: "/OnlineEducation.jpg",
      title: language === 'en' ? "Online Course & Education Platform" : "Online Kurs & Eğitim Platformu",
      description: language === 'en' 
        ? "An AI-powered application that generates images from text prompts using OpenAI API."
        : "OpenAI API kullanarak metin girdilerinden (prompt) görsel üreten yapay zeka destekli bir uygulama.",
      techs: ["TypeScript", "OpenAI API", "Docker","Tailwind CSS","PostgreSQL","PRISMA ORM","Node.js","React Native"],
      codeLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Bölüm Başlığı */}
        <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-blue-500">
                {language === 'en' ? "My Projects" : "Projelerim"}
            </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project) => (
             <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:shadow-blue-500/20 hover:shadow-xl transition-all group flex flex-col">
             
             {/* --- GÖRSEL ALANI --- */}
             <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
               <Image 
                 src={project.imageSrc} 
                 alt={project.title}
                 fill
                 quality={100}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                 onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none'; 
                 }}
               />
               
               {/* Resim Yüklenmezse Arkada Gözükecek Yazı */}
               <div className="absolute inset-0 bg-slate-800 -z-10 flex items-center justify-center text-slate-600 text-xs text-center p-4">
                  Resim Bulunamadı: {project.imageSrc}
               </div>
             </div>
             
             <div className="p-6 flex flex-col flex-grow">
               <h3 className="text-xl font-bold mb-2 text-blue-400 transition-colors">
                 {project.title}
               </h3>
               
               <p className="text-slate-200 text-sm mb-4 flex-grow">
                  {project.description}
               </p>
               
               <div className="flex flex-wrap gap-2 mb-6">
                 {project.techs.map((tech, index) => (
                   <span key={index} className="text-xs px-2 py-1 bg-slate-800 border border-slate-700 rounded text-blue-300 font-medium">
                     {tech}
                   </span>
                 ))}
               </div>
               
               <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-800">
                  <a href={project.codeLink} target="_blank" className="text-sm font-medium hover:text-blue-400 flex items-center gap-1 text-slate-300 transition-colors">
                    <FaGithub /> {language === 'en' ? "Code" : "Kod"}
                  </a>
                  <a href={project.liveLink} target="_blank" className="text-sm font-medium hover:text-blue-400 flex items-center gap-1 text-slate-300 transition-colors">
                    {language === 'en' ? "Live Preview" : "Canlı Önizleme"} &rarr;
                  </a>
               </div>
             </div>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
}