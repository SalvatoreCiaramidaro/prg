// app.js
const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;


const HomeView = {
    template: `
        <div class="mb-5">
            <h1>Benvenuto!</h1>
            <p class="ciao">Benvenuto nel progetto per il corso "Fondamenti di sistemi WEB" di Alberto Poggiaspalla e Salvatore Ciaramidaro.</p>
            <img src="sfondoFondWeb.webp" alt="Illustrazione concettuale di una rete di nodi, server e computer interconnessi" class="img-fluid rounded shadow mb-4">
        </div>
    `
};


const InfoView = {
    template: `
        <div>
            <h1>Guida Strategica alla Search Engine Optimization (SEO)</h1>
            <div class="mt-4">
                <h2>Introduzione alla SEO</h2>
                <p>La <strong>Search Engine Optimization (SEO)</strong> rappresenta l'insieme delle strategie e delle
                    pratiche volte ad aumentare la visibilità di un sito web sui motori di ricerca (come Google o Bing)
                    per i risultati non a pagamento, definiti "organici". L'obiettivo principale è migliorare il
                    posizionamento delle pagine web per parole chiave rilevanti per il proprio business o contenuto.
                    Questa guida analizza i pilastri fondamentali per una strategia efficace di ottimizzazione.
                </p>
            </div>

            <div class="mt-4">
                <h2>I 3 pilastri fondamentali della SEO:</h2>

                <h3>1. SEO Tecnica (Technical SEO)</h3>
                <p>La SEO tecnica riguarda l'ottimizzazione dell'infrastruttura del sito affinché i motori di ricerca
                    possano scansionare (crawl) e indicizzare i contenuti senza ostacoli.</p>
                <ul>
                    <li><strong>Tempo di caricamento:</strong> Siti rapidi migliorano l'esperienza utente e sono favoriti dagli algoritmi.</li>
                    <li><strong>Mobile-friendly:</strong> Con l'aumento dell'uso di dispositivi mobili, è essenziale che il sito sia responsive.</li>
                    <li><strong>Protocollo HTTPS:</strong> La sicurezza è un fattore di ranking confermato.</li>
                    <li><strong>Architettura del sito:</strong> Una struttura gerarchica chiara aiuta sia gli utenti che i bot.</li>
                </ul>
            </div>

            <div class="mt-4">
                <h3>2. SEO On-Page (Contenuti e Keyword)</h3>
                <p>Si riferisce a tutti i fattori interni alle singole pagine che possono essere ottimizzati.</p>
                <ul>
                    <li><strong>Link Building:</strong> Acquisizione di link da siti esterni autorevoli (backlink) che puntano al proprio sito.</li>
                    <li><strong>Segnali Sociali:</strong> Sebbene non siano un fattore di ranking directo, la condivisione sui social aumenta la visibilità.</li>
                    <li><strong>Brand Mentions:</strong> Citazioni del brand online che contribuiscono alla percezione di autorità.</li>
                </ul>
            </div>

            <div class="mt-5">
                <h2>Tabella Comparativa degli Interventi</h2>
                <table class="tabella">
                    <caption>Tabella comparativa degli interventi SEO per tipologia di approccio</caption>
                    <thead>
                        <tr>
                            <th scope="col">Tipologia SEO</th>
                            <th scope="col">Obiettivo Principale</th>
                            <th scope="col">Esempio di Attività</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tecnica</td>
                            <td>Facilitare l'indicizzazione</td>
                            <td>Ottimizzazione file robots.txt e Sitemap XML</td>
                        </tr>
                        <tr>
                            <td>On-Page</td>
                            <td>Pertinenza del contenuto</td>
                            <td>Inserimento parole chiave correlate nel testo</td>
                        </tr>
                        <tr>
                            <td>Off-Page</td>
                            <td>Aumentare l'autorità</td>
                            <td>Guest posting su blog di settore autorevoli</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-4">
                <h2>L'Importanza dell'Esperienza Utente (UX)</h2>
                <p>Negli ultimi anni, Google ha dato sempre più peso ai cosiddetti Core Web Vitals, parametri che misurano
                    la qualità dell'esperienza d'uso di una pagina web: stabilità visiva, interattività e tempo di
                    caricamento del contenuto principale. Un sito SEO-friendly è, prima di tutto, un sito User-friendly.</p>
            </div>

            <div class="mt-4 class=mb-4">
                <h2>Evoluzione e Trend Futuri</h2>
                <p>Con l'avvento dell'intelligenza artificiale generativa e di sistemi come SGE (Search Generative
                    Experience), la SEO si sta spostando verso l'ottimizzazione per l'intento di ricerca complesso e
                    la fornitura di risposte dirette. L'autorità dell'autore (E-E-A-T) diventa un requisito fondamentale
                    per posizionarsi in settori critici come la salute o la finanza.</p>
            </div>
        </div>
    `
};


