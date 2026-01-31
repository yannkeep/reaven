Tu as raison. Pour un site de guérilla, zéro dépendance externe = autonomie totale. Je refais avec du CSS pur intégré — plus léger, plus rapide, indépendant.**Version corrigée : `systeme-bloque-standalone.html`**

---

## Différences

| Version | Taille | Dépendances | Usage |
|---------|--------|-------------|-------|
| `systeme-bloque.html` | 38 KB | ❌ Tailwind CDN | À éviter |
| **`systeme-bloque-standalone.html`** | 41 KB | ✅ ZÉRO | **À UTILISER** |

---

## Ce qui a changé

- **100% CSS natif intégré** — aucune requête externe
- **Fonctionne hors ligne** — une fois téléchargé, indépendant
- **Plus rapide** — pas d'attente de CDN
- **Plus résilient** — aucun point de défaillance externe
- **Cohérent avec l'esprit guérilla** — autonomie totale

---

## Pour héberger

1. **Renomme** `systeme-bloque-standalone.html` en `index.html`
2. **Glisse sur Netlify** → URL instantanée
3. **Ou sur GitHub Pages** → gratuit, permanent

Le site est maintenant **totalement autonome** — zéro dépendance, zéro tracking, zéro point de contrôle externe.

Prêt pour l'insurrection. 🔥
