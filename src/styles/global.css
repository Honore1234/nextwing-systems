:root {
  --bg: #070808;
  --ink: #f7f2e8;
  --muted: #b7b0a3;
  --panel: #111315;
  --panel-2: #181c20;
  --line: rgba(247, 242, 232, 0.13);
  --orange: #ff5a1f;
  --orange-2: #ffb347;
  --cyan: #5ddcff;
  --green: #87ff9f;
  --paper: #f4efe2;
  --dark-text: #111315;
  --radius: 32px;
  --shadow: 0 24px 80px rgba(0,0,0,0.5);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 90, 31, 0.18), transparent 30rem),
    radial-gradient(circle at 90% 15%, rgba(93, 220, 255, 0.13), transparent 25rem),
    linear-gradient(180deg, #070808, #090b0d 40%, #070808);
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  mask-image: linear-gradient(to bottom, black, transparent 75%);
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .055;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  z-index: 100;
}

a { color: inherit; text-decoration: none; }

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px clamp(18px, 5vw, 78px);
  border-bottom: 1px solid var(--line);
  background: rgba(7, 8, 8, 0.74);
  backdrop-filter: blur(18px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.mark {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--orange), var(--orange-2));
  color: #120b06;
  font-weight: 950;
  letter-spacing: -0.08em;
}

.brand strong {
  display: block;
  font-size: 1rem;
  letter-spacing: -0.04em;
}

.brand small {
  display: block;
  color: var(--muted);
  font-size: .76rem;
}

.nav nav {
  display: flex;
  gap: 25px;
  color: var(--muted);
  font-weight: 700;
  font-size: .92rem;
}

.nav nav a:hover { color: var(--ink); }

.hero {
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 44px;
  padding: 82px clamp(18px, 5vw, 78px) 64px;
}

.tag {
  margin: 0 0 14px;
  color: var(--orange-2);
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: .74rem;
  font-weight: 950;
}

h1, h2, h3, p { margin-top: 0; }

h1 {
  max-width: 1050px;
  font-size: clamp(3.6rem, 9vw, 8.6rem);
  line-height: .84;
  letter-spacing: -.095em;
  margin-bottom: 30px;
}

h1 span {
  display: block;
  color: transparent;
  -webkit-text-stroke: 1.2px rgba(247,242,232,.88);
}

h2 {
  font-size: clamp(2.5rem, 6vw, 5.9rem);
  line-height: .9;
  letter-spacing: -.085em;
  margin-bottom: 22px;
}

h3 {
  font-size: 1.45rem;
  letter-spacing: -.04em;
  margin-bottom: 12px;
}

.lead {
  max-width: 760px;
  color: var(--muted);
  font-size: clamp(1.08rem, 1.8vw, 1.38rem);
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  font-weight: 900;
  border: 1px solid var(--line);
}

.btn.primary {
  color: #120b06;
  background: linear-gradient(135deg, var(--orange), var(--orange-2));
  box-shadow: 0 18px 40px rgba(255, 90, 31, .24);
}

.btn.secondary {
  background: rgba(255,255,255,.06);
}

.cockpit {
  position: relative;
  min-height: 560px;
  border: 1px solid var(--line);
  border-radius: 42px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.025)),
    var(--panel);
  box-shadow: var(--shadow);
  overflow: hidden;
  display: grid;
  place-items: center;
}

.cockpit::before {
  content: "";
  position: absolute;
  inset: 28px;
  border: 1px dashed rgba(255,255,255,.16);
  border-radius: 30px;
}

.radar {
  width: min(78vw, 380px);
  height: min(78vw, 380px);
  border: 1px solid rgba(93,220,255,.45);
  border-radius: 50%;
  position: relative;
  background:
    radial-gradient(circle, transparent 0 23%, rgba(93,220,255,.08) 23.4% 23.8%, transparent 24.2% 47%, rgba(93,220,255,.08) 47.4% 47.8%, transparent 48.2% 71%, rgba(93,220,255,.08) 71.4% 71.8%, transparent 72.2%),
    linear-gradient(90deg, transparent 49.8%, rgba(93,220,255,.28) 50%, transparent 50.2%),
    linear-gradient(0deg, transparent 49.8%, rgba(93,220,255,.28) 50%, transparent 50.2%);
  box-shadow: inset 0 0 70px rgba(93,220,255,.08), 0 0 60px rgba(93,220,255,.10);
}

