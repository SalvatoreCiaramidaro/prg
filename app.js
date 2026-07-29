// app.js
// Questo file definisce l'applicazione Vue: viste, router e funzioni di accessibilità.
const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;


// Vista iniziale con contenuti introduttivi sul progetto.
const HomeView = {
    template: `
        <section class="page-shell space-y-6">
            <div class="hero-panel rounded-3xl p-8 md:p-10 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div class="max-w-2xl">
                        <p class="kicker mb-3">Corso Fondamenti di sistemi WEB</p>
                        <h1 class="text-4xl md:text-5xl font-semibold leading-tight">Benvenuto nel progetto di Salvatore Ciaramidaro</h1>
                        <p class="ciao mt-4 text-lg max-w-xl">Questo sito unisce contenuti teorici, una gestione utenti interattiva e un database JSON, tutto in un layout più moderno e leggibile.</p>
                        <div class="mt-6 flex flex-wrap gap-3">
                            <span class="soft-pill rounded-full px-4 py-2 text-sm font-medium">Vue</span>
                            <span class="soft-pill rounded-full px-4 py-2 text-sm font-medium">Model Context Protocol</span>
                            <span class="soft-pill rounded-full px-4 py-2 text-sm font-medium">Accessibilità</span>
                        </div>
                    </div>
                    <img src="sfondoFondWeb.webp" alt="Illustrazione concettuale di una rete di nodi, server e computer interconnessi" class="w-full max-w-xl rounded-2xl shadow-soft border border-slate-200/70">
                </div>
            </div>

            <div class="grid gap-6 md:grid-cols-3">
                <article class="section-card rounded-2xl p-6">
                    <h2 class="text-xl font-semibold">Pagine informative</h2>
                    <p class="mt-2">Esplora gli approfondimenti sul Model Context Protocol con un layout più ordinato e facilmente scansionabile.</p>
                </article>
                <article class="section-card rounded-2xl p-6">
                    <h2 class="text-xl font-semibold">Gestione utenti</h2>
                    <p class="mt-2">Aggiungi, modifica o elimina record direttamente nella vista Vue senza perdere il focus.</p>
                </article>
                <article class="section-card rounded-2xl p-6">
                    <h2 class="text-xl font-semibold">Dati JSON</h2>
                    <p class="mt-2">Consulta i giocatori caricati da un file esterno e filtra i contenuti in tempo reale.</p>
                </article>
            </div>
        </section>
    `
};


