/* =================================================================
   DADOS DO SITE: textos, marcas, formação, expertise e contatos.
   Usado pelo site (index.html) e pelo PDF (pdf.html).
   Os projetos ficam em projetos.js.
   ================================================================= */

/* 1. Especializada em: cada lista entre colchetes é uma linha */
const FOCUS = {
  pt: [["Designer esportiva", "Clubes", "iGaming"], ["Agências publicitárias", "Linguagem institucional"]],
  en: [["Sports designer", "Clubs", "iGaming"], ["Advertising agencies", "Institutional language"]]
};
/* 2. Marcas
   cover = imagem do retângulo · logo = foto/logo do círculo
   clients = empresas atendidas, cada uma com logo pequeno (opcional) */
const BRANDS = [
  { name: "End to End", cover: "img/e2e-capa.jpg", logo: "img/e2e-logo.jpg", clients: [
    { name: "Avanti Palmeiras", logo: "img/avanti.jpg" }, { name: "Grêmio", logo: "img/gremio.jpg" }, { name: "Loja do Galo", logo: "img/loja-do-galo.jpg" } ] },
  { name: "Yeap Films", cover: "img/yeap-capa.webp", logo: "img/yeap-logo.jpg", clients: [
    { name: "H2 Bet", logo: "img/h2bet.webp" }, { name: "Atlético-MG", logo: "img/atletico-mg.jpg" }, { name: "Seu Bet", logo: "img/seubet.jpg" }, { name: "Luiz Henrique", logo: "" } ] },
  { name: "North Star Network", cover: "img/northstar-capa.jpg", logo: "img/northstar-logo.jpg", clients: [
    { name: "Trivela", logo: "img/trivela.jpg" }, { name: "UmDois Esportes", logo: "img/umdois.jpg" }, { name: "PL Brasil", logo: "" } ] },
  { name: "Sportsbet.io", cover: "img/sportsbet-capa.png", logo: "img/sportsbet.png", clients: [
    { name: "Flamengo", logo: "img/flamengo.png" }, { name: "São Paulo FC", logo: "img/spfc.jpg" } ] },
  { name: "Warner Bros.", cover: "img/wb-capa.jpg", logo: "img/wb-logo.jpg", clients: [
    { name: "TNT Sports", logo: "img/tnt.png" } ] },
  { name: "Copa do Brasil", cover: "img/cdb-capa.jpg", logo: "img/cdb-logo.jpg", clients: [
    { name: "Collab Flamengo", logo: "img/flamengo.png" } ] }
];

/* 3. Projetos: ficam no arquivo projetos.js (usado também pela Galeria) */

/* 4. Formação */
const EDU = [
  { pt: "Tecnólogo em Design Gráfico", en: "Associate Degree in Graphic Design", place: "Centro Universitário UniSant'Anna" },
  { pt: "Adobe Illustrator: ilustração vetorial do zero", en: "Adobe Illustrator: vector illustration from scratch", place: "Domestika" },
  { pt: "CRIA", en: "CRIA", place: "Jack Usephot" }
];

/* 4. Colunas de expertise */
const EXPERTISE = [
  { ico: "social",
    pt: ["Social Media", ["Posts e stories", "Artes para Instagram e X", "Artes para Twitch", "Matchday e pré-jogo", "Posts especiais de atletas", "Campanhas e promoções"]],
    en: ["Social Media", ["Posts and stories", "Instagram and X artwork", "Twitch artwork", "Matchday and pre-game", "Special athlete posts", "Campaigns and promotions"]] },
  { ico: "creative",
    pt: ["Digital Creative", ["Key visual", "Design gráfico", "Artes para motion", "Ilustração", "Manipulação de imagens", "Logotipos"]],
    en: ["Digital Creative", ["Key visuals", "Graphic design", "Artwork for motion", "Illustration", "Photo manipulation", "Logos"]] },
  { ico: "ai",
    pt: ["Inteligência artificial", ["Criação de imagens", "Automatização de processos", "Criação de prompts"]],
    en: ["Artificial intelligence", ["Image generation", "Process automation", "Prompt writing"]] },
  { ico: "campaign",
    pt: ["Campanhas e Ativações", ["Ativação de patrocínio", "Campanhas promocionais", "Banners e páginas promocionais", "E-mail marketing"]],
    en: ["Campaigns & Activations", ["Sponsorship activation", "Promotional campaigns", "Banners and promo pages", "Email marketing"]] },
  { ico: "print",
    pt: ["Impresso e Institucional", ["Materiais impressos", "Comunicação interna", "Comunicação externa", "Peças institucionais"]],
    en: ["Print & Institutional", ["Printed materials", "Internal communication", "External communication", "Institutional pieces"]] }
];

/* 5. Redes sociais e contatos */
const CONTACTS = [
  { key: "instagram", name: "Instagram", handle: "@dianalopesart", url: "https://www.instagram.com/dianalopesart" },
  { key: "behance", name: "Behance", handle: "@dianalopesart", url: "https://www.behance.net/dianalopesart" },
  { key: "linkedin", name: "LinkedIn", handle: "/artdianalopes", url: "https://www.linkedin.com/in/artdianalopes" },
  { key: "whatsapp", name: "WhatsApp", handle: "+55 11 94932-4481", url: "https://wa.me/5511949324481" },
  { key: "mail", name: "E-mail", handle: "artdianalopes@gmail.com", copy: true, wide: true }
];

