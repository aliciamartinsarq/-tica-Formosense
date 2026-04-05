import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  Glasses, 
  Sun, 
  Eye, 
  ShieldCheck, 
  HeartHandshake, 
  Menu, 
  X,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const WhatsAppButton = ({ text, className = "" }: { text: string, className?: string }) => (
  <a 
    href="https://wa.me/5561999999999?text=Olá! Gostaria de saber mais sobre os óculos e serviços da Ótica Formosense." 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg ${className}`}
  >
    <MessageCircle className="w-6 h-6" />
    {text}
  </a>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-neutral-dark/80 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-24 h-1 bg-highlight mx-auto mt-6 rounded-full"></div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <div className="min-h-screen bg-neutral-light font-sans text-neutral-dark selection:bg-primary-lighter selection:text-primary-dark">
      
      {/* Top Bar (Contact Info) */}
      <div className="hidden md:block bg-primary-dark text-neutral-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-highlight" /> Centro, Formosa - GO</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-highlight" /> Seg a Sex: 08h às 18h | Sáb: 08h às 12h</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Phone className="w-4 h-4 text-highlight" /> (61) 99999-9999
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-white shadow-md py-3' : 'bg-neutral-white/95 py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Glasses className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-dark leading-none">Ótica Formosense</h1>
              <span className="text-xs text-primary font-medium tracking-widest uppercase">Sua visão em boas mãos</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 font-medium text-neutral-dark/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/5561999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cta hover:bg-cta-hover text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-neutral-white shadow-lg border-t border-neutral-medium">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block px-6 py-3 text-lg font-medium text-neutral-dark hover:bg-primary-lighter/30 hover:text-primary-dark"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-4 pb-2">
                <WhatsAppButton text="Chamar no WhatsApp" className="w-full text-base py-3" />
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/40 to-neutral-light -z-10"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary-dark font-medium text-sm mb-6 shadow-sm border border-primary-lighter">
              <Star className="w-4 h-4 text-highlight fill-highlight" />
              <span>A ótica mais recomendada de Formosa</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight mb-6">
              Volte a enxergar os melhores momentos da vida com <span className="text-primary">clareza e conforto.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-neutral-dark/80 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Na Ótica Formosense, você encontra atendimento familiar, paciência para escolher a armação ideal e lentes de alta qualidade. Há anos cuidando da visão da nossa cidade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <WhatsAppButton text="Falar com um Especialista" />
              <p className="text-sm text-neutral-dark/60 font-medium flex items-center gap-1 mt-2 sm:mt-0">
                <ShieldCheck className="w-4 h-4 text-primary" /> Atendimento sem compromisso
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Senhora sorrindo experimentando óculos" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium text-lg">"Encontrei a armação perfeita e o atendimento foi maravilhoso!"</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-neutral-medium flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-primary-lighter p-3 rounded-full text-primary-dark">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-neutral-dark">Atendimento</p>
                <p className="text-sm text-primary-dark font-medium">100% Humanizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <ShieldCheck className="w-10 h-10 text-highlight" />
              <div>
                <h3 className="font-bold text-lg">Garantia de Qualidade</h3>
                <p className="text-white/80 text-sm">Lentes e armações certificadas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-center">
              <HeartHandshake className="w-10 h-10 text-highlight" />
              <div>
                <h3 className="font-bold text-lg">Atendimento Familiar</h3>
                <p className="text-white/80 text-sm">Paciência e respeito com você</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <CheckCircle2 className="w-10 h-10 text-highlight" />
              <div>
                <h3 className="font-bold text-lg">Preço Justo</h3>
                <p className="text-white/80 text-sm">Facilidade no pagamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Como podemos ajudar você hoje?" 
            subtitle="Oferecemos soluções completas para a sua visão, sempre com a honestidade e clareza que você merece."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-10 h-10 text-primary" />,
                title: "Leitura de Receita",
                desc: "Traga sua receita médica. Explicamos cada detalhe para você entender exatamente do que seus olhos precisam, sem termos complicados."
              },
              {
                icon: <Glasses className="w-10 h-10 text-primary" />,
                title: "Ajuste e Manutenção",
                desc: "Seus óculos estão caindo, tortos ou apertando? Ajustamos para você com todo cuidado, mesmo que não tenha comprado aqui."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "Troca de Lentes",
                desc: "Aproveite sua armação favorita e troque apenas as lentes com a sua nova receita. Serviço rápido e com garantia."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-neutral-light p-8 rounded-2xl border border-neutral-medium hover:border-primary transition-colors group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-dark">{service.title}</h3>
                <p className="text-neutral-dark/80 leading-relaxed mb-6">{service.desc}</p>
                <a href="https://wa.me/5561999999999" target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-1 hover:text-primary-dark transition-colors">
                
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <WhatsAppButton text="Agendar um horário na loja" className="bg-primary hover:bg-primary-dark" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Produtos de Alta Qualidade" 
            subtitle="Trabalhamos com as melhores marcas de lentes e armações resistentes, ideais para o seu dia a dia."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-primary-dark mb-4">Óculos de Grau</h3>
              <p className="text-lg text-neutral-dark/80 mb-6">
                Encontrar a armação ideal não precisa ser difícil. Temos dezenas de modelos leves, resistentes e confortáveis. Nossa equipe tem paciência para ajudar você a provar quantos forem necessários até encontrar o óculos perfeito para o seu rosto.
              </p>
              <ul className="space-y-3 mb-8">
                {['Lentes Multifocais de fácil adaptação', 'Lentes com filtro azul (proteção para celular/TV)', 'Armações flexíveis e antialérgicas', 'Lentes mais finas e leves'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cta shrink-0" />
                    <span className="text-neutral-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton text="Ver modelos disponíveis" />
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Óculos de grau sobre a mesa" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Óculos de sol" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-dark mb-4">Óculos de Sol com Grau</h3>
              <p className="text-lg text-neutral-dark/80 mb-6">
                Proteja seus olhos do sol forte de Formosa sem perder a nitidez da sua visão. Fazemos óculos de sol com o seu grau exato.
              </p>
              <ul className="space-y-3 mb-8">
                {['Proteção 100% contra raios UVA e UVB', 'Lentes polarizadas (tiram o reflexo)', 'Opções de lentes que escurecem no sol (Transitions)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cta shrink-0" />
                    <span className="text-neutral-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton text="Fazer orçamento sem compromisso" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HeartHandshake className="w-16 h-16 text-highlight mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História em Formosa</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              A Ótica Formosense nasceu do sonho de uma família de Formosa de oferecer um atendimento ótico diferente. Cansados de ver pessoas sendo tratadas apenas como números em grandes redes, decidimos criar um espaço onde a <strong>confiança e o respeito</strong> vêm em primeiro lugar.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
              Sabemos que escolher óculos, especialmente os multifocais, gera dúvidas e inseguranças. Por isso, nosso compromisso é ouvir você, explicar tudo com clareza e garantir que você saia da nossa loja enxergando perfeitamente e se sentindo bem. <strong>Somos uma família cuidando da sua família.</strong>
            </p>
            
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-highlight mb-4">Nossos Valores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <strong className="block text-xl mb-2">Honestidade</strong>
                  <span className="text-white/80 text-sm">Só vendemos o que você realmente precisa.</span>
                </div>
                <div>
                  <strong className="block text-xl mb-2">Paciência</strong>
                  <span className="text-white/80 text-sm">Todo o tempo do mundo para você escolher.</span>
                </div>
                <div>
                  <strong className="block text-xl mb-2">Qualidade</strong>
                  <span className="text-white/80 text-sm">Produtos que duram e resolvem seu problema.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="O que nossos clientes dizem" 
            subtitle="A maior prova da nossa qualidade é a satisfação de quem já comprou conosco."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dona Maria Helena",
                age: "62 anos",
                text: "Fui muito bem atendida. Tiveram muita paciência para me ajudar a escolher uma armação leve, pois meu nariz machucava muito. Meus óculos novos ficaram ótimos, não tiro mais do rosto! Deus abençoe a equipe."
              },
              {
                name: "Seu João Batista",
                age: "55 anos",
                text: "Preço justo e muita qualidade. Tinha medo de fazer lentes multifocais porque diziam que era ruim de acostumar, mas eles tiraram as medidas certinhas e me adaptei super rápido. Recomendo para todos em Formosa."
              },
              {
                name: "Sônia Ribeiro",
                age: "48 anos",
                text: "Levei a receita da minha mãe e o atendimento foi nota 10. Explicaram a diferença das lentes de forma simples, sem empurrar o mais caro. A armação ficou linda nela. Ganhamos uma ótica de confiança."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-neutral-light p-8 rounded-2xl relative">
                <div className="flex text-highlight mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-neutral-dark/80 italic mb-6 text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-full flex items-center justify-center text-primary-dark font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                    <span className="text-sm text-neutral-dark/60">{testimonial.age}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-primary-lighter/30 rounded-3xl p-8 md:p-12 text-center border border-primary-lighter">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Pronto para enxergar o mundo com mais nitidez?</h3>
            <p className="text-lg text-neutral-dark/80 mb-8 max-w-2xl mx-auto">
              Envie uma foto da sua receita no WhatsApp e faremos um orçamento sem compromisso. É rápido, fácil e seguro.
            </p>
            <WhatsAppButton text="Enviar Receita no WhatsApp" className="text-xl py-5 px-10" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Glasses className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Ótica Formosense</h2>
              </div>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                A sua ótica de confiança em Formosa - GO. Tradição familiar, atendimento humano e produtos de alta qualidade para cuidar da saúde dos seus olhos.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="font-bold">F</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="font-bold">I</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-highlight">Contato</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Rua Principal, 123 - Centro<br/>Formosa - GO, 73800-000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>(61) 99999-9999</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Segunda a Sexta: 08h às 18h<br/>Sábado: 08h às 12h</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-highlight">Links Rápidos</h3>
              <ul className="space-y-3 text-white/80">
                <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Nossos Serviços</a></li>
                <li><a href="#produtos" className="hover:text-primary transition-colors">Armações e Lentes</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Nossa História</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Ótica Formosense. Todos os direitos reservados.</p>
            <p>Desenvolvido com foco em acessibilidade e conversão.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5561999999999?text=Olá! Estava no site e gostaria de tirar uma dúvida." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-cta hover:bg-cta-hover text-white p-4 rounded-full shadow-2xl z-50 transform hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-neutral-dark text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Precisa de ajuda?
        </span>
      </a>
    </div>
  );
}
