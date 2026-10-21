import type { Dictionary } from './es';

const en: Dictionary = {
  meta: {
    title: 'NextWing Systems — Save time. Protect lives.',
    description:
      'NextWing Systems by Honoré Labs develops modular UAV platforms for emergency response, monitoring, inspection, and reconnaissance missions.',
    ogLocale: 'en_US',
  },
  nav: {
    brandName: 'NextWing',
    brandBy: 'by Honoré Labs',
    links: [
      { href: '#origin', label: 'Origin' },
      { href: '#system', label: 'System' },
      { href: '#missions', label: 'Missions' },
      { href: '#roadmap', label: 'Roadmap' },
      { href: '#contact', label: 'Contact' },
    ],
    switchLabel: 'Language',
  },
  hero: {
    tag: 'Experimental UAV Program / MX',
    titleLines: ['Arrive sooner.', 'See better.', 'Decide faster.'],
    lead:
      'NextWing Systems develops modular, accessible, and repairable UAVs for emergency response, environmental monitoring, inspection, precision agriculture, and reconnaissance in hard-to-reach areas.',
    primaryCta: 'Explore the system',
    secondaryCta: 'Meet the NF-X1',
    hud: [
      { label: 'MODE', value: 'MISSION TEST' },
      { label: 'AIRFRAME', value: 'NF-X1' },
      { label: 'NEXT', value: 'TESTBED-1' },
      { label: 'STATUS', value: 'ITERATING' },
    ],
  },
  manifesto: {
    kicker: 'Core statement',
    title: 'Save time. Protect lives.',
    values: ['Modular', 'Repairable', 'Accessible', 'Documented', 'Tested', 'Scalable'],
  },
  origin: {
    tag: 'Prototype 01',
    title: 'NF-X1 / Night Fury X1',
    intro:
      'Where it all started: a real aircraft built from foamboard, accessible electronics, and RC control. It wasn’t born perfect. It was born to test, fail, repair, and learn.',
    dataTitle: 'Early validation',
    data: [
      { label: 'Build:', text: 'foamboard airframe, repairable wings, and accessible electronics.' },
      { label: 'Control:', text: 'RC platform used to learn stability and control-surface behavior.' },
      { label: 'Field:', text: 'real-world testing, first flights, and failure logging.' },
      { label: 'Lessons:', text: 'wiring, weight, vibration, configuration, and repairability.' },
    ],
  },
  system: {
    tag: 'NextWing Operating System',
    title: 'It’s not just the aircraft. It’s the system.',
    intro:
      'What sets NextWing apart is turning an aerial platform into a mission tool: sensors, data, modules, operations, and documentation.',
    blocks: [
      { num: '01', title: 'Airframe', text: 'NF-X1 as our in-house origin. Testbed-1 as the VTOL test platform. NF-X2 as the future architecture.' },
      { num: '02', title: 'Mission Bay', text: 'A modular bay for cameras, sensors, GPS, telemetry, and swappable payloads.' },
      { num: '03', title: 'Flight Data', text: 'Logs of flight time, battery, failures, location, flight conditions, and mission results.' },
      { num: '04', title: 'Field Ops', text: 'Checklists, protocols, safe testing, simulated scenarios, and post-flight reports.' },
    ],
    testbed: {
      tag: 'Prototype 02',
      title: 'NextWing Testbed-1',
      text: 'A VTOL platform based on a third-party design, openly used as a testbed to accelerate the validation of modules, navigation, and mission operations.',
    },
  },
  missions: {
    tag: 'Mission Modules',
    title: 'One UAV. Many ways to help.',
    items: [
      { num: '01', title: 'Emergencies and disasters', text: 'Rapid reconnaissance to assess affected areas, reduce uncertainty, and support early decision-making.', badge: 'Response' },
      { num: '02', title: 'Search and reconnaissance', text: 'Visual exploration of open or hard-to-reach areas to locate points of interest faster.', badge: 'Search' },
      { num: '03', title: 'Infrastructure inspection', text: 'Inspection of roads, roofs, utility poles, or structures without putting a person at risk first.', badge: 'Inspect' },
      { num: '04', title: 'Environmental monitoring and agriculture', text: 'Observation of terrain, crops, and natural areas using visual data or basic sensors.', badge: 'Monitor' },
    ],
  },
  proof: {
    tag: 'What makes it credible',
    title: 'The edge isn’t promising. It’s proving.',
    items: [
      { num: '01', text: 'Physical prototype built.' },
      { num: '02', text: 'Real-world field testing.' },
      { num: '03', text: 'Failures that can be documented.' },
      { num: '04', text: 'A technical path to VTOL.' },
    ],
  },
  roadmap: {
    tag: 'Roadmap',
    title: 'From idea to validated platform',
    steps: [
      { num: '01', title: 'NF-X1', text: 'Build, initial testing, failures, repairs, and documentation.' },
      { num: '02', title: 'Testbed-1', text: 'A third-party VTOL used as a testbed, with clear attribution and our own modifications.' },
      { num: '03', title: 'Modules', text: 'GPS, telemetry, camera, sensors, mission bay, and mission reports.' },
      { num: '04', title: 'NF-X2', text: 'A mature in-house platform shaped by data, real-world needs, and technical validation.' },
    ],
  },
  ethics: {
    tag: 'Honest engineering',
    title: 'Transparency, built into the design.',
    text: 'If NextWing uses a purchased platform as a testbed, we will say so clearly. We will never claim the full design of a third-party aircraft as our own. The innovation lies in integration, sensors, electronics, mission software, documentation, flight data, and adapting to real-world problems.',
  },
  contact: {
    tag: 'Build the next wing',
    title: 'NextWing Systems by Honoré Labs',
    text: 'An experimental UAV project in active development. Open to mentorship, technical collaboration, use-case validation, innovation events, and opportunities to grow.',
    cardLabel: 'Interim contact',
    email: 'honorevillanueva412@gmail.com',
  },
  footer: {
    text: '© 2026 Honoré Labs — NextWing Systems. Save time. Protect lives.',
  },
};

export default en;