.sweep {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 30deg, rgba(93,220,255,.55), transparent 52deg);
  animation: spin 5s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.dot {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 20px var(--green);
}

.d1 { left: 58%; top: 32%; }
.d2 { left: 31%; top: 62%; }
.d3 { left: 72%; top: 68%; }

.plane-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: var(--orange-2);
  font-size: 3rem;
  text-shadow: 0 0 30px rgba(255,179,71,.45);
}

.hud {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.hud div {
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(7,8,8,.58);
}

.hud span {
  display: block;
  color: var(--muted);
  font-size: .66rem;
  letter-spacing: .14em;
  font-weight: 900;
}

.hud strong {
  display: block;
  margin-top: 5px;
  font-size: .86rem;
}

.manifesto {
  padding: 92px clamp(18px, 5vw, 78px);
  background: var(--paper);
  color: var(--dark-text);
}

.manifesto p {
  color: var(--orange);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: .74rem;
}

.manifesto h2 {
  color: var(--dark-text);
}

.manifesto-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border: 1px solid #d8cfbf;
  margin-top: 36px;
}

.manifesto-grid span {
  padding: 24px;
  border-right: 1px solid #d8cfbf;
  font-weight: 900;
  color: #514b43;
}

.manifesto-grid span:last-child { border-right: 0; }

.origin, .missions, .roadmap, .ethics, .contact {
  padding: 104px clamp(18px, 5vw, 78px);
}

.section-head {
  max-width: 940px;
  margin-bottom: 44px;
}

.section-head p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.08rem;
}

.section-head.inverted p { color: #c9c3b7; }

.flight-card {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  min-height: 520px;
  border: 1px solid var(--line);
  border-radius: 42px;
  background: linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.025));
  overflow: hidden;
  box-shadow: var(--shadow);
}

.aircraft-sketch {
  position: relative;
  background:
    radial-gradient(circle at center, rgba(255,90,31,.15), transparent 250px),
    #101215;
  display: grid;
  place-items: center;
}

.aircraft-sketch > * { position: absolute; }

.body {
  width: 45px;
  height: 270px;
  background: var(--ink);
  border-radius: 60% 60% 34% 34%;
}

.main-wing {
  width: 390px;
  height: 110px;
  background: var(--ink);
  clip-path: polygon(0 72%, 50% 12%, 100% 72%, 96% 100%, 50% 72%, 4% 100%);
}

.tail-wing {
  width: 155px;
  height: 52px;
  background: var(--orange);
  top: calc(50% + 92px);
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}

.nose {
  width: 28px;
  height: 60px;
  background: var(--orange-2);
  top: calc(50% - 165px);
  border-radius: 80% 80% 20% 20%;
}

.prop {
  width: 145px;
  height: 14px;
  background: var(--cyan);
  top: calc(50% - 178px);
  border-radius: 999px;
  box-shadow: 0 0 40px rgba(93,220,255,.55);
  animation: prop 1.8s linear infinite;
}

@keyframes prop {
  50% { transform: rotate(180deg) scaleX(.65); opacity: .65; }
  100% { transform: rotate(360deg); }
}

.flight-data {
  padding: 42px;
  background: var(--panel);
}

.flight-data ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 16px;
}

.flight-data li {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255,255,255,.04);
  color: var(--muted);
  line-height: 1.6;
}

.flight-data strong { color: var(--ink); }

.system {
  padding: 104px clamp(18px, 5vw, 78px);
  background: var(--paper);
  color: var(--dark-text);
}

.system .tag { color: var(--orange); }

.system-map {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #d8cfbf;
  border: 1px solid #d8cfbf;
}

.system-map article {
  background: var(--paper);
  padding: 28px;
  min-height: 280px;
}

.system-map span {
  display: inline-block;
  margin-bottom: 68px;
  color: var(--orange);
  font-weight: 950;
}

.system-map p {
  color: #625b52;
  line-height: 1.65;
}

.testbed-banner {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 30px;
  margin-top: 24px;
  padding: 34px;
  border-radius: 32px;
  background: #111315;
  color: var(--ink);
}