// ----- APPROFONDIMENTO SEO AVANZATO (pagina 2) -----
const Info2View = {
    template: `
        <div>
            <h1>Approfondimento Avanzato: Meccanismi di Scansione, Semantica e Search Intent</h1>
            <p class="lead"><strong>Per comprendere appieno il funzionamento della SEO moderna a livello accademico e professionale,
                è necessario analizzare come i motori di ricerca gestiscono le proprie risorse computazionali
                e come interpretano il linguaggio umano al di là delle semplici parole chiave.</strong></p>
            <hr>

            <article class="mt-4">
                <h2>1. Il Crawl Budget (Budget di Scansione)</h2>
                <p>I motori di ricerca non hanno risorse infinite. Per questo motivo, Google assegna a ogni sito web
                    un <strong>Crawl Budget</strong>: il numero limitato di pagine che il crawler (Googlebot) decide
                    di scansionare in un determinato arco di tempo.</p>
                <p>Se un sito spreca questo budget, le pagine nuove o aggiornate potrebbero non essere indicizzate
                    per settimane. I fattori principali che determinano il budget sono l'autorità del sito e la
                    velocità di risposta del server.</p>
                <h3>Sprechi comuni di Crawl Budget:</h3>
                <ul>
                    <li><strong>Contenuti duplicati:</strong> URL diversi che mostrano la stessa pagina.</li>
                    <li><strong>Pagine di errore:</strong> Link interni interrotti che restituiscono un codice HTTP 404.</li>
                    <li><strong>Catene di reindirizzamento:</strong> Pagine che rimandano ad altre tramite codici HTTP 301/302 in successione.</li>
                </ul>
            </article>

            <article class="mt-4">
                <h2>2. Struttura dei Dati e Web Semantico (Schema.org)</h2>
                <p>I motori di ricerca sono eccellenti nel leggere il testo, ma faticano a capirne il contesto.
                    I <strong>Dati Strutturati</strong> sono frammenti di codice (solitamente in formato
                    <code>JSON-LD</code>) inseriti nell'HTML per spiegare esplicitamente al motore di ricerca
                    cosa c'è nella pagina. Questo vocabolario fa capo al progetto globale <strong>Schema.org</strong>.</p>
                <p>L'uso corretto dei dati strutturati permette a Google di mostrare i <strong>Rich Snippets</strong>
                    (risultati arricchiti con stelle, prezzi o date), aumentando il CTR (Click-Through Rate).</p>
            </article>

            <article class="mt-4">
                <h2>3. L'Evoluzione Semantica: Da "Strings" a "Things"</h2>
                <p>Nel passato, la SEO si basava sulla <em>keyword density</em>. Oggi Google utilizza algoritmi
                    avanzati di NLP (Natural Language Processing) come BERT e MUM. L'approccio attuale si riassume
                    nel motto: <em>"Search graphs, not strings"</em>.</p>
                <ul>
                    <li><strong>Le Entità:</strong> Un oggetto o concetto univoco che Google mappa nel suo
                        <strong>Knowledge Graph</strong>.</li>
                    <li><strong>LSI e Co-occorrenza:</strong> L'algoritmo analizza la presenza di parole correlate
                        che dovrebbero logicamente apparire nel contesto.</li>
                </ul>
            </article>

            <article class="mt-4">
                <h2>4. La Decostruzione del Search Intent (Intento di Ricerca)</h2>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <caption>Categorie di intento di ricerca, obiettivo dell'utente e tipo di pagina ideale</caption>
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Tipo di Intento</th>
                                <th scope="col">Obiettivo dell'Utente</th>
                                <th scope="col">Tipo di Pagina Ideale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Informazionale</strong></td>
                                <td>Trovare una risposta a una domanda (es. <em>"come funziona un cookie"</em>)</td>
                                <td>Articolo di blog, guida dettagliata, FAQ.</td>
                            </tr>
                            <tr>
                                <td><strong>Navigazionale</strong></td>
                                <td>Raggiungere un sito specifico (es. <em>"Facebook login"</em>)</td>
                                <td>Homepage, landing page ufficiale del brand.</td>
                            </tr>
                            <tr>
                                <td><strong>Commerciale</strong></td>
                                <td>Investigare prima dell'acquisto (es. <em>"miglior smartphone"</em>)</td>
                                <td>Guide comparative, recensioni, liste "top 10".</td>
                            </tr>
                            <tr>
                                <td><strong>Transazionale</strong></td>
                                <td>Compiere un'azione economica (es. <em>"compra biglietti concerto"</em>)</td>
                                <td>Pagina prodotto e-commerce, form di prenotazione.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>

            <article class="mt-4 mb-5">
                <h2>5. SEO Internazionale e Gestione della Geolocalizzazione</h2>
                <p>Quando un progetto web si espande su più mercati o lingue, entrano in gioco direttive tecniche
                    specifiche per evitare che i motori di ricerca scambino le traduzioni per contenuti duplicati.</p>
                <ul>
                    <li><strong>Attributo <code>rel="alternate" hreflang="..."</code>:</strong> Indica a Google
                        a quale lingua e area geografica è destinato ogni URL.</li>
                    <li><strong>Geolocalizzazione dell'infrastruttura:</strong> La scelta tra domini nazionali
                        (ccTLD come <code>.it</code>), sottodomini o sottocartelle influisce sull'autorità del dominio.</li>
                </ul>
            </article>
        </div>
    `
};

