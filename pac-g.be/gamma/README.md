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
