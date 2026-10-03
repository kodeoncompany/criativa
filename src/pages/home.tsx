import { useState } from "react";
import { ArrowDown, ArrowUpRight, ChevronDown, Instagram, Linkedin, Mail, Menu, Play, Plus, Send, X } from "lucide-react";

const RED = "#EF203D";
const NAVY = "#000038";

const values = [
  ["inovação", "em primeiro lugar"],
  ["impacto", "mensurável"],
  ["visão", "global"],
  ["parceria", "verdadeira"],
];

const services = [
  { value: "+73%", title: "branding e identidade", copy: "criamos marcas que comunicam com clareza, geram confiança e constroem reputação." },
  { value: "+58%", title: "mídias sociais e marketing", copy: "estratégias de conteúdo que aproximam, envolvem e geram crescimento real." },
  { value: "+67%", title: "marketing digital", copy: "campanhas inteligentes orientadas para atenção, conversão e resultados." },
  { value: "+42%", title: "design de sites e UX/UI", copy: "sites modernos, rápidos e estratégicos que transformam visitantes em clientes." },
];

const faqs = [
  ["quais serviços a nossa agência oferece?", "Oferecemos soluções completas em comunicação e marketing, incluindo branding, design gráfico, gestão de redes sociais, tráfego pago, criação de sites, produção audiovisual, consultoria estratégica, automação e inteligência artificial."],
  ["quanto custa um projecto digital?", "O investimento depende do escopo, complexidade e objectivos do projecto. Depois de entendermos a necessidade, apresentamos uma proposta adequada."],
  ["vocês também gerenciam redes sociais?", "Sim. Trabalhamos estratégia, conteúdo, design, gestão e campanhas para redes sociais."],
  ["em quais setores vocês são especializados?", "Trabalhamos com diferentes sectores e adaptamos a estratégia ao contexto, público e objectivos de cada organização."],
  ["como medem o sucesso das campanhas?", "Definimos indicadores antes da execução e acompanhamos alcance, atenção, engagement, leads, conversões e outros resultados relevantes."],
];

function CyberFigure() {
  return <div className="cyber-figure" aria-label="Figura futurista">
    <div className="cyber-halo" />
    <div className="cyber-head">
      <div className="visor"><span /><i /></div>
      <div className="ear left" /><div className="ear right" />
      <div className="nose" /><div className="lips" />
    </div>
    <div className="cyber-neck" />
  </div>;
}

function ArcValue({ item, index }: { item: string[]; index: number }) {
  return <div className={`value-wrap value-${index}`}>
    <div className="value-arc"><span>{item[0]}<br />{item[1]}</span><b /></div>
    <p>{index === 0 ? "estamos sempre à frente, criando novas possibilidades." : index === 1 ? "focamos em resultados reais que impulsionam o crescimento da sua marca." : index === 2 ? "comunicação e design que transcendem fronteiras." : "relações sólidas construídas com confiança e propósito."}</p>
  </div>;
}

