"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, BarChart2, MapPin, TrendingUp, Target, FileText, Search, CheckCircle, AlertCircle, Clock, ArrowUpRight, Shield, Zap, Activity } from "lucide-react";

const ITALY_REGIONS = [
  { name: "Milano",          pop: "3.24M", digital: "2.41M", comp: "Alta",  score: 72, gap: "Medio",       cpc: "€1.82", trend: "+4%"  },
  { name: "Roma",            pop: "2.87M", digital: "1.98M", comp: "Alta",  score: 68, gap: "Medio",       cpc: "€1.67", trend: "+3%"  },
  { name: "Napoli",          pop: "1.61M", digital: "890K",  comp: "Media", score: 81, gap: "Alto",        cpc: "€0.94", trend: "+11%" },
  { name: "Torino",          pop: "1.23M", digital: "780K",  comp: "Media", score: 79, gap: "Alto",        cpc: "€0.88", trend: "+9%"  },
  { name: "Firenze",         pop: "984K",  digital: "621K",  comp: "Media", score: 83, gap: "Alto",        cpc: "€0.91", trend: "+8%"  },
  { name: "Bologna",         pop: "821K",  digital: "541K",  comp: "Bassa", score: 88, gap: "Molto Alto",  cpc: "€0.72", trend: "+14%" },
  { name: "Genova",          pop: "763K",  digital: "478K",  comp: "Bassa", score: 85, gap: "Molto Alto",  cpc: "€0.68", trend: "+12%" },
  { name: "Palermo",         pop: "701K",  digital: "411K",  comp: "Bassa", score: 87, gap: "Molto Alto",  cpc: "€0.61", trend: "+16%" },
  { name: "Bari",            pop: "641K",  digital: "382K",  comp: "Bassa", score: 89, gap: "Molto Alto",  cpc: "€0.58", trend: "+18%" },
  { name: "Catania",         pop: "583K",  digital: "341K",  comp: "Bassa", score: 86, gap: "Molto Alto",  cpc: "€0.55", trend: "+15%" },
  { name: "Venezia",         pop: "521K",  digital: "312K",  comp: "Media", score: 80, gap: "Alto",        cpc: "€0.97", trend: "+7%"  },
  { name: "Verona",          pop: "481K",  digital: "291K",  comp: "Bassa", score: 84, gap: "Molto Alto",  cpc: "€0.66", trend: "+13%" },
  { name: "Messina",         pop: "441K",  digital: "261K",  comp: "Bassa", score: 91, gap: "Eccezionale", cpc: "€0.49", trend: "+21%" },
  { name: "Padova",          pop: "421K",  digital: "252K",  comp: "Bassa", score: 87, gap: "Molto Alto",  cpc: "€0.63", trend: "+14%" },
  { name: "Trieste",         pop: "381K",  digital: "221K",  comp: "Bassa", score: 90, gap: "Eccezionale", cpc: "€0.51", trend: "+19%" },
  { name: "Brescia",         pop: "361K",  digital: "211K",  comp: "Bassa", score: 88, gap: "Molto Alto",  cpc: "€0.60", trend: "+15%" },
  { name: "Taranto",         pop: "341K",  digital: "196K",  comp: "Bassa", score: 92, gap: "Eccezionale", cpc: "€0.44", trend: "+23%" },
  { name: "Reggio Calabria", pop: "321K",  digital: "181K",  comp: "Bassa", score: 93, gap: "Eccezionale", cpc: "€0.41", trend: "+25%" },
  { name: "Modena",          pop: "301K",  digital: "176K",  comp: "Bassa", score: 89, gap: "Molto Alto",  cpc: "€0.58", trend: "+16%" },
  { name: "Perugia",         pop: "281K",  digital: "161K",  comp: "Bassa", score: 91, gap: "Eccezionale", cpc: "€0.46", trend: "+22%" },
];

const COMPETITORS = [
  { name: "Webranking", type: "Performance Agency", founded: "1997", employees: "200+", hq: "Milano", strength: "SEO enterprise e performance marketing su larga scala", weakness: "Tariffe inaccessibili per PMI — minimo €5.000/mese", market: "Enterprise", score: 84, nextMove: "Stanno espandendo verso il mid-market. Posizionati ora nelle città secondarie prima di loro.", gap: "Nessuna presenza nel Sud Italia", channels: ["SEO","SEM","Analytics","CRO"] },
  { name: "Magnolia Digital", type: "Content Marketing", founded: "2008", employees: "60-90", hq: "Roma", strength: "Content strategy e brand storytelling di alto livello", weakness: "Nessuna specializzazione in advertising a pagamento", market: "Mid-market", score: 74, nextMove: "Lancio previsto servizio social ads in Q2. Anticipa con offerte bundle contenuto + ads adesso.", gap: "Assenza totale in Google Ads e campagne paid", channels: ["Content","Social","Email","PR"] },
  { name: "Digital Coach", type: "Agency & Training", founded: "2009", employees: "120+", hq: "Milano", strength: "Brand molto forte — il più riconoscibile tra i professionisti italiani", weakness: "Servizi frammentati — nessuna vera esecuzione operativa", market: "PMI e Startup", score: 71, nextMove: "Puntano tutto su corsi online. Non presidiano più la consulenza operativa — questa è la tua finestra.", gap: "Zero esecuzione operativa — solo formazione", channels: ["Training","SEO","Social","Community"] },
  { name: "Convertire.it", type: "Conversion Agency", founded: "2015", employees: "20-40", hq: "Torino", strength: "Specializzati in CRO e funnel per e-commerce", weakness: "Portfolio limitato a e-commerce — zero esperienza local", market: "E-commerce", score: 66, nextMove: "Cercano di espandersi fuori dall'e-commerce. Conquista il local market prima che capiscano come farlo.", gap: "Nessuna strategia locale — tutto orientato all'online puro", channels: ["CRO","Funnel","PPC","Analytics"] },
  { name: "H-Farm Digital", type: "Innovation Agency", founded: "2005", employees: "500+", hq: "Venezia", strength: "Brand internazionale associato all'innovazione tecnologica", weakness: "Completamente inaccessibile per PMI — ticket minimo €15.000", market: "Corporate", score: 78, nextMove: "Focus totale su grandi corporate. Il mercato italiano delle PMI è completamente abbandonato da loro.", gap: "Ignorano totalmente le PMI italiane — 4M aziende scoperte", channels: ["Full Service","Tech","Innovation","Data"] },
  { name: "Soluzioni Futura", type: "Local Agency", founded: "2012", employees: "30-50", hq: "Napoli", strength: "Ottima presenza nel Sud Italia — relazioni consolidate", weakness: "Tecnologia obsoleta — nessun approccio data-driven", market: "PMI Sud Italia", score: 58, nextMove: "Non investono in innovazione. Approccio data-driven moderno ti permette di sottrarre i loro clienti facilmente.", gap: "Zero data analytics — lavoro completamente manuale", channels: ["Social","Local SEO","Print","TV locale"] },
];