.testbed-banner p:last-child {
  color: #c9c3b7;
  line-height: 1.65;
  margin: 0;
}

.mission-stack {
  display: grid;
  gap: 16px;
}

.mission {
  display: grid;
  grid-template-columns: 90px 1fr 140px;
  align-items: center;
  gap: 24px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 30px;
  background: rgba(255,255,255,.045);
}

.mission-number {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255,90,31,.12);
  color: var(--orange-2);
  border: 1px solid rgba(255,90,31,.22);
  font-weight: 950;
}

.mission p {
  color: var(--muted);
  line-height: 1.65;
  margin: 0;
}

.mission > span {
  justify-self: end;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(93,220,255,.10);
  color: var(--cyan);
  border: 1px solid rgba(93,220,255,.18);
  font-weight: 900;
  font-size: .82rem;
}

.proof {
  padding: 104px clamp(18px, 5vw, 78px);
  background: var(--orange);
  color: #170b05;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 42px;
  align-items: center;
}

.proof .tag { color: #42190b; }

.proof-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(23,11,5,.25);
  border: 1px solid rgba(23,11,5,.25);
}

.proof-grid div {
  background: rgba(255,255,255,.18);
  padding: 30px;
  min-height: 170px;
}

.proof-grid strong {
  font-size: 3.5rem;
  letter-spacing: -.08em;
}

.proof-grid p {
  font-weight: 850;
  line-height: 1.4;
}

.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.timeline .line {
  position: absolute;
  top: 52px;
  left: 8%;
  right: 8%;
  height: 1px;
  background: linear-gradient(90deg, var(--orange), var(--cyan));
  opacity: .75;
}

.timeline article {
  position: relative;
  min-height: 310px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255,255,255,.045);
}

.timeline article span {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--orange);
  color: #170b05;
  font-weight: 950;
  margin-bottom: 72px;
  position: relative;
  z-index: 2;
}

.timeline p {
  color: var(--muted);
  line-height: 1.65;
}

.ethics {
  background: var(--paper);
  color: var(--dark-text);
}

.ethics .tag { color: var(--orange); }

.ethics p:last-child {
  max-width: 980px;
  color: #625b52;
  font-size: 1.2rem;
  line-height: 1.75;
}

.contact {
  text-align: center;
}

.contact p {
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  color: var(--muted);
  line-height: 1.7;
}

.contact-card {
  margin: 34px auto 0;
  max-width: 560px;
  border: 1px solid var(--line);
  border-radius: 30px;
  background: rgba(255,255,255,.05);
  padding: 28px;
}

.contact-card span,
.contact-card small {
  display: block;
  color: var(--muted);
}

.contact-card a {
  display: block;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  letter-spacing: -.06em;
  color: var(--orange-2);
  font-weight: 950;
  margin: 10px 0;
  word-break: break-word;
}

footer {
  padding: 30px clamp(18px, 5vw, 78px);
  border-top: 1px solid var(--line);
  color: var(--muted);
  text-align: center;
}

@media (max-width: 1050px) {
  .hero,
  .flight-card,
  .proof,
  .testbed-banner {
    grid-template-columns: 1fr;
  }

  .system-map,
  .timeline,
  .manifesto-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hud {
    grid-template-columns: repeat(2, 1fr);
  }

  .manifesto-grid span:nth-child(even) { border-right: 0; }
}

@media (max-width: 720px) {
  .nav {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }

  .nav nav {
    flex-wrap: wrap;
    gap: 14px;
  }

  h1 {
    font-size: clamp(3.2rem, 18vw, 5rem);
  }

  .cockpit {
    min-height: 420px;
  }

  .hud,
  .system-map,
  .timeline,
  .manifesto-grid,
  .proof-grid {
    grid-template-columns: 1fr;
  }

  .mission {
    grid-template-columns: 1fr;
  }

  .mission > span {
    justify-self: start;
  }

  .timeline .line {
    display: none;
  }

  .manifesto-grid span {
    border-right: 0;
    border-bottom: 1px solid #d8cfbf;
  }

  .manifesto-grid span:last-child {
    border-bottom: 0;
  }
}