const ModificaView = {
    data() {
        return {
            userList : [ 
               { username: 'admin',     password: '123', cellulare: '3334455666' },
                { username: 'alberto_p', password: 'web', cellulare: '3409988777' }
            ],
            newUser: { username: '', password: '', cellulare: ''},
            editIndex: null
            
        }
    },
    methods: {
        resetForm() {
            this.newUser = { username: '', password: '', cellulare: '' };
            this.editIndex = null;
        },
        saveUser() {
            const username = this.newUser.username.trim();
            const password = this.newUser.password.trim();
            const cellulare = this.newUser.cellulare.trim();

            if (!username || !password || !cellulare) {
                alert('Compila tutti i campi prima di salvare.');
                return;
            }

            const payload = { username, password, cellulare };

            if (this.editIndex === null) {
                this.userList.push(payload);
            } else {
                this.userList.splice(this.editIndex, 1, payload);
            }

            this.resetForm();
        },
        editUser(index) {
            this.newUser = { ...this.userList[index] };
            this.editIndex = index;
        },
        deleteUser(index) {
            const user = this.userList[index];
            const confirmed = confirm(`Vuoi eliminare l'utente ${user.username}?`);

            if (!confirmed) {
                return;
            }

            this.userList.splice(index, 1);

            if (this.editIndex === index) {
                this.resetForm();
            }
        }
    },

    template: `
        <div class="mb-5">
            <h1>Modifica dati utenti</h1>
            <p class="mb-4">Qui puoi aggiungere, modificare ed eliminare utenti direttamente dal componente Vue.</p>

            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h2 class="h4 mb-3">{{ editIndex === null ? 'Aggiungi nuovo utente' : 'Modifica utente' }}</h2>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="username">Username</label>
                            <input id="username" v-model="newUser.username" type="text" class="form-control" placeholder="Inserisci username">
                        </div>

                        <div class="form-group col-md-4">
                            <label for="password">Password</label>
                            <input id="password" v-model="newUser.password" type="text" class="form-control" placeholder="Inserisci password">
                        </div>

                        <div class="form-group col-md-4">
                            <label for="cellulare">Cellulare</label>
                            <input id="cellulare" v-model="newUser.cellulare" type="text" class="form-control" placeholder="Inserisci numero di cellulare">
                        </div>
                    </div>

                    <div class="d-flex flex-wrap align-items-center">
                        <button class="btn btn-primary mr-2 mb-2" @click="saveUser">
                            {{ editIndex === null ? 'Aggiungi utente' : 'Salva modifiche' }}
                        </button>
                        <button v-if="editIndex !== null" class="btn btn-secondary mb-2" @click="resetForm">
                            Annulla modifica
                        </button>
                    </div>
                </div>
            </div>

            <div class="table-responsive">
                <table class="user-table table table-striped table-bordered">
                    <caption class="sr-only">Tabella contenente la lista degli utenti registrati nel sistema e le azioni di modifica o rimozione</caption>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Cellulare</th>
                            <th scope="col">Azioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in userList" :key="user.username + index">
                            <td>{{ user.username }}</td>
                            <td>{{ user.password }}</td>
                            <td>{{ user.cellulare }}</td>
                            <td>
                                <button class="btn-edit" 
                                        @click="editUser(index)" 
                                        :aria-label="'Modifica credenziali utente ' + user.username">Modifica</button>
                                <button class="btn-delete" 
                                        @click="deleteUser(index)" 
                                        :aria-label="'Elimina definitivamente utente ' + user.username">Elimina</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
};

const JsonView = {
    data() {
        return {
            players: [],
            loading: true,
            error: null,
            searchCognome: ''
        }
    },
    computed: {
        playersCount() {
            return this.filteredPlayers.length;
        },
        jsonPreview() {
            return JSON.stringify(this.filteredPlayers, null, 2);
        },
        filteredPlayers() {
            const query = this.searchCognome.trim().toLowerCase();

            if (!query) {
                return this.players;
            }

            return this.players.filter(player =>
                String(player.cognome || '').toLowerCase().includes(query)
            );
        }
    },
    async mounted() {
        try {
            const response = await fetch('dati.json');

            if (!response.ok) {
                throw new Error(`Impossibile caricare il file JSON (HTTP ${response.status})`);
            }

            this.players = await response.json();
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
    },

    template: `
        <div class="mb-5">
            <h1>Database .json</h1>
            <p class="mb-4">La vista legge i dati da <strong>dati.json</strong> e li mostra sia in tabella sia in formato JSON.</p>

            <div class="form-group mb-3">
                <label for="searchCognome">Cerca per cognome</label>
                <input
                    id="searchCognome"
                    v-model="searchCognome"
                    type="text"
                    class="form-control"
                    placeholder="Scrivi un cognome..."
                >
            </div>

            <div aria-live="polite">
                <div v-if="loading" class="alert alert-info">Caricamento dati in corso...</div>
                <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

                <template v-else>
                    <div class="alert alert-success">
                        Record caricati: <strong>{{ playersCount }}</strong>
                    </div>

                    <div v-if="!filteredPlayers.length" class="alert alert-warning">
                        Nessun record trovato per il cognome inserito.
                    </div>

                    <div v-if="filteredPlayers.length" class="table-responsive mb-4">
                        <table class="table table-bordered table-striped">
                            <caption class="sr-only">Tabella dei giocatori di pallavolo filtrabile per cognome</caption>
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Cognome</th>
                                    <th scope="col">Numero</th>
                                    <th scope="col">Ruolo</th>
                                    <th scope="col">Squadra</th>
                                    <th scope="col">Sesso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="player in filteredPlayers" :key="player.id">
                                    <td>{{ player.id }}</td>
                                    <td>{{ player.nome }}</td>
                                    <td>{{ player.cognome }}</td>
                                    <td>{{ player.numero }}</td>
                                    <td>{{ player.ruolo }}</td>
                                    <td>{{ player.squadra_attuale }}</td>
                                    <td>{{ player.sesso }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <details>
                        <summary class="mb-2">Mostra JSON completo</summary>
                        <pre class="p-3 bg-light border rounded" style="white-space: pre-wrap;">{{ jsonPreview }}</pre>
                    </details>
                </template>
            </div>
        </div>
    `
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeView, name: 'home' },
        { path: '/info', component: InfoView, name: 'info' },
        { path: '/info2', component: Info2View, name: 'info2' },
        { path: '/modifica', component: ModificaView, name: 'modifica' },
        { path: '/json', component: JsonView, name: 'json' }
    ]
});

const app = createApp({
    data() {
        return {
            isDarkMode: localStorage.getItem('theme') === 'dark',
            showAccessibilityPanel: false,
            fontSizeLevel: parseInt(localStorage.getItem('fontSizeLevel')) || 0,
            highContrast:    localStorage.getItem('highContrast')    === 'true',
            reducedMotion:   localStorage.getItem('reducedMotion')   === 'true',
            dyslexiaFont:    localStorage.getItem('dyslexiaFont')    === 'true',
            underlineLinks:  localStorage.getItem('underlineLinks')  === 'true'
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            if (this.isDarkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }
        },
        increaseFontSize() {
            if (this.fontSizeLevel < 3) { this.fontSizeLevel++; this.applyFontSize(); }
        },
        decreaseFontSize() {
            if (this.fontSizeLevel > 0) { this.fontSizeLevel--; this.applyFontSize(); }
        },
        applyFontSize() {
            const root = document.documentElement;
            // FIX: logica semplificata - rimuove tutto e aggiunge solo la classe corretta
            root.classList.remove('font-size-large', 'font-size-xlarge', 'font-size-huge');
            if      (this.fontSizeLevel === 1) root.classList.add('font-size-large');
            else if (this.fontSizeLevel === 2) root.classList.add('font-size-xlarge');
            else if (this.fontSizeLevel >= 3)  root.classList.add('font-size-huge');
            localStorage.setItem('fontSizeLevel', this.fontSizeLevel);
        },
        toggleHighContrast() {
            this.highContrast = !this.highContrast;
            // classList.toggle(class, bool) aggiunge se true, rimuove se false
            document.documentElement.classList.toggle('high-contrast', this.highContrast);
            localStorage.setItem('highContrast', this.highContrast);
        },
        toggleReducedMotion() {
            this.reducedMotion = !this.reducedMotion;
            document.documentElement.classList.toggle('reduced-motion', this.reducedMotion);
            localStorage.setItem('reducedMotion', this.reducedMotion);
        },
        toggleDyslexiaFont() {
            this.dyslexiaFont = !this.dyslexiaFont;
            document.documentElement.classList.toggle('dyslexia-font', this.dyslexiaFont);
            localStorage.setItem('dyslexiaFont', this.dyslexiaFont);
        },
        toggleUnderlineLinks() {
            this.underlineLinks = !this.underlineLinks;
            const existing = document.getElementById('underline-links-style');
            if (this.underlineLinks && !existing) {
                const style = document.createElement('style');
                style.id = 'underline-links-style';
                style.innerHTML = 'a { text-decoration: underline !important; }';
                document.head.appendChild(style);
            } else if (!this.underlineLinks && existing) {
                existing.remove();
            }
            localStorage.setItem('underlineLinks', this.underlineLinks);
        }
    },
    mounted() {
        if (this.isDarkMode) document.documentElement.setAttribute('data-theme', 'dark');
        this.applyFontSize();
        if (this.highContrast)   document.documentElement.classList.add('high-contrast');
        if (this.reducedMotion)  document.documentElement.classList.add('reduced-motion');
        if (this.dyslexiaFont)   document.documentElement.classList.add('dyslexia-font');
        if (this.underlineLinks) {
            const style = document.createElement('style');
            style.id = 'underline-links-style';
            style.innerHTML = 'a { text-decoration: underline !important; }';
            document.head.appendChild(style);
        }
    }
});

app.use(router);
app.mount('#app');