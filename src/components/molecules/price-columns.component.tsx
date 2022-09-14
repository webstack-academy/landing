import React from 'react';

export const PriceColumnsComponent = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-center antialiased p-4">
      <div className="h-full px-3 price-column-container">
        <div className="max-w-xs md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto">
          <div className="relative flex flex-col h-full bg-indigo-700 shadow-lg rounded-lg shadow-lg p-5">
            <div className="absolute top-0 right-5">
              <div className="text-xs inline-flex font-semibold bg-green-100 text-green-600 rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">
                Il più popolare
              </div>
            </div>
            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
              <div className="mb-2"></div>
              <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                Tutto e Subito!
              </h3>
              <div className="font-extrabold mb-1">
                <span className="text-2xl text-indigo-200">
                  <s>€2200</s>
                </span>
                <span className="text-4xl text-indigo-50"> €1900</span>
              </div>
              <div className="text-indigo-200">
                Accesso a tutto 🤓. Assunto o ripreparato.
              </div>
            </header>
            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Lezioni serali in streaming da lunedì al venerdì.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Video lezioni dedicate alle quali potrai accedere in qualsiasi
                  momento.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Accesso a vita alla piattaforma.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Accesso immediato all' intera piattaforma compresi materiale e
                  lezioni extra.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Migliori strumenti per lo sviluppo web</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-full px-3 price-column-container">
        <div className="max-w-xs md:mr-auto lg:mr-auto xl:mr-auto 2xl:mr-auto">
          <div className="relative flex flex-col h-full bg-zinc-800 shadow-lg rounded-lg shadow-lg p-5">
            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
              <div className="font-extrabold mb-1">
                {/*<span className="text-3xl text-indigo-50"> 4 rate da €500</span>*/}
                <h2 className="text-xl font-extrabold text-indigo-50 leading-snug">
                  4 rate da €500
                </h2>
                <span className="text-xl text-indigo-200">
                  {' '}
                  anticipo €200{' '}
                  <span
                    className="text-xl text-indigo-200"
                    style={{ float: 'right' }}
                  >
                    tot. €2200
                  </span>
                </span>
              </div>
              <div className="text-indigo-200">
                Accesso completo solo dopo aver pagato tutte le rate. La formula{' '}
                <b>assunto o ripreparato</b> è sempre valida.
              </div>
            </header>
            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Lezioni serali in streaming da lunedì al venerdì.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Video lezioni dedicate alle quali potrai accedere in qualsiasi
                  momento.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Accesso a vita alla piattaforma.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Accesso all' intera piattaforma compresi materiale e lezioni
                  extra solo dopo aver pagato le rate.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
