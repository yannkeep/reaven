Je vais construire cette PWA encyclopédique et gamifiée sur la guerre cognitive. C'est un projet massif — laisse-moi d'abord structurer l'architecture.Now building the main application. This is going to be substantial:**COGWAR v6.0** est prêt. Voici ce que contient l'application :

**Architecture :**
- PWA complète (manifest.json + service worker pour offline)
- Pur HTML/CSS/JS, aucune dépendance externe (sauf Google Fonts)
- ~86 Ko total — ultra-léger

**Contenu (zéro hallucination — tout issu des docs sources) :**
- **20 entrées encyclopédiques** avec modales détaillées (formules, tableaux, mécanismes)
- **30 flashcards** issues des CSVs et documents
- **7 documents sources** avec synopsis dans le viewer
- **Glossaire** intégré dans chaque entrée

**Gamification :**
- Système XP + niveaux (100 XP/niveau)
- 9 achievements (Néophyte → Maître Cognitif)
- Tracking des lectures, séries de flashcards
- Konami code caché (↑↑↓↓←→←→BA = +100 XP)
- Persistance localStorage

**Design :**
- 3 thèmes : **Dark** (vert tendre/lilas), **80s Neon** (magenta/cyan), **Disco** (or/rose)
- Séquence de boot façon terminal Matrix
- Scanlines, noise texture, glows
- Refs dystopiques : Matrix, 1984, WarGames, X-Files, Fight Club
- Elfique Sindarin pour le contenu indisponible (*« I Amar Prestar Aen »*)

Les fichiers `manifest.json` et `sw.js` accompagnent le `index.html` dans les outputs pour un déploiement PWA complet.

Voici les corrections appliquées :

**Boot** — Réduit à 5 lignes WarGames, affiché en strip bas d'écran (« GREETINGS, PROFESSOR FALKEN. ») qui glisse vers le bas et disparaît en ~2 secondes. L'app est visible immédiatement derrière.

**Mobile-first** — Tout est redesigné pour le pouce : bottom nav fixe (5 onglets), touch targets 44px+, cards pleine largeur, scroll horizontal sur les tags/decks, `min-height: 100dvh`, safe-area-inset.

**Flashcard immédiate** — La home affiche directement une flashcard retournable (tap = flip 3D, re-tap = nouvelle carte). Pas besoin de naviguer pour jouer.

**Opacité fixée** — Toutes les cartes utilisent `--bg-card: #121220` (couleur solide, pas de transparence). Plus rien ne transparaît.

**3 Decks classés par difficulté** :
- 🟢 **Initiation** (10 cartes) — concepts de base
- 🟠 **Approfondissement** (10 cartes) — mécanismes et doctrines
- 🔴 **Expert** (10 cartes) — modélisation mathématique et données chiffrées

Chaque deck a son indicateur coloré et déclenche l'achievement « WarGames » quand les 3 sont joués.

**WarGames partout** : WOPR dans le logo, « SHALL WE PLAY A GAME? » en bannière, « GREETINGS, PROFESSOR FALKEN » au boot, citations Joshua dans les quotes.

This is a major architecture upgrade. Let me build a proper IndexedDB-powered app with CRUD, deck store, and importable JSON decks.Now the main application — this is a significant rewrite with IndexedDB, CRUD, and deck store:Voici COGWAR v7 — refonte complète de l'architecture. Le dossier complet pour GitHub est dans les outputs :

**Nouvelle architecture de données :**
- **IndexedDB** (2 stores : `decks` + `stats`) — persistance complète côté navigateur, pas de localStorage pour les données structurées
- Schéma deck : `{id, name, icon, difficulty, description, tags[], cards[{q,a}], author, source, created, updated}`

**CRUD complet :**
- **Decks** : créer, modifier (nom/icône/difficulté/description/tags), supprimer
- **Cartes** : ajouter, modifier, supprimer, réordonner (↑↓) dans chaque deck
- **Import** : charge un fichier `.json` local dans IndexedDB
- **Export** : télécharge n'importe quel deck en `.json` propre

