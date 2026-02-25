# COGWAR — WOPR ULTIMATE

> **PWA d'éducation à la guerre cognitive**  
> *"SHALL WE PLAY A GAME?"*

---

## Déploiement

```
git init cogwar && cd cogwar
# copier tous les fichiers
git add -A && git commit -m "COGWAR ULTIMATE"
git push origin main
# GitHub Settings → Pages → Source: main / root
```

Fonctionne sur : GitHub Pages, Netlify, Vercel, Cloudflare Pages, ou tout serveur HTTP.

---

## Structure

```
cogwar/
├── index.html              # App complète PWA (~160 Ko)
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker offline
├── decks/                  # Stock de decks (extensible via git)
│   ├── index.json
│   ├── gc-fondamentaux.json
│   ├── gc-doctrines.json
│   └── gc-expert.json
└── ency/                   # Stock d'encyclopédie (extensible via git)
    ├── index.json
    └── [id].json × 30
```

---

## Ajouter un deck

1. Créer `decks/mon-deck.json` :
```json
{"id":"mon-deck","name":"Mon Deck","author":"Moi","difficulty":2,"icon":"🎯",
 "description":"...","tags":["x"],"version":1,
 "cards":[{"q":"Question","a":"Réponse"}]}
```
2. Ajouter l'entrée dans `decks/index.json`
3. `git push`

## Ajouter une entrée encyclopédique

1. Créer `ency/mon-id.json` :
```json
{"id":"mon-id","title":"Titre","cat":"Catégorie","tags":["x"],"xp":25,
 "short":"Résumé court","body":"<p>Contenu HTML</p>"}
```
2. Ajouter l'entrée dans `ency/index.json`
3. `git push`

---

## Fonctionnalités

**Core** : 235 flashcards, 30 entrées ency, IndexedDB, PWA offline, 3 thèmes  
**CRUD** : Decks + Cartes (créer/éditer/supprimer/réordonner), import/export JSON  
**Store** : Onglet Decks + Onglet Encyclopédie, fetch depuis GitHub, fallback embarqué  
**Profil** : Photo + 8 filtres, 7 classes, 6 stats, 12 augmentations, avatar emoji  
**Gamification** : Streak, défi quotidien, loot box, combo, preuve sociale — chacun avec disclaimer éducatif et killswitch  
**Recherche** : Full-text cartes+ency+decks, Ctrl+K, filtres  
**Console** : 16 commandes, historique, ASCII art
