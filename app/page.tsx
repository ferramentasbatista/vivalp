"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  Package,
  Gift,
  BarChart3,
  DollarSign,
  Zap,
  BookOpen,
  LineChart,
  Headphones,
  Phone,
  Mail,
  MapPin
} from "lucide-react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-[#515151] font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/images/logo-20viva-21-20alta.png" 
                alt="Viva! Experiências" 
                width={100} 
                height={40}
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#problema" className="text-[#515151] hover:text-[#f05133] transition-colors font-medium text-sm">
                Por que Viva?
              </Link>
              <Link href="#plataforma" className="text-[#515151] hover:text-[#f05133] transition-colors font-medium text-sm">
                Plataforma
              </Link>
              <Link href="#clientes" className="text-[#515151] hover:text-[#f05133] transition-colors font-medium text-sm">
                Clientes
              </Link>
              <Button asChild className="bg-[#f05133] hover:bg-[#d94429] hover:shadow-lg hover:-translate-y-0.5 text-white rounded-full px-6 transition-all duration-300">
                <Link href="#contato">Fale Conosco</Link>
              </Button>
            </nav>
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="#problema" className="text-[#515151] hover:text-[#f05133] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Por que Viva?
              </Link>
              <Link href="#plataforma" className="text-[#515151] hover:text-[#f05133] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Plataforma
              </Link>
              <Link href="#clientes" className="text-[#515151] hover:text-[#f05133] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Clientes
              </Link>
              <Button asChild className="bg-[#f05133] hover:bg-[#d94429] text-white rounded-full w-full">
                <Link href="#contato" onClick={() => setMobileMenuOpen(false)}>Fale Conosco</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Emocional com Dashboard */}
      <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 bg-gradient-to-br from-[#0773b9] via-[#0773b9] to-[#055a8f] overflow-hidden">
        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 text-balance">
                Sua equipe merece{" "}
                <span className="text-[#f05133]">memórias inesquecíveis</span>.{" "}
                Seu RH merece o{" "}
                <span className="text-[#f05133]">fim das planilhas</span>.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A solução definitiva de premiação e incentivos para empresas com +250 colaboradores. Elimine a carga operacional, ganhe controle total e engaje de verdade através de experiências.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-[#f05133] hover:bg-[#d94429] text-white rounded-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  <Link href="#contato">Quero conhecer a plataforma</Link>
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">Setup rápido. Suporte completo.</p>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Desktop mockup */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-1 sm:p-2 transform lg:rotate-1">
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                    alt="Dashboard Viva! Experiências" 
                    width={700}
                    height={450}
                    className="rounded-lg sm:rounded-xl w-full"
                  />
                </div>
                {/* Mobile mockup - hidden on very small screens */}
                <div className="hidden sm:block absolute -bottom-4 sm:-bottom-8 -left-2 sm:-left-8 lg:-left-12 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-1 w-24 sm:w-32 lg:w-40 transform -rotate-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80" 
                    alt="App mobile Viva!" 
                    width={160}
                    height={280}
                    className="rounded-lg sm:rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1 - Problema */}
      <section id="problema" className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2d2d2d] mb-4 text-balance">
              Por que premiar virou um{" "}
              <span className="text-[#f05133]">pesadelo logístico</span>?
            </h2>
            <p className="text-base sm:text-lg text-[#515151] max-w-2xl mx-auto">
              Se você gerencia grandes times, conhece bem este cenário:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Package,
                title: "RH ou Estoquista?",
                description: "Salas cheias de brindes, logística de entrega complexa e atrasos que frustram o colaborador.",
                color: "#f05133"
              },
              {
                icon: Gift,
                title: 'O "Presente de Grego"',
                description: "O medo constante de escolher algo que ninguém gosta ou que vai para a gaveta.",
                color: "#f05133"
              },
              {
                icon: BarChart3,
                title: "Caixa Preta",
                description: "Quem aprovou? Quanto gastou? Sem métricas, a premiação vira um custo sem ROI comprovado.",
                color: "#f05133"
              },
              {
                icon: DollarSign,
                title: "Dinheiro é Frio",
                description: 'Bônus em dinheiro ou cartão viram "pagamento de boleto". O colaborador gasta e esquece da empresa no dia seguinte.',
                color: "#f05133"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2d2d2d] mb-2 flex items-center gap-2">
                    <span className="text-[#f05133]">X</span> {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#515151] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-[#515151] font-medium px-4">
              Pare de perder tempo com processos manuais e fornecedores que te deixam na mão.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 - Solução Emocional */}
      <section className="py-12 sm:py-16 lg:py-28 bg-gray-50 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="#515151"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <Image 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" 
                  alt="Experiência corporativa" 
                  width={300}
                  height={400}
                  className="rounded-xl sm:rounded-2xl shadow-lg w-full object-cover h-32 sm:h-48 lg:h-64"
                />
                <Image 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80" 
                  alt="Celebração em equipe" 
                  width={300}
                  height={300}
                  className="rounded-xl sm:rounded-2xl shadow-lg w-full object-cover h-28 sm:h-40 lg:h-48"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <Image 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" 
                  alt="Experiência gastronômica" 
                  width={300}
                  height={300}
                  className="rounded-xl sm:rounded-2xl shadow-lg w-full object-cover h-28 sm:h-40 lg:h-48"
                />
                <Image 
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80" 
                  alt="Experiência de viagem" 
                  width={300}
                  height={400}
                  className="rounded-xl sm:rounded-2xl shadow-lg w-full object-cover h-32 sm:h-48 lg:h-64"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2d2d2d] mb-4 sm:mb-6 text-balance">
                Não dê prêmios.{" "}
                <span className="text-[#f05133]">Crie Memórias</span>.
              </h2>
              <p className="text-base sm:text-lg text-[#515151] mb-6 sm:mb-8 leading-relaxed">
                O dinheiro preenche o bolso, mas a experiência preenche a vida. Na Viva!, transformamos sua verba de premiação em histórias que serão contadas no corredor da empresa.
              </p>
              
              <blockquote className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-[#f05133] mb-6 sm:mb-8">
                <p className="text-[#2d2d2d] italic text-base sm:text-lg leading-relaxed">
                  "Ninguém se lembra de como gastou o bônus de R$ 300,00 no supermercado. Mas ninguém esquece o jantar no topo da cidade ou o primeiro salto de paraquedas pago pela empresa."
                </p>
              </blockquote>

              <p className="text-base sm:text-lg text-[#515151] mb-6 sm:mb-8 font-medium">
                Conecte a marca da sua empresa a momentos felizes da vida do seu colaborador.
              </p>

              <Button asChild size="lg" className="bg-[#f05133] hover:bg-[#d94429] text-white rounded-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                <Link href="#contato">Quero falar com os consultores</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Solução Racional (Plataforma Reconheça) */}
      <section id="plataforma" className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-block bg-[#0773b9] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wide">
                Plataforma Reconheça
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2d2d2d] mb-4 text-balance">
                Autonomia para o Gestor,{" "}
                <span className="text-[#f05133]">Controle para o RH</span>
              </h2>
              <p className="text-base sm:text-lg text-[#515151] mb-6 sm:mb-8 leading-relaxed">
                Centralize toda a sua estratégia de incentivo em uma plataforma robusta, pensada para grandes volumes.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Fim da Carga Operacional",
                    description: "Tudo digital. O colaborador escolhe, a Viva! entrega. Zero estoque físico no seu escritório."
                  },
                  {
                    icon: BookOpen,
                    title: "Catálogo de Experiências",
                    description: "Opções para todos os perfis, do gastronômico ao aventureiro, em todo o Brasil."
                  },
                  {
                    icon: LineChart,
                    title: "Gestão à Vista",
                    description: "Dashboards em tempo real. Saiba quem premiou, quem resgatou e controle o budget por centro de custo."
                  },
                  {
                    icon: Headphones,
                    title: "SLA Garantido",
                    description: "Chega de traumas com fornecedores antigos. Temos suporte dedicado e garantia de satisfação."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#49a942]/15 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#49a942]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#2d2d2d] mb-1 flex items-center gap-2">
                        <span className="text-[#49a942]">&#10003;</span> {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#515151] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Platform Mockup */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-[#f05133] to-[#d94429] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-lg mx-auto lg:max-w-none">
                {/* Desktop */}
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                    alt="Plataforma Reconheça - Dashboard" 
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
              {/* Mobile floating - hidden on small screens */}
              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-1 w-20 sm:w-28 lg:w-36 border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80" 
                  alt="Catálogo mobile" 
                  width={140}
                  height={240}
                  className="rounded-lg sm:rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 - Prova Social */}
      <section id="clientes" className="py-12 sm:py-16 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2d2d2d] mb-4 text-balance">
              Quem confia na{" "}
              <span className="text-[#f05133]">Viva! Experiências</span>
            </h2>
            <p className="text-base sm:text-lg text-[#515151]">
              Junte-se a líderes de mercado que já modernizaram sua cultura de reconhecimento.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-14 sm:h-16 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center text-gray-400 text-xs sm:text-sm border border-gray-100 px-2">
                Logo Cliente {i}
              </div>
            ))}
          </div>

          {/* Depoimento */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg relative">
              <div className="absolute -top-2 sm:-top-4 left-6 sm:left-8 text-[#f05133] text-4xl sm:text-6xl font-serif">"</div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#2d2d2d] italic leading-relaxed mb-4 sm:mb-6 pt-4">
                Antes, levávamos dias organizando a logística de fim de ano. Com a Viva!, resolvemos em cliques e o time nunca esteve tão engajado.
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0773b9] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                  HP
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#2d2d2d] text-sm sm:text-base">[Nome do Cliente]</p>
                  <p className="text-[#515151] text-sm sm:text-base truncate">Head de People na [Empresa]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - CTA Final com Formulário */}
      <section id="contato" className="py-12 sm:py-16 lg:py-28 bg-[#2d2d2d] relative overflow-hidden">
        {/* Hexagon pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons-cta" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons-cta)"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6 text-balance">
                Sua campanha de incentivo{" "}
                <span className="text-[#f05133]">não precisa ser dor de cabeça</span>.
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-4 sm:mb-6 leading-relaxed">
                Transforme a cultura da sua empresa e recupere o tempo estratégico do seu RH.
              </p>
              <p className="text-xl sm:text-2xl text-white font-bold">
                Vamos conversar sobre a sua próxima campanha?
              </p>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2d2d2d] mb-2 text-center">
                Fale com um Consultor Especialista
              </h3>
              <p className="text-sm sm:text-base text-[#515151] text-center mb-6">
                Preencha o formulário e entraremos em contato em até 24h.
              </p>
              
              {/* Placeholder do Formulário */}
              <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-8 sm:p-12 flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[250px] sm:min-h-[300px]">
                <p className="text-[#515151] font-bold text-base sm:text-lg text-center">FORMULÁRIO AQUI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <Image 
                src="/images/logo-20viva-21-20alta-20horizontal-20branco-01.png" 
                alt="Viva! Experiências" 
                width={180} 
                height={60}
                className="h-10 sm:h-12 w-auto mb-4 sm:mb-6"
              />
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Transformamos a premiação corporativa em memórias inesquecíveis.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Links Rápidos</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="#problema" className="text-gray-400 hover:text-[#f05133] transition-colors text-sm sm:text-base">
                    Por que Viva?
                  </Link>
                </li>
                <li>
                  <Link href="#plataforma" className="text-gray-400 hover:text-[#f05133] transition-colors text-sm sm:text-base">
                    Plataforma Reconheça
                  </Link>
                </li>
                <li>
                  <Link href="#clientes" className="text-gray-400 hover:text-[#f05133] transition-colors text-sm sm:text-base">
                    Nossos Clientes
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-gray-400 hover:text-[#f05133] transition-colors text-sm sm:text-base">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#f05133] flex-shrink-0" />
                  <span>(11) 1234-5678</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#f05133] flex-shrink-0" />
                  <span className="break-all">contato@vivaexperiencias.com.br</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f05133] flex-shrink-0" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Viva! Experiências. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