/* Textos fixos */
const T = {
  pt: {
    "nav.brands":"Marcas","nav.projects":"Projetos","nav.exp":"Expertise","nav.contact":"Contato",
    "hero.who":"Quem eu sou","hero.bio":"Designer gráfica especializada em esporte. Transformo a paixão do torcedor em linguagem visual para clubes, marcas, agências e instituições.",
    "hero.focus":"Especializada em","hero.cta1":"Ver projetos","hero.cta2":"Fale comigo","pdf.btn":"Baixar portfólio (PDF)",
    "brands.k":"Marcas","brands.t":"Marcas, times e projetos",
    "proj.k":"Projetos de criação","proj.t":"O que eu criei para cada marca",
    "exp.k":"Minha expertise","exp.t":"Design que entra em campo","exp.edu":"Formação",
    "exp.pitch":"Do anúncio da escalação à ativação do patrocinador, crio peças que <b>fazem o torcedor parar o scroll</b>. Uno a linguagem da arquibancada ao rigor de uma comunicação institucional, no ritmo do calendário esportivo.",
    "gal.t":"Galeria","gal.open":"Galeria","gal.close":"Fechar galeria","gal.n":"artes",
    "c.k":"Fale comigo","c.t":"Vamos criar algo incrível juntos?","footer":"Designer esportiva · São Paulo, Brasil",
    all:"Todos", clientsIn:"Clientes", clientOne:"Cliente", imgSlot:"Imagem", direct:"Trabalho para as redes sociais da empresa.", artSlot:"Espaço para imagens", see:"Ver no", more:"Ver mais", arts:"artes", art1:"arte", copy:"Copiar", copied:"Copiado", open:"Abrir menu", close:"Fechar menu", art:"Arte"
  },
  en: {
    "nav.brands":"Brands","nav.projects":"Projects","nav.exp":"Expertise","nav.contact":"Contact",
    "hero.who":"Who I am","hero.bio":"Graphic designer specialised in sport. I turn fans' passion into visual language for clubs, brands, agencies and institutions.",
    "hero.focus":"Specialised in","hero.cta1":"See projects","hero.cta2":"Talk to me","pdf.btn":"Download portfolio (PDF)",
    "brands.k":"Brands","brands.t":"Brands, teams and projects",
    "proj.k":"Creative projects","proj.t":"What I created for each brand",
    "exp.k":"My expertise","exp.t":"Design that takes the field","exp.edu":"Education",
    "exp.pitch":"From the line-up reveal to the sponsor activation, I create pieces that <b>make fans stop scrolling</b>. I blend the language of the stands with the rigour of institutional communication, at the pace of the sports calendar.",
    "gal.t":"Gallery","gal.open":"Gallery","gal.close":"Close gallery","gal.n":"artworks",
    "c.k":"Talk to me","c.t":"Shall we create something great together?","footer":"Sports designer · São Paulo, Brazil",
    all:"All", clientsIn:"Clients", clientOne:"Client", imgSlot:"Image", direct:"Work for the company's social media.", artSlot:"Image slot", see:"See on", more:"See more", arts:"artworks", art1:"artwork", copy:"Copy", copied:"Copied", open:"Open menu", close:"Close menu", art:"Artwork"
  }
};

/* Ícones flat vazados (contorno) */
const FLAT = {
  social:'<path d="M5 7h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H14l-6 5v-5H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="M10 14h14M10 19h9"/>',
  creative:'<path d="M22 4l8 8-15 15-9 1 1-9z"/><path d="M18 8l8 8"/>',
  campaign:'<path d="M4 13h6l13-7v22l-13-7H4z"/><path d="M9 21l2 8h4l-2-8"/><path d="M27 12c2 2 2 8 0 10"/>',
  print:'<path d="M9 11V3h16v8"/><rect x="3" y="11" width="28" height="12" rx="2"/><path d="M9 19h16v12H9z"/><path d="M13 24h8M13 27h5"/>',
  ai:'<rect x="8" y="8" width="18" height="18" rx="3"/><path d="M13 3v5M21 3v5M13 26v5M21 26v5M3 13h5M3 21h5M26 13h5M26 21h5"/><path d="M13 21l2.5-8h1l2.5 8M14 18.5h5M21.5 13v8"/>',
};
/* Ícones vazados das redes */
const SOCIAL_ICONS = {
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6"/>',
  behance:'<path d="M3 6.5h5a2.6 2.6 0 0 1 0 5.2H3zM3 11.7h5.8a2.9 2.9 0 0 1 0 5.8H3z"/><path d="M15 7.5h5M14.2 13.6h6.8a3.4 3.4 0 1 0-1 2.6"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5c0-1.7 1-3 2.6-3S17 11.8 17 13.5V17"/>',
  whatsapp:'<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M9 8.5c-.4 1.8.6 3.7 2.2 5.2 1.6 1.4 3.2 2 4.8 1.6l.6-1.6-2-1-1 .9c-.9-.4-2-1.4-2.5-2.4l.9-1-1-2z"/>'
};
