# Mess Expense Manager

![CI](https://github.com/asifelahii/mess-expense-manager/workflows/CI/badge.svg)

A trusted, offline-first mess/hostel expense manager built with Angular. Track meals, bazar, shared bills, deposits, fund balance, settlements, and audit logs. Features a modern glassmorphic UI with Aurora Quartz Aqua theme, monthly locking, and export-ready reports.

## ✨ Features

- 🎨 **Beautiful Glassmorphism UI** - Aurora Quartz Aqua hybrid theme with stunning visual effects
- 💾 **Offline-First** - Uses Dexie IndexedDB for local persistence
- 🔒 **Monthly Locking** - Lock months to prevent further changes
- 📊 **Expense Tracking** - Track meals, bazar, shared bills, and other expenses
- 👥 **Member Management** - Manage mess members and their contributions
- 📝 **Audit Logs** - Complete audit trail of all changes
- 📦 **Standalone Components** - Modern Angular architecture with lazy loading
- 🎯 **Feature-First Structure** - Well-organized codebase

## 🏗️ Architecture

```
src/app/
├── core/           # Core services and utilities
│   ├── storage/    # Dexie IndexedDB service
│   ├── audit/      # Audit logging
│   └── guards/     # Route guards
├── domain/         # Domain models and pure functions
│   ├── models.ts       # TypeScript interfaces
│   └── calculations.ts # Pure calculation functions
├── shared/         # Shared components and utilities
│   └── ui/         # Reusable UI components
│       ├── glass-card.component.ts
│       ├── glass-button.component.ts
│       ├── glass-input.component.ts
│       └── theme-tokens.scss
└── pages/          # Feature pages
    ├── messes/     # Mess list page
    └── month-details/ # Month details page
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/asifelahii/mess-expense-manager.git
cd mess-expense-manager

# Install dependencies
npm install

# Start development server
npm start
```

Navigate to `http://localhost:4200/` in your browser.

## 📋 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Lint the code

## 🛣️ Routes

- `/messes` - List all messes
- `/mess/:id/month/:yyyy-mm` - View month details for a specific mess

## 🎨 Theme

The app uses a custom Aurora Quartz Aqua glassmorphism theme with:
- Soft gradients blending pink, purple, and aqua tones
- Glass-effect cards with backdrop blur
- Smooth transitions and hover effects
- Responsive design tokens

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Built With

- [Angular](https://angular.io/) - Frontend framework
- [Dexie.js](https://dexie.org/) - IndexedDB wrapper
- [SCSS](https://sass-lang.com/) - Styling

## 📞 Support

For issues and questions, please use the [GitHub issue tracker](https://github.com/asifelahii/mess-expense-manager/issues).

