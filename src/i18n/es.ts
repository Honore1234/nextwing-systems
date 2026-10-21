const es = {
  meta: {
    title: 'NextWing Systems — Salvar tiempo. Proteger vidas.',
    description:
      'NextWing Systems by Honoré Labs desarrolla plataformas UAV modulares para misiones de emergencia, monitoreo, inspección y reconocimiento.',
    ogLocale: 'es_MX',
  },
  nav: {
    brandName: 'NextWing',
    brandBy: 'by Honoré Labs',
    links: [
      { href: '#origin', label: 'Origen' },
      { href: '#system', label: 'Sistema' },
      { href: '#missions', label: 'Misiones' },
      { href: '#roadmap', label: 'Roadmap' },
      { href: '#contact', label: 'Contacto' },
    ],
    switchLabel: 'Idioma',
  },
  hero: {
    tag: 'Experimental UAV Program / MX',
    titleLines: ['Llegar antes.', 'Ver mejor.', 'Decidir rápido.'],
    lead:
      'NextWing Systems desarrolla UAVs modulares, accesibles y reparables para emergencias, monitoreo ambiental, inspección, agricultura de precisión y reconocimiento en zonas difíciles.',
    primaryCta: 'Explorar sistema',
    secondaryCta: 'Ver NF-X1',
    hud: [
      { label: 'MODE', value: 'MISSION TEST' },
      { label: 'AIRFRAME', value: 'NF-X1' },
      { label: 'NEXT', value: 'TESTBED-1' },
      { label: 'STATUS', value: 'ITERATING' },
    ],
  },
  manifesto: {
    kicker: 'Frase central',
    title: 'Salvar tiempo. Proteger vidas.',
    values: ['Modular', 'Reparable', 'Accesible', 'Documentado', 'Probado', 'Escalable'],
  },
  origin: {
    tag: 'Prototype 01',
    title: 'NF-X1 / Night Fury X1',
    intro:
      'El punto de origen: una aeronave real, hecha con foamboard, electrónica accesible y control RC. No nació perfecto. Nació para probar, fallar, reparar y aprender.',
    dataTitle: 'Primeras validaciones',
    data: [
      { label: 'Construcción:', text: 'foamboard, alas reparables y electrónica accesible.' },
      { label: 'Control:', text: 'plataforma RC con aprendizaje de estabilidad y superficies de mando.' },
      { label: 'Campo:', text: 'pruebas reales, vuelos iniciales y registro de fallas.' },
      { label: 'Aprendizaje:', text: 'cableado, peso, vibración, configuración y reparabilidad.' },
    ],
  },
  system: {
    tag: 'NextWing Operating System',
    title: 'No es solo el avión. Es el sistema.',
    intro:
      'La originalidad de NextWing está en convertir una plataforma aérea en una herramienta de misión: sensores, datos, módulos, operación y documentación.',
    blocks: [
      { num: '01', title: 'Airframe', text: 'NF-X1 como origen propio. Testbed-1 como plataforma VTOL de pruebas. NF-X2 como arquitectura futura.' },
      { num: '02', title: 'Mission Bay', text: 'Bahía modular para cámaras, sensores, GPS, telemetría y payloads intercambiables.' },
      { num: '03', title: 'Flight Data', text: 'Bitácora de duración, batería, fallas, ubicación, condiciones de vuelo y resultados de misión.' },
      { num: '04', title: 'Field Ops', text: 'Checklists, protocolos, pruebas seguras, escenarios simulados y reportes post-vuelo.' },
    ],
    testbed: {
      tag: 'Prototype 02',
      title: 'NextWing Testbed-1',
      text: 'Plataforma VTOL basada en un diseño externo, usada honestamente como banco de pruebas para acelerar la validación de módulos, navegación y operación de misión.',
    },
  },
  missions: {
    tag: 'Mission Modules',
    title: 'Un UAV. Diferentes formas de ayudar.',
    items: [
      { num: '01', title: 'Emergencias y desastres', text: 'Reconocimiento rápido para observar zonas afectadas, reducir incertidumbre y apoyar decisiones iniciales.', badge: 'Response' },
      { num: '02', title: 'Búsqueda y reconocimiento', text: 'Exploración visual de áreas abiertas o difíciles para localizar puntos de interés más rápido.', badge: 'Search' },
      { num: '03', title: 'Inspección de infraestructura', text: 'Revisión de caminos, techos, postes o estructuras sin acercar primero a una persona al riesgo.', badge: 'Inspect' },
      { num: '04', title: 'Monitoreo ambiental y agricultura', text: 'Observación de terreno, cultivos y zonas naturales con datos visuales o sensores básicos.', badge: 'Monitor' },
    ],
  },
  proof: {
    tag: 'What makes it credible',
    title: 'La ventaja no es prometer. Es probar.',
    items: [
      { num: '01', text: 'Prototipo físico construido.' },
      { num: '02', text: 'Pruebas reales de campo.' },
      { num: '03', text: 'Fallas documentables.' },
      { num: '04', text: 'Ruta técnica hacia VTOL.' },
    ],
  },
  roadmap: {
    tag: 'Roadmap',
    title: 'De idea a plataforma validada',
    steps: [
      { num: '01', title: 'NF-X1', text: 'Construcción, pruebas iniciales, fallas, reparación y documentación.' },
      { num: '02', title: 'Testbed-1', text: 'VTOL externo como banco de pruebas con atribución clara y modificaciones propias.' },
      { num: '03', title: 'Módulos', text: 'GPS, telemetría, cámara, sensores, mission bay y reportes de misión.' },
      { num: '04', title: 'NF-X2', text: 'Plataforma propia madura basada en datos, necesidades reales y validación técnica.' },
    ],
  },
  ethics: {
    tag: 'Honest engineering',
    title: 'Transparencia como parte del diseño.',
    text: 'Si NextWing usa una plataforma comprada como testbed, se dirá claramente. No se reclamará como propio el diseño completo de una aeronave externa. La innovación estará en la integración, sensores, electrónica, software de misión, documentación, datos de vuelo y adaptación a problemas reales.',
  },
  contact: {
    tag: 'Build the next wing',
    title: 'NextWing Systems by Honoré Labs',
    text: 'Proyecto UAV experimental en desarrollo. Abierto a mentoría, colaboración técnica, validación de casos de uso, eventos de innovación y oportunidades para crecer.',
    cardLabel: 'Contacto provisional',
    email: 'honorevillanueva412@gmail.com',
  },
  footer: {
    text: '© 2026 Honoré Labs — NextWing Systems. Salvar tiempo. Proteger vidas.',
  },
};

export default es;
export type Dictionary = typeof es;
