# HumAid - Site Web Humanitaire

HumAid est un site web moderne développé avec React et TypeScript, dédié à la collecte de dons pour aider les enfants dans le besoin.

## 🎯 Objectif

Ce site permet de :
- Présenter la mission et les actions de l'organisation HumAid
- Faciliter les dons en ligne par carte bancaire
- Informer sur les différentes causes soutenues
- Partager des actualités et une galerie photos
- Offrir un moyen de contact facile

## 🏗️ Architecture

Le projet utilise l'**Atomic Design** pour une structure modulaire et maintenable :

- **Atoms** : Composants de base (Button, Input, Typography)
- **Molecules** : Combinaisons d'atoms (formulaires, cartes)
- **Organisms** : Composants complexes (Navigation, Footer)
- **Templates** : Structures de pages (PageTemplate)
- **Pages** : Pages complètes de l'application

## 🎨 Design System

### Couleurs
- **Primaire** : Jaune (#FFD700)
- **Secondaire** : Blanc (#FFFFFF)
- **Accent** : Noir (#000000)

### Style
- Professionnel, minimaliste et moderne
- Typographie Inter
- Espacement cohérent
- Animations fluides

## 📱 Pages

1. **Accueil** - Page d'accueil avec héro et présentation
2. **À propos** - Informations sur l'organisation
3. **Nos Services** - Services proposés
4. **Nos Causes** - Campagnes de dons avec paiement
5. **Galerie** - Photos des actions
6. **Actualités** - News et mises à jour
7. **Contact** - Formulaire de contact

## 🚀 Installation et Développement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build

# Aperçu de la version production
npm run preview
```

## 🛠️ Technologies Utilisées

- **React 18** - Framework JavaScript
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **React Router** - Navigation
- **Lucide React** - Icônes
- **CSS Variables** - System de design

## 📁 Structure du Projet

```
src/
├── components/
│   ├── atoms/          # Composants de base
│   ├── molecules/      # Composants composés
│   ├── organisms/      # Composants complexes
│   └── templates/      # Templates de pages
├── pages/              # Pages de l'application
├── styles/             # Styles globaux
└── utils/              # Utilitaires
```

## 🎯 Fonctionnalités Clés

- ✅ Design responsive
- ✅ Navigation moderne avec menu mobile
- ✅ Système de couleurs cohérent
- ✅ Composants réutilisables
- ✅ TypeScript pour la sécurité
- ✅ Performance optimisée avec Vite

## 🚧 Prochaines Étapes

- Intégration du système de paiement
- Ajout du CMS pour les actualités
- Optimisation SEO
- Tests automatisés
- Déploiement

---

Développé avec ❤️ pour les enfants dans le besoin.
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
