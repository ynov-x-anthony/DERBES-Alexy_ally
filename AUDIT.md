# AUDIT.md : à compléter

## 1. Audits outillés

Lance les 3 audits sur la page (`npm run dev`, puis ouvre-la dans Chrome) et
colle ici un résumé de ce que chacun remonte :

- **Lighthouse** (DevTools → onglet Lighthouse → catégorie Accessibility) :
- **axe DevTools** (extension Chrome) :
- **WAVE** (https://wave.webaim.org/, ou l'extension) :

## 2. Les éléments à corriger

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | `#595959` | `#FFFFFF` | 7,00:1 | 4.5:1 | Oui |
| `.label` | `#595959` | `#FFFFFF` | 7,00:1 | 4.5:1 | Oui |
| `.hint` | `#595959` | `#FFFFFF` | 7,00:1 | 4.5:1 | Oui |
| `.btn-primary` | `#FFFFFF` | `#005FCC` | 6,00:1 | 4.5:1 (texte) | Oui |

> Utilise un vérificateur de contraste (ex. le picker de couleur de Chrome
> DevTools affiche déjà le ratio AA/AAA quand tu modifies une couleur).

## 3. Priorisation

Classe les 4 corrections par ordre d'impact (1 = le plus urgent) et explique pourquoi.
