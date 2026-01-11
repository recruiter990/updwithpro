import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Xerosofro",
  description: "Privacy Policy - Come gestiamo i tuoi dati personali",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="container-custom section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-dark dark:text-light">
            Privacy Policy
          </h1>
          <p className="text-gray mb-8">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray dark:text-gray-light">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                1. Introduzione
              </h2>
              <p>
                La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le informazioni personali 
                che ci fornisci quando utilizzi il nostro sito web e i nostri servizi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                2. Dati che Raccogliamo
              </h2>
              <p>Raccogliamo i seguenti tipi di informazioni:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informazioni di contatto:</strong> Nome, email, telefono, indirizzo</li>
                <li><strong>Informazioni aziendali:</strong> Nome azienda, tipo di business, settore</li>
                <li><strong>Dati di navigazione:</strong> IP address, tipo di browser, pagine visitate</li>
                <li><strong>Cookie e tecnologie simili:</strong> Per migliorare l'esperienza utente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                3. Come Utilizziamo i Dati
              </h2>
              <p>Utilizziamo i tuoi dati per:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornire e migliorare i nostri servizi</li>
                <li>Rispondere alle tue richieste e comunicare con te</li>
                <li>Inviare newsletter e comunicazioni marketing (con il tuo consenso)</li>
                <li>Analizzare l'utilizzo del sito per migliorare l'esperienza</li>
                <li>Rispettare obblighi legali e normativi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                4. Condivisione dei Dati
              </h2>
              <p>
                Non vendiamo i tuoi dati personali. Possiamo condividere i dati solo con:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornitori di servizi che ci aiutano a gestire il sito (hosting, email, analytics)</li>
                <li>Autorità legali quando richiesto dalla legge</li>
                <li>In caso di fusione, acquisizione o vendita di asset</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                5. Sicurezza dei Dati
              </h2>
              <p>
                Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati 
                personali da accesso non autorizzato, alterazione, divulgazione o distruzione.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                6. I Tuoi Diritti (GDPR)
              </h2>
              <p>Hai il diritto di:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accedere ai tuoi dati personali</li>
                <li>Correggere dati inesatti</li>
                <li>Richiedere la cancellazione dei dati</li>
                <li>Opporti al trattamento dei dati</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                7. Cookie
              </h2>
              <p>
                Utilizziamo cookie per migliorare l'esperienza utente. Puoi gestire le preferenze dei cookie 
                attraverso il banner di consenso o le impostazioni del browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                8. Conservazione dei Dati
              </h2>
              <p>
                Conserviamo i tuoi dati personali solo per il tempo necessario a raggiungere le finalità per cui 
                sono stati raccolti, salvo obblighi di legge che richiedano una conservazione più lunga.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                9. Modifiche alla Privacy Policy
              </h2>
              <p>
                Possiamo aggiornare questa Privacy Policy periodicamente. Ti notificheremo eventuali modifiche 
                significative pubblicando la nuova policy su questa pagina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-dark dark:text-light">
                10. Contatti
              </h2>
              <p>
                Per domande o richieste riguardo alla privacy, contattaci:
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

