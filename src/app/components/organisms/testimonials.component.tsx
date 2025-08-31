import React, { useState, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  linkedinUrl?: string;
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Geanina Tinica",
      role: "Ex-Studente, Full Stack Developer",
      company: "",
      content: "Ostap è un insegnante straordinario che sa sfruttare al meglio il tempo a sua disposizione e gli strumenti a sua disposizione per preparare lezioni precise, basate sul livello dei suoi studenti.",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/ostap-markin-505441173/details/recommendations/",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGkhHl3xFTNVw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1686242380315?e=1759363200&v=beta&t=KWu6qFs9vCzi2xcH9d_00296DPHq0buFqZBKW8Y-Oow"
    },
    {
      id: 2,
      name: "Davide Vergani",
      role: "Direttore di sede",
      company: "Fondazione et labora",
      content: "Considero Ostap un insegnante eccellente, capace di creare un ottimo rapporto con il gruppo della classe e di trasmettere concetti complessi. Ha subito dimostrato di essere attento ai dettagli...",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/ostap-markin-505441173/details/recommendations/",
      avatar: "https://media.licdn.com/dms/image/v2/C4D03AQGVUOI3Pju2qQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1600355600612?e=1759363200&v=beta&t=1t1r5XgLxXTK_MA1A1YCDX2nUXaADLOdaS72cL95mKQ"
    },
    {
      id: 3,
      name: "Chiara Nicoli",
      role: "Coordinatore area Formazione",
      company: "Fondazione et labora",
      content: "Ho avuto la grande fortuna di collaborare con Ostap in diversi ambiti della formazione sia per adulti, quindi dipendenti senior, sia per bambini. Adulti per soddisfare le esigenze formative di diversi nostri importanti clienti nel settore IT",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/ostap-markin-505441173/details/recommendations/",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEE8GzKSO8Jxg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721986932822?e=1759363200&v=beta&t=fY3i15sJaasWNSUQt8D-26iS9camfQ1tmb9bHiBZ9Qk"
    }
  ];


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? '#9CC84B' : 'rgba(255, 255, 255, 0.3)',
          fontSize: '16px',
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#111322' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Studenti e Partner Parlano di Noi
          </h2>
          <p className="text-lg" style={{ color: '#D0D5DD' }}>
            Testimonianze dei nostri ex-studenti e delle aziende che collaborano con noi
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
          >
            <div className="flex space-x-6 py-4 justify-center" style={{ width: 'max-content', minWidth: '100%' }}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 p-6 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    width: '350px',
                    backgroundColor: '#1f2937',
                    border: '1px solid rgba(156, 200, 75, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: '#D0D5DD', minHeight: '80px' }}
                  >
                    "{testimonial.content}"
                  </p>

                  {/* LinkedIn Link */}
                  {testimonial.linkedinUrl && (
                    <div className="mb-4">
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs transition-colors duration-200 hover:underline"
                        style={{ color: '#9CC84B' }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Leggi la recensione completa su LinkedIn
                      </a>
                    </div>
                  )}

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className={`w-full h-full rounded-full flex items-center justify-center font-bold text-white ${testimonial.avatar ? 'hidden' : 'flex'}`}
                        style={{ backgroundColor: '#9CC84B' }}
                      >
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: '#ffffff' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm" style={{ color: '#9CC84B' }}>
                        {testimonial.role}
                      </p>
                      <p className="text-xs" style={{ color: '#9CA3AF' }}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="lg:hidden text-center mt-6">
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            Scorri orizzontalmente per vedere altre testimonianze
          </p>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}