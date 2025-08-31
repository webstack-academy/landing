import React, { useState, useEffect, useRef } from 'react';
import { CheckedIcon, ArrowCircleIcon } from '../../../assets/icons';

export default function CurriculumSection() {
    const [activeModule, setActiveModule] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const modules = [
        {
            title: "Precorso",
            duration: "2 mesi",
            description: "Fondamenti, JavaScript, SQL e front-end base",
            color: "#3B82F6",
            items: [
                { 
                    name: "Fondamenti di Programmazione", 
                    description: "Logica, algoritmi, flow chart e pseudocodice",
                    details: [
                        "Perché si programma: significato e origine",
                        "Logica, insiemi, proposizioni e induzione (in chiave pratica)", 
                        "Algoritmi e programmazione strutturata vs non strutturata",
                        "Flow chart e pseudocodice",
                        "Linguaggi, compilatori, interpreti, VM",
                        "Tipi di dato e prime esercitazioni guidate"
                    ]
                },
                { 
                    name: "JavaScript Base", 
                    description: "Sintassi, OOP, asincronia e mini-progetti console",
                    details: [
                        "Variabili, costanti e tipi di dato",
                        "Strutture di controllo: if, for, while",
                        "Funzioni e scope",
                        "Array e oggetti",
                        "OOP in JS: classi e prototipi", 
                        "Asincronia: callback, promises e async/await",
                        "Mini-progetti pratici in console (todo-list, calcolatrice)"
                    ]
                },
                { 
                    name: "SQL Base", 
                    description: "Database relazionali, query e relazioni",
                    details: [
                        "Concetti fondamentali dei database relazionali",
                        "Creazione e gestione di tabelle",
                        "Query di base: SELECT, INSERT, UPDATE, DELETE",
                        "Join e subquery semplici",
                        "Relazioni e chiavi primarie",
                        "Mini-progetto: database per gestione utenti + dati"
                    ]
                },
                { 
                    name: "Front-end Base", 
                    description: "HTML5, CSS3, JavaScript DOM e mini-progetti",
                    details: [
                        "HTML: struttura, tag principali, form, link, immagini, semantica",
                        "CSS: selettori, box model, layout base (flexbox), colori, font",
                        "JavaScript nel browser: manipolazione DOM, eventi, funzioni in contesto browser",
                        "Mini-progetti: form validator, light/dark mode, piccola web app vanilla"
                    ]
                }
            ],
            details: "Inizia il tuo percorso con le basi della programmazione. Imparerai i concetti fondamentali che ti accompagneranno per tutto il corso."
        },
        {
            title: "Corso Principale",
            duration: "5 mesi", 
            description: "Full Stack Development & AI",
            color: "#10B981",
            items: [
                { 
                    name: "React", 
                    description: "Componenti, hooks, routing e single page application",
                    details: [
                        "Componenti e JSX",
                        "Props e state",
                        "Hooks principali (useState, useEffect)",
                        "Routing e navigation",
                        "Integrazione con API REST",
                        "Progetto pratico: single page application completa"
                    ]
                },
                { 
                    name: "Node.js", 
                    description: "Backend con Fastify, API REST e autenticazione",
                    details: [
                        "Setup ambiente con Fastify",
                        "Creazione di API REST semplici",
                        "Connessione con database",
                        "Autenticazione di base",
                        "Mini-progetto full-stack (React + Node.js)"
                    ]
                },
                { 
                    name: "Java & Spring Boot", 
                    description: "OOP Java, Spring Framework, microservizi enterprise",
                    details: [
                        "Fondamenti di Java (OOP, tipi, collezioni, eccezioni)",
                        "Introduzione a Spring e Spring Boot",
                        "Creazione di REST API",
                        "Persistenza con JPA/Hibernate", 
                        "Sicurezza con Spring Security",
                        "Architettura a microservizi",
                        "Progetto pratico: backend enterprise-ready"
                    ]
                },
                { 
                    name: "Cloud & DevOps", 
                    description: "AWS deployment, Docker, Kubernetes e CI/CD",
                    details: [
                        "Introduzione al Cloud Computing",
                        "Deploy su AWS",
                        "Git, CI/CD e pipeline",
                        "Docker, Kubernetes e serverless"
                    ]
                },
                { 
                    name: "Python & FastAPI", 
                    description: "Backend Python, testing e best practices",
                    details: [
                        "Fondamenti di Python",
                        "Backend con FastAPI", 
                        "Testing e best practices"
                    ]
                },
                { 
                    name: "AI & LLM", 
                    description: "LangChain, RAG systems, prompt engineering",
                    details: [
                        "Cosa sono gli LLM e casi d'uso",
                        "Prompt Engineering",
                        "Sistemi RAG con LangChain",
                        "Deploy di un'app AI-ready con AWS Bedrock"
                    ]
                },
                { 
                    name: "Project Work Finale", 
                    description: "Progetto completo in team, deploy AWS, preparazione lavoro",
                    details: [
                        "Realizzazione di un progetto completo in team",
                        "Deploy end-to-end su AWS",
                        "Preparazione al mondo del lavoro: CV, LinkedIn, simulazioni colloqui"
                    ]
                }
            ],
            details: "Il cuore del programma: diventerai un full-stack developer moderno con competenze in AI e cloud computing."
        },
        {
            title: "Stage",
            duration: "5 mesi",
            description: "Esperienza in azienda partner",
            color: "#8B5CF6",
            items: [
                { 
                    name: "Inserimento Aziendale", 
                    description: "Orientamento e integrazione nel team di sviluppo",
                    details: [
                        "Orientamento aziendale e metodologie di lavoro",
                        "Integrazione nel team di sviluppo",
                        "Comprensione del codebase esistente",
                        "Prime attività guidate"
                    ]
                },
                { 
                    name: "Progetti Reali", 
                    description: "Sviluppo su applicazioni in produzione",
                    details: [
                        "Sviluppo su progetti in produzione",
                        "Collaborazione con team multidisciplinari",
                        "Implementazione di nuove feature",
                        "Bug fixing e ottimizzazioni"
                    ]
                },
                { 
                    name: "Mentorship", 
                    description: "Affiancamento con sviluppatori senior e code review",
                    details: [
                        "Affiancamento con sviluppatori senior",
                        "Code review e feedback continuo",
                        "Apprendimento delle best practices aziendali",
                        "Sviluppo delle soft skills"
                    ]
                },
                { 
                    name: "Career Preparation", 
                    description: "Preparazione completa al mondo del lavoro",
                    details: [
                        "Preparazione al mondo del lavoro",
                        "Networking professionale",
                        "Valutazione finale e certificazioni",
                        "Supporto nella ricerca di opportunità lavorative"
                    ]
                }
            ],
            details: "Metti in pratica tutto quello che hai imparato in un ambiente di lavoro reale con il supporto dei nostri partner."
        },
    ];

    const allItems = modules.flatMap((module, moduleIndex) => 
        module.items.map((item, itemIndex) => ({
            ...item,
            moduleIndex,
            itemIndex,
            module: module.title,
            color: module.color
        }))
    );

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate more precise section bounds
            const sectionStart = sectionTop - windowHeight * 0.5;
            const sectionEnd = sectionTop + sectionHeight - windowHeight * 0.5;

            if (scrollY >= sectionStart && scrollY <= sectionEnd) {
                const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
                setScrollProgress(progress);

                // Calculate active item based on scroll progress with smoother transitions
                const exactIndex = progress * (allItems.length - 1);
                const itemIndex = Math.round(exactIndex);
                const clampedIndex = Math.max(0, Math.min(allItems.length - 1, itemIndex));
                
                if (clampedIndex !== activeItem) {
                    setActiveItem(clampedIndex);
                    setActiveModule(allItems[clampedIndex].moduleIndex);
                }
            } else if (scrollY > sectionEnd) {
                // When scrolled past the section, ensure everything is completed
                setScrollProgress(1);
                setActiveItem(allItems.length - 1);
                setActiveModule(allItems[allItems.length - 1].moduleIndex);
            } else if (scrollY < sectionStart) {
                // When scrolled before the section, reset everything
                setScrollProgress(0);
                setActiveItem(0);
                setActiveModule(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeItem, allItems.length]);

    const getItemProgress = (index: number) => {
        if (index < activeItem) return 100;
        if (index === activeItem) {
            const totalItemsProgress = scrollProgress * allItems.length;
            const currentItemProgress = totalItemsProgress - Math.floor(totalItemsProgress);
            return Math.min(100, currentItemProgress * 100);
        }
        return 0;
    };

    return (
        <section ref={sectionRef} className="py-10 lg:py-20 relative" style={{ backgroundColor: '#000000', minHeight: '200vh' }}>
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="text-center mb-8 lg:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
                        Roadmap del Corso
                    </h2>
                    <p className="text-base md:text-lg px-4" style={{ color: '#D0D5DD' }}>
                        12 mesi per diventare un Full Stack Developer professionista
                    </p>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Mobile Module Cards */}
                    <div className="space-y-6">
                        {modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="space-y-4">
                                <div 
                                    className="p-4 rounded-xl border-l-4"
                                    style={{
                                        backgroundColor: '#1f2937',
                                        borderLeftColor: module.color,
                                        border: '1px solid rgba(156, 200, 75, 0.2)'
                                    }}
                                >
                                    <div className="flex items-center mb-3">
                                        <div 
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm"
                                            style={{ backgroundColor: module.color }}
                                        >
                                            {moduleIndex + 1}
                                        </div>
                                        <span 
                                            className="text-xs font-medium px-2 py-1 rounded-full text-white"
                                            style={{ backgroundColor: module.color }}
                                        >
                                            {module.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: '#ffffff' }}>
                                        {module.title}
                                    </h3>
                                    <p className="text-sm mb-3" style={{ color: '#D0D5DD' }}>
                                        {module.description}
                                    </p>
                                    <p className="text-xs" style={{ color: '#9CA3AF' }}>
                                        {module.details}
                                    </p>
                                </div>
                                
                                {/* Module Items */}
                                <div className="ml-4 space-y-3">
                                    {module.items.map((item, itemIndex) => (
                                        <div 
                                            key={itemIndex}
                                            className="p-3 rounded-lg border-l-2 cursor-pointer"
                                            style={{
                                                backgroundColor: 'rgba(31, 41, 55, 0.6)',
                                                borderLeftColor: module.color,
                                                border: '1px solid rgba(255, 255, 255, 0.1)'
                                            }}
                                            onClick={() => {
                                                const globalIndex = modules.slice(0, moduleIndex)
                                                    .reduce((acc, m) => acc + m.items.length, 0) + itemIndex;
                                                setExpandedItem(expandedItem === globalIndex ? null : globalIndex);
                                            }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <div 
                                                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                                        style={{ backgroundColor: module.color }}
                                                    >
                                                        {itemIndex + 1}
                                                    </div>
                                                    <span className="text-xs font-medium text-white">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                                    <span className="text-white text-xs">▼</span>
                                                </div>
                                            </div>
                                            <p className="text-xs mb-2" style={{ color: '#D0D5DD' }}>
                                                {item.description}
                                            </p>
                                            
                                            {/* Mobile Expanded Details */}
                                            {expandedItem === (modules.slice(0, moduleIndex).reduce((acc, m) => acc + m.items.length, 0) + itemIndex) && item.details && (
                                                <div className="mt-3 pt-3 space-y-1" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                                    <h6 className="text-xs font-semibold mb-2" style={{ color: module.color }}>
                                                        Contenuti dettagliati:
                                                    </h6>
                                                    <ul className="space-y-1">
                                                        {item.details.map((detail, detailIndex) => (
                                                            <li 
                                                                key={detailIndex}
                                                                className="flex items-start space-x-2 text-xs"
                                                                style={{ color: '#D0D5DD' }}
                                                            >
                                                                <span 
                                                                    className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                                                                    style={{ backgroundColor: module.color }}
                                                                />
                                                                <span>{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block lg:grid lg:grid-cols-12 gap-4 lg:gap-8 relative">
                    {/* Left Side - Module Titles */}
                    <div className="lg:col-span-4 lg:sticky lg:top-20 lg:h-fit mb-8 lg:mb-0">
                        <div className="space-y-4 lg:space-y-8">
                            {modules.map((module, moduleIndex) => (
                                <div 
                                    key={moduleIndex}
                                    className={`transition-all duration-500 p-4 lg:p-6 rounded-xl ${
                                        moduleIndex === activeModule 
                                            ? 'transform lg:scale-105 shadow-2xl' 
                                            : 'opacity-60 hover:opacity-80'
                                    }`}
                                    style={{
                                        backgroundColor: moduleIndex === activeModule ? '#1f2937' : 'rgba(31, 41, 55, 0.3)',
                                        borderLeft: `4px solid ${module.color}`,
                                        transform: moduleIndex === activeModule ? 'translateX(0px) lg:translateX(10px)' : 'translateX(0)',
                                        border: moduleIndex === activeModule ? '1px solid rgba(156, 200, 75, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)'
                                    }}
                                >
                                    <div className="flex items-center mb-3">
                                        <div 
                                            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 lg:mr-4 text-sm lg:text-base"
                                            style={{ backgroundColor: module.color }}
                                        >
                                            {moduleIndex + 1}
                                        </div>
                                        <span 
                                            className="text-xs font-medium px-2 py-1 lg:px-3 lg:py-1 rounded-full text-white"
                                            style={{ backgroundColor: module.color }}
                                        >
                                            {module.duration}
                                        </span>
                                    </div>
                                    <h3 
                                        className="text-lg lg:text-2xl font-bold mb-2"
                                        style={{ color: moduleIndex === activeModule ? '#ffffff' : '#D0D5DD' }}
                                    >
                                        {module.title}
                                    </h3>
                                    <p 
                                        className="text-sm"
                                        style={{ color: moduleIndex === activeModule ? '#D0D5DD' : '#9CA3AF' }}
                                    >
                                        {module.description}
                                    </p>
                                    {moduleIndex === activeModule && (
                                        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(156, 200, 75, 0.2)' }}>
                                            <p className="text-sm" style={{ color: '#D0D5DD' }}>
                                                {module.details}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center - Empty Column */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Right Side - Item Details */}
                    <div className="lg:col-span-7 relative">
                        {/* Timeline Line - Left side of cards */}
                        <div className="hidden lg:block absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                            {/* Progress Line */}
                            <div 
                                className="absolute top-0 left-0 w-full transition-all duration-500 ease-out"
                                style={{ 
                                    height: `${(activeItem / (allItems.length - 1)) * 100}%`,
                                    backgroundColor: '#9CC84B'
                                }}
                            />
                            
                            {/* Timeline Dots */}
                            {allItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300"
                                    style={{
                                        top: `${(index / (allItems.length - 1)) * 95}%`,
                                        zIndex: 10
                                    }}
                                >
                                    <div 
                                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                            index <= activeItem ? 'scale-125' : 'scale-100'
                                        }`}
                                        style={{
                                            backgroundColor: index <= activeItem ? item.color : '#111322',
                                            borderColor: item.color,
                                            boxShadow: index === activeItem ? `0 0 15px ${item.color}80` : 'none'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        
                        <div className="space-y-8 lg:space-y-16 lg:pl-8">
                            {allItems.map((item, index) => (
                                <div
                                    key={index}
                                    ref={el => itemRefs.current[index] = el}
                                    className={`transition-all duration-500 ${
                                        index <= activeItem ? 'opacity-100 transform translate-x-0' : 'opacity-40 transform lg:translate-x-8'
                                    }`}
                                    style={{
                                        transitionDelay: `${(index - activeItem) * 50}ms`
                                    }}
                                >
                                    <div 
                                        className={`p-4 lg:p-6 rounded-xl border-l-4 cursor-pointer transition-all duration-300 ${
                                            index === activeItem ? 'shadow-2xl lg:scale-105' : 'shadow-lg hover:shadow-xl hover:lg:scale-102'
                                        }`}
                                        style={{
                                            backgroundColor: index === activeItem ? '#1f2937' : 'rgba(31, 41, 55, 0.6)',
                                            borderLeftColor: item.color,
                                            transform: index === activeItem ? 'translateX(0) lg:translateX(-10px)' : 'translateX(0)',
                                            border: index === activeItem ? '1px solid rgba(156, 200, 75, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)'
                                        }}
                                        onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <span 
                                                    className="text-xs font-bold px-2 py-1 rounded text-white"
                                                    style={{ backgroundColor: item.color }}
                                                >
                                                    {item.module}
                                                </span>
                                                <div 
                                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold`}
                                                    style={{ backgroundColor: item.color }}
                                                >
                                                    {item.itemIndex + 1}
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                {index <= activeItem && (
                                                    <img src={CheckedIcon} alt="Completed" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
                                                )}
                                                <div 
                                                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                                                        expandedItem === index ? 'rotate-180' : ''
                                                    }`} 
                                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                                >
                                                    <span className="text-white text-sm">▼</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <h4 className="text-lg lg:text-xl font-bold mb-2" style={{ color: '#ffffff' }}>
                                            {item.name}
                                        </h4>
                                        <p className="text-sm mb-4" style={{ color: '#D0D5DD' }}>
                                            {item.description}
                                        </p>
                                        
                                        {/* Expanded Details */}
                                        {expandedItem === index && item.details && (
                                            <div 
                                                className="mt-4 pt-4 space-y-2 animate-fadeIn"
                                                style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
                                            >
                                                <h5 className="text-sm font-semibold mb-3" style={{ color: item.color }}>
                                                    Contenuti dettagliati:
                                                </h5>
                                                <ul className="space-y-1">
                                                    {item.details.map((detail, detailIndex) => (
                                                        <li 
                                                            key={detailIndex}
                                                            className="flex items-start space-x-2 text-xs"
                                                            style={{ color: '#D0D5DD' }}
                                                        >
                                                            <span 
                                                                className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                                                                style={{ backgroundColor: item.color }}
                                                            />
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        
                                        {/* Progress Bar */}
                                        <div className="w-full rounded-full h-1 mt-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                                            <div 
                                                className="h-1 rounded-full transition-all duration-500"
                                                style={{
                                                    width: `${getItemProgress(index)}%`,
                                                    backgroundColor: item.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Custom CSS Styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .hover\\:scale-102:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
}