**Store intégré (magasin de decks) :**
- Lit `decks/index.json` (manifeste) qui liste les decks disponibles
- Un clic = fetch du `.json` + installation dans IndexedDB
- Affiche "✓ Installé" si déjà présent
- **Pour ajouter un deck** : poser le `.json` dans `/decks/`, l'ajouter au manifeste, push sur GitHub → disponible pour tous les users

**Structure GitHub-ready :**
```
├── index.html
├── manifest.json
├── sw.js
├── README.md
└── decks/
    ├── index.json          ← manifeste store
    ├── fondamentaux.json   ← 🟢 10 cartes
    ├── doctrines.json      ← 🟠 10 cartes
    └── expert.json         ← 🔴 10 cartes
```

53 Ko total pour l'app, ~5 Ko pour les decks. Prêt pour GitHub Pages.

235 cartes réelles parsées. Maintenant je construis l'app définitive — pas une maquette.Voilà un projet solide cette fois. Voici ce qui a changé en profondeur :

**Les 3 CSV sont parsés → 235 cartes réelles dans 3 decks :**
- 🟢 `gc-fondamentaux` — 80 cartes (CSV 18)
- 🟠 `gc-doctrines` — 80 cartes (CSV 19)
- 🔴 `gc-expert` — 75 cartes (CSV 20)

**Architecture robuste :**

Les 235 cartes sont **embarquées dans le HTML** comme constante JS. Au premier lancement, `installBuiltins()` les écrit dans IndexedDB. Un système de version (`version: 2`) permet de forcer la réinstallation si tu mets à jour les decks. L'app fonctionne même sans serveur — les decks sont déjà dedans.

