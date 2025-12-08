'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      if (value.length > 16) return;
      if (value !== '' && !/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/.test(value)) return;
    }
    if (name === 'email') {
      if (value.length > 30) return;
    }
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
       setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors = { name: '', email: '' };
    let hasError = false;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Please enter a valid email address.' : 'Lütfen geçerli bir e-posta adresi giriniz.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return; 
    }

    try {
      const response = await fetch("https://formspree.io/f/mvgeqzzw", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-blue-500">
                {language === 'en' ? "Contact Me" : "İletişim"}
            </span>
        </h2>
        
        <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800">
          
          <p className="text-center text-slate-200 mb-8">
            {language === 'en' 
             ? "Feel free to reach out to me for any inquiries or collaborations using the form below."
             : "Herhangi bir soru, iş birliği veya teklif için aşağıdaki formu kullanarak bana ulaşabilirsiniz."
            }
          </p>

          {status === 'success' ? (
             <div className="text-center p-6 bg-green-500/10 border border-green-500/50 rounded-lg animate-fade-up">
                <h3 className="text-xl font-bold text-green-400 mb-2">
                    {language === 'en' ? "Message Sent! " : "Mesaj Gönderildi! "}
                </h3>
                <p className="text-slate-300">
                    {language === 'en' 
                     ? "Thank you for contacting me. I will get back to you as soon as possible."
                     : "Benimle iletişime geçtiğiniz için teşekkürler. En kısa sürede size dönüş yapacağım."
                    }
                </p>
                <button onClick={() => setStatus(null)} className="mt-4 text-sm text-green-400 hover:underline">
                    {language === 'en' ? "Send another message" : "Başka bir mesaj gönder"}
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    {language === 'en' ? "Full Name" : "Ad Soyad"}
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" 
                    placeholder={language === 'en' ? "Name Surname" : "Adınız Soyadınız"} 
                  />
                  <p className={`text-xs mt-1 text-right ${formData.name.length === 16 ? 'text-orange-500' : 'text-slate-500'}`}>
                    {formData.name.length}/16
                  </p>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    {language === 'en' ? "Email Address" : "E-posta Adresi"}
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`w-full p-3 bg-slate-950 border rounded-lg focus:outline-none transition-colors placeholder-slate-600 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-blue-500'}`}
                    placeholder="example@email.com"
                  />
                  <div className="flex justify-between mt-1">
                     <span className="text-xs text-red-500 h-4">{errors.email}</span>
                     <span className={`text-xs ${formData.email.length === 30 ? 'text-orange-500' : 'text-slate-500'}`}>
                        {formData.email.length}/30
                     </span>
                  </div>
                </div>
              </div>
              
              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                    {language === 'en' ? "Your Message" : "Mesajınız"}
                </label>
                <textarea 
                  name="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  // DEĞİŞİKLİK BURADA: 'resize-none' eklendi.
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600 resize-none" 
                  placeholder={language === 'en' ? "Write your message here..." : "Mesajınızı buraya yazın..."}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="px-10 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
                  {status === 'error' 
                    ? (language === 'en' ? "Failed, Try Again" : "Hata, Tekrar Dene") 
                    : (language === 'en' ? "Send Message" : "Mesaj Gönder")
                  }
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}