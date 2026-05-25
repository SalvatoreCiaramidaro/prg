// app.js
const { createApp } = Vue;

createApp({
    data() {
        return {
            // 1. Gestione della navigazione (SPA)
            currentView: 'home',

            // 2. Dark mode state
            isDarkMode: localStorage.getItem('theme') === 'dark',

            // 3. Database locale utenti
            userList: [
                { username: 'admin', password: '123', cellulare: '3334455666' },
                { username: 'alberto_p', password: 'web', cellulare: '3409988777' }
            ],

            // Oggetto collegato ai campi di input del form utenti
            newUser: {
                username: '',
                password: '',
                cellulare: ''
            },

            // Variabile di controllo per la modifica utenti
            editIndex: null,

            // 4. Variabili per i dati PALLAVOLO dal JSON
            giocatori: [],
            searchQuery: '' // Per il filtro di ricerca dinamico
        }
    },
    methods: {
        // Funzione per cambiare sezione
        setView(viewName) {
            this.currentView = viewName;
        },

        // --- LOGICA DARK MODE ---
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

        // --- LOGICA UTENTI ---
        saveUser() {
            // Controllo che i campi principali non siano vuoti
            if (this.newUser.username.trim() === '' || this.newUser.password.trim() === '') {
                alert("Username e Password sono obbligatori!");
                return;
            }

            // Controllo validità Numero di Telefono (solo cifre, tra 9 e 11)
            const phoneRegex = /^[0-9]{9,11}$/;
            if (this.newUser.cellulare && !phoneRegex.test(this.newUser.cellulare)) {
                alert("Inserisci un numero di cellulare valido (solo cifre, tra 9 e 11)!");
                return;
            }

            if (this.editIndex === null) {
                // Inseriamo una copia dei dati nell'array
                this.userList.push({ ...this.newUser });
            } else {
                // Sovrascriviamo l'utente all'indice selezionato
                this.userList[this.editIndex] = { ...this.newUser };
                this.editIndex = null;
            }
            this.resetForm();
        },

        deleteUser(index) {
            if (confirm("Vuoi davvero eliminare l'utente " + this.userList[index].username + "?")) {
                this.userList.splice(index, 1);
                // Se stavi modificando proprio l'utente eliminato, resetta il form
                if (this.editIndex === index) {
                    this.resetForm();
                }
            }
        },

        editUser(index) {
            this.editIndex = index;
            this.newUser = { ...this.userList[index] };
        },

        resetForm() {
            this.newUser = { username: '', password: '', cellulare: '' };
            this.editIndex = null;
        },

        // --- LOGICA: CARICAMENTO DATI PALLAVOLO ---
        caricaGiocatori() {
            fetch('dati.json')
                .then(response => {
                    if (!response.ok) throw new Error("File JSON non trovato o errore di rete");
                    return response.json();
                })
                .then(data => {
                    this.giocatori = data; // Inserisce i 100 giocatori nell'array
                    console.log("Database pallavolo caricato correttamente. Totale giocatori:", data.length);
                    console.log("Primo giocatore:", data[0]);
                })
                .catch(error => {
                    console.error("Errore nel fetch:", error);
                });
        },

        // --- LOGICA: RICERCA COGNOMI ---
        ricercaGiocatori() {
            if (!this.searchQuery.trim()) {
                return this.giocatori;
            }
            const risultati = this.giocatori.filter(item => 
                item.cognome && item.cognome.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            console.log(`Ricerca "${this.searchQuery}": ${risultati.length} risultati trovati`);
            return risultati;
        }
    },
    // Esegue all'avvio dell'app
    mounted() {
        this.caricaGiocatori();
        // Applica il tema salvato
        if (this.isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}).mount('#app');