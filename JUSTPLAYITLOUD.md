# Guide complet pour créer un Poste de Travail Plaidoyer Citoyen

**La transformation numérique du plaidoyer citoyen dispose aujourd'hui d'un écosystème technique mature et d'un cadre réglementaire favorable.** Ce guide synthétise les meilleures pratiques, plateformes open source, standards d'interopérabilité et ressources francophones pour créer une application web de référence transformant les 15 outils méthodologiques de Justice et Paix en outil numérique professionnel. L'architecture recommandée privilégie une approche **offline-first**, **sans dépendances lourdes**, et **conforme RGPD** — permettant aux associations d'éducation permanente de déployer un outil accessible à tous les publics.

---

## Les plateformes civic tech de référence à analyser

Cinq plateformes open source dominent l'écosystème mondial de la participation citoyenne, chacune offrant des modules réutilisables et des architectures documentées.

**Decidim** (Barcelone) s'impose comme la référence européenne avec **1 700+ étoiles GitHub** et des déploiements majeurs en Belgique (Uccle via monopinion.belgium.be, Brussels Region) et en France (Toulouse, Angers avec 9 400 participants, Lille Métropole, Commission Nationale du Débat Public). Son architecture Ruby on Rails propose une approche modulaire avec des gems séparés : decidim-proposals pour les propositions géolocalisées, decidim-budgets pour les budgets participatifs, decidim-initiatives pour les pétitions avec collecte de signatures, et decidim-accountability pour le suivi des résultats. Son **API GraphQL** permet l'export de données ouvertes et l'intégration avec d'autres systèmes. Open Source Politics (France) assure le support francophone.

**Consul Democracy** (Madrid), lauréat du **Prix du Service Public de l'ONU 2018**, touche 90 millions de citoyens via 135+ institutions dans 35 pays. Sa documentation technique complète (docs.consulproject.org) et son module de législation collaborative — permettant de commenter les projets de loi paragraphe par paragraphe — représente une fonctionnalité particulièrement pertinente pour le plaidoyer.

**Loomio** se distingue par son focus sur la **délibération et la prise de décision consensuelle** avec quatre options de réponse (Accord, Désaccord, Abstention, Blocage) et des sondages avancés (choix multiples, vote par points, classement). Son hébergement européen conforme RGPD (loomio.eu) et ses intégrations Slack/Teams en font un outil adapté aux coalitions d'associations.

**Your Priorities** (Citizens Foundation, Islande) intègre les fonctionnalités d'**IA les plus avancées** : recommandations de contenu, détection de toxicité, traduction automatique en 200 langues. Le système de débat point-contrepoint (arguments POUR et CONTRE sans commentaires directs) structure les délibérations de manière productive. Classée **#1 sur PeoplePowered 2025**, elle sert 2 millions d'utilisateurs dans 45 pays.

| Plateforme | Stack technique | API | Spécialité | GitHub |
|------------|----------------|-----|------------|--------|
| Decidim | Ruby on Rails, PostgreSQL | GraphQL | Modularité, budgets participatifs | github.com/decidim/decidim |
| Consul | Ruby on Rails, PostgreSQL | REST | Législation collaborative | github.com/consuldemocracy/consuldemocracy |
| Loomio | Ruby on Rails, Vue.js | REST | Délibération consensuelle | github.com/loomio/loomio |
| Your Priorities | Node.js, PostgreSQL | SDK complet | IA et traduction | github.com/CitizensFoundation/your-priorities-app |

---

## Standards d'interopérabilité pour les données citoyennes

L'adoption de standards ouverts garantit la pérennité des données et l'interopérabilité avec l'écosystème existant.

### Formats d'échange essentiels

**JSON-LD** (recommandation W3C, version 1.1) constitue le format privilégié pour les données liées. Son mécanisme `@context` permet d'ajouter une couche sémantique aux données JSON classiques, facilitant l'intégration avec Schema.org et ActivityPub (réseaux sociaux fédérés). Le standard **DCAT version 3** (2024) définit le vocabulaire RDF pour décrire les catalogues de données et forme la base de DCAT-AP utilisé par tous les portails open data européens.

**CSV on the Web (CSVW)** ajoute des métadonnées aux fichiers CSV via un fichier JSON-LD associé, permettant la validation des types et l'internationalisation. Pour les données géographiques (cartographie des acteurs), **GeoJSON** (RFC 7946) s'impose comme standard avec support natif dans tous les outils de visualisation.

### Schémas de données civiques

**Popolo** (popoloproject.com) définit le standard international pour les données de gouvernance ouverte : personnes, organisations, mandats, votes, événements. Adopté par mySociety, Sunlight Foundation, OpenPolis et utilisé par l'API Google Civic Information, il offre une taxonomie éprouvée pour modéliser les acteurs du plaidoyer.

**Open Civic Data (OCD)** étend Popolo avec des identifiants universels pour les juridictions politiques (OCD-IDs), les divisions administratives, et les documents législatifs. Sa documentation (open-civic-data.readthedocs.io) fournit des schémas Python réutilisables.

### Standards documentaires pour l'archivage

Pour les exports de documents, trois formats garantissent la pérennité :
- **ODF v1.4** (ISO/IEC 26300) pour les documents bureautiques éditables
- **PDF/A-3** (ISO 19005-3) pour l'archivage avec possibilité d'embarquer des fichiers (XML, CSV)
- **EPUB 3.3** (W3C) pour les documents accessibles et reflowables

L'outil **veraPDF** (open source) permet de valider la conformité PDF/A avant archivage.

---

## Design inclusif pour les non-techniciens

L'accessibilité constitue un impératif légal en Belgique (loi du 19 juillet 2018, EN 301 549) et un principe fondamental de l'éducation permanente.

### Conformité WCAG 2.1 niveau AA

Les quatre principes POUR (Perceivable, Operable, Understandable, Robust) se déclinent en exigences concrètes : **contraste de couleur 4.5:1** minimum, navigation complète au clavier, messages d'erreur explicites, compatibilité avec les lecteurs d'écran (JAWS, NVDA, VoiceOver). Le label **AnySurfer** (anysurfer.be) offre une certification spécifique au contexte belge.

### Systèmes de design gouvernementaux réutilisables

Trois systèmes de design offrent des composants accessibles prêts à l'emploi :

**GOV.UK Design System** (design-system.service.gov.uk) : référence mondiale avec 10 principes de design, composants WCAG 2.2 AA, patterns complets pour formulaires complexes. Le composant **Task List** structure les parcours multi-étapes comme les 15 outils du plaidoyer.

**DSFR - Système de Design de l'État français** (systeme-de-design.gouv.fr) : **obligatoire depuis juillet 2023** pour les sites gouvernementaux français, il offre 50+ composants, une bibliothèque Figma, et une conformité RGAA intégrée. Son GitHub (github.com/GouvernementFR/dsfr) fournit le code source.

**USWDS** (designsystem.digital.gov) : 40+ composants avec système de design tokens pour la personnalisation thématique, patterns détaillés pour formulaires accessibles et progressive disclosure.

### Patterns d'interface pour le plaidoyer citoyen

**Progressive disclosure** : présenter uniquement les informations essentielles initialement, avec expansion à la demande. Le pattern wizard/step indicator guide l'utilisateur à travers les 15 outils méthodologiques sans surcharge cognitive.

**Langage clair** : phrases actives de moins de 20 mots, vocabulaire familier, niveau de lecture secondaire inférieur. Harvard Digital Accessibility fournit des guidelines détaillées.

**Gamification mesurée** : NYC Civic Engagement Commission déploie des badges (Proposer, Attendee, Connector, Ambassador) augmentant l'engagement de **100%** selon Harvard Business Review. L'important est de lier les badges à des actions significatives, pas simplement à l'activité.

---

## Méthodologies de plaidoyer à numériser

### Les 15 outils Justice et Paix structurés en VOIR-JUGER-AGIR

Le **Petit Guide du Plaidoyer Citoyen** (justicepaix.be/wp-content/uploads/2021/10/20200110_Guide_plaidoyer_citoyen_VD.pdf) organise 15 outils en trois phases :

**VOIR (Analyse)** : Domino du changement (vision), Profil d'engagement (auto-évaluation), Fleur de pouvoir (analyse des privilèges et identités), Cartographie des acteurs (stakeholder mapping).

**JUGER (Stratégie)** : Théorie du changement (quadrants interne/externe × individuel/collectif), Analyse SWOT, Analyse PESTEL, Arbre à problème/objectif, Les 5 Pourquoi (root cause analysis).

**AGIR (Action)** : Avec/sans/contre le pouvoir (trois modes d'action), Objectifs SMART, Cibles et alliances, Construction de message (5 composants : accroche, problème, importance, cible, action demandée), Check-list rencontre, Suivi-évaluation.

### Ressources méthodologiques complémentaires

**VoxPublic** (voxpublic.org) offre une bibliothèque de guides téléchargeables en français :
- "Bien cartographier pour mieux cibler" (2017) — méthodologie de power mapping
- "Guide du plaidoyer parlementaire" (2018) — best practices avec 6-pm
- "Migrations et asile : la pratique du plaidoyer" (2019) — manuel complet

**BOND UK** (bond.org.uk/resources/advocacy-toolkit/) publie un toolkit de 80 études de cas avec section M&E du plaidoyer (p.212-224) et templates de journal de bord.

**INTRAC** fournit des outils PDF pour l'analyse de pouvoir (intrac.org/app/uploads/2022/06/Advocacy-Tool-Power-and-stakeholder-analysis-mapping.pdf) et le M&E du plaidoyer (intrac.org/app/uploads/2020/07/ME-tools-for-advocacy-work.pdf).

### Most Significant Change (MSC) pour l'évaluation participative

La méthodologie MSC de Rick Davies et Jess Dart (mande.co.uk/special-issues/most-significant-change-msc/) propose une évaluation qualitative en 10 étapes basée sur la collecte d'histoires de changement. BetterEvaluation combine cette approche avec la vidéo participative pour des évaluations plus inclusives.

---

## Architecture technique recommandée

### Stack léger sans dépendances lourdes

**Alpine.js** (~15KB) offre une syntaxe Vue-like avec directives HTML pour la réactivité sans build step :

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<div x-data="{ step: 1, tools: [] }">
  <button @click="step++" x-show="step < 15">Suivant</button>
</div>
```

**Petite-vue** (6KB) constitue une alternative encore plus légère, compatible Vue, idéale pour les applications simples.

**Web Components natifs** permettent de créer des composants encapsulés standards (greeting-message, power-flower, stakeholder-map) réutilisables sans framework.

**CSS Custom Properties** gèrent le theming sans préprocesseur :

```css
:root { --primary: #0066cc; --spacing: 1rem; }
[data-theme="dark"] { --primary: #66b3ff; }
```

### Stockage offline avec IndexedDB

La bibliothèque **idb** (2KB, unpkg.com/idb@7/build/umd.js) simplifie l'API IndexedDB avec Promises :

```javascript
const db = await openDB('plaidoyer-app', 1, {
  upgrade(db) {
    db.createObjectStore('campaigns', { keyPath: 'id' });
    db.createObjectStore('contacts', { keyPath: 'id' });
    db.createObjectStore('documents', { keyPath: 'id' });
  }
});
```

Le **Service Worker** assure le fonctionnement hors-ligne avec stratégie cache-first pour les assets et network-first pour les données dynamiques.

### Export multi-formats en JavaScript pur

| Bibliothèque | Usage | CDN |
|--------------|-------|-----|
| **jsPDF** 2.5.x | Génération PDF | cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js |
| **docx** 9.5.x | Documents Word | npm install docx |
| **SheetJS** 0.20.3 | Excel/CSV | cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js |
| **html2canvas** | Capture d'écran | cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js |

### Visualisations pour le plaidoyer

**Mermaid.js** (78k+ étoiles GitHub) génère des diagrammes depuis du texte Markdown — idéal pour les arbres à problèmes et théories du changement :

```html
<pre class="mermaid">
flowchart TD
    A[Problème central] --> B[Cause 1]
    A --> C[Cause 2]
    B --> D[Cause racine]
</pre>
```

**Cytoscape.js** (js.cytoscape.org) visualise les réseaux d'acteurs avec layouts automatiques (force-directed, hiérarchique) et interactions (zoom, pan, sélection).

**Chart.js** 4.4.x couvre les graphiques standards (barres, lignes, camemberts) pour le suivi-évaluation.

### Progressive Web App (PWA)

Le **manifest.json** minimal :

```json
{
  "name": "Poste de Travail Plaidoyer Citoyen",
  "short_name": "Plaidoyer",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#0066cc",
  "icons": [
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

L'installation locale transforme l'application web en expérience native sur mobile et desktop.

---

## Écosystème belge et francophone

### Cadre réglementaire de l'Éducation Permanente

Le **Décret du 17 juillet 2003** (modifié août 2021) structure la reconnaissance des ~280 ASBL employant ~2 300 ETP. Quatre axes définissent les activités éligibles :
- **Axe 1** : Participation, éducation et formation citoyenne
- **Axe 2** : Formation d'animateurs et acteurs associatifs
- **Axe 3** : Production d'analyses, études, outils pédagogiques
- **Axe 4** : Actions de sensibilisation

Le portail educationpermanente.cfwb.be et la plateforme SUBside gèrent les demandes de reconnaissance.

### Réseaux et fédérations clés

**FESEFA** (fesefa.be) représente les employeurs du secteur EP, reconnue officiellement depuis janvier 2021. **Culture et Démocratie** (cultureetdemocratie.be) travaille sur les droits culturels depuis 1993 avec reconnaissance EP depuis 2010. **Lire et Écrire** développe un **Digital Literacy Box** (lancement 2025) et a publié un référentiel compétences numériques en mai 2024.

**CNCD-11.11.11** (cncd.be) fédère 90+ ONG et propose le kit pédagogique "(In)égalités mondiales" avec 19 outils créés par 15 organisations — disponible gratuitement pour les éducateurs belges (education@cncd.be).

### Plateformes belges déployées

**CitizenLab** (devenu Go Vocal), startup bruxelloise fondée en 2015, équipe 400+ villes dont Leuven, Hasselt, Liège, Brussels Region avec propositions, sondages, budgets participatifs. **Fluicity** est déployée à Wavre, Woluwe-Saint-Pierre (170 idées, 16 implémentées), Etterbeek, et a géré la consultation Get Up Wallonia (9 370 citoyens, 51 000 contributions).

La **Brussels Citizens' Assembly** (assemblee.brussels) utilise le tirage au sort citoyen pour 4 cycles thématiques complétés (logement, emploi, environnement).

### Données ouvertes disponibles

**data.gov.be** : ~20 000 datasets fédéraux, régionaux et locaux sous licence CC0, API disponible.

**Belgian Federal Parliament API** (parlement.thundr.be) : données parlementaires machine-readable depuis 2007, endpoint JSON ouvert.

**European Parliament Open Data** (data.europarl.europa.eu) : API REST pour calendrier des sessions, composition des commissions, documents pléniers, votes — en 24 langues, formats RDF/JSON-LD.

**Répertoire National des Élus (France)** : data.gouv.fr/fr/datasets/donnees-du-repertoire-national-des-elus/ — maires, conseillers, députés, sénateurs mis à jour trimestriellement.

---

## Fonctionnalités avancées à intégrer

### Templates de documents avec Handlebars

Le moteur **Handlebars.js** (handlebarsjs.com) compile des templates avec logique conditionnelle et boucles :

```javascript
const template = Handlebars.compile(`
Madame/Monsieur {{titre}} {{nom}},

{{#each enjeux}}
• {{this}}
{{/each}}

Cordialement,
{{signataire}}
`);
```

Combiné avec **i18next** (i18next.com) pour l'internationalisation FR/NL/EN, il permet des documents adaptés au contexte linguistique belge.

### Calendrier d'opportunités politiques

Intégrer les APIs parlementaires pour afficher :
- Sessions plénières du Parlement européen (via data.europarl.europa.eu)
- Réunions des commissions fédérales belges (parlement.thundr.be)
- Échéances législatives régionales

La bibliothèque **vis.js Timeline** (visjs.github.io/vis-timeline/) visualise ces événements de manière interactive avec zoom/pan.

### Collaboration en temps réel sans serveur

**Yjs** (yjs.dev) implémente les CRDTs (Conflict-free Replicated Data Types) pour l'édition collaborative :

```javascript
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

const doc = new Y.Doc();
const provider = new WebrtcProvider('plaidoyer-room', doc);
const sharedText = doc.getText('lettre-commune');
```

Le transport **WebRTC peer-to-peer** (via y-webrtc) évite tout serveur central — les participants se connectent directement via un lien de partage.

### Intégration réseaux sociaux

**Open Graph meta tags** garantissent un affichage optimal lors du partage :

```html
<meta property="og:title" content="Pétition : Climat maintenant" />
<meta property="og:image" content="/images/petition-climat.jpg" />
<meta property="og:description" content="Rejoignez 10 000 citoyens..." />
```

Les **UTM parameters** (utm_source, utm_medium, utm_campaign) permettent de tracer l'origine du trafic par canal (newsletter, Facebook, Twitter).

---

## Sécurité et conformité RGPD

### Chiffrement côté client

L'**API Web Crypto** native permet le chiffrement AES-GCM sans dépendance externe :

```javascript
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
  keyMaterial,
  { name: 'AES-GCM', length: 256 },
  false, ['encrypt', 'decrypt']
);
```

Les données sensibles (contacts d'élus personnels, notes stratégiques) sont chiffrées avant stockage IndexedDB.

### Principes RGPD intégrés

**Minimisation des données** : collecter uniquement les champs nécessaires. **Portabilité** (Article 20) : export JSON de toutes les données utilisateur. **Droit à l'effacement** (Article 17) : suppression complète via `indexedDB.deleteDatabase()`.

Le mode **anonyme local-only** permet d'utiliser l'application sans aucune transmission de données — tout reste sur l'appareil.

---

## Ressources pédagogiques francophones

### Outils Framasoft pour l'animation

L'écosystème **Framasoft** (framasoft.org) offre des alternatives libres aux outils propriétaires :
- **Framapad** : écriture collaborative temps réel
- **Framadate** : planification de réunions
- **Framaforms** : formulaires et sondages
- **Framindmap** : cartes mentales collaboratives
- **Mobilizon** : gestion d'événements et groupes

Le réseau **CHATONS** (~100 structures) propose des services numériques avec accompagnement en éducation populaire.

### Formation au plaidoyer

**Oxfam France** propose la formation "Le plaidoyer citoyen de A à Z" (oxfamfrance.org/agir-oxfam/formation-le-plaidoyer-citoyen-de-a-a-z/).

**Amnesty International France** offre un module digital de 1h30-2h "Quelques outils pour militer" (amnesty.fr/formation-quelques-outils-pour-militer) couvrant débat, plaidoyer, militantisme en ligne.

**Dicopart** (dicopart.fr) fournit un dictionnaire académique de la participation avec définitions rigoureuses des concepts.

---

## Conclusion et recommandations d'implémentation

Ce guide démontre qu'un **Poste de Travail Plaidoyer Citoyen** professionnel peut être construit avec des technologies légères, des standards ouverts, et des ressources francophones existantes. Les trois priorités d'implémentation :

**Phase 1 — Socle technique** : PWA offline-first avec Alpine.js, IndexedDB via idb, export PDF/DOCX/XLSX. Intégration des 15 outils Justice et Paix sous forme de formulaires interactifs avec sauvegarde locale.

**Phase 2 — Visualisations** : Mermaid.js pour arbres à problèmes et théories du changement, Cytoscape.js pour cartographie des acteurs avec calcul automatique de centralité et pouvoir, Chart.js pour tableaux de bord de suivi.

**Phase 3 — Collaboration et données** : Intégration Yjs pour édition collaborative, connexion aux APIs parlementaires belges et européennes, templates multilingues avec Handlebars et i18next.

L'hébergement sur GitHub Pages ou Netlify (gratuit) avec domaine personnalisé permet un déploiement sans coût d'infrastructure. Le code sous licence AGPL-3.0 (comme Decidim) garantit le caractère libre et la contribution communautaire. Cette architecture place l'outil dans la lignée des plateformes civic tech de référence tout en répondant aux spécificités de l'éducation permanente francophone.
