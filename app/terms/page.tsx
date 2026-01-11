import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini di Servizio | Xerosofro",
  description: "Termini e condizioni di utilizzo dei nostri servizi",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="container-custom section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-dark dark:text-light">
            Termini di Servizio
          </h1>
          <p className="text-gray mb-8">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray dark:text-gray-light">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                1. Accettazione dei Termini
              </h2>
              <p>
                Accedendo e utilizzando questo sito web e i nostri servizi, accetti di essere vincolato da questi 
                Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                2. Descrizione dei Servizi
              </h2>
              <p>
                Forniamo servizi di marketing digitale tra cui:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Social Media Management</li>
                <li>Cold Email Marketing</li>
                <li>Setup e ottimizzazione piattaforme delivery</li>
                <li>Google My Business optimization</li>
                <li>Content Creation</li>
                <li>Business Consulting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                3. Contratto di Servizio
              </h2>
              <p>
                L'ordine di servizio costituisce un contratto vincolante tra te e la nostra agenzia. I termini specifici 
                di ogni servizio, inclusi prezzi, durata e deliverables, saranno definiti in un accordo separato o 
                nell'ordine di servizio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                4. Pagamenti
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>I pagamenti sono dovuti secondo i termini specificati nell'ordine di servizio</li>
                <li>I pagamenti mensili ricorrenti sono fatturati in anticipo</li>
                <li>I servizi una tantum richiedono pagamento completo prima dell'inizio</li>
                <li>Ritardi nei pagamenti possono comportare la sospensione dei servizi</li>
                <li>Non sono previsti rimborsi per servizi già erogati</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                5. Cancellazione e Rimborsi
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Puoi cancellare i servizi ricorrenti con un preavviso di 30 giorni</li>
                <li>I servizi già erogati non sono rimborsabili</li>
                <li>I servizi una tantum non sono rimborsabili dopo l'inizio del lavoro</li>
                <li>Ci riserviamo il diritto di terminare i servizi in caso di violazione dei termini</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                6. Proprietà Intellettuale
              </h2>
              <p>
                Tutti i contenuti creati da noi per te (post social, email, design, etc.) diventano di tua proprietà 
                una volta completati e pagati. Tuttavia, ci riserviamo il diritto di utilizzare il lavoro per scopi 
                promozionali (portfolio, case study) a meno che non sia diversamente specificato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                7. Responsabilità del Cliente
              </h2>
              <p>Il cliente si impegna a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornire informazioni accurate e complete</li>
                <li>Fornire accesso necessario a account e piattaforme</li>
                <li>Rispondere tempestivamente alle richieste di approvazione</li>
                <li>Rispettare le linee guida delle piattaforme (Facebook, Instagram, etc.)</li>
                <li>Non utilizzare i servizi per attività illegali o fraudolente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                8. Risultati e Performance
              </h2>
              <p>
                Mentre ci impegniamo a fornire servizi di alta qualità, non garantiamo risultati specifici in termini 
                di vendite, follower, engagement o altre metriche. I risultati possono variare in base a molti fattori 
                esterni al nostro controllo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                9. Limitazione di Responsabilità
              </h2>
              <p>
                La nostra responsabilità è limitata all'importo pagato per i servizi. Non siamo responsabili per danni 
                indiretti, consequenziali o speciali derivanti dall'utilizzo dei nostri servizi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                10. Modifiche ai Termini
              </h2>
              <p>
                Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche entreranno in 
                vigore immediatamente dopo la pubblicazione. Il continuo utilizzo dei servizi dopo le modifiche 
                costituisce accettazione dei nuovi termini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                11. Legge Applicabile
              </h2>
              <p>
                Questi termini sono governati dalle leggi italiane. Qualsiasi disputa sarà risolta nei tribunali 
                competenti di Ancona, Italia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                12. Contatti
              </h2>
              <p>
                Per domande riguardo a questi termini, contattaci:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> xerosofro@outlook.com</li>
                <li><strong>Telefono:</strong> +39 349 123 4567</li>
                <li><strong>Indirizzo:</strong> Ancona, Italia</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

