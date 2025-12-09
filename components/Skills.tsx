'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { language } = useLanguage();

  const categories = [
    {
      id: 1,
      title: language === 'en' ? 'Frontend Development' : 'Ön Uç Geliştirme',
      desc: language === 'en'
        ? 'I build fast, responsive, and interactive user interfaces using modern web technologies. I care about UX/UI principles.'
        : 'Modern web teknolojilerini kullanarak hızlı, responsive ve etkileşimli kullanıcı arayüzleri geliştiriyorum. UX/UI prensiplerine önem veriyorum.',
      techs: ['React.js', 'Next.js', 'TypeScript','Bootstrap', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      id: 2,
      title: language === 'en' ? 'Backend Development & DevOps' : 'Arka Uç Geliştirme & DevOps',
      desc: language === 'en'
        ? 'I create scalable server-side architectures, manage database integrations, and build robust APIs.'
        : 'Ölçeklenebilir sunucu mimarileri oluşturuyor, veritabanı entegrasyonlarını yönetiyor ve sağlam API\'lar inşa ediyorum.',
      techs: ['Node.js', 'PostgreSQL', 'Git/GitHub', 'REST API', 'Firebase', 'Docker','Java'] 
    },
    {
      id: 3,
      title: language === 'en' ? 'Artificial Intelligence' : 'Yapay Zeka',
      desc: language === 'en'
        ? 'I am interested in machine learning models, data analysis, and developing data-driven smart solutions.'
        : 'Makine öğrenimi modelleri, veri analizi ve veri odaklı akıllı çözümler geliştirme süreçleriyle ilgileniyorum.',
      techs: ['Python', 'Machine Learning', 'Data Analysis', 'Model Training','Image Processing'] 
    }
  ];

  const delayClasses = ['delay-100', 'delay-200', 'delay-300'];

  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-up">
            <span className="border-b-4 border-blue-500 pb-2">
                {language === 'en' ? "My Skills" : "Yeteneklerim"}
            </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group animate-fade-up ${delayClasses[index]}`}
            >
              {/* Başlık Rengi : Mavi */}
              <h3 className="text-xl font-bold mb-4 text-blue-400 transition-colors">
                {category.title}
              </h3>

              <p className="text-slate-200 mb-8 text-sm leading-relaxed min-h-[60px]">
                {category.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-950 text-slate-300 border border-slate-800 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}