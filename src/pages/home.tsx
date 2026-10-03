import { FormEvent, useState } from "react";
import { ChevronDown, Instagram, Linkedin, Mail, Menu, Minus, Plus, Send, X } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const values = [
  { title: <>inovação<br />em primeiro<br />lugar</>, copy: "estamos sempre à frente, criando novas possibilidades." },
  { title: <>impacto<br />mensurável</>, copy: "focamos em resultados reais que impulsionam o crescimento da sua marca." },
  { title: <>visão<br />global</>, copy: "comunicação e design que transcendem fronteiras." },
  { title: <>parceria<br />verdadeira</>, copy: "relações sólidas construídas com confiança e propósito." },
];

const services = [
  { value: "+73%", metric: "aumento do reconhecimento da marca", title: <>branding<br />e identidade</>, copy: "criamos marcas que comunicam com clareza, geram conexão e constroem reputação.", image: "visor" },
  { value: "+58%", metric: "aumento de engajamento nas redes sociais", title: <>mídias<br />sociais e<br />marketing</>, copy: "estratégias de conteúdo que aproximam, envolvem e geram crescimento real.", image: "face" },
  { value: "+67%", metric: "mais foco em conversões", title: <>marketing<br />digital</>, copy: "campanhas inteligentes orientadas para atenção, conversão e resultados.", image: "pillars" },
  { value: "+42%", metric: "mais conversões em websites", title: <>design<br />de sites e<br />UX/UI</>, copy: "sites modernos, rápidos e estratégicos que convertem visitantes em clientes.", image: "flow" },
];

const faqs = [
  ["quais serviços a nossa agência oferece?", "Oferecemos soluções completas em comunicação e marketing, incluindo branding, design gráfico, gestão de redes sociais, tráfego pago, criação de sites, produção audiovisual, consultoria estratégica, automação e inteligência artificial."],
  ["quanto custa um projecto digital?", "O investimento depende do escopo, da complexidade e dos objectivos do projecto. Depois de entendermos a necessidade, apresentamos uma proposta adequada."],
  ["vocês também gerenciam redes sociais?", "Sim. Trabalhamos estratégia, conteúdo, design, gestão e campanhas para redes sociais."],
  ["em quais setores vocês são especializados?", "Trabalhamos com diferentes sectores e adaptamos a estratégia ao contexto, público e objectivos de cada organização."],
  ["como medem o sucesso das campanhas?", "Definimos indicadores antes da execução e acompanhamos alcance, atenção, engagement, leads e conversões."],
];

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  project: z.string().trim().min(5).max(500),
});

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return <div className={`brand-mark${inverse ? " brand-mark-inverse" : ""}`}><span className="brand-ring" /><strong>AGÊNCIA<br />CRIATIVA</strong></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-nav">
    <BrandMark />
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
      <a className="active" href="#inicio" onClick={() => setOpen(false)}>Início</a>
      <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
      <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
    </nav>
    <Button variant="outline" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button>
  </header>;
}

function Hero() {
  return <section id="inicio" className="hero-section">
    <div className="flare flare-one" /><div className="flare flare-two" /><div className="flare flare-three" />
    <div className="hero-topline reveal"><h1>design</h1><p>visuais ousados, modernos e futuristas que<br />captam a atenção e impulsionam o impacto<br />digital através da clareza, contraste e inovação.</p></div>
    <div className="hero-stage">
      <div className="hero-red-field" />
      <div className="hero-word" aria-hidden="true">CRIATIVA</div>
      <div className="hero-agency">AGÊNCIA</div>
      <img className="hero-person" src={"/images/criativa-visor.png"} alt="Figura futurista com visor e auscultadores" />
      <div className="hero-copy"><span className="orbit-icon" /><p>Ajudamos marcas visionárias a se destacar num mundo digital competitivo com criatividade estratégica e soluções que entregam resultados reais.</p><a href="#contacto" className="pill-button">Fale connosco</a></div>
      <div className="project-badge"><div className="badge-window"><span /></div><b>100+</b><small>PROJECTOS CONCLUÍDOS<br />COM SUCESSO</small></div>
      <div className="social-rail"><a href="#contacto" aria-label="Instagram"><Instagram /></a><a href="#contacto" aria-label="Facebook">f</a><a href="#contacto" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:ola@criativa.agency" aria-label="Email"><Mail /></a></div>
    </div>
  </section>;
}

function About() {
  return <section className="about-section section-dark">
    <div className="about-heading"><h2><span>quem</span><br />somos</h2><div className="about-copy"><div className="silk-mark" /><p>Somos uma agência de serviço completo que transforma ideias em resultados impactantes. Combinamos criatividade, estratégia e tecnologia para construir marcas fortes e fazê-las crescer.</p></div></div>
    <div className="values-grid">{values.map((value, index) => <article className={`value-item value-${index}`} key={index}><div className="value-shape"><h3>{value.title}</h3><i /></div><p>{value.copy}</p></article>)}</div>
  </section>;
}