// Vista teorica sul Model Context Protocol con sezioni di contenuto, elenco e tabella comparativa.
const InfoView = {
    template: `
        <section class="page-shell space-y-6">
            <div class="hero-panel rounded-3xl p-8 md:p-10">
                <p class="kicker">MCP strategico</p>
                <h1 class="text-3xl md:text-4xl font-semibold mt-2">Guida Strategica al Model Context Protocol (MCP)</h1>
                <p class="ciao mt-3 max-w-3xl">Il Model Context Protocol è uno standard che permette ai modelli di intelligenza artificiale di collegarsi a dati, strumenti e servizi esterni in modo ordinato e sicuro.</p>
            </div>

            <div class="section-card rounded-2xl p-6 md:p-8 space-y-6">
                <div>
                    <h2 class="text-2xl font-semibold">Introduzione al Model Context Protocol</h2>
                    <p class="mt-2">Il <strong>Model Context Protocol (MCP)</strong> è uno standard aperto pensato per collegare applicazioni AI a risorse esterne come database, file, API e strumenti operativi. L'obiettivo principale è fornire al modello il contesto giusto nel momento giusto, evitando integrazioni rigide e poco riutilizzabili. Questa guida analizza i pilastri fondamentali per capire come MCP organizza la comunicazione tra client, server e strumenti.</p>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold">I 3 pilastri fondamentali di MCP</h2>
                    <div class="mt-4 grid gap-4 lg:grid-cols-2">
                        <article class="rounded-2xl border border-slate-200/70 bg-white/70 p-5">
                            <h3 class="text-lg font-semibold">1. Host e client MCP</h3>
                            <p class="mt-2">La parte iniziale di MCP riguarda l'applicazione host e il client che gestisce la connessione. L'host coordina la sessione, mentre il client dialoga con i server MCP per ottenere contesto o invocare strumenti.</p>
                            <ul class="info-list mt-3">
                                <li><strong>Sessione controllata:</strong> Il client mantiene una comunicazione coerente con il server durante l'uso.</li>
                                <li><strong>Contesto esplicito:</strong> Le informazioni condivise vengono richieste e fornite in modo chiaro.</li>
                                <li><strong>Separazione dei ruoli:</strong> L'applicazione non deve conoscere direttamente ogni dettaglio del servizio esterno.</li>
                            </ul>
                        </article>
                        <article class="rounded-2xl border border-slate-200/70 bg-white/70 p-5">
                            <h3 class="text-lg font-semibold">2. Server, strumenti e risorse</h3>
                            <p class="mt-2">I server MCP espongono capacità riutilizzabili come tool, resource e prompt, così il modello può interagire con funzioni esterne in maniera standardizzata.</p>
                            <ul class="info-list mt-3">
                                <li><strong>Tool:</strong> Funzioni eseguibili, come cercare dati o lanciare un'azione.</li>
                                <li><strong>Resource:</strong> Contenuti o dati leggibili dal modello, ad esempio documenti o file.</li>
                                <li><strong>Prompt:</strong> Istruzioni riutilizzabili che guidano l'uso del contesto.</li>
                            </ul>
                        </article>
                    </div>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold">Tabella comparativa degli elementi MCP</h2>
                    <div class="mt-4 overflow-hidden rounded-2xl border border-slate-200/70">
                        <table class="tabella">
                            <caption>Tabella comparativa degli elementi MCP per tipologia di componente</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Tipologia MCP</th>
                                    <th scope="col">Obiettivo Principale</th>
                                    <th scope="col">Esempio di Attività</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Host/Client</td>
                                    <td>Gestire la connessione</td>
                                    <td>Aprire una sessione e richiedere il contesto al server</td>
                                </tr>
                                <tr>
                                    <td>Tool</td>
                                    <td>Eseguire azioni utili</td>
                                    <td>Chiamare una funzione per cercare un record o aggiornare un dato</td>
                                </tr>
                                <tr>
                                    <td>Resource</td>
                                    <td>Fornire dati al modello</td>
                                    <td>Leggere un file, una nota o una sorgente informativa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold">Esperienza d'uso e sviluppi futuri</h2>
                    <p class="mt-2">Con l'aumento degli assistenti AI, MCP sta diventando importante perché rende più semplice collegare modelli diversi alle stesse fonti di dati e agli stessi strumenti. In futuro questo approccio può favorire integrazioni più modulari, sicure e facili da mantenere.</p>
                </div>
            </div>
        </section>
    `
};