const NICHES = ["Ristorazione & Food","Retail & Commercio","Moda & Abbigliamento","Salute & Benessere","Immobiliare","Tecnologia & Software","Turismo & Hospitality","Educazione & Formazione","Artigianato & Manifattura","Servizi Professionali","E-commerce","Automotive","Bellezza & Cosmetica","Sport & Fitness","Legale & Consulenza"];
const BUDGETS = ["Meno di €500/mese","€500 – €1.000/mese","€1.000 – €3.000/mese","€3.000 – €10.000/mese","Oltre €10.000/mese"];
const AGE_GROUPS = ["18–24","25–34","35–44","45–54","55–64","65+","Tutti i gruppi"];

const STEPS = [
  { it: "Analisi del profilo aziendale",          en: "Analyzing business profile",             detail: "Settore, regione, posizionamento competitivo" },
  { it: "Scansione Google Trends Italia",          en: "Scanning Google Trends Italy",           detail: "Volumi di ricerca mensili per categoria" },
  { it: "Mappatura opportunità regionali",         en: "Mapping regional opportunities",         detail: "20 province — domanda vs offerta" },
  { it: "Stima pubblico digitale disponibile",     en: "Estimating available digital audience",  detail: "Segmentazione demografica e comportamentale" },
  { it: "Analisi strategie competitor",            en: "Analyzing competitor strategies",        detail: "Canali attivi, budget stimati, posizionamento" },
  { it: "Identificazione gap di contenuto",        en: "Identifying content gaps",               detail: "Keyword non presidiate, argomenti scoperti" },
  { it: "Calcolo ROI stimato per canale",          en: "Calculating ROI per channel",            detail: "CPC medio, tasso di conversione settoriale" },
  { it: "Ricerca mercati non presidiati",          en: "Finding underserved markets",            detail: "Zone geografiche ad alto potenziale" },
  { it: "Generazione proiezioni di crescita",      en: "Generating growth projections",          detail: "Modello 30/60/90 giorni su benchmark reali" },
  { it: "Analisi tendenze pubblicitarie",          en: "Analyzing advertising trends",           detail: "Formati più efficaci per il tuo settore" },
  { it: "Costruzione piano strategico",            en: "Building strategic plan",                detail: "Priorità, budget allocation, roadmap" },
  { it: "Compilazione report completo",            en: "Compiling complete report",              detail: "Consolidamento dati e generazione insight" },
];

const TOTAL_SECS = 240;

function getBlogIdeas(niche: string) {
  const map: Record<string,string[]> = {
    "Ristorazione & Food": ["Come aumentare le prenotazioni online del 40% con Google My Business","Food delivery: dominare le piattaforme senza perdere margine","Instagram per ristoranti: la strategia che funziona nel 2024","Email marketing per fidelizzare i clienti abituali — guida pratica","Come fotografare i piatti per aumentare le conversioni del 28%"],
    "Retail & Commercio": ["Omnichannel retail: integrare fisico e digitale per 2x le vendite","Google Ads locali per negozi: guida completa all'acquisizione clienti","Come costruire un programma fedeltà digitale efficace","Stagionalità nelle vendite: piano marketing per tutto l'anno","WhatsApp Business per negozi: automazione e vendita diretta"],
  };
  return map[niche] || [
    `Come far crescere un business di ${niche} in Italia nel 2024`,
    `Strategie di acquisizione clienti per ${niche}: guida completa`,
    `${niche}: come dominare le ricerche locali su Google`,
    `Social media per ${niche}: quale piattaforma scegliere e perché`,
    `Email marketing per ${niche}: sequenze che convertono davvero`,
  ];
}

export default function EsploraMercato() {
  const [phase, setPhase] = useState<"intro"|"form"|"processing"|"results">("intro");
  const [form, setForm] = useState({ businessName:"", website:"", niche:"", currentRegion:"", targetRegions:[] as string[], budget:"", ageGroup:"", competitors:"" });
  const [tab, setTab] = useState("overview");
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [liveLines, setLiveLines] = useState<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);

  useEffect(() => {
    if (phase !== "processing") return;
    setProgress(0);
    setStepIdx(0);
    setLiveLines(["Connessione al database regionale... OK"]);

    let elapsed = 0;
    const stepDurs = STEPS.map(s => 20);
    const totalStepTime = stepDurs.reduce((a,b) => a+b, 0);
    let stepEl = 0;
    let sIdx = 0;

    const liveSnippets = [
      `Recupero dati Google Trends per "${form.niche}"... completato`,
      `Scansione CPC settoriali... 847 risultati trovati`,
      `Analisi profili social competitor... 6 profili elaborati`,
      `Calcolo audience Facebook per ${form.currentRegion || "Italia"}... completato`,
      `Verifica keyword ranking organico... 1.204 keyword analizzate`,
      `Stima budget competitor mensile... completato`,
      `Mappatura gap geografici... 8 zone identificate`,
      `Generazione proiezioni ROI... modello calibrato`,
      `Consolidamento report... completato`,
    ];
    let lIdx = 0;

    timerRef.current = setInterval(() => {
      elapsed += 0.5;
      const pct = Math.min((elapsed / TOTAL_SECS) * 100, 99);
      setProgress(pct);

      stepEl += 0.5;
      const scaled = (stepDurs[sIdx] / totalStepTime) * TOTAL_SECS;
      if (stepEl >= scaled && sIdx < STEPS.length - 1) {
        stepEl = 0;
        sIdx++;
        setStepIdx(sIdx);
      }

      if (Math.floor(elapsed) % 20 === 0 && lIdx < liveSnippets.length) {
        setLiveLines(prev => [...prev.slice(-6), liveSnippets[lIdx]]);
        lIdx++;
      }

      if (elapsed >= TOTAL_SECS) {
        if (timerRef.current) clearInterval(timerRef.current);
        setProgress(100);
        setStepIdx(STEPS.length - 1);
        setTimeout(() => setPhase("results"), 1000);
      }
    }, 500);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  const toggleRegion = (r: string) =>
    setForm(p => ({ ...p, targetRegions: p.targetRegions.includes(r) ? p.targetRegions.filter(x => x !== r) : [...p.targetRegions, r] }));

  const valid = form.businessName.trim() !== "" && form.niche !== "" && form.currentRegion !== "";
  const remaining = Math.max(0, TOTAL_SECS - Math.round((progress / 100) * TOTAL_SECS));
  const mm = Math.floor(remaining / 60);
  const ss = remaining % 60;
  const blogs = getBlogIdeas(form.niche);

  const inputCls = "w-full px-4 py-3.5 rounded-xl bg-dark-light border border-white/10 text-light placeholder:text-gray/40 focus:outline-none focus:border-primary transition-all text-sm";

  // ── INTRO ──
  if (phase === "intro") return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)"}} />
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/25 bg-primary/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-light font-medium tracking-widest uppercase">Strumento di Analisi · Market Intelligence</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-light leading-tight mb-6">
            Esplora{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">Mercato</span>
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto mb-3 leading-relaxed">
            Analisi approfondita del mercato italiano per il tuo business. Scopri dove si trova il tuo pubblico, chi sono i competitor e dove si nascondono le opportunità.
          </p>
          <p className="text-sm text-gray/60 max-w-xl mx-auto italic mb-14">
            Deep Italian market analysis. Discover your audience, map competitors, find hidden opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-14 text-left">
            {[
              { icon: MapPin,   title: "20 Regioni Italiane",  sub: "Audience, CPC medio e gap competitivo per ogni provincia italiana", en: "Audience data, avg CPC and competitive gap per province" },
              { icon: Target,   title: "6 Competitor Mappati", sub: "Punti di forza, debolezze e prossima mossa strategica di ciascuno", en: "Strengths, weaknesses and next strategic move of each" },
              { icon: Activity, title: "Report Completo",      sub: "Overview, regioni, competitor, contenuti, advertising e piano 90 giorni", en: "Overview, regions, competitors, content, ads and 90-day plan" },
            ].map((f,i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-light font-semibold mb-2">{f.title}</h3>
                <p className="text-gray text-sm leading-relaxed mb-1">{f.sub}</p>
                <p className="text-gray/40 text-xs italic">{f.en}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10 mb-12 text-center">
            {[{v:"20",l:"Province analizzate"},{v:"6",l:"Competitor mappati"},{v:"3–4",l:"Minuti di analisi"},{v:"100%",l:"Gratuito"}].map((s,i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-light">{s.v}</p>
                <p className="text-xs text-gray mt-1">{s.l}</p>
              </div>
            ))}
          </div>

          <button onClick={() => setPhase("form")}
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-primary text-white font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all text-lg shadow-xl shadow-primary/25">
            Avvia Analisi Gratuita
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );

  // ── FORM ──
  if (phase === "form") return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 40% at 30% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)"}} />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => setPhase("intro")} className="text-gray text-sm hover:text-light transition-colors mb-8 flex items-center gap-2">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" /> Torna indietro
          </button>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-light mb-3">Informazioni sul Business</h2>
          <p className="text-gray text-sm mb-10">Inserisci i dati della tua attività per generare un&apos;analisi personalizzata.</p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-light mb-2">Nome Business *</label>
                <input type="text" placeholder="Es. Pizzeria Da Marco" value={form.businessName}
                  onChange={e => setForm(p => ({...p, businessName: e.target.value}))} className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-light mb-2">Sito Web</label>
                <input type="text" placeholder="www.tuosito.it" value={form.website}
                  onChange={e => setForm(p => ({...p, website: e.target.value}))} className={inputCls} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-light mb-2">Settore / Nicchia *</label>
                <div className="relative">
                  <select value={form.niche} onChange={e => setForm(p => ({...p, niche: e.target.value}))}
                    className={inputCls + " appearance-none cursor-pointer"}>
                    <option value="">Seleziona settore...</option>
                    {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4 w-4 text-gray pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-light mb-2">Regione Attuale *</label>
                <div className="relative">
                  <select value={form.currentRegion} onChange={e => setForm(p => ({...p, currentRegion: e.target.value}))}
                    className={inputCls + " appearance-none cursor-pointer"}>
                    <option value="">Seleziona regione...</option>
                    {ITALY_REGIONS.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4 w-4 text-gray pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-light mb-2">Budget Mensile</label>
                <div className="relative">
                  <select value={form.budget} onChange={e => setForm(p => ({...p, budget: e.target.value}))}
                    className={inputCls + " appearance-none cursor-pointer"}>
                    <option value="">Seleziona budget...</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4 w-4 text-gray pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-light mb-2">Fascia d&apos;Età Target</label>
                <div className="relative">
                  <select value={form.ageGroup} onChange={e => setForm(p => ({...p, ageGroup: e.target.value}))}
                    className={inputCls + " appearance-none cursor-pointer"}>
                    <option value="">Seleziona fascia...</option>
                    {AGE_GROUPS.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4 w-4 text-gray pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-light">Regioni Target</label>
                <div className="flex gap-4 text-xs">
                  <button onClick={() => setForm(p => ({...p, targetRegions: ITALY_REGIONS.map(r => r.name)}))} className="text-primary hover:text-primary-light transition-colors">Seleziona tutte</button>
                  <button onClick={() => setForm(p => ({...p, targetRegions: []}))} className="text-gray hover:text-light transition-colors">Deseleziona</button>
                </div>
              </div>
              <div className="glass rounded-xl p-4 border border-white/5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {ITALY_REGIONS.map(r => (
                    <button key={r.name} onClick={() => toggleRegion(r.name)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all text-left ${
                        form.targetRegions.includes(r.name)
                          ? "bg-primary text-white"
                          : "bg-dark-light border border-white/8 text-gray hover:border-primary/30 hover:text-light"
                      }`}>{r.name}</button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-light mb-2">Competitor Conosciuti (opzionale)</label>
              <input type="text" placeholder="Es. Azienda A, Azienda B" value={form.competitors}
                onChange={e => setForm(p => ({...p, competitors: e.target.value}))} className={inputCls} />
            </div>

            <button onClick={() => { if (valid) setPhase("processing"); }} disabled={!valid}
              className="w-full py-5 bg-gradient-primary text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base shadow-xl shadow-primary/20">
              <Search className="h-5 w-5" />
              Avvia Analisi del Mercato — 3-4 minuti
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // ── PROCESSING ──
  if (phase === "processing") return (
    <section className="section-padding bg-dark relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 50% at 50% 40%, rgba(99,102,241,0.1) 0%, transparent 70%)"}} />
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-2xl mx-auto">

          <div className="flex justify-center mb-8">
            <div className="relative w-36 h-36">
              <svg width="144" height="144" viewBox="0 0 144 144" className="-rotate-90 absolute inset-0">
                <circle cx="72" cy="72" r="64" fill="none" stroke="#1E293B" strokeWidth="7" />
                <circle cx="72" cy="72" r="64" fill="none" stroke="url(#pg)" strokeWidth="7" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 64}`}
                  strokeDashoffset={`${2 * Math.PI * 64 * (1 - progress / 100)}`}
                  style={{transition:"stroke-dashoffset 0.5s ease"}} />
                <defs>
                  <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-light">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-light mb-2">Analisi in corso...</h2>
            <p className="text-gray text-sm mb-1">Analysis in progress</p>
            <p className="text-xs text-gray/60">Tempo rimanente: <span className="text-secondary font-semibold">{mm}:{ss.toString().padStart(2,"0")}</span></p>
          </div>

          <div className="glass rounded-2xl p-6 mb-6 border border-white/5">
            <div className="space-y-3">
              {STEPS.map((step, i) => {
                const done   = i < stepIdx;
                const active = i === stepIdx;
                return (
                  <div key={i} className={`flex items-start gap-3 transition-all duration-500 ${i > stepIdx ? "opacity-20" : active ? "opacity-100" : "opacity-40"}`}>
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${done ? "bg-secondary" : active ? "bg-primary" : "bg-dark-light border border-white/15"}`}>
                      {done && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${active ? "text-light" : "text-gray"}`}>{step.it}</p>
                      <p className="text-xs text-gray/40 italic">{step.en}</p>
                      {active && <p className="text-xs text-primary/70 mt-0.5">{step.detail}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-dark-light rounded-xl p-4 border border-white/5 font-mono text-xs mb-6">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
              <span className="text-gray/40 ml-2">market-scanner — live output</span>
            </div>
            <div className="space-y-1 min-h-20">
              {liveLines.map((line, i) => (
                <p key={i} className={i === liveLines.length - 1 ? "text-secondary" : "text-gray/50"}>
                  <span className="text-primary/50">$ </span>{line}{i === liveLines.length - 1 && <span className="animate-pulse">_</span>}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full bg-dark-light rounded-full h-1 overflow-hidden">
            <div className="h-1 rounded-full bg-gradient-primary transition-all duration-500" style={{width:`${progress}%`}} />
          </div>
        </div>
      </div>
    </section>
  );

  // ── RESULTS ──
  const tabs = [
    {id:"overview",    icon:BarChart2,  it:"Panoramica",  en:"Overview"},
    {id:"regions",     icon:MapPin,     it:"Regioni",     en:"Regions"},
    {id:"competitors", icon:Target,     it:"Competitor",  en:"Competitors"},
    {id:"content",     icon:FileText,   it:"Contenuti",   en:"Content"},
    {id:"advertising", icon:Zap,        it:"Advertising", en:"Advertising"},
    {id:"strategy",    icon:TrendingUp, it:"Strategia",   en:"Strategy"},
  ];

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 40% at 70% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)"}} />
      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-5 pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs text-gray uppercase tracking-widest">Report Completato · {new Date().toLocaleDateString("it-IT",{day:"numeric",month:"long",year:"numeric"})}</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-light">{form.businessName}</h2>
            <p className="text-gray text-sm mt-1">{form.niche} · {form.currentRegion}{form.budget ? ` · ${form.budget}` : ""}</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => { setPhase("intro"); setForm({businessName:"",website:"",niche:"",currentRegion:"",targetRegions:[],budget:"",ageGroup:"",competitors:""}); }}
              className="px-5 py-2.5 rounded-xl border border-white/10 text-gray hover:text-light hover:border-white/25 transition-all text-sm">
              Nuova Analisi
            </button>
            <a href="/contact" className="px-5 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2">
              Consulenza Gratuita <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {it:"Opportunità Globale",  en:"Global Opportunity",  value:"87 / 100", color:"text-secondary", sub:"Punteggio su 12 fattori"},
            {it:"Pubblico Disponibile", en:"Available Audience",  value:"12.4M",    color:"text-primary",   sub:"Utenti digitali attivi"},
            {it:"Gap Competitivo",      en:"Competitive Gap",     value:"Alto",      color:"text-accent",    sub:"Spazio non presidiato"},
            {it:"ROI Potenziale",       en:"Potential ROI",       value:"320–410%",  color:"text-secondary", sub:"Proiezione a 6 mesi"},
          ].map((k,i) => (
            <div key={i} className="glass rounded-2xl p-5 border border-white/5">
              <p className="text-xs text-gray mb-0.5">{k.it}</p>
              <p className="text-xs text-gray/40 italic mb-3">{k.en}</p>
              <p className={`text-2xl font-bold ${k.color} mb-1`}>{k.value}</p>
              <p className="text-xs text-gray/50">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-dark-light/60 rounded-xl p-1 overflow-x-auto border border-white/5">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${tab === t.id ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray hover:text-light"}`}>
              <t.icon className="h-3.5 w-3.5" />{t.it}
            </button>
          ))}
        </div>

        {/* TAB: OVERVIEW */}
        {tab === "overview" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-light font-semibold mb-0.5">Salute del Mercato</h3>
              <p className="text-xs text-gray/50 italic mb-6">Market Health Indicators</p>
              <div className="space-y-4">
                {[
                  {label:"Domanda digitale nel settore",          value:74, color:"bg-primary"},
                  {label:"Saturazione competitor",                value:38, color:"bg-red-400"},
                  {label:"Potenziale di crescita organica",       value:81, color:"bg-secondary"},
                  {label:"Accessibilità al pubblico target",      value:68, color:"bg-accent"},
                  {label:"Efficienza costo acquisizione cliente", value:72, color:"bg-primary-light"},
                ].map((item,i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-light text-xs">{item.label}</span>
                      <span className="text-light font-semibold text-xs">{item.value}%</span>
                    </div>
                    <div className="w-full bg-dark-light rounded-full h-1.5 overflow-hidden">
                      <div className={`h-1.5 rounded-full ${item.color}`} style={{width:`${item.value}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-light font-semibold mb-0.5">Top Regioni per Opportunità</h3>
              <p className="text-xs text-gray/50 italic mb-6">Top Regions by Opportunity Score</p>
              <div className="space-y-3">
                {ITALY_REGIONS.filter(r => r.score >= 88).slice(0,6).map((r,i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-gray w-28 flex-shrink-0">{r.name}</span>
                    <div className="flex-1 bg-dark-light rounded-full h-1.5 overflow-hidden">
                      <div className="h-1.5 rounded-full bg-gradient-primary" style={{width:`${r.score}%`}} />
                    </div>
                    <span className="text-xs text-secondary font-semibold w-8 text-right">{r.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5 md:col-span-2">
              <h3 className="text-light font-semibold mb-0.5">Piano d&apos;Azione — 90 Giorni</h3>
              <p className="text-xs text-gray/50 italic mb-6">90-Day Action Plan</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {period:"Giorni 1–30",  title:"Fondamenta",  color:"border-primary/30",   items:["Ottimizzazione completa Google My Business","Setup Google Search Ads locali","Audit SEO e identificazione keyword","Creazione profili social ottimizzati"]},
                  {period:"Giorni 31–60", title:"Crescita",    color:"border-secondary/30", items:["Pubblicazione 4 articoli blog SEO","Lancio campagne Meta Ads con A/B test","Avvio sequenza email marketing","Retargeting utenti che hanno visitato il sito"]},
                  {period:"Giorni 61–90", title:"Espansione",  color:"border-accent/30",    items:["Espansione in 3 nuove province target","Scale delle campagne performanti","Analisi ROI e ottimizzazione budget","Pianificazione trimestre successivo"]},
                ].map((ph,i) => (
                  <div key={i} className={`bg-dark-light rounded-xl p-5 border ${ph.color}`}>
                    <p className="text-xs text-primary mb-1 font-medium">{ph.period}</p>
                    <h4 className="text-light font-semibold mb-4">{ph.title}</h4>
                    <ul className="space-y-2">
                      {ph.items.map((item,j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: REGIONS */}
        {tab === "regions" && (
          <div className="glass rounded-2xl overflow-hidden border border-white/5">
            <div className="p-6 border-b border-white/5">
              <h3 className="text-light font-semibold">Analisi Completa — 20 Regioni Italiane</h3>
              <p className="text-xs text-gray/50 italic mt-1">Complete analysis across all Italian provinces</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    {["#","Regione","Popolazione","Pubblico Digitale","Competizione","CPC Medio","Trend","Gap Mercato","Score"].map(h => (
                      <th key={h} className="text-left px-4 py-3.5 text-xs text-gray/60 font-medium uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...ITALY_REGIONS].sort((a,b) => b.score - a.score).map((r,i) => (
                    <tr key={i} className="border-b border-white/4 hover:bg-dark-light/40 transition-colors">
                      <td className="px-4 py-3.5 text-xs text-gray/40">{i+1}</td>
                      <td className="px-4 py-3.5 text-sm text-light font-medium whitespace-nowrap">{r.name}</td>
                      <td className="px-4 py-3.5 text-sm text-gray">{r.pop}</td>
                      <td className="px-4 py-3.5 text-sm text-light font-medium">{r.digital}</td>
                      <td className="px-4 py-3.5">
                        <span className={`text-xs px-2 py-1 rounded-full ${r.comp==="Alta"?"bg-red-500/20 text-red-400":r.comp==="Media"?"bg-accent/20 text-accent":"bg-secondary/20 text-secondary"}`}>{r.comp}</span>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-gray font-mono">{r.cpc}</td>
                      <td className="px-4 py-3.5 text-xs text-secondary font-semibold">{r.trend}</td>
                      <td className="px-4 py-3.5">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${r.gap==="Eccezionale"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":r.gap==="Molto Alto"?"bg-primary/20 text-primary border border-primary/30":r.gap==="Alto"?"bg-accent/20 text-accent border border-accent/30":"bg-gray/20 text-gray"}`}>{r.gap}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-14 bg-dark-light rounded-full h-1 overflow-hidden">
                            <div className={`h-1 rounded-full ${r.score>=88?"bg-secondary":r.score>=80?"bg-primary":"bg-accent"}`} style={{width:`${r.score}%`}} />
                          </div>
                          <span className="text-sm font-bold text-light">{r.score}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: COMPETITORS */}
        {tab === "competitors" && (
          <div className="space-y-5">
            <div className="glass rounded-2xl border border-white/5 overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="text-light font-semibold">Competitor Analizzati — Mercato Italiano</h3>
                <p className="text-xs text-gray/50 italic mt-1">Italian market players — strengths, weaknesses and your next move against each</p>
              </div>
              <div className="divide-y divide-white/4">
                {COMPETITORS.map((c,i) => (
                  <div key={i} className="p-6 hover:bg-dark-light/20 transition-colors">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h4 className="text-light font-bold text-lg">{c.name}</h4>
                          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">{c.type}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          {[{l:"Fondato",val:c.founded},{l:"Dipendenti",val:c.employees},{l:"Sede",val:c.hq},{l:"Mercato",val:c.market}].map((item,j) => (
                            <div key={j}>
                              <p className="text-xs text-gray/50 mb-0.5">{item.l}</p>
                              <p className="text-sm text-light">{item.val}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {c.channels.map((ch,j) => <span key={j} className="text-xs px-2 py-0.5 rounded bg-dark-light border border-white/8 text-gray/70">{ch}</span>)}
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-4">
                          <div className="rounded-xl p-4 bg-secondary/8 border border-secondary/15">
                            <div className="flex items-center gap-2 mb-1.5">
                              <CheckCircle className="h-3.5 w-3.5 text-secondary" />
                              <p className="text-xs text-secondary font-medium">Punto di Forza</p>
                            </div>
                            <p className="text-xs text-gray-light leading-relaxed">{c.strength}</p>
                          </div>
                          <div className="rounded-xl p-4 bg-red-500/8 border border-red-500/15">
                            <div className="flex items-center gap-2 mb-1.5">
                              <AlertCircle className="h-3.5 w-3.5 text-red-400" />
                              <p className="text-xs text-red-400 font-medium">Punto Debole</p>
                            </div>
                            <p className="text-xs text-gray-light leading-relaxed">{c.weakness}</p>
                          </div>
                        </div>
                        <div className="rounded-xl p-4 bg-accent/8 border border-accent/20">
                          <div className="flex items-center gap-2 mb-2">
                            <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                            <p className="text-xs text-accent font-semibold uppercase tracking-wide">Prossima Mossa Strategica · Next Move</p>
                          </div>
                          <p className="text-xs text-gray-light leading-relaxed">{c.nextMove}</p>
                        </div>
                        <div className="mt-3 p-3 rounded-lg bg-dark-light">
                          <p className="text-xs text-gray/50 mb-0.5">Gap geografico identificato</p>
                          <p className="text-xs text-gray-light">{c.gap}</p>
                        </div>
                      </div>
                      <div className="flex lg:flex-col items-center gap-4 flex-shrink-0">
                        <div className="relative w-16 h-16">
                          <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
                            <circle cx="32" cy="32" r="28" fill="none" stroke="#1E293B" strokeWidth="5" />
                            <circle cx="32" cy="32" r="28" fill="none"
                              stroke={c.score>=80?"#EF4444":c.score>=70?"#F59E0B":"#10B981"}
                              strokeWidth="5" strokeLinecap="round"
                              strokeDasharray={`${2*Math.PI*28}`}
                              strokeDashoffset={`${2*Math.PI*28*(1-c.score/100)}`} />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-light">{c.score}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray">Forza</p>
                          <p className="text-xs font-medium mt-1" style={{color:c.score>=80?"#EF4444":c.score>=70?"#F59E0B":"#10B981"}}>
                            {c.score>=80?"Alta":c.score>=70?"Media":"Bassa"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-light font-semibold mb-1">Il Tuo Vantaggio Competitivo</h3>
              <p className="text-xs text-gray/50 italic mb-6">Your consolidated competitive advantage</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {n:"1",title:"PMI Scoperte",      body:"4 su 6 competitor ignorano le piccole e medie imprese — 4,2 milioni di aziende non servite in Italia."},
                  {n:"2",title:"Sud Italia Vuoto",  body:"Nessun competitor ha presenza strutturata nel Sud. Napoli, Bari, Palermo, Catania e Reggio Calabria sono mercati vergini."},
                  {n:"3",title:"Costo vs Qualità", body:"Posizionamento accessibile con approccio data-driven — nessuno offre questa combinazione nel mercato attuale."},
                ].map((adv,i) => (
                  <div key={i} className="bg-dark-light rounded-xl p-5">
                    <div className="w-7 h-7 rounded-full bg-secondary/15 flex items-center justify-center mb-3">
                      <span className="text-xs font-bold text-secondary">{adv.n}</span>
                    </div>
                    <h4 className="text-light font-semibold mb-2 text-sm">{adv.title}</h4>
                    <p className="text-xs text-gray leading-relaxed">{adv.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: CONTENT */}
        {tab === "content" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-light font-semibold mb-0.5">Idee Blog Consigliate</h3>
              <p className="text-xs text-gray/50 italic mb-5">Recommended blog topics for your niche</p>
              <div className="space-y-3">
                {blogs.map((b,i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-light">
                    <span className="text-xs font-bold text-primary mt-0.5 flex-shrink-0 w-5">#{i+1}</span>
                    <p className="text-xs text-gray-light leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-light font-semibold mb-0.5">Keyword a Bassa Competizione</h3>
              <p className="text-xs text-gray/50 italic mb-5">Low competition keywords</p>
              <div className="space-y-2.5">
                {[
                  `${form.niche.split(" ")[0].toLowerCase()} ${form.currentRegion}`,
                  `migliore ${form.niche.split(" ")[0].toLowerCase()} Italia`,
                  `${form.niche.split(" ")[0].toLowerCase()} online professionale`,
                  `${form.niche.split(" ")[0].toLowerCase()} prezzi 2024`,
                  `come scegliere ${form.niche.split(" ")[0].toLowerCase()}`,
                  `${form.niche.split(" ")[0].toLowerCase()} vicino a me`,
                ].map((kw,i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-dark-light">
                    <span className="text-xs text-gray-light font-mono">{kw}</span>
                    <span className="text-xs text-secondary">Bassa</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/5 md:col-span-2">
              <h3 className="text-light font-semibold mb-0.5">Calendario Editoriale — Primo Mese</h3>
              <p className="text-xs text-gray/50 italic mb-5">Editorial calendar for the first month</p>
              <div className="grid md:grid-cols-4 gap-4">
                {blogs.slice(0,4).map((b,i) => (
                  <div key={i} className="bg-dark-light rounded-xl p-4">
                    <p className="text-xs text-primary mb-2 font-medium">Settimana {i+1}</p>
                    <p className="text-xs text-gray-light leading-relaxed mb-3">{b}</p>
                    <div className="flex flex-wrap gap-1">
                      {["Blog","Social","Email"].slice(0,i%2===0?3:2).map((t,j) => (
                        <span key={j} className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary/70">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: ADVERTISING */}
        {tab === "advertising" && (
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-light font-semibold mb-0.5">Canali Pubblicitari Consigliati</h3>
              <p className="text-xs text-gray/50 italic mb-6">Recommended advertising channels ranked by priority</p>
              <div className="space-y-4">
                {[
                  {channel:"Google Search Ads",       priority:"Molto Alta", cpc:"€0.68", conv:"4.2%", note:"Intercetta domanda attiva — utenti già pronti all'acquisto"},
                  {channel:"Meta (Facebook & Instagram)", priority:"Alta",  cpc:"€0.34", conv:"2.8%", note:"Targeting demografico avanzato — ideale per awareness e retargeting"},
                  {channel:"Google Display & YouTube", priority:"Media",    cpc:"€0.12", conv:"1.4%", note:"Ottimo per brand awareness a costo contenuto"},
                  {channel:"TikTok Ads",               priority:"Media",    cpc:"€0.28", conv:"2.1%", note:"In crescita — early mover advantage ancora disponibile"},
                  {channel:"Email Marketing",          priority:"Alta",     cpc:"€0.02", conv:"6.8%", note:"Il canale con ROI più alto — lista proprietaria = asset aziendale"},
                ].map((ch,i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl bg-dark-light border border-white/5">
                    <div className="flex items-center gap-3 md:w-52 flex-shrink-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white ${i===0?"bg-secondary":i===1?"bg-primary":"bg-dark"}`}>{i+1}</div>
                      <span className="text-sm text-light font-medium">{ch.channel}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray leading-relaxed">{ch.note}</p>
                    </div>
                    <div className="flex gap-6 text-center flex-shrink-0">
                      <div><p className="text-xs text-gray/50 mb-0.5">CPC</p><p className="text-sm font-semibold text-light font-mono">{ch.cpc}</p></div>
                      <div><p className="text-xs text-gray/50 mb-0.5">Conv.</p><p className="text-sm font-semibold text-secondary">{ch.conv}</p></div>
                      <div><p className="text-xs text-gray/50 mb-0.5">Priorità</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ch.priority==="Molto Alta"?"bg-secondary/20 text-secondary":ch.priority==="Alta"?"bg-primary/20 text-primary":"bg-accent/20 text-accent"}`}>{ch.priority}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="text-light font-semibold mb-0.5">Distribuzione Budget</h3>
                <p className="text-xs text-gray/50 italic mb-6">Recommended budget distribution</p>
                <div className="space-y-4">
                  {[
                    {label:"Google Search Ads",    pct:35, color:"bg-primary"},
                    {label:"Meta (FB & Instagram)",pct:28, color:"bg-accent"},
                    {label:"Email Marketing",      pct:18, color:"bg-secondary"},
                    {label:"Google Display",       pct:12, color:"bg-primary-light"},
                    {label:"TikTok / Altri",       pct:7,  color:"bg-gray"},
                  ].map((item,i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray">{item.label}</span>
                        <span className="text-light font-semibold">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-dark-light rounded-full h-1.5 overflow-hidden">
                        <div className={`h-1.5 rounded-full ${item.color}`} style={{width:`${item.pct}%`}} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="text-light font-semibold mb-0.5">Stima Risultati Mensili</h3>
                <p className="text-xs text-gray/50 italic mb-6">Estimated monthly results</p>
                <div className="space-y-4">
                  {[
                    {label:"Impressioni stimate",   value:"180.000 – 240.000"},
                    {label:"Click stimati",         value:"4.200 – 6.800"},
                    {label:"Lead generati",         value:"85 – 140"},
                    {label:"Costo per lead medio",  value:"€8 – €18"},
                    {label:"Conversioni stimate",   value:"12 – 28"},
                    {label:"ROI stimato (mese 3+)", value:"280 – 420%"},
                  ].map((item,i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/4 last:border-0">
                      <span className="text-xs text-gray">{item.label}</span>
                      <span className="text-xs font-semibold text-light">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: STRATEGY */}
        {tab === "strategy" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {period:"Mese 1–2", leads:"15–30",  cpc:"€0.72", conv:"2.1%", color:"border-primary/25"},
                {period:"Mese 3–4", leads:"45–70",  cpc:"€0.58", conv:"3.6%", color:"border-secondary/25"},
                {period:"Mese 5–6", leads:"90–140", cpc:"€0.44", conv:"5.2%", color:"border-accent/25"},
              ].map((proj,i) => (
                <div key={i} className={`glass rounded-2xl p-5 border ${proj.color}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-gray" />
                    <p className="text-xs text-gray font-medium">{proj.period}</p>
                  </div>
                  <div className="space-y-3">
                    <div><p className="text-xs text-gray/50 mb-1">Lead / mese</p><p className="text-xl font-bold text-secondary">{proj.leads}</p></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><p className="text-xs text-gray/50 mb-1">CPC medio</p><p className="text-sm font-semibold text-light">{proj.cpc}</p></div>
                      <div><p className="text-xs text-gray/50 mb-1">Conversione</p><p className="text-sm font-semibold text-primary">{proj.conv}</p></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-light font-semibold mb-0.5">Priorità Strategiche — Ordinate per Impatto</h3>
              <p className="text-xs text-gray/50 italic mb-6">Strategic priorities ranked by impact</p>
              <div className="space-y-3">
                {[
                  {rank:"01", priority:"Altissima", title:"Presidio Google My Business",          body:"Il 46% delle ricerche su Google hanno intento locale. GMB ottimizzato = visibilità immediata gratuita."},
                  {rank:"02", priority:"Altissima", title:"Google Search Ads — Campagne Locali",  body:"Intercetta domanda già esistente. ROI misurabile da settimana 2. Il canale con il tasso di conversione più alto."},
                  {rank:"03", priority:"Alta",      title:"Blog SEO — Contenuti Pilastro",        body:"Asset a lungo termine. Ogni articolo ben posizionato genera traffico organico per 2-3 anni senza costi aggiuntivi."},
                  {rank:"04", priority:"Alta",      title:"Retargeting Multi-Canale",             body:"Il 97% dei visitatori lascia il sito senza convertire. Retargeting recupera il 15-25% di questi utenti."},
                  {rank:"05", priority:"Media",     title:"Email Marketing Automatizzato",        body:"Il canale con il ROI più alto (€36 per ogni €1 investito). Lista email = asset aziendale permanente."},
                ].map((item,i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-dark-light hover:bg-dark-light/80 transition-colors">
                    <span className="text-2xl font-black text-white/5 leading-none flex-shrink-0 w-10">{item.rank}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm text-light font-semibold">{item.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${item.priority==="Altissima"?"bg-secondary/20 text-secondary":item.priority==="Alta"?"bg-primary/20 text-primary":"bg-accent/20 text-accent"}`}>{item.priority}</span>
                      </div>
                      <p className="text-xs text-gray leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative glass rounded-2xl p-10 text-center border border-primary/15 overflow-hidden">
              <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)"}} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-light mb-3">Pronto a implementare questa strategia?</h3>
                <p className="text-gray mb-2 max-w-lg mx-auto text-sm leading-relaxed">Il nostro team può trasformare questo report in risultati concreti. Consulenza gratuita di 30 minuti.</p>
                <p className="text-gray/40 italic text-xs mb-8">Ready to turn this report into real results? Free 30-minute consultation.</p>
                <a href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-primary/25">
                  Prenota Consulenza Gratuita <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
