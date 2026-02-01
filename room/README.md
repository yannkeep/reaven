# 🗳️ DÉMOGARCHIE — Guide Citoyen : Fork • Hack • Spread

> **Tu dois voter demain. Tu ne comprends pas la moitié des enjeux. Ton entourage non plus.**  
> Ce guide te permet de créer ton propre outil d'entraide citoyenne en 15 minutes.  
> Aucune compétence technique requise. Promis.

---

## 📋 Table des matières

1. [C'est quoi ce truc ?](#1-cest-quoi-ce-truc-)
2. [De quoi j'ai besoin ?](#2-de-quoi-jai-besoin-)
3. [FORK — Copier le projet (5 min)](#3-fork--copier-le-projet-5-min)
4. [HACK — Personnaliser (5 min)](#4-hack--personnaliser-5-min)
5. [SPREAD — Mettre en ligne gratuitement (5 min)](#5-spread--mettre-en-ligne-gratuitement-5-min)
6. [Partager et faire grandir](#6-partager-et-faire-grandir)
7. [FAQ — Questions fréquentes](#7-faq--questions-fréquentes)
8. [Alternatives sans GitHub](#8-alternatives-sans-github)

---

## 1. C'est quoi ce truc ?

### Le problème

Tu vas voter. Mais :
- Tu ne comprends pas tous les enjeux (fiscal, social, environnement...)
- Tu n'as pas le temps de tout lire
- Les médias te donnent des opinions, pas des faits
- Tu te sens seul·e face à la complexité

### La solution

**Démogarchie** est une application qui te permet de :
1. **Identifier** ce que tu ne comprends pas (tes "angles morts")
2. **Solliciter** ton entourage qui s'y connaît (ton réseau)
3. **Documenter** les réponses pour d'autres citoyens
4. **Partager** ton expérience comme modèle reproductible

### Pourquoi "forker" ?

"Fork" = faire une copie que TU contrôles.

- **Pas de serveur central** → Personne ne peut censurer
- **Pas de données collectées** → Ta vie privée est protégée
- **Gratuit pour toujours** → Hébergement offert par GitHub/Netlify
- **Modifiable** → Tu adaptes à ton contexte local

---

## 2. De quoi j'ai besoin ?

### Obligatoire (gratuit)

| Outil | Pourquoi | Temps |
|-------|----------|-------|
| **Compte GitHub** | Pour copier et héberger | 2 min |
| **Navigateur web** | Chrome, Firefox, Safari... | Déjà fait |

### Optionnel (pour personnaliser plus)

| Outil | Pourquoi |
|-------|----------|
| **Compte Netlify** | Hébergement alternatif (encore plus simple) |
| **Compte Vercel** | Autre alternative d'hébergement |

### Ce dont tu N'as PAS besoin

- ❌ Savoir coder
- ❌ Payer quoi que ce soit
- ❌ Installer des logiciels
- ❌ Comprendre le HTML/CSS/JavaScript

---

## 3. FORK — Copier le projet (5 min)

### Étape 1 : Créer un compte GitHub

1. Va sur [github.com](https://github.com)
2. Clique sur **"Sign up"** (en haut à droite)
3. Entre ton email, crée un mot de passe
4. Vérifie ton email

> 💡 **Astuce** : Utilise un pseudo, pas ton vrai nom si tu veux rester discret.

### Étape 2 : Forker le projet

1. Va sur la page du projet :  
   `github.com/[nom-du-projet]/demogarchie`
   
2. Clique sur le bouton **"Fork"** (en haut à droite)

   ```
   ┌─────────────────────────────────────────┐
   │  ⭐ Star  │  👁 Watch  │  🍴 Fork  ←──── ICI
   └─────────────────────────────────────────┘
   ```

3. GitHub te demande où copier → garde les options par défaut
4. Clique sur **"Create fork"**

**🎉 Bravo !** Tu as maintenant TA copie du projet.

### Ce qui vient de se passer

```
AVANT                           APRÈS
┌──────────────┐               ┌──────────────┐
│   Projet     │               │   Projet     │
│   Original   │               │   Original   │
└──────────────┘               └──────────────┘
                                      │
                                      │ Fork
                                      ▼
                               ┌──────────────┐
                               │  TA copie    │
                               │  (tu es le   │
                               │   patron)    │
                               └──────────────┘
```

---

## 4. HACK — Personnaliser (5 min)

### Modifications faciles (sans coder)

#### Changer le nom/titre

1. Dans ton fork, trouve le fichier `index.html`
2. Clique dessus pour l'ouvrir
3. Clique sur l'icône crayon ✏️ (en haut à droite du fichier)
4. Cherche (Ctrl+F) : `DÉMOGARCHIE`
5. Remplace par ton nom (ex: "Citoyens de Liège", "Collectif Voter Informé")
6. En bas, clique **"Commit changes"**

#### Changer les couleurs

Dans le même fichier, cherche ces lignes et modifie les codes couleur :

```css
--color-primary: #7bed9f;    /* Vert → change en ce que tu veux */
--color-accent: #b19cd9;     /* Lilas → idem */
```

> 💡 **Trouver des couleurs** : Va sur [coolors.co](https://coolors.co) pour générer des palettes.

#### Ajouter ton contexte local

Cherche la section "À propos" et ajoute :
- Le nom de ta commune/région
- Les enjeux locaux spécifiques
- Les liens vers les programmes des partis locaux

### Modifications avancées (optionnel)

Si tu veux aller plus loin, tu peux :
- Ajouter des catégories d'angles morts spécifiques
- Changer les textes d'aide
- Ajouter des liens vers des ressources locales

Tout se fait dans le navigateur, pas besoin de logiciel !

---

## 5. SPREAD — Mettre en ligne gratuitement (5 min)

### Option A : GitHub Pages (recommandé pour débutants)

#### Étape 1 : Activer GitHub Pages

1. Dans ton fork, clique sur **"Settings"** (onglet en haut)
2. Dans le menu de gauche, clique sur **"Pages"**
3. Sous "Source", sélectionne :
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique **"Save"**

#### Étape 2 : Attendre 2 minutes

GitHub construit ton site. Rafraîchis la page.

#### Étape 3 : Récupérer ton lien

Tu verras apparaître :
```
✅ Your site is live at https://TON-PSEUDO.github.io/demogarchie/
```

**🎉 C'est en ligne !** Partage ce lien.

---

### Option B : Netlify (encore plus simple)

Netlify est une alternative qui offre :
- Déploiement en glisser-déposer
- Nom de domaine personnalisé gratuit
- HTTPS automatique

#### Méthode 1 : Glisser-déposer

1. Va sur [netlify.com](https://netlify.com) → "Sign up" (gratuit)
2. Connecte-toi avec ton compte GitHub
3. Sur le dashboard, tu verras une zone de dépôt :
   ```
   ┌─────────────────────────────────────┐
   │                                     │
   │   Drag and drop your site folder   │
   │                                     │
   └─────────────────────────────────────┘
   ```
4. Télécharge ton projet GitHub en ZIP (bouton vert "Code" → "Download ZIP")
5. Dézippe le dossier
6. Glisse-dépose le dossier sur Netlify

**Résultat** : `https://random-name-12345.netlify.app`

#### Méthode 2 : Connexion GitHub (mises à jour auto)

1. Sur Netlify, clique **"Add new site"** → **"Import an existing project"**
2. Choisis **"GitHub"**
3. Autorise Netlify à accéder à ton GitHub
4. Sélectionne ton fork `demogarchie`
5. Clique **"Deploy site"**

**Avantage** : Chaque modification sur GitHub met à jour le site automatiquement.

---

### Option C : Vercel (pour les perfectionnistes)

1. Va sur [vercel.com](https://vercel.com) → "Sign up" avec GitHub
2. Clique **"Add New..."** → **"Project"**
3. Importe ton fork depuis GitHub
4. Clique **"Deploy"**

**Résultat** : `https://demogarchie-ton-pseudo.vercel.app`

---

### Comparatif des plateformes

| Critère | GitHub Pages | Netlify | Vercel |
|---------|--------------|---------|--------|
| Difficulté | ⭐⭐ | ⭐ | ⭐⭐ |
| Vitesse | Moyenne | Rapide | Très rapide |
| Nom personnalisé | Payant | Gratuit | Gratuit |
| Limite trafic | Illimitée | 100GB/mois | 100GB/mois |
| HTTPS | ✅ Auto | ✅ Auto | ✅ Auto |

**Notre recommandation** : Commence par **GitHub Pages**, c'est le plus simple et tout est au même endroit.

---

## 6. Partager et faire grandir

### Créer un QR Code

1. Va sur [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Colle l'URL de ton site
3. Télécharge le QR code
4. Imprime-le et affiche-le !

### Message type à partager

```
🗳️ Tu votes bientôt et tu ne comprends pas tout ?

J'ai créé un outil gratuit pour qu'on s'entraide :
→ [TON LIEN]

Le principe :
1. Tu notes ce que tu ne comprends pas
2. Tu demandes à tes contacts qui s'y connaissent
3. On documente pour les autres

C'est gratuit, sans pub, sans tracking.
Fork • Hack • Spread 🌱
```

### Où partager ?

- **WhatsApp** → Groupe famille, amis, voisins
- **Facebook** → Groupes locaux, pages de quartier
- **Twitter/X** → Avec hashtags locaux
- **Mastodon** → Communauté tech/citoyenne
- **IRL** → Imprimer le QR code, l'afficher au café, à la bibliothèque

### Inviter à forker

Encourage les gens d'autres régions/pays à créer leur propre version :

> "Tu veux faire pareil pour ta commune ? Fork mon projet et adapte-le !"

---

## 7. FAQ — Questions fréquentes

### "C'est vraiment gratuit ?"

**Oui.** GitHub, Netlify et Vercel offrent un hébergement gratuit pour les projets open source. Il n'y a pas de piège.

### "Mes données sont-elles en sécurité ?"

**Les données restent sur TON appareil.** L'application utilise le stockage local du navigateur. Rien n'est envoyé à un serveur.

### "Je peux modifier le code ?"

**Oui, c'est le but !** La licence CC BY-NC 4.0 t'autorise à :
- ✅ Copier
- ✅ Modifier
- ✅ Redistribuer
- ❌ Utiliser commercialement (vendre)

### "J'ai cassé quelque chose, au secours !"

Pas de panique :
1. Sur GitHub, va dans l'onglet **"Commits"**
2. Trouve un commit précédent qui marchait
3. Clique dessus → **"Browse files"**
4. Tu peux restaurer n'importe quelle version

### "Je veux un vrai nom de domaine (genre monsite.be)"

1. Achète un nom de domaine (~10€/an) sur [OVH](https://ovh.com), [Gandi](https://gandi.net), ou [Namecheap](https://namecheap.com)
2. Dans les paramètres DNS, ajoute un enregistrement CNAME vers ton site GitHub/Netlify/Vercel
3. Dans les paramètres de ta plateforme, configure le "custom domain"

### "Je ne vois pas mes modifications"

- **GitHub Pages** : Attends 2-5 minutes, parfois plus
- **Vide le cache** : Ctrl+Shift+R (ou Cmd+Shift+R sur Mac)
- **Vérifie** que tu as bien "Commit" tes changements

---

## 8. Alternatives sans GitHub

### Tu n'as vraiment pas envie de créer un compte ?

#### Option : Fichier HTML local

1. Télécharge le fichier `index.html` du projet
2. Ouvre-le avec ton navigateur (double-clic)
3. Ça marche ! (mais seulement sur ton ordinateur)

#### Option : Partage par clé USB

1. Mets le fichier HTML sur une clé USB
2. Passe-la à tes amis
3. Ils ouvrent le fichier → ça marche

#### Option : Hébergement alternatif

- **Neocities.org** → Hébergement gratuit, ambiance rétro
- **Codepen.io** → Pour tester/partager du code
- **Glitch.com** → Éditeur en ligne + hébergement

---

## 🎯 Récapitulatif : Tu votes demain

### Checklist de survie citoyenne

```
□ J'ai identifié 3 sujets que je ne comprends pas
□ J'ai trouvé 3 personnes dans mon entourage qui peuvent m'éclairer
□ J'ai noté leurs explications
□ J'ai partagé l'outil avec 3 autres personnes
□ Je vote en connaissance de cause
```

### Le cycle vertueux

```
    ┌─────────────────┐
    │  Tu apprends    │
    │  grâce à ton    │
    │    réseau       │
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  Tu documentes  │
    │   pour les      │
    │    autres       │
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  D'autres       │
    │  apprennent     │
    │  grâce à toi    │
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │   Ils t'aident  │◄────┐
    │   en retour     │     │
    └────────┬────────┘     │
             │              │
             └──────────────┘
```

---

## 📜 Manifeste

```
Nous croyons que :

→ L'information est un bien commun
→ La démocratie exige des citoyens informés
→ Personne ne sait tout, mais ensemble on sait beaucoup
→ La technologie doit servir le peuple, pas l'inverse
→ Ce qui est gratuit et ouvert ne peut pas être contrôlé

Fork • Hack • Spread
Ne demande pas la permission. Fais-le.
```

---

## 🔗 Ressources

- **Code source** : `github.com/[projet]/demogarchie`
- **Licence** : CC BY-NC 4.0
- **Contact** : [à personnaliser]

---

*Ce guide est lui-même sous licence CC BY-NC 4.0. Tu peux le copier, le modifier, le redistribuer.*

*Dernière mise à jour : Février 2026*