**Le Store est scalable :** il fetch `decks/index.json`, et si le réseau échoue (offline, file://), il tombe en fallback sur les decks embarqués. Pour ajouter 50 decks communautaires, tu les poses dans `/decks/`, tu les listes dans `index.json`, `git push` — c'est tout. L'import JSON accepte aussi un tableau de decks pour l'import en masse.

**CRUD réel sur IndexedDB :** création, édition, suppression, réordonnancement des cartes, import/export JSON. Chaque deck a un `id`, `version`, `source` (builtin/store/user/import) et `updated` timestamp.

**Structure GitHub-ready (142 Ko total) :**
```
├── index.html          90 Ko (app + 235 cartes)
├── manifest.json
├── sw.js
├── README.md
└── decks/
    ├── index.json      manifeste store
    ├── gc-fondamentaux.json
    ├── gc-doctrines.json
    └── gc-expert.json
```

C'est le feature le plus méta de l'app — utiliser les techniques de manipulation cognitive documentées dans les decks, puis les démasquer en temps réel. Brillant.27/27 features vérifiées. Voici ce qui a été ajouté :

**Profil utilisateur** (accessible via l'avatar en haut à droite ou Plus → Profil) :
- Avatar emoji (32 choix dans un picker)
- Pseudo et bio personnalisables
- Dashboard stats : XP, niveau, précision, cartes vues, meilleur streak, jours consécutifs

**Personnalisation interface** (persistée dans IndexedDB) :
- Taille du texte (slider 11–18px)
- Vitesse de flip des cartes (slider)
- Mode compact (marges réduites)
- Scanlines CRT on/off
- Tout persiste entre sessions

**Gamification toxique encapsulée dans des disclaimers** — chaque mécanisme a un bouton **!** rouge qui révèle la technique de manipulation :

| Mécanisme | Technique exposée | Référence |
|---|---|---|
| 🔥 **Streak journalier** avec alerte « vous allez perdre! » | Aversion à la perte | Kahneman & Tversky, 1979 |
| ⏱ **Défi quotidien** avec countdown jusqu'à minuit | Rareté artificielle / FOMO | Cialdini, 1984 |
| 🎁 **Loot box** toutes les 10 bonnes réponses (8 niveaux de rareté pondérés) | Renforcement à ratio variable | Skinner, 1957 |
| ×3 **Combo multiplicateur** avec overlay popup | Boucle dopaminergique | Csikszentmihalyi, 1990 |
| 👥 **Preuve sociale** (faux compteur d'utilisateurs temps réel) | Conformisme social | Asch, 1951 |
| 🔴 **Notification dot** (point rouge sur l'avatar) | Interruption attentionnelle | Économie de l'attention |

**Le twist éducatif** : chaque mécanisme est **désactivable individuellement** dans les réglages — avec l'annotation « *ce que les apps classiques ne vous permettent jamais de faire* ». L'utilisateur apprend les techniques en les vivant, puis les démonte.

Trois features d'un coup — moteur de recherche global, console terminal cyberpunk, et enrichissement du contenu. Let's go.Now I have all the content I need. Let me build everything in one focused sequence — search engine, console, and 10 new encyclopedia entries.Now inject all the JavaScript for search engine and console:**52/52 features, braces parfaitement balancées.** 157 Ko.157 Ko, 52/52 features, 0 brace mismatch. Voici tout ce qui a été ajouté :

---

## 🔍 Moteur de Recherche Global

Recherche full-text instantanée dans **tout** le contenu COGWAR :

- **Flashcards** (235 cartes — question + réponse)
- **Encyclopédie** (30 entrées — titre, description, catégorie, tags, body HTML)
- **Decks** (nom, description, tags)
- **Filtres** : Tout / Flashcards / Encyclopédie / Decks
- **Highlight** des termes trouvés en or (`<mark>`)
- Multi-mots (tous les termes doivent matcher)
- **Ctrl+K** ou **/** pour ouvrir depuis n'importe où
- **Escape** pour fermer
- Bouton FAB flottant en bas à droite
- Max 50 résultats, clic → navigation directe vers le contenu

## ⌨️ Console WOPR

Terminal cyberpunk complet avec 16 commandes :

| Commande | Effet |
|---|---|
| `help` | Liste des commandes |
| `whoami` | Fiche agent (classe, stats, serial) |
| `stats` | Statistiques complètes |
| `search <q>` | Recherche inline (cartes + ency) |
| `ency [n]` | Liste ou détail d'une entrée |
| `decks` | Decks embarqués |
| `quiz` / `answer` | Flashcard aléatoire interactive |
| `augs` | Augmentations débloquées/verrouillées |
| `threats` | Analyse de menace DEFCON |
| `matrix` | Simulation Matrix animée |
| `ping <cible>` | Ping réseau fictif |
| `hack` | Easter egg |
| `joshua` | Citation WarGames |
| `sudo` | Easter egg Unix |
| `export` | JSON de l'état cognitif |
| `theme <nom>` | Changer de thème |
| `clear` / `reboot` | Reset console |

Plus : historique des commandes (↑/↓), ASCII art au boot, output colorisé.

## 📚 +10 Entrées Encyclopédie (30 total)

Nouvelles entrées sourcées depuis les documents du projet :

| Entrée | Catégorie | XP |
|---|---|---|
| Cocon Sémantique | Propagation | 25 |
| PSYOPS vs Guerre Cognitive | Fondamental | 30 |
| Inflexibilité Cognitive | Neurobiologie | 20 |
| Court-circuitage Émotionnel | Neurobiologie | 25 |
| Cadre Cynefin | Modélisation | 30 |
| Deepfakes & IA Générative | Technologies | 25 |
| Neuro-armes | Technologies | 35 |
| Capture Motivationnelle | Propagation | 25 |
| Attracteur de Lorenz | Modélisation | 35 |
| Opérations à Bas Bruit | Asymétrie | 25 |

Je vais faire un audit complet du fichier actuel, identifier tous les systèmes, puis reconstruire une version propre et définitive.OK j'ai une cartographie complète. Le fichier fonctionne mais il manque le **store encyclopédique externe** et la consolidation finale. Voici mon plan :

1. Ajouter le système `ency/index.json` (comme `decks/index.json`)
2. Fusionner le Store pour afficher decks ET entrées ency
3. Générer tous les fichiers JSON externes
4. Nettoyer et consolider
5. README déploiement définitif30 entrées extraites. Maintenant : fusionner le store, ajouter le fetch ency externe, et consolider.**COGWAR ULTIMATE — READY TO DEPLOY**

```
✅ 40/40 features verified
✅ 1167/1167 braces balanced
✅ 235 Ko total (index.html + decks + ency)
✅ 3 decks / 235 cartes / 30 entrées encyclopédiques
✅ 30/30 JSON ency + 3/3 JSON decks
```

## Arborescence GitHub finale

```
cogwar/
├── index.html           ← 160 Ko, tout embarqué
├── manifest.json        ← PWA
├── sw.js                ← Offline
├── README.md            ← Guide déploiement
├── decks/               ← STOCK EXTENSIBLE
│   ├── index.json       ← Manifeste (3 decks)
│   ├── gc-fondamentaux.json
│   ├── gc-doctrines.json
│   └── gc-expert.json
└── ency/                ← STOCK EXTENSIBLE
    ├── index.json       ← Manifeste (30 entrées)
    └── 30 fichiers JSON individuels
```

## Ce qui a été consolidé dans cette version

Le **Store** est maintenant unifié avec **deux onglets** (📦 Decks / ◈ Encyclopédie) — chacun fetch son `index.json` depuis le dossier GitHub correspondant, avec fallback sur les données embarquées si offline. Les entrées ency installées depuis le store sont **persistées dans IndexedDB** (`custom_ency`) et rechargées au boot.

**Pour ajouter du contenu** : déposer un JSON dans `decks/` ou `ency/`, l'ajouter au `index.json` du dossier, `git push`. Les utilisateurs voient le nouveau contenu dans le Store et peuvent l'installer en un tap.

Let me d'abord comprendre exactement ce qui ne marche pas en inspectant le rendu de la section Library.Le code est là mais le problème est **visuel** — boutons emoji 26px quasi invisibles, modals qui peuvent mal s'afficher dans un iframe. Je vais refaire tout le CRUD avec une UI impossible à rater.Now update the `rLib` function to use the new layout with visible text labels on buttons:Now let me also make the card list inside `openCards` modal much more visible:Now let me also improve the modals to be more visible and robust:Now let me also enhance the deck creation modal and card creation modal HTML:**25/25 CRUD features vérifiées, 0 CSS dupliqué, braces 1170/1170.**

Voici exactement ce qui a été corrigé :

**Le problème** : les boutons d'action des decks étaient des emoji de 26×26px sans texte (🃏 ✏️ ⬇ ✕), quasi invisibles. Il y avait aussi **des CSS dupliquées** qui écrasaient les nouvelles règles — les modals avaient des `.mo-t`, `.mo-x`, `.mo-bd` et les deck items avaient des `.dki-acts` définis deux fois, la version la plus ancienne (petits boutons) gagnait.

**Ce qui a changé** :

| Avant | Après |
|---|---|
| Boutons deck : emoji 26×26px sans texte | `🃏 Cartes` · `✏️ Éditer` · `⬇ Export` · `✕ Suppr.` — pleine largeur, 10px, labeled |
| Boutons carte : emoji 24×24px sans texte | `✏️ Éditer` · `✕ Suppr.` · `↑ Monter` — pleine largeur, labeled |
| Layout deck : 1 ligne compacte | 2 lignes : info en haut, 4 boutons en dessous sur toute la largeur |
| Réponse carte : texte brut | Fond contrasté avec bordure verte à gauche |
| Modals : `.mo-in` sans max-width | Centré, `max-width:600px`, titre plus gros (18px) avec glow |
| Boutons Save/Cancel : 8px | `💾 Sauvegarder` — 11px, padding 10×24 |
| Toolbar : boutons 8px | Boutons 10px avec padding doublé |
| Guide : rien | Texte explicatif sous la toolbar : "Chaque deck a 4 actions..." |
| 5 CSS dupliquées | Nettoyées — chaque règle n'existe qu'une seule fois |

