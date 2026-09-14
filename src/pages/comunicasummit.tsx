import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, ChevronDown, Mail, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";

const faqs = [
  ["Quando acontece?", "13 de novembro de 2026."],
  ["Onde será?", "Chimoio, Moçambique. O local será divulgado pela organização."],
  ["Quantas vagas existem?", "A primeira edição terá apenas 70 vagas."],
  ["Qual é o tema?", "Storyselling — comunicação para vender."],
  ["Quem pode participar?", "Profissionais, empreendedores, estudantes, marcas e organizações interessadas em comunicação, marketing e negócios."],
  ["Haverá credenciamento de imprensa?", "Sim. O formulário de credenciamento está disponível nesta página."],
];

const SummitForm = ({ title, description, type }: { title: string; description: string; type: string }) => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 space-y-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EF203D]">{type}</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/60">{description}</p>
      </div>
      {submitted ? (
        <div className="rounded-2xl bg-[#EF203D]/10 border border-[#EF203D]/20 p-5 flex gap-3 text-white">
          <Check className="mt-0.5 text-[#EF203D] shrink-0" />
          <div><strong>Pedido recebido.</strong><p className="text-white/60 text-sm mt-1">A organização da Criativa entrará em contacto para confirmar os próximos passos.</p></div>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Nome completo','Telefone / WhatsApp','Email','Empresa / organização'].map((label) => (
              <label key={label} className="text-sm text-white/70">{label}<input required className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-[#EF203D]" /></label>
            ))}
          </div>
          <label className="text-sm text-white/70">Mensagem / Observações<textarea className="mt-2 min-h-28 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-[#EF203D]" /></label>
          <Button type="submit" className="w-full bg-[#EF203D] text-white hover:bg-[#EF203D]/90">Enviar pedido <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </>
      )}
    </form>
  );
};

