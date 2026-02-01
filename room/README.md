# ◇ DÉMOGARCHIE

> **Tu votes bientôt ? Cet outil t'aide à comprendre les enjeux en activant ton réseau.**

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Zero Tracking](https://img.shields.io/badge/Tracking-Zero-green.svg)](#)
[![Fork Me](https://img.shields.io/badge/Fork-Me-orange.svg)](#-fork-en-1-clic)

---

## 🎯 C'est quoi ?

**Démogarchie** = *Démos* (peuple) + *Arkhè* (gouverner)

Un outil citoyen pour :
1. **Identifier** ce que tu ne comprends pas avant de voter
2. **Solliciter** ton entourage (qui s'y connaît en fiscalité ? en droit social ?)
3. **Documenter** les réponses pour d'autres citoyens
4. **Partager** ton expérience comme template reproductible

## 🚀 Déployer en 2 minutes

### Option 1 : GitHub Pages

1. **Fork** ce repo (bouton en haut à droite)
2. Va dans **Settings** → **Pages**
3. Source : `main` / `/ (root)`
4. **Save** → Ton site est live !

### Option 2 : Netlify (glisser-déposer)

1. Télécharge ce repo en ZIP
2. Va sur [netlify.com](https://netlify.com)
3. Glisse-dépose le dossier
4. C'est en ligne !

### Option 3 : Local

Double-clique sur `index.html`. Ça marche.

---

## 📁 Structure

```
demogarchie/
├── index.html          ← L'application (tout-en-un)
├── README.md           ← Ce fichier
├── LICENSE             ← CC BY-NC 4.0
└── GUIDE_CITOYEN.md    ← Guide détaillé Fork-Hack-Spread
```

## 🎨 Personnaliser

### Changer le titre

Dans `index.html`, cherche :
```html
<title>DÉMOGARCHIE — ...</title>
```

### Changer les couleurs

Cherche `:root` et modifie :
```css
--color-primary: #7bed9f;  /* Vert */
--color-accent: #b19cd9;   /* Lilas */
```

### Ajouter des domaines

Cherche `const DOMAINS = [` et ajoute :
```javascript
{ id: 'agriculture', name: 'Agriculture', icon: '🌾', color: '#d4a574' },
```

---

## 🔒 Vie privée

- **Zéro tracking** : Aucune donnée envoyée nulle part
- **Stockage local** : Tout reste dans TON navigateur
- **Pas de cookies tiers** : Pas de pub, pas d'analytics
- **Open source** : Tu peux vérifier chaque ligne de code

---

## 🤝 Contribuer

1. Fork le projet
2. Crée une branche (`git checkout -b ma-feature`)
3. Commit (`git commit -m 'Ajout de ma feature'`)
4. Push (`git push origin ma-feature`)
5. Ouvre une Pull Request

---

## 📜 Licence

**CC BY-NC 4.0** — Tu peux :
- ✅ Copier et redistribuer
- ✅ Modifier et adapter
- ❌ Utiliser commercialement

Attribution : Lien vers ce repo + mention "Démogarchie"

---

## 🌍 Philosophie

```
Fork  → Copie et adapte à ton contexte local
Hack  → Améliore, traduis, personnalise
Spread → Partage autour de toi, fais des petits
```

**La démocratie, c'est le peuple qui s'informe lui-même.**

---

## 🔗 Liens

- 📖 [Guide complet Fork-Hack-Spread](./GUIDE_CITOYEN.md)
- 🌐 [Démo en ligne](#) *(à ajouter après déploiement)*
- 💬 [Discussions](../../discussions)

---

*Fait avec ❤️ pour les citoyens qui veulent voter en connaissance de cause.*
