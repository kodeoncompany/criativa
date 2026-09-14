import { ArrowRight, Compass, Lightbulb, Palette, Rocket, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/sections/shared/navbar";
import Footer from "@/components/sections/shared/footer";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const services = [
  [Compass, "Estratégia & Consultoria", "Posicionamento, diagnóstico e direcção estratégica para decisões de comunicação mais inteligentes."],
  [Palette, "Branding & Design", "Identidade visual, design gráfico e sistemas de marca com consistência e intenção."],
  [Target, "Digital", "Websites, redes sociais, marketing digital e tráfego pago com foco em atenção e conversão."],
  [Lightbulb, "Conteúdo & Audiovisual", "Estratégia de conteúdo, produção audiovisual e narrativas que tornam a marca memorável."],
  [Rocket, "Tecnologia & Automação", "Web systems, automação e IA aplicadas a processos, comunicação e crescimento."],
];

const Features = () => (
  <div className="min-h-screen bg-white text-[#000038]">
    <Helmet><title>Serviços — Criativa</title><meta name="description" content="Serviços de comunicação, estratégia, branding, digital, audiovisual, tecnologia e automação da Criativa." /></Helmet>
    <Navbar />
    <main>
      <section className="bg-[#000038] text-white pt-40 pb-24 md:pt-48 md:pb-28"><Container><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF203D]">SERVIÇOS</p><h1 className="mt-5 max-w-4xl text-5xl md:text-7xl font-semibold leading-tight">Estratégia antes do formato. Execução com propósito.</h1><p className="mt-7 max-w-2xl text-lg text-white/60 leading-relaxed">Construímos soluções de comunicação e tecnologia a partir do que o negócio precisa resolver — não apenas do que precisa publicar.</p></Container></section>
      <section className="py-24 md:py-32"><Container><div className="grid md:grid-cols-2 gap-5">{services.map(([Icon, title, description]) => { const ServiceIcon = Icon as typeof Compass; return <article key={title as string} className="rounded-3xl border border-[#000038]/10 p-8 md:p-10 hover:border-[#EF203D]/40 transition-colors"><ServiceIcon className="text-[#EF203D]" /><h2 className="mt-12 text-2xl font-semibold">{title as string}</h2><p className="mt-3 max-w-xl text-black/55 leading-relaxed">{description as string}</p></article>; })}</div></Container></section>
      <section className="bg-[#F6F6F4] py-20"><Container><div className="rounded-[2rem] bg-[#000038] p-8 md:p-14 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8"><div><h2 className="text-3xl md:text-4xl font-semibold">Tem um desafio de comunicação?</h2><p className="mt-3 text-white/55">Vamos começar pelo problema e encontrar a melhor direcção.</p></div><Button asChild size="lg" className="bg-[#EF203D] hover:bg-[#EF203D]/90"><Link to="/contact">Falar com a Criativa <ArrowRight className="ml-2" /></Link></Button></div></Container></section>
    </main>
    <Footer />
  </div>
);
export default Features;