const ComunicaSummit = () => (
  <div className="min-h-screen bg-[#000038] text-white">
    <Helmet>
      <title>Comunica Summit 2026 — Storyselling | Chimoio</title>
      <meta name="description" content="Comunica Summit — 1ª edição, 13 de novembro de 2026, em Chimoio. Storyselling, comunicação, marketing e negócios. Apenas 70 vagas." />
    </Helmet>

    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#000038]/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="font-bold tracking-[0.22em]">CRIATIVA</Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          <a href="#summit" className="hover:text-white">O Summit</a>
          <a href="#programa" className="hover:text-white">Programa</a>
          <a href="#oradores" className="hover:text-white">Oradores</a>
          <a href="#inscricao" className="hover:text-white">Inscrição</a>
        </nav>
        <Button asChild size="sm" className="bg-[#EF203D] hover:bg-[#EF203D]/90"><a href="#inscricao">Garantir inscrição</a></Button>
      </Container>
    </header>

    <main>
      <section id="summit" className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#EF203D]/20 blur-3xl" />
        <Container className="relative">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#EF203D]"><span>COMUNICA SUMMIT</span><span>•</span><span>1ª EDIÇÃO 2026</span></div>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">A Arte de<br /><span className="text-[#EF203D]">Ser Ouvido.</span></h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65 md:text-2xl">A história por trás do negócio. Um encontro para quem entende que comunicar não é apenas falar — é ser compreendido, criar conexão e transformar comunicação em negócio.</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#EF203D] hover:bg-[#EF203D]/90"><a href="#inscricao">Garantir minha inscrição <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10"><a href="#programa">Conhecer o Summit</a></Button>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
              <div><p className="text-2xl font-bold">13 NOV</p><p className="text-sm text-white/50">2026</p></div>
              <div><p className="text-2xl font-bold">CHIMOIO</p><p className="text-sm text-white/50">Moçambique</p></div>
              <div><p className="text-2xl font-bold">70</p><p className="text-sm text-white/50">vagas limitadas</p></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/15 py-16">
        <Container><div className="grid md:grid-cols-3 gap-8"><div><Users className="text-[#EF203D]" /><h3 className="mt-4 text-xl font-semibold">Para quem comunica</h3><p className="mt-2 text-white/55">Profissionais, empreendedores, estudantes, marcas e organizações.</p></div><div><MapPin className="text-[#EF203D]" /><h3 className="mt-4 text-xl font-semibold">Uma experiência em Chimoio</h3><p className="mt-2 text-white/55">Um espaço para aprender, trocar experiências e criar novas conexões.</p></div><div><Mail className="text-[#EF203D]" /><h3 className="mt-4 text-xl font-semibold">70 lugares</h3><p className="mt-2 text-white/55">A primeira edição será limitada a 70 participantes.</p></div></div></Container>
      </section>

      <section className="py-24 md:py-32"><Container><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF203D]">STORYSELLING</p><h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">Comunicação para vender.</h2><p className="mt-6 text-lg md:text-xl leading-relaxed text-white/60">As pessoas não compram apenas produtos. Compram histórias, significado, confiança e percepção. O Storyselling combina storytelling e estratégia comercial para transformar histórias de marca em comunicação que aproxima, convence e vende.</p></div></Container></section>

      <section id="oradores" className="bg-black/15 py-24"><Container><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF203D]">ORADORES</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold">Ideias que merecem ser ouvidas.</h2><div className="mt-12 grid md:grid-cols-2 gap-5"><article className="rounded-3xl border border-white/10 p-7"><p className="text-sm text-[#EF203D]">COMUNICAÇÃO</p><h3 className="mt-3 text-2xl font-semibold">Paulina Monteiro</h3><p className="mt-2 text-white/55">Docente universitária, jornalista e profissional ligada à comunicação.</p><p className="mt-6 text-lg">“O poder de ser ouvido.”</p></article><article className="rounded-3xl border border-white/10 p-7"><p className="text-sm text-[#EF203D]">STORYSELLING</p><h3 className="mt-3 text-2xl font-semibold">Chando Chimoio</h3><p className="mt-2 text-white/55">Director Geral da Criativa.</p><p className="mt-6 text-lg">“Storyselling — A história que faz o negócio ser lembrado.”</p></article></div><p className="mt-8 text-sm text-white/40">Outros oradores serão anunciados em breve.</p></Container></section>

      <section id="programa" className="py-24"><Container><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF203D]">PROGRAMA</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold">Cerca de 3 horas para mudar a forma como comunica.</h2><div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{['Abertura','Keynote','Conversas','Storyselling','Networking','Encerramento'].map((item, i) => <div key={item} className="rounded-2xl border border-white/10 p-6"><span className="text-sm text-[#EF203D]">0{i + 1}</span><h3 className="mt-8 text-xl font-semibold">{item}</h3></div>)}</div></Container></section>

      <section id="inscricao" className="bg-black/20 py-24"><Container><div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start"><div className="lg:sticky lg:top-28"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF203D]">INSCRIÇÃO</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold">Faça parte da primeira edição.</h2><p className="mt-5 text-white/55">Apenas 70 vagas. Garanta o seu lugar no Comunica Summit 2026.</p><div className="mt-7 rounded-2xl border border-[#EF203D]/30 bg-[#EF203D]/10 p-5"><strong>13 de novembro de 2026</strong><p className="text-sm text-white/60 mt-1">Chimoio, Moçambique</p></div></div><SummitForm title="Garantir minha inscrição" description="Preencha os seus dados para solicitar a participação." type="Participante" /></div></Container></section>

      <section className="py-24"><Container><div className="grid lg:grid-cols-2 gap-8"><SummitForm title="Quero ser expositor" description="Apresente a sua marca, produto ou serviço no Summit." type="Expositores" /><SummitForm title="Quero ser patrocinador" description="Associe a sua marca à primeira edição do Comunica Summit." type="Parceiros e patrocinadores" /><SummitForm title="Solicitar credenciamento" description="Para órgãos e profissionais de comunicação interessados em cobertura." type="Imprensa" /><div className="rounded-3xl border border-white/10 p-6 md:p-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF203D]">Contacto</p><h3 className="mt-3 text-2xl font-semibold">Fale com a organização.</h3><p className="mt-3 text-white/55">CRIATIVA<br />Comunicação • Estratégia • Resultados</p><p className="mt-5 text-white/80">+258 876 434 496<br />Info@comunicasummit.site</p><a className="mt-5 inline-block text-[#EF203D]" href="https://www.criativa.agency">criativa.agency</a></div></div></Container></section>

      <section className="bg-black/20 py-24"><Container><h2 className="text-4xl font-semibold">Perguntas frequentes</h2><div className="mt-8 max-w-3xl divide-y divide-white/10">{faqs.map(([q,a]) => <details key={q} className="py-5 group"><summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">{q}<ChevronDown className="transition-transform group-open:rotate-180" /></summary><p className="mt-3 text-white/55">{a}</p></details>)}</div></Container></section>
    </main>

    <footer className="border-t border-white/10 py-10"><Container className="flex flex-col md:flex-row justify-between gap-4 text-sm text-white/45"><p>© {new Date().getFullYear()} Criativa. Comunicação • Estratégia • Resultados.</p><Link to="/" className="hover:text-white">criativa.agency</Link></Container></footer>
  </div>
);

export default ComunicaSummit;
