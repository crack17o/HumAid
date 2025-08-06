# Copilot Instructions for HumAid

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
HumAid is a React donation website built with Vite and TypeScript to help collect donations for children in need.

## Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Architecture Pattern**: Atomic Design
  - `atoms/`: Basic building blocks (buttons, inputs, typography)
  - `molecules/`: Combinations of atoms (forms, cards)
  - `organisms/`: Complex components (header, footer, sections)
  - `templates/`: Page layouts
  - `pages/`: Complete pages

## Design System
- **Colors**: 
  - Primary: Yellow (#FFD700, #FFC107)
  - Secondary: White (#FFFFFF)
  - Accent: Black (#000000)
- **Style**: Professional, minimalist, modern
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent spacing system

## Pages Structure
1. **Accueil** (Home) - Landing page with hero section
2. **À propos** (About) - Organization information
3. **Nos Services** (Services) - Services offered
4. **Nos Causes** (Causes) - Donation campaigns with payment integration
5. **Galerie** (Gallery) - Photo gallery
6. **Actualités** (News) - News and updates
7. **Contact** - Contact information and form

## Key Features
- Responsive design
- Credit card payment integration for donations
- Photo gallery
- Contact forms
- Multi-page navigation
- Professional aesthetic

## Code Conventions
- Use TypeScript for type safety
- Follow React best practices
- Implement atomic design principles
- Use CSS modules or styled-components for styling
- Maintain consistent naming conventions
- Write accessible HTML