function Services() {
  return <section id="servicos" className="services-section">
    <div className="services-curve" />
    <div className="services-inner">
      <div className="services-head"><BrandMark inverse /><div><h2>nossos serviços</h2><p>Oferecemos soluções digitais completas — do branding e design ao marketing e desenvolvimento — para que sua marca cresça e se destaque.</p></div><span className="orbit-icon dark" /></div>
      <div className="service-grid">{services.map((service, index) => <article className={`service-card service-${index}`} key={service.value}><div className={`service-art service-art-${service.image}`}>{service.image === "visor" && <img src={"/images/criativa-visor.png"} alt="" />}</div><strong>{service.value}</strong><small>{service.metric}</small><h3>{service.title}</h3><p>{service.copy}</p></article>)}</div>
      <div className="laptop-scene"><div className="laptop-lid"><div className="laptop-display"><p>nós combinamos<br />estratégia, design<br />e código<br /><em>para impulsionar</em><br />marcas além<br />do limite</p><img src={"/images/criativa-visor.png"} alt="Figura futurista no ecrã do laptop" /></div></div><div className="keyboard"><div className="keys" /></div></div>
      <p className="laptop-caption">onde design encontra estratégia<br />— criamos experiências que<br />geram destaque e performance.</p>
    </div>
  </section>;
}

const team = [
  { name: <>Mauro<br />Janete</>, role: "DIRECTOR CRIATIVO", image: "/images/company/team/team-22.png" },
  { name: <>Chando<br />Chimoio</>, role: "DIRECTOR GERAL", image: "/images/company/team/team-12.png", lead: true },
  { name: <>Oldimiro<br />Munguambe</>, role: "DIRECTOR ADMINISTRATIVO", image: "/images/company/team/team-9.png" },
];

function Team() {
  return <section className="team-section section-dark"><div className="team-note team-note-left">transformando<br />ideias em<br />resultados<br />através da<br />comunicação<br />e estratégia</div><div className="team-note team-note-right">performance<br />branding<br />marketing digital<br />desenvolvimento</div><div className="team-grid">{team.map((member) => <article className={`team-arch${member.lead ? " team-lead" : ""}`} key={member.role}><h3>{member.name}</h3><img src={member.image} alt={`${member.role} da Criativa`} /><div className="team-role"><strong>{member.role}</strong><p>responsável por liderar e desenvolver a visão criativa e operacional da agência.</p></div></article>)}</div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="faq-section section-dark"><div className="faq-heading"><h2>tudo o que<br /><span>você precisa</span><br /><span>saber</span></h2><div className="faq-sign"><span className="orbit-icon" /><b><em>Agência</em><br />Criativa</b></div></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={open === index ? "faq-item active" : "faq-item"} key={question}><Button variant="outline" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><i>{open === index ? <Minus /> : <Plus />}</i></Button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></section>;
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!contactSchema.safeParse(data).success) { setStatus("error"); return; }
    setStatus("success"); form.reset();
  };
  return <section id="contacto" className="contact-section section-dark"><div className="contact-heading"><h2>a sua visão —<br /><span>a nossa missão</span></h2><div><p>Vamos transformar suas ideias em marcas que geram resultados.</p><div className="mini-visor"><img src={"/images/criativa-visor.png"} alt="" /></div></div></div><form className="contact-form" onSubmit={submit} noValidate><label><span>Nome</span><input name="name" placeholder="nome" maxLength={100} aria-label="Nome" /></label><label><span>Telefone</span><input name="phone" type="tel" placeholder="número de telefone" maxLength={30} aria-label="Número de telefone" /></label><label><span>Email</span><input name="email" type="email" placeholder="e-mail" maxLength={255} aria-label="E-mail" /></label><label><span>Projecto</span><input name="project" placeholder="fale-nos do projecto" maxLength={500} aria-label="Fale-nos do projecto" /></label><Button type="submit" className="pill-button">enviar solicitação <Send /></Button><small><i /> ao enviar este formulário, você concorda com nossa política de privacidade.</small><p className={`form-status ${status}`}>{status === "success" ? "Solicitação enviada com sucesso." : status === "error" ? "Preencha correctamente todos os campos." : ""}</p></form></section>;
}

function Footer() {
  return <footer className="site-footer section-dark"><div className="footer-glow" /><div className="footer-geometry"><span /><i /></div><div className="footer-top"><div>trabalhos<br />estúdio<br />contacto</div><p>Agência Criativa é movida pela paixão em criar soluções que conectam marcas ao seu público com estratégia, criatividade e tecnologia.</p></div><div className="footer-brand">CRIATIVA</div><div className="footer-bottom"><div><a href="#inicio">início</a><a href="#servicos">serviços</a><a href="#contacto">contacto</a></div><div className="footer-social"><Instagram /><span>f</span><Linkedin /><Mail /></div><b>2026</b></div></footer>;
}

export default function Home() {
  return <div className="criativa-site"><Header /><main><Hero /><About /><Services /><Team /><FAQ /><Contact /></main><Footer /></div>;
}