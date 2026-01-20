# Feature Isolation Rule (Project Standard)

To keep the app stable and beginner-friendly, each feature must be independent.

## Allowed imports

A feature in `src/app/features/<feature>/` may import ONLY:

- `src/app/shared/**` (reusable UI / helpers)
- `src/app/domain/**` (pure models + calculation functions)
- `src/app/core/**` (storage, audit, guards, utilities)

## Not allowed

- A feature must NOT import another feature directly.
  Example (❌ not allowed):
  - `features/month` importing from `features/messes`

## Why

- If one feature breaks, others keep working.
- Easier debugging + cleaner codebase.
- Makes Copilot contributions safer.
