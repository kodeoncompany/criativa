import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { Link } from "react-router-dom";

const pagesLinks = [
  ["Início", "/"], ["Sobre", "/company"], ["Serviços", "/features"], ["Projectos", "/blog"], ["Comunica Summit", "/comunicasummit"], ["Contacto", "/contact"],
];

const Footer = () => (
  <footer className="relative bg-[#000038] text-white pt-24 pb-8 border-t border-white/10">
    <Container>
      <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-12 pb-16">
        <div className="max-w-sm">
          <Link to="/" className="text-xl font-bold tracking-[0.2em]">CRIATIVA</Link>
          <p className="mt-5 text-white/55 leading-relaxed">Comunicação • Estratégia • Resultados</p>
          <p className="mt-6 text-white/70">Ajudamos empresas, instituições e marcas a comunicar com mais clareza, posicionar-se com mais força e crescer com estratégia.</p>
        </div>
        <AnimateOnView once>
          <h3 className="font-semibold mb-5">Navegação</h3>
          <ul className="space-y-3">{pagesLinks.map(([title, href]) => <li key={href}><Link to={href} className="text-white/55 hover:text-white transition-colors">{title}</Link></li>)}</ul>
        </AnimateOnView>
        <AnimateOnView once delay={0.1}>
          <h3 className="font-semibold mb-5">Contacto</h3>
          <div className="space-y-3 text-white/55"><p>criativa.agency</p><p>+258 876 434 496</p><p>Info@comunicasummit.site</p></div>
        </AnimateOnView>
      </div>
      <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} Criativa. Todos os direitos reservados.</p>
        <div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-white">Privacidade</Link><Link to="/terms-&-condition" className="hover:text-white">Termos</Link></div>
      </div>
    </Container>
  </footer>
);

export default Footer;