function TeamCard({ name, role, large }: { name: string; role: string; large?: boolean }) {
  return <article className={`team-card ${large ? "team-large" : ""}`}>
    <div className="team-name">{name}</div>
    <div className={`team-photo ${large ? "team-photo-large" : ""}`}><div className="portrait"><span /></div></div>
    <strong>{role}</strong>
    <p>responsável por transformar ideias em experiências relevantes e resultados para a agência.</p>
  </article>;
}

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return <div className="criativa-site">
    <header className="site-nav">
      <a className="nav-brand" href="#inicio">AGÊNCIA<br />CRIATIVA</a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
        <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section id="inicio" className="hero-section">
        <div className="blob blob-a" /><div className="blob blob-b" /><div className="blob blob-c" />
        <div className="hero-topline">
          <h1>design</h1>
          <p>visuais ousados, modernos e futuristas que<br />captam a atenção e impulsionam o impacto<br />digital através da clareza, contraste e inovação.</p>
        </div>
        <div className="hero-stage">
          <div className="hero-word">CRIATIVA</div>
          <div className="hero-agency">AGÊNCIA</div>
          <CyberFigure />
          <div className="hero-copy">
            <span className="mini-mark">◌</span>
            <p>Ajudamos marcas visionárias a se destacar num mundo digital competitivo com criatividade estratégica e soluções que entregam resultados reais.</p>
            <a href="#contacto" className="pill-button">Fale connosco <ArrowUpRight size={15} /></a>
          </div>
          <div className="project-badge"><div className="badge-art" /><b>100+</b><small>PROJECTOS CONCLUÍDOS<br />COM SUCESSO</small></div>
          <div className="social-rail"><Instagram /><Linkedin /><Mail /></div>
        </div>
      </section>

      <section className="about-section section-dark">
        <div className="section-heading">
          <h2><span>quem</span><br />somos</h2>
          <div className="section-description"><div className="swirl" /><p>Somos uma agência de serviço completo que transforma ideias em resultados impactantes. Combinamos criatividade, estratégia e tecnologia para construir marcas fortes e fazê-las crescer.</p></div>
        </div>
        <div className="values-grid">{values.map((v, i) => <ArcValue key={v[0]} item={v} index={i} />)}</div>
      </section>

      <section id="servicos" className="services-section">
        <div className="white-curve" />
        <div className="services-inner">
          <div className="services-label">AGÊNCIA<br />CRIATIVA</div>
          <div className="services-title"><h2>nossos serviços</h2><p>oferecemos soluções digitais completas — do branding e design ao marketing e desenvolvimento — para que sua marca cresça e se destaque.</p></div>
          <div className="service-grid">{services.map((s, i) => <article className={`service-card service-${i}`} key={s.title}><div className="service-image"><div className="service-glow" /></div><b>{s.value}</b><span>{i === 0 ? "aumento do reconhecimento da marca" : i === 1 ? "aumento de engagement nas redes sociais" : i === 2 ? "mais foco em conversões" : "mais conversões em websites"}</span><h3>{s.title}</h3><p>{s.copy}</p></article>)}</div>
        </div>
        <div className="laptop-wrap"><div className="laptop-screen"><span>nós combinamos<br />estratégia, design<br />e código<br /><em>para impulsionar</em><br />marcas além<br />do limite</span><CyberFigure /></div><div className="laptop-base" /></div>
        <p className="laptop-caption">onde design encontra estratégia<br />— criamos experiências que<br />geram destaque e performance.</p>
      </section>

      <section className="team-section section-dark">
        <div className="team-side-note">transformando<br />ideias em<br />resultados<br />através da<br />comunicação<br />e estratégia</div>
        <div className="team-side-note right">performance<br />branding<br />marketing digital<br />desenvolvimento</div>
        <div className="team-grid">
          <TeamCard name="Mauro Janete" role="DIRECTOR CRIATIVO" />
          <TeamCard name="Chando Chimoio" role="DIRECTOR GERAL" large />
          <TeamCard name="Oldimiro Munguambe" role="DIRECTOR ADMINISTRATIVO" />
        </div>
      </section>

      <section className="faq-section section-dark">
        <div className="faq-heading"><h2>tudo o que<br /><span>você precisa</span><br /><span>saber</span></h2><div className="faq-mark">AGÊNCIA<br /><b>CRIATIVA</b></div></div>
        <div className="faq-list">{faqs.map(([q, a], i) => <div className={openFaq === i ? "faq-item active" : "faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span>{openFaq === i ? <ChevronDown /> : <Plus />}</button>{openFaq === i && <div className="faq-answer">{a}</div>}</div>)}</div>
      </section>

      <section id="contacto" className="contact-section section-dark">
        <div className="contact-heading"><h2>a sua visão —<br /><span>a nossa missão</span></h2><p>vamos transformar suas ideias em marcas que geram resultados.</p></div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input placeholder="nome" /><input placeholder="número de telefone" /><input type="email" placeholder="e-mail" /><input placeholder="sobre o projecto" />
          <button className="pill-button" type="submit">enviar solicitação <Send size={15} /></button>
          <small><i /> ao enviar este formulário, você concorda com nossa política de privacidade.</small>
        </form>
      </section>
    </main>

    <footer className="site-footer section-dark">
      <div className="footer-orbit" />
      <div className="footer-top"><div>trabalhos<br />estúdio<br />contacto</div><p>Agência Criativa é movida pela paixão em criar soluções que conectam marcas ao seu público com estratégia, criatividade e tecnologia.</p></div>
      <div className="footer-brand">CRIATIVA</div>
      <div className="footer-bottom"><div>início &nbsp;&nbsp; serviços &nbsp;&nbsp; contacto</div><div className="footer-social"><Instagram /><Mail /><Linkedin /></div><b>2026</b></div>
    </footer>
  </div>;
};

export default Home;
