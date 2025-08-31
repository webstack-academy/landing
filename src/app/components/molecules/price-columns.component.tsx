import React from 'react';
import { CheckedIcon, PopularArrowIcon } from '../../../assets/icons';

export const PriceColumnsComponent = () => {
  return (
    <section className="space-y-8 p-4">
      {/* Sezione informativa sul percorso selettivo */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold  mb-4">Percorso Selettivo e Personalizzato</h2>
        <p className=" text-lg max-w-4xl mx-auto leading-relaxed">
          Il nostro corso è <strong>ristretto e selettivo</strong>. Ogni studente viene seguito individualmente per garantire il massimo apprendimento.
          L'<strong>esame di ammissione</strong> ci permette di valutare il livello di preparazione di ogni candidato e assicurare che all'inizio
          del corso principale tutti gli studenti abbiano le stesse competenze di base.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center antialiased">
        {/* Precorso */}
        <div className="h-full price-column-container mx-auto">
          <div className="max-w-md mx-auto">
            <div className="relative flex flex-col h-full rounded-3xl p-6 border border-gray-300 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-400/20 price-option-glow overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <header className="pb-4 mb-4">
                <div className="mb-1 text-center">
                  <h1 className="text-4xl font-medium text-gray-900 leading-snug">
                    400 €
                  </h1>
                  <div className="text-sm text-gray-600 mt-1">+ IVA</div>

                  <h2 className="text-2xl font-medium text-gray-900 leading-snug mt-4">
                    Precorso
                  </h2>
                  <div className="text-lg text-gray-700 mt-2">2 mesi</div>
                </div>
                <div className="text-gray-700 text-center mt-4">
                  <strong>Solo per chi non supera l'esame di ammissione</strong>
                </div>
              </header>
              <ul className="text-gray-700 text-sm space-y-4 flex-grow mb-6">
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" style={{ filter: 'hue-rotate(180deg)' }} />
                  <span>Fondamenti di programmazione e logica</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" style={{ filter: 'hue-rotate(180deg)' }} />
                  <span>JavaScript base e sintassi essenziale</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" style={{ filter: 'hue-rotate(180deg)' }} />
                  <span>SQL e database relazionali</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" style={{ filter: 'hue-rotate(180deg)' }} />
                  <span>HTML5, CSS3 e DOM manipulation</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" style={{ filter: 'hue-rotate(180deg)' }} />
                  <span>Preparazione per il corso principale</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" style={{ filter: 'hue-rotate(180deg)' }} />
                  <span>Seguimento individuale personalizzato</span>
                </li>
              </ul>
              <div className="bg-blue-500 bg-opacity-20 border border-blue-500 rounded-lg p-3 mt-4 relative z-10">
                <p className="text-blue-700 text-sm text-center">
                  <strong>Nota:</strong> Chi supera l'esame di ammissione può accedere direttamente al corso principale
                </p>
              </div>
              {/* Diagonal Light Effect */}
              <div className="diagonal-light diagonal-light-white"></div>
            </div>
          </div>
        </div>

        {/* Corso Principale Unificato */}
        <div className="h-full price-column-container mx-auto">
          <div className="max-w-md mx-auto">
            <div className="relative flex flex-col h-full grey-background price-column-border rounded-3xl p-6">
              {/*<div className="absolute top-[-5px] right-0 md:right-[-55px] lg:right-[-55px] xl:right-[-55px] 2xl:right-[-55px]">*/}
              {/*  <div className="text-lg inline-flex font-semibold text-white-600 rounded-full text-center px-3 shadow-sm transform -translate-y-1/2">*/}
              {/*    <img src={PopularArrowIcon} width="70px" />*/}
              {/*    <span style={{ marginTop: '-10px', marginLeft: 10 }}>*/}
              {/*      Il più popolare*/}
              {/*    </span>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <header className="pb-4 mb-4">
                <div className="mb-1 text-center">
                  <h2 className="text-2xl font-medium text-indigo-50 leading-snug mb-4">
                    Corso Principale
                  </h2>
                  <div className="text-sm text-indigo-300 mb-6">10 mesi (5 mesi formazione + 5 mesi stage)</div>
                </div>
              </header>

              {/* Opzioni di Pagamento */}
              <div className="space-y-4 mb-6">
                {/* Opzione Tutto Subito */}
                <div className="relative border border-green-500 bg-green-500 bg-opacity-10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 price-option-glow overflow-hidden">
                  <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      RISPARMIA 300€
                    </div>
                  </div>
                  <div className="text-center mt-2 relative z-10">
                    <div className="text-sm text-gray-400 line-through">2.100 €</div>
                    <div className="text-3xl font-bold text-indigo-50">1.800 €</div>
                    <div className="text-xs text-indigo-300">+ IVA</div>
                    <div className="text-green-400 font-semibold mt-1">Pagamento Unico</div>
                  </div>
                  {/* Diagonal Light Effect */}
                  <div className="diagonal-light diagonal-light-green"></div>
                </div>

                {/* Opzione Rateizzata */}
                <div className="relative border border-indigo-400 bg-indigo-500 bg-opacity-10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/25 price-option-glow overflow-hidden">
                  <div className="text-center relative z-10">
                    <div className="text-2xl font-bold text-indigo-50">300€ x 5 rate</div>
                    <div className="text-sm text-indigo-300">+ anticipo 600€</div>
                    <div className="text-xs text-indigo-400 mt-1">Totale: 2.100€ + IVA</div>
                    <div className="text-indigo-300 font-semibold mt-1">Pagamento Rateizzato</div>
                  </div>
                  {/* Diagonal Light Effect */}
                  <div className="diagonal-light diagonal-light-blue"></div>
                </div>
              </div>

              {/* Contenuti del Corso */}
              <ul className="text-indigo-200 text-sm space-y-3 flex-grow">
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" />
                  <span>5 mesi di formazione intensiva serale</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" />
                  <span>React, Node.js, Java Spring Boot, Python</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" />
                  <span>AI, Cloud Computing (AWS), DevOps</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Stage garantito di 5 mesi presso aziende partner</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Accesso a vita alla piattaforma e community</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Preparazione individuale ai colloqui tecnici</span>
                </li>
                <li className="flex items-start">
                  <img src={CheckedIcon} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Supporto per l'inserimento lavorativo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Styles for Hover Effects */}
      <style>{`
        .diagonal-light {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.3) 50%, transparent 55%, transparent 100%);
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.6s ease-out;
          opacity: 0;
          pointer-events: none;
        }

        .diagonal-light-green {
          background: linear-gradient(45deg, transparent 0%, transparent 45%, rgba(34, 197, 94, 0.4) 50%, transparent 55%, transparent 100%);
        }

        .diagonal-light-blue {
          background: linear-gradient(45deg, transparent 0%, transparent 45%, rgba(99, 102, 241, 0.4) 50%, transparent 55%, transparent 100%);
        }

        .diagonal-light-white {
          background: linear-gradient(45deg, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.6) 50%, transparent 55%, transparent 100%);
        }

        .price-option-glow:hover .diagonal-light {
          transform: translateX(50%) translateY(50%) rotate(45deg);
          opacity: 1;
        }

        .price-option-glow:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .price-option-glow {
          background-blend-mode: overlay;
        }
      `}</style>
    </section>
  );
};
