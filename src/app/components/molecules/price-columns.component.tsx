import React from 'react';
import { CheckedIcon, PopularArrowIcon } from '../../../assets/icons';

export const PriceColumnsComponent = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-center antialiased p-4">
      <div className="h-full md:px-3 price-column-container mx-auto">
        <div className="max-w-xs md:mr-auto lg:mr-auto xl:mr-auto 2xl:mr-auto">
          <div className="relative flex flex-col h-full grey-background price-column-border rounded-3xl p-8">
            <div className="absolute top-[-5px] right-0 md:right-[-55px] lg:right-[-55px] xl:right-[-55px] 2xl:right-[-55px]">
              <div className="text-lg inline-flex font-semibold text-white-600 rounded-full text-center px-3 shadow-sm transform -translate-y-1/2">
                <img src={PopularArrowIcon} width="70px" />
                <span style={{ marginTop: '-10px', marginLeft: 10 }}>
                  Il più popolare
                </span>
              </div>
            </div>

            <header className="pb-4 mb-4">
              <div className="mb-1 text-center">
                <h1 className="text-4xl font-medium text-indigo-50 leading-snug">
                  2.450 €
                </h1>

                <h2 className="text-2xl font-medium text-indigo-50 leading-snug mt-4">
                  Tutto e Subito!
                </h2>
              </div>
              <div className="text-indigo-200 text-lg text-center mt-4">
                Accesso a tutto 🤓. Assunto o ripreparato.
              </div>
            </header>
            <ul className="text-indigo-200 text-sm space-y-5 text-lg flex-grow mb-6">
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>Lezioni serali in streaming da lunedì al venerdì.</span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Video lezioni dedicate alle quali potrai accedere in qualsiasi
                  momento.
                </span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>Accesso a vita alla piattaforma.</span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Accesso immediato all'intera piattaforma compresi materiale e
                  lezioni extra.
                </span>
              </li>

              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>Migliori strumenti per lo sviluppo web.</span>
              </li>

              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Lezioni individuali per la preparazione ai colloqui tecnici{' '}
                  <b>in qualsiasi momento</b>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-full md:px-3 price-column-container mx-auto">
        <div className="max-w-xs md:mr-auto lg:mr-auto xl:mr-auto 2xl:mr-auto">
          <div className="relative flex flex-col h-full grey-background price-column-border rounded-3xl p-8">
            <header className="pb-4 mb-4">
              <div className="mb-1 text-center">
                <h1 className="text-4xl font-medium text-indigo-50 leading-snug">
                  400 € in 6 rate
                </h1>

                <h2 className="text-2xl font-medium text-indigo-50 leading-snug mt-4">
                  con anticipo di 250 €
                </h2>
                <h3 className="font-medium text-indigo-50 leading-snug mt-1">
                  Totale: 2.650 €
                </h3>
              </div>
              <div className="text-indigo-200 text-lg text-center mt-4">
                Accesso completo solo dopo aver pagato tutte le rate. La formula{' '}
                <b>assunto o ripreparato</b> è sempre valida.
              </div>
            </header>
            <ul className="text-indigo-200 text-sm space-y-5 text-lg flex-grow mb-6">
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>Lezioni serali in streaming da lunedì al venerdì.</span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Video lezioni dedicate alle quali potrai accedere in qualsiasi
                  momento.
                </span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>Accesso a vita alla piattaforma.</span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Accesso all'intera piattaforma compresi materiale e lezioni
                  extra solo dopo aver pagato le rate.
                </span>
              </li>

              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Lezioni individuali per la preparazione ai colloqui tecnici
                  <b> soltanto a fine corso</b>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-full md:px-3 price-column-container mx-auto">
        <div className="max-w-xs md:mr-auto lg:mr-auto xl:mr-auto 2xl:mr-auto">
          <div className="relative flex flex-col h-full grey-background price-column-border rounded-3xl p-8">
            <header className="pb-4 mb-4">
              <div className="mb-1 text-center">
                <h1 className="text-4xl font-medium text-indigo-50 leading-snug">
                  225 € in 12 rate
                </h1>
                <h2 className="text-2xl font-medium text-indigo-50 leading-snug mt-4">
                  con anticipo di 250 €
                </h2>
                <h3 className="font-medium text-indigo-50 leading-snug mt-1">
                  Totale: 2.950 €
                </h3>
              </div>
              <div className="text-indigo-200 text-lg text-center mt-4">
                Accesso completo solo dopo aver pagato tutte le rate. La formula{' '}
                <b>assunto o ripreparato</b> è sempre valida.
              </div>
            </header>
            <ul className="text-indigo-200 text-sm space-y-5 text-lg flex-grow mb-6">
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>Lezioni serali in streaming da lunedì al venerdì.</span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Video lezioni dedicate alle quali potrai accedere in qualsiasi
                  momento.
                </span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>Accesso a vita alla piattaforma.</span>
              </li>
              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Accesso all' intera piattaforma compresi materiale e lezioni
                  extra solo dopo aver pagato le rate.
                </span>
              </li>

              <li className="flex items-center">
                <img src={CheckedIcon} className="mr-2" />
                <span>
                  Lezioni individuali per la preparazione ai colloqui tecnici
                  <b> soltanto a fine corso</b>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
