# React + Vite + TypeScript Project

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🔧 ESLint for code quality
- 🚀 GitLab CI/CD for automated builds and deployment

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## GitLab CI/CD

This project includes GitLab CI/CD configuration (`.gitlab-ci.yml`) that:

1. **Builds** the project on push to main/master/develop branches
2. **Deploys** to GitLab Pages automatically

The pipeline runs:
- `npm ci` - Install dependencies
- `npm run build` - Build the project
- `npm run typecheck` - Type checking
- Deploy to GitLab Pages

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```

## License

MIT

