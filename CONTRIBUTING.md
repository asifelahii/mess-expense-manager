# Contributing to Mess Expense Manager

Thank you for your interest in contributing! We welcome contributions from everyone.

## 🤝 Code of Conduct

Please be respectful and constructive in all interactions. We aim to foster an inclusive and welcoming community.

## 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- Clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- Clear, descriptive title
- Detailed description of the proposed feature
- Explanation of why this enhancement would be useful
- Examples of how the feature would be used

## 🔧 Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/mess-expense-manager.git
   cd mess-expense-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style

- Follow the existing code style
- Use TypeScript strict mode
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Component Guidelines

- Use standalone components
- Keep components focused on a single responsibility
- Use OnPush change detection where possible
- Follow the feature-first folder structure

### Styling

- Use the existing theme tokens from `theme-tokens.scss`
- Follow the glassmorphism design pattern
- Ensure responsive design
- Use SCSS for styling

### Commit Messages

Follow the conventional commits specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add expense filtering by category
fix: correct calculation for per-person cost
docs: update installation instructions
```

## 🧪 Testing

- Write unit tests for new features
- Ensure all tests pass before submitting:
  ```bash
  npm test
  ```
- Maintain or improve code coverage

## 📦 Pull Request Process

1. Update documentation if needed
2. Ensure your code follows the style guidelines
3. Run tests and linting:
   ```bash
   npm test
   npm run lint
   ```
4. Update the README if you've added new features
5. Create a Pull Request with:
   - Clear title and description
   - Reference to related issues
   - Screenshots (for UI changes)
   - List of changes made

## 🏗️ Project Structure

```
src/app/
├── core/           # Core services (storage, audit, guards)
├── domain/         # Domain models and pure functions
├── shared/ui/      # Reusable UI components
└── pages/          # Feature pages
```

### Adding New Features

1. **Pages** - Add to `src/app/pages/`
2. **Shared Components** - Add to `src/app/shared/ui/`
3. **Services** - Add to appropriate `core/` subfolder
4. **Models** - Add to `src/app/domain/models.ts`
5. **Calculations** - Add to `src/app/domain/calculations.ts`

## 📚 Resources

- [Angular Documentation](https://angular.io/docs)
- [Dexie.js Documentation](https://dexie.org/)
- [SCSS Guide](https://sass-lang.com/guide)

## ❓ Questions?

Feel free to open an issue with the "question" label if you need help or clarification.

Thank you for contributing! 🎉
