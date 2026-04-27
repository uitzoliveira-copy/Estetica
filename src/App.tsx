/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown,
  MessageCircle
} from 'lucide-react';

const LOGO_URL = "https://storage.googleapis.com/bit-dev-files/paloma_oliveira_logo.png"; // Placeholder path for the provided logo

// High-quality stock images matching the luxury aesthetic - using more reliable Unsplash keywords
const HERO_IMAGE = "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"; // Luxury Spa
const MASSAGE_IMAGE = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"; // Massage
const FACIAL_IMAGE = "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2070&auto=format&fit=crop"; // Facial
const CLINIC_DETAIL = "https://images.unsplash.com/photo-1519415510236-8337795b2bc7?q=80&w=2070&auto=format&fit=crop"; // Spa Detail
const ANTES_IMAGE = "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"; // Before
const DEPOIS_IMAGE = "https://images.unsplash.com/photo-1542459742-df6663365346?q=80&w=2070&auto=format&fit=crop"; // Woman with clear skin

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full border border-brand-gold-metallic flex items-center justify-center">
        <span className="text-[12px] text-brand-gold-metallic font-semibold">PO</span>
      </div>
      <div className="flex flex-col">
        <span className="serif-title text-xl italic tracking-tighter leading-none">Paloma Oliveira</span>
        <span className="text-[8px] uppercase tracking-[0.2em] font-bold opacity-60">Beleza e Estética</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Massoterapia Relaxante',
    date: '',
    time: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Paloma, meu nome é ${formData.name}. Tenho interesse no serviço de ${formData.service} para o dia ${formData.date} às ${formData.time}. Podemos confirmar meu atendimento?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5571985137007?text=${encodedMessage}`, '_blank');
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-offwhite">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase letter-spacing-wide font-semibold text-brand-ink/70">
            {['Início', 'Serviços', 'Sobre', 'FAQ'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-brand-gold-metallic transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contato')}
              className="px-8 py-3 btn-luxury rounded-full text-[10px] font-bold tracking-widest"
            >
              AGENDAR
            </button>
          </nav>

          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 flex flex-col p-6 gap-4 md:hidden text-center shadow-xl"
            >
              {['Início', 'Serviços', 'Sobre', 'FAQ'].map((item) => (
                <button 
                  key={item} 
                  className="text-lg py-2 font-serif text-slate-700"
                  onClick={() => scrollTo(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('contato')}
                className="w-full py-4 gold-gradient text-white rounded-xl font-bold mt-2"
              >
                RESERVAR HORÁRIO
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Ambiente de Clínica Luxuosa" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/40 to-transparent z-10" />
          <div className="absolute inset-0 hero-pattern opacity-30" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-left w-full max-w-7xl px-8"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="w-8 h-px bg-brand-gold-metallic" />
            <span className="text-white text-[10px] uppercase letter-spacing-wide font-bold">BELEZA & BEM-ESTAR DE ALTO PADRÃO</span>
          </motion.div>
          
          <h1 className="text-white text-6xl md:text-8xl serif-title leading-tight mb-8 drop-shadow-sm">
            A Arte de Revelar sua <br />
            <span className="serif-italic">Melhor Versão</span>
          </h1>
          
          <p className="text-white/80 max-w-md text-sm leading-relaxed font-light mb-10">
            Tratamentos estéticos personalizados e massoterapia de alto padrão em Salvador. Tecnologia e sensibilidade em cada toque.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contato')}
            className="btn-luxury px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            RESERVAR MEU HORÁRIO
          </motion.button>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold cursor-pointer"
          onClick={() => scrollTo('serviços')}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-brand-lilac-mid/20">
              <img 
                src={CLINIC_DETAIL} 
                alt="Paloma Oliveira em Atendimento" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 p-8 glass rounded-3xl hidden lg:block">
              <p className="text-brand-gold-metallic font-serif text-3xl mb-1 italic">98%</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Satisfação das Clientes</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-[10px] uppercase font-bold text-brand-gold-metallic tracking-widest">A Especialista</h2>
            <h3 className="serif-title text-4xl md:text-5xl italic leading-tight">Ciência e Bem-estar</h3>
            
            <p className="text-[14px] leading-relaxed opacity-80 font-light">
              Especialista técnica formada pelo SENAC e graduanda em Estética e Cosmética. Paloma Oliveira une o rigor acadêmico à sensibilidade do toque.
            </p>
            <p className="text-[14px] leading-relaxed opacity-80 font-light">
              Oferecendo protocolos personalizados que respeitam a individualidade e realçam a beleza natural, com máxima segurança e excelência. Cada atendimento é planejado para ser uma experiência sensorial única de renovação.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-brand-gold-metallic">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-70">Formação SENAC</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-brand-gold-metallic">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-70">Protocolos Exclusive</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="serviços" className="py-24 bg-brand-lilac-soft/50 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase font-bold text-brand-gold-metallic tracking-widest mb-4">Experiências</h2>
            <h3 className="serif-title text-4xl md:text-5xl italic">Serviços Premium</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-lilac-mid/30"
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={MASSAGE_IMAGE} 
                  alt="Massoterapia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 uppercase tracking-wider text-xs">Massoterapia Relaxante</h4>
                <p className="text-[12px] leading-relaxed opacity-70 font-light mb-6">
                  Foco absoluto em alívio de tensão, drenagem e renovação corporal. Sinta o estresse desaparecer sob o toque de quem domina a arte do bem-estar.
                </p>
                <button onClick={() => scrollTo('contato')} className="text-[10px] font-bold uppercase gold-text border-b border-brand-gold-metallic/50 pb-1">
                  Saiba mais
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-lilac-mid/30"
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={FACIAL_IMAGE} 
                  alt="Estética Facial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 uppercase tracking-wider text-xs">Estética Facial e Corporal</h4>
                <p className="text-[12px] leading-relaxed opacity-70 font-light mb-6">
                  Protocolos modernos para rejuvenescimento, limpeza profunda e saúde da pele. Tecnologia e ciência aplicadas para resultados naturais e duradouros.
                </p>
                <button onClick={() => scrollTo('contato')} className="text-[10px] font-bold uppercase gold-text border-b border-brand-gold-metallic/50 pb-1">
                  Saiba mais
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galeria Resultados */}
      <section className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-brand-lilac-dark font-semibold mb-4">Portfólio</h2>
              <h3 className="text-4xl md:text-5xl">Galeria de Resultados</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-light italic">Resultados reais que comprovam a excelência de nossos protocolos personalizados.</p>
          </div>

          <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 h-[500px]">
              <div className="relative">
                <img src={ANTES_IMAGE} alt="Antes" className="w-full h-full object-cover grayscale-[0.2]" />
                <div className="absolute bottom-6 left-6 px-4 py-2 glass rounded-lg text-xs tracking-widest font-bold uppercase">Antes</div>
              </div>
              <div className="relative border-l-2 border-brand-gold/40">
                <img src={DEPOIS_IMAGE} alt="Depois" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 px-4 py-2 glass rounded-lg text-xs tracking-widest font-bold uppercase text-brand-gold">Depois</div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-brand-gold hidden md:block" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-8 bg-brand-offwhite">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase font-bold text-brand-gold-metallic tracking-widest mb-4">Dúvidas</h2>
            <h3 className="serif-title text-4xl italic">Perguntas Frequentes</h3>
          </div>

          <div className="space-y-4">
            {[
              { q: "Onde os atendimentos são realizados?", a: "Os atendimentos presenciais são realizados em Salvador, na região de Pernambués. Oferecemos um ambiente privativo, seguro e climatizado para o seu total conforto." },
              { q: "Como devo me preparar para a sessão?", a: "Recomendamos vir com roupas confortáveis. Para procedimentos faciais, se possível, vir sem maquiagem. Chegar 10 minutos antes é ideal para preenchermos sua ficha de anamnese." },
              { q: "Quais os serviços oferecidos?", a: "Oferecemos massoterapia (relaxante, terapêutica, drenagem linfática) e estética completa (limpeza de pele, rejuvenescimento, protocolos corporais)." }
            ].map((item, idx) => (
              <details key={idx} className="group glass p-6 rounded-3xl cursor-pointer hover:bg-white transition-all border border-brand-lilac-mid/20">
                <summary className="flex items-center justify-between list-none serif-title text-lg pr-4 italic">
                  {item.q}
                  <ChevronDown className="text-brand-gold-metallic transform group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-sm font-light opacity-80 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário / Contato */}
      <section id="contato" className="py-24 px-8 relative overflow-hidden bg-brand-lilac-soft/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid md:grid-cols-5 border border-brand-lilac-mid/20">
            <div className="md:col-span-2 gold-gradient p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="serif-title text-4xl mb-6 italic leading-tight">Pré-Agendamento</h3>
                <p className="text-xs uppercase tracking-widest font-bold opacity-40 italic mb-4">Rápido & Seguro</p>
                <p className="font-light text-white/80 leading-relaxed text-sm">
                  Dê o primeiro passo para sua transformação. Preencha os dados e entraremos em contato via WhatsApp.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-full aspect-video rounded-2xl overflow-hidden glass border border-white/20 shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.051877666497!2d-38.47169455!3d-12.9708761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604a43b27b3e1%3A0x600f3c5f49e7b20!2sPernambu%C3%A9s%2C%20Salvador%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1714230000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Paloma Oliveira"
                  ></iframe>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Endereço</p>
                  <p className="text-xs uppercase font-semibold leading-relaxed">Pernambués, Salvador - BA <br /> Região Central</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-all"><Instagram size={18} /></a>
              </div>
            </div>

            <div className="md:col-span-3 p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="NOME COMPLETO"
                      className="w-full bg-transparent border-b border-gray-200 py-3 text-[11px] font-bold tracking-widest outline-none focus:border-brand-gold-metallic transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="tel" 
                      required 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="TELEFONE"
                      className="w-full bg-transparent border-b border-gray-200 py-3 text-[11px] font-bold tracking-widest outline-none focus:border-brand-gold-metallic transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-[11px] font-bold tracking-widest outline-none focus:border-brand-gold-metallic transition-all text-gray-500 uppercase"
                  >
                    <option>SERVIÇO</option>
                    <option>MASSAGEM</option>
                    <option>FACIAL</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <input 
                      type="date" 
                      required
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-200 py-3 text-[11px] font-bold tracking-widest outline-none focus:border-brand-gold-metallic transition-all text-gray-400" 
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="time" 
                      required
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-200 py-3 text-[11px] font-bold tracking-widest outline-none focus:border-brand-gold-metallic transition-all text-gray-400" 
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ backgroundColor: '#000' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-zinc-900 text-white text-[10px] font-bold uppercase rounded-lg tracking-widest transition-colors duration-300"
                >
                  CONFIRMAR NO WHATSAPP
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-brand-lilac-mid/30 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-brand-ink/40 text-[9px] uppercase tracking-widest font-bold max-w-xs text-center md:text-left">
              &copy; 2024 Paloma Oliveira | Beleza e Estética de Luxo. <br />
              Salvador, Pernambués. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center gap-8 text-[9px] uppercase tracking-widest font-bold text-brand-ink/40">
             <button onClick={() => scrollTo('início')} className="hover:text-brand-gold-metallic transition-colors">Início</button>
             <button onClick={() => scrollTo('sobre')} className="hover:text-brand-gold-metallic transition-colors">Sobre</button>
             <button onClick={() => scrollTo('serviços')} className="hover:text-brand-gold-metallic transition-colors">Serviços</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