// ----- APPROFONDIMENTO MCP AVANZATO (pagina 2) -----
// Seconda vista di approfondimento: trasporto, sicurezza e integrazione dei server MCP.
const Info2View = {
    template: `
        <section class="page-shell space-y-6">
            <div class="hero-panel rounded-3xl p-8 md:p-10">
                <p class="kicker">Approfondimento avanzato</p>
                <h1 class="text-3xl md:text-4xl font-semibold mt-2">Trasporto, sicurezza e integrazione dei server MCP</h1>
                <p class="ciao mt-3 max-w-3xl">Per comprendere appieno il funzionamento di MCP, è utile osservare come passa il contesto tra applicazione, client e server, e come vengono protette le informazioni scambiate.</p>
            </div>

            <div class="section-card rounded-2xl p-6 md:p-8 space-y-6">
                <article>
                    <h2 class="text-2xl font-semibold">1. Trasporto delle richieste</h2>
                    <p class="mt-2">MCP definisce un modo ordinato per scambiare messaggi tra client e server. Questo aiuta a rendere prevedibile il flusso di richieste, risposte ed errori durante l'uso di strumenti esterni.</p>
                    <ul class="info-list mt-3">
                        <li><strong>Messaggi chiari:</strong> Ogni richiesta ha un obiettivo preciso.</li>
                        <li><strong>Risposte strutturate:</strong> Il server restituisce dati leggibili e coerenti.</li>
                        <li><strong>Gestione errori:</strong> I problemi vengono comunicati senza interrompere tutto il flusso.</li>
                    </ul>
                </article>

                <article>
                    <h2 class="text-2xl font-semibold">2. Sicurezza e controllo del contesto</h2>
                    <p class="mt-2">Uno dei vantaggi di MCP è che permette di controllare meglio quali informazioni vengono condivise con il modello. In questo modo l'applicazione può limitare il contesto ai dati davvero necessari e ridurre l'esposizione di informazioni sensibili.</p>
                </article>

                <article>
                    <h2 class="text-2xl font-semibold">3. Confronto tra componenti MCP</h2>
                    <div class="mt-4 overflow-hidden rounded-2xl border border-slate-200/70">
                        <table class="table table-bordered table-striped mb-0">
                            <caption>Elementi MCP, funzione e uso tipico</caption>
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Elemento MCP</th>
                                    <th scope="col">Funzione</th>
                                    <th scope="col">Uso tipico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Client</strong></td>
                                    <td>Invia richieste e gestisce il dialogo.</td>
                                    <td>Collegarsi a un server MCP per ottenere strumenti o dati.</td>
                                </tr>
                                <tr>
                                    <td><strong>Server</strong></td>
                                    <td>Espone capacità e risorse.</td>
                                    <td>Pubblicare tool, documenti e prompt per l'applicazione.</td>
                                </tr>
                                <tr>
                                    <td><strong>Host</strong></td>
                                    <td>Orchestra l'esperienza complessiva.</td>
                                    <td>Applicazione principale che controlla il contesto della sessione.</td>
                                </tr>
                                <tr>
                                    <td><strong>Tool</strong></td>
                                    <td>Esegue operazioni attive.</td>
                                    <td>Ricerca, aggiornamento o automazione di un'attività.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>

                <article>
                    <h2 class="text-2xl font-semibold">4. Integrazione nei progetti moderni</h2>
                    <p class="mt-2">MCP si inserisce bene nei progetti moderni perché separa il modello dal dettaglio dell'integrazione. Così lo stesso assistente può cambiare dati o strumenti senza riscrivere ogni volta la logica di collegamento.</p>
                </article>
            </div>
        </section>
    `
};

// Vista per gestire una lista utenti locale: aggiunta, modifica ed eliminazione.
const ModificaView = {
    data() {
        return {
            userList: [
                { username: 'admin', password: '123', cellulare: '3334455666' },
                { username: 'alberto_p', password: 'web', cellulare: '3409988777' }
            ],
            newUser: { username: '', password: '', cellulare: '' },
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
        <section class="page-shell space-y-6">
            <div class="hero-panel rounded-3xl p-8 md:p-10">
                <p class="kicker">Gestione utenti</p>
                <h1 class="text-3xl md:text-4xl font-semibold mt-2">Modifica dati utenti</h1>
                <p class="ciao mt-3 max-w-2xl">Qui puoi aggiungere, modificare ed eliminare utenti direttamente dal componente Vue in modo rapido e leggibile.</p>
            </div>

            <div class="section-card rounded-2xl p-6 md:p-8">
                <h2 class="text-2xl font-semibold mb-4">{{ editIndex === null ? 'Aggiungi nuovo utente' : 'Modifica utente' }}</h2>

                <div class="grid gap-4 md:grid-cols-3">
                    <div>
                        <label for="username" class="block mb-2 font-medium">Username</label>
                        <input id="username" v-model="newUser.username" type="text" class="form-control" placeholder="Inserisci username">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 font-medium">Password</label>
                        <input id="password" v-model="newUser.password" type="text" class="form-control" placeholder="Inserisci password">
                    </div>
                    <div>
                        <label for="cellulare" class="block mb-2 font-medium">Cellulare</label>
                        <input id="cellulare" v-model="newUser.cellulare" type="text" class="form-control" placeholder="Inserisci numero di cellulare">
                    </div>
                </div>

                <div class="mt-5 flex flex-wrap gap-3">
                    <button class="btn btn-primary" @click="saveUser">
                        {{ editIndex === null ? 'Aggiungi utente' : 'Salva modifiche' }}
                    </button>
                    <button v-if="editIndex !== null" class="btn btn-secondary" @click="resetForm">
                        Annulla modifica
                    </button>
                </div>
            </div>

            <div class="data-card rounded-2xl p-4 md:p-6">
                <div class="overflow-x-auto">
                    <table class="user-table table table-striped table-bordered mb-0">
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
                                    <button class="btn-edit" @click="editUser(index)" :aria-label="'Modifica credenziali utente ' + user.username">Modifica</button>
                                    <button class="btn-delete" @click="deleteUser(index)" :aria-label="'Elimina definitivamente utente ' + user.username">Elimina</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    `
};

// Template root dell'app Vue, con header, footer, router-view e pannello di accessibilità.
const AppShellTemplate = `
    <div class="min-h-screen">
        <a href="#main-content" class="sr-only sr-only-focusable">Salta al contenuto principale</a>

        <header class="sticky top-0 z-40 px-4 py-3 md:px-8">
            <nav class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-soft backdrop-blur" aria-label="Menu principale">
                <router-link to="/" class="text-lg font-semibold text-white" aria-label="Vai alla Home">Progetto</router-link>

                <div class="flex flex-wrap items-center gap-2">
                    <router-link class="rounded-full px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10" to="/info" :class="{ 'bg-white/15 text-white': $route.path === '/info' }">Approfondimento-1</router-link>
                    <router-link class="rounded-full px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10" to="/info2" :class="{ 'bg-white/15 text-white': $route.path === '/info2' }">Approfondimento-2</router-link>
                    <router-link class="rounded-full px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10" to="/modifica" :class="{ 'bg-white/15 text-white': $route.path === '/modifica' }">Modifica dati</router-link>
                    <router-link class="rounded-full px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10" to="/json" :class="{ 'bg-white/15 text-white': $route.path === '/json' }">Database .json</router-link>
                </div>

                <button class="btn-theme-toggle"
                        @click="toggleDarkMode"
                        :aria-label="isDarkMode ? 'Passa a modalità chiara' : 'Passa a modalità scura'">
                    <span aria-hidden="true">{{ isDarkMode ? '☀️' : '🌙' }}</span>
                </button>
            </nav>
        </header>

        <main id="main-content" class="container mx-auto px-4 py-6 md:py-8">
            <router-view></router-view>
        </main>

        <footer class="mt-8 border-t border-white/10 py-6 text-center text-sm">
            <div class="container mx-auto px-4">
                <p class="mb-0">© 2026 Progetto di Salvatore Ciaramidaro</p>
            </div>
        </footer>

        <button class="accessibility-btn"
                @click="showAccessibilityPanel = !showAccessibilityPanel"
                :aria-expanded="showAccessibilityPanel.toString()"
                aria-controls="accessibility-panel"
                aria-label="Apri pannello accessibilità"
                title="Accessibilità">
            <span aria-hidden="true">♿</span>
        </button>

        <div id="accessibility-panel"
             class="accessibility-panel rounded-2xl"
             :class="{ hidden: !showAccessibilityPanel }"
             :aria-hidden="(!showAccessibilityPanel).toString()"
             role="region"
             aria-label="Opzioni di accessibilità">

            <button class="accessibility-panel-close"
                    @click="showAccessibilityPanel = false"
                    aria-label="Chiudi pannello accessibilità">
                <span aria-hidden="true">✕</span>
            </button>

            <h2 class="text-lg font-semibold">⚙️ Accessibilità</h2>

            <div class="font-size-control">
                <span id="font-label">Dimensione testo:</span>
                <button @click="decreaseFontSize"
                        :disabled="fontSizeLevel <= 0"
                        aria-label="Diminuisci dimensione del testo">-</button>
                <span class="font-size-value" aria-live="polite" aria-atomic="true" aria-labelledby="font-label">
                    {{ fontSizeLevel === 0 ? '100%' : (100 + fontSizeLevel * 15) + '%' }}
                </span>
                <button @click="increaseFontSize"
                        :disabled="fontSizeLevel >= 3"
                        aria-label="Aumenta dimensione del testo">+</button>
            </div>

            <div class="accessibility-option">
                <input type="checkbox" id="high-contrast" :checked="highContrast" @change="toggleHighContrast">
                <label for="high-contrast">🎨 Alto Contrasto</label>
            </div>

            <div class="accessibility-option">
                <input type="checkbox" id="reduced-motion" :checked="reducedMotion" @change="toggleReducedMotion">
                <label for="reduced-motion">⚡ Riduci Animazioni</label>
            </div>

            <div class="accessibility-option">
                <input type="checkbox" id="dyslexia-font" :checked="dyslexiaFont" @change="toggleDyslexiaFont">
                <label for="dyslexia-font">📖 Font Dislessia-friendly</label>
            </div>

            <div class="accessibility-option">
                <input type="checkbox" id="underline-links" :checked="underlineLinks" @change="toggleUnderlineLinks">
                <label for="underline-links">🔗 Sottolinea Link</label>
            </div>
        </div>
    </div>
`;

// Vista che carica un file JSON esterno, lo filtra per cognome e mostra i risultati.
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
        <section class="page-shell space-y-6">
            <div class="hero-panel rounded-3xl p-8 md:p-10">
                <p class="kicker">Database JSON</p>
                <h1 class="text-3xl md:text-4xl font-semibold mt-2">Database .json</h1>
                <p class="ciao mt-3 max-w-2xl">La vista legge i dati da <strong>dati.json</strong> e li mostra sia in tabella sia in formato JSON, con un filtro per cognome.</p>
            </div>

            <div class="section-card rounded-2xl p-6 md:p-8">
                <label for="searchCognome" class="block mb-2 font-medium">Cerca per cognome</label>
                <input id="searchCognome" v-model="searchCognome" type="text" class="form-control" placeholder="Scrivi un cognome...">
            </div>

            <div aria-live="polite" class="space-y-4">
                <div v-if="loading" class="alert alert-info">Caricamento dati in corso...</div>
                <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

                <template v-else>
                    <div class="alert alert-success">
                        Record caricati: <strong>{{ playersCount }}</strong>
                    </div>

                    <div v-if="!filteredPlayers.length" class="alert alert-warning">
                        Nessun record trovato per il cognome inserito.
                    </div>

                    <div v-if="filteredPlayers.length" class="data-card rounded-2xl p-4 md:p-6">
                        <div class="overflow-x-auto">
                            <table class="table table-bordered table-striped mb-0">
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
                    </div>

                    <details class="data-card rounded-2xl p-4 md:p-6">
                        <summary class="mb-2 font-semibold">Mostra JSON completo</summary>
                        <pre class="mt-3 rounded-xl border border-slate-200/70 bg-slate-950/95 p-4 text-sm text-slate-100" style="white-space: pre-wrap;">{{ jsonPreview }}</pre>
                    </details>
                </template>
            </div>
        </section>
    `
};

// Configurazione del router: ogni path associa una vista diversa.
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

// Istanza principale dell'app: contiene stato globale e comandi per l'accessibilità.
const app = createApp({
    template: AppShellTemplate,
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
        // Attiva o disattiva il tema scuro e lo salva nel localStorage.
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
        // Aumenta la dimensione del testo fino al limite massimo.
        increaseFontSize() {
            if (this.fontSizeLevel < 3) { this.fontSizeLevel++; this.applyFontSize(); }
        },
        // Riduce la dimensione del testo fino al livello base.
        decreaseFontSize() {
            if (this.fontSizeLevel > 0) { this.fontSizeLevel--; this.applyFontSize(); }
        },
        // Applica la classe CSS corrispondente al livello scelto e salva la preferenza.
        applyFontSize() {
            const root = document.documentElement;
            root.classList.remove('font-size-large', 'font-size-xlarge', 'font-size-huge');
            if      (this.fontSizeLevel === 1) root.classList.add('font-size-large');
            else if (this.fontSizeLevel === 2) root.classList.add('font-size-xlarge');
            else if (this.fontSizeLevel >= 3)  root.classList.add('font-size-huge');
            localStorage.setItem('fontSizeLevel', this.fontSizeLevel);
        },
        // Abilita o disabilita l'alto contrasto tramite classe HTML.
        toggleHighContrast() {
            this.highContrast = !this.highContrast;
            document.documentElement.classList.toggle('high-contrast', this.highContrast);
            localStorage.setItem('highContrast', this.highContrast);
        },
        // Riduce le animazioni per migliorare la leggibilità e il comfort visivo.
        toggleReducedMotion() {
            this.reducedMotion = !this.reducedMotion;
            document.documentElement.classList.toggle('reduced-motion', this.reducedMotion);
            localStorage.setItem('reducedMotion', this.reducedMotion);
        },
        // Attiva un font più adatto alla dislessia.
        toggleDyslexiaFont() {
            this.dyslexiaFont = !this.dyslexiaFont;
            document.documentElement.classList.toggle('dyslexia-font', this.dyslexiaFont);
            localStorage.setItem('dyslexiaFont', this.dyslexiaFont);
        },
        // Forza o rimuove la sottolineatura dei link per renderli più riconoscibili.
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
    // Al caricamento della pagina ripristina tutte le preferenze memorizzate.
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