import { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | Guide e Consigli di Marketing Digitale",
  description: "Scopri guide, consigli e strategie di marketing digitale per far crescere il tuo business locale.",
};

const blogPosts = [
  {
    id: 1,
    title: "Social Media Management: Guida Completa",
    excerpt: "Scopri come una gestione professionale dei social media può trasformare la tua presenza online e aumentare engagement e vendite. Dalla creazione di contenuti al community management, tutto quello che serve per far crescere il tuo brand.",
    category: "Social Media",
    date: "20 Marzo 2024",
    readTime: "8 min",
    image: "/images/blog-1.jpg",
    serviceId: "social-media",
  },
  {
    id: 2,
    title: "Cold Email Marketing: Strategie che Convertono",
    excerpt: "Impara come creare campagne email efficaci che trasformano sconosciuti in clienti fedeli. Scopri le tecniche per aumentare l'open rate e generare lead di qualità attraverso email marketing mirato.",
    category: "Email Marketing",
    date: "18 Marzo 2024",
    readTime: "10 min",
    image: "/images/blog-2.jpg",
    serviceId: "cold-email",
  },
  {
    id: 3,
    title: "Setup Delivery Online: Porta il Tuo Ristorante Online",
    excerpt: "Guida completa per integrare il tuo ristorante su tutte le principali piattaforme di delivery. Scopri come ottimizzare menu, foto e prezzi per massimizzare le vendite online e raggiungere nuovi clienti.",
    category: "Delivery",
    date: "15 Marzo 2024",
    readTime: "12 min",
    image: "/images/blog-3.jpg",
    serviceId: "delivery",
  },
  {
    id: 4,
    title: "Google My Business: Ottimizzazione per la Visibilità Locale",
    excerpt: "Come ottimizzare il tuo profilo Google My Business per apparire in cima alle ricerche locali. Strategie per gestire recensioni, foto e informazioni per attirare più clienti nella tua zona.",
    category: "SEO",
    date: "12 Marzo 2024",
    readTime: "9 min",
    image: "/images/blog-4.jpg",
    serviceId: "gmb",
  },
  {
    id: 5,
    title: "Content Creation: Foto e Video Professionali per il Tuo Brand",
    excerpt: "Scopri l'importanza di contenuti visivi di qualità per il tuo brand. Dalla fotografia professionale ai video per social media, impara come creare contenuti che attirano e coinvolgono il tuo pubblico.",
    category: "Content",
    date: "10 Marzo 2024",
    readTime: "7 min",
    image: "/images/blog-5.jpg",
    serviceId: "content",
  },
  {
    id: 6,
    title: "Business Consulting: Strategie di Crescita Personalizzate",
    excerpt: "Come sviluppare strategie di crescita personalizzate per il tuo business. Dalle analisi di mercato alle idee startup, scopri come identificare opportunità e scalare il tuo business in modo sostenibile.",
    category: "Business",
    date: "8 Marzo 2024",
    readTime: "8 min",
    image: "/images/blog-6.jpg",
    serviceId: "consulting",
  },
  {
    id: 7,
    title: "Market Data Scraping: Comprendi il Tuo Mercato",
    excerpt: "Scopri come raccogliere e analizzare dati di mercato dalle tue regioni target per comprendere la concorrenza, le tendenze dei prezzi e le opportunità di mercato. Analisi competitive e insights regionali per decisioni informate.",
    category: "Data Intelligence",
    date: "5 Marzo 2024",
    readTime: "9 min",
    image: "/images/blog-7.jpg",
    serviceId: "market-data-scraping",
  },
  {
    id: 8,
    title: "Shop & Product Price Monitoring: Monitora i Prezzi in Tempo Reale",
    excerpt: "Mantieni il controllo sui prezzi dei prodotti attraverso più negozi e regioni. Ricevi alert in tempo reale quando i prezzi cambiano e identifica le migliori opportunità di sourcing. Monitoraggio automatico e report dettagliati per ottimizzare i tuoi acquisti.",
    category: "Data Intelligence",
    date: "3 Marzo 2024",
    readTime: "8 min",
    image: "/images/blog-8.jpg",
    serviceId: "price-monitoring",
  },
  {
    id: 9,
    title: "Business Growth Metrics: Dashboard per Decisioni Data-Driven",
    excerpt: "Crea dashboard personalizzate che mostrano le tue metriche chiave di business, tendenze di crescita e indicatori di performance. KPI tracking, analisi di crescita e visualizzazioni intuitive per prendere decisioni basate sui dati e guidare la crescita del tuo business.",
    category: "Data Intelligence",
    date: "1 Marzo 2024",
    readTime: "10 min",
    image: "/images/blog-9.jpg",
    serviceId: "business-metrics",
  },
  {
    id: 10,
    title: "Regional Market Intelligence: Analisi Approfondita dei Mercati",
    excerpt: "Analisi approfondita di regioni specifiche inclusi dati su localizzazione negozi, comportamento dei consumatori e opportunità di business nei tuoi mercati target. Dati di localizzazione, insights sui consumatori e mappatura delle opportunità per espandere il tuo business in nuove aree.",
    category: "Data Intelligence",
    date: "28 Febbraio 2024",
    readTime: "11 min",
    image: "/images/blog-10.jpg",
    serviceId: "regional-intelligence",
  },
];

const categories = ["Tutti", "Social Media", "Email Marketing", "Delivery", "SEO", "Business", "Content", "Data Intelligence"];

export default function BlogPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Guide, consigli e strategie di marketing digitale per far crescere il tuo business
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Tutti" ? "primary" : "default"}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} variant="glass" hover className="flex flex-col h-full">
              <div className="aspect-video rounded-lg bg-gradient-primary/20 mb-4 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-primary/50" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              <h2 className="text-xl font-heading font-semibold mb-2 text-dark dark:text-light">
                {post.title}
              </h2>
              <p className="text-gray mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-primary font-medium hover:translate-x-1 transition-transform"
              >
                Leggi di più
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card variant="gradient" className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
            Rimani Aggiornato
          </h2>
          <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere guide esclusive e consigli di marketing digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-dark dark:text-light"
            />
            <Button>Iscriviti</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

