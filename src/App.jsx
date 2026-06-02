import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code, Server, Database, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
    { name: "Backend & DB", items: ["Python", "Java", "C/C++", "Firebase"] },
    { name: "Strumenti", items: ["Git", "GitHub", "Vercel"] }
  ];

  const projects = [
    {
      title: "In Arrivo: Progetto Pilota Locale",
      description: "Un'applicazione web pensata per digitalizzare le attività commerciali o i lidi turistici della costa di Crotone.",
      tech: ["React", "Tailwind", "Firebase"],
      status: "In sviluppo"
    },
    {
      title: "Progetto Scolastico Tech",
      description: "Applicazione o software sviluppato durante il percorso di studi informatici presso il Polo Tecnologico Ciliberto-Donegani.",
      tech: ["Java", "C++"],
      status: "Completato"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;DevName /&gt;
          </span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#chi-sono" className="hover:text-cyan-400 transition">Chi Sono</a>
            <a href="#competenze" className="hover:text-cyan-400 transition">Competenze</a>
            <a href="#progetti" className="hover:text-cyan-400 transition">Progetti</a>
            <a href="#contatti" className="hover:text-cyan-400 transition">Contatti</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-400 hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3 flex flex-col">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition">Home</a>
            <a href="#chi-sono" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition">Chi Sono</a>
            <a href="#competenze" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition">Competenze</a>
            <a href="#progetti" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition">Progetti</a>
            <a href="#contatti" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition">Contatti</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-center md:text-left flex flex-col justify-center min-h-[80vh]">
        <p className="text-cyan-400 font-mono text-sm mb-3">Ciao, il mio nome è</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Mattia Mungari.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          Sviluppo soluzioni web e applicazioni.
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mb-8">
          Studente di Informatica e Telecomunicazioni a Crotone. Trasformo idee e problemi in codice pulito, efficiente e moderno.
        </p>
        <div>
          <a href="#progetti" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
            Guarda i miei lavori
          </a>
        </div>
      </section>

      {/* CHI SONO */}
      <section id="chi-sono" className="py-20 px-4 bg-slate-850 bg-opacity-40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-2">01. Chi Sono</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Frequentando il **Polo Tecnologico Donegani-Ciliberto di Crotone**, ho sviluppato una forte passione per la logica della programmazione e l'architettura delle reti. 
          </p>
          <p className="text-slate-400 leading-relaxed">
            Non mi limito a quello che impariamo in classe: nel tempo libero sperimento con framework moderni come **React** e tecnologie Cloud come **Firebase** per creare applicazioni web complete e scalabili, pronte per risolvere problemi reali.
          </p>
        </div>
      </section>

      {/* COMPETENZE */}
      <section id="competenze" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-2">02. Competenze</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                {index === 0 && <Code size={18} />}
                {index === 1 && <Server size={18} />}
                {index === 2 && <Database size={18} />}
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-slate-300 font-mono text-sm flex items-center gap-2">
                    <span className="text-blue-500">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROGETTI */}
      <section id="progetti" className="py-20 px-4 bg-slate-850 bg-opacity-40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-2">03. Progetti Estivi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between hover:border-blue-500/50 transition duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-2 py-1 bg-slate-800 rounded text-cyan-400 border border-slate-700">
                      {proj.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-20 px-4 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Mettiamoci in contatto</h2>
        <p className="text-slate-400 mb-8">
          Sei un'attività locale a Crotone o hai bisogno di digitalizzare un'idea? Sono disponibile per collaborazioni e progetti freelance durante l'estate.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:tuaimail@esempio.com" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition text-slate-300 hover:text-white">
            <Mail size={22} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition text-slate-300 hover:text-white">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition text-slate-300 hover:text-white">
            <Linkedin size={22} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} - Sviluppato con React & Tailwind
      </footer>
    </div>
  );
}