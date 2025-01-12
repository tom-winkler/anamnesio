# Anamnesio

Anamnesio ist eine moderne Open-Source-Anwendung zur digitalen Erfassung von Patientenanamnese. Die Anwendung ist webbasiert, für Tablets optimiert, DSGVO-konform und bietet einfache Integrationsmöglichkeiten in bestehende Praxismanagementsysteme.

## Features
- **Dynamische Anamnese-Formulare**: Anpassbar an die Anforderungen verschiedener Praxen.
- **DSGVO-konform**: Datenschutz und Sicherheit stehen im Vordergrund.
- **Web- und Tablet-Unterstützung**: Responsives Design für verschiedene Endgeräte.
- **Integration-ready**: Schnittstellen für Praxismanagementsysteme (z. B. über REST- oder FHIR-APIs).
- **Benutzerfreundlichkeit**: Intuitive Benutzeroberfläche für Patienten und Praxen.

## Tech-Stack
- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js (Express)
- **Datenbank**: PostgreSQL oder MongoDB
- **Hosting**: Netlify (Frontend), Heroku/Render (Backend)
- **Versionierung**: GitHub

## Erste Schritte

### Voraussetzungen
- Node.js (>=14.x)
- NPM oder Yarn
- Git

### Installation
1. Klone das Repository:
   ```bash
   git clone https://github.com/<dein-benutzername>/anamnesio.git
   cd anamnesio
   ```
2. Installiere die Abhängigkeiten:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
3. Starte die Entwicklungsserver:
   - **Frontend**:
     ```bash
     cd frontend
     npm start
     ```
   - **Backend**:
     ```bash
     cd backend
     node app.js
     ```

## Projektstruktur
```
Anamnesio/
├── frontend/
│   ├── src/
│   │   ├── components/      # React-Komponenten
│   │   ├── pages/           # Anamnese-Seiten
│   │   ├── App.js           # Einstiegspunkt der App
│   │   └── index.js         # Render-Root
│   └── package.json         # Abhängigkeiten
├── backend/
│   ├── routes/              # API-Endpunkte
│   ├── app.js               # Einstiegspunkt für Node.js
│   └── package.json         # Abhängigkeiten
├── docs/                    # Dokumentation
│   └── README.md            # Projektübersicht
└── LICENSE                  # Open-Source-Lizenz (z. B. MIT)
```

## Mitwirken
Wir freuen uns über Beiträge aus der Community! Lies unsere [CONTRIBUTING.md](docs/CONTRIBUTING.md), um zu erfahren, wie du mithelfen kannst.

## Lizenz
Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).

---

### Kontakt
Wenn du Fragen oder Vorschläge hast, erreichst du uns über GitHub Issues oder per E-Mail unter support@anamnesio.org.
