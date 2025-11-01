<div align="center">

![Arkt Logo](public/arkt-logo-light.svg)

# **Arkt** - Collaborative Diagramming Platform

> *Visualize complexity. Collaborate freely. Design without limits.*

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Yjs](https://img.shields.io/badge/Yjs-13.6-FFD700)](https://github.com/yjs/yjs)
[![License](https://img.shields.io/badge/license-Private-red)]()

**Arkt** is a powerful, free, and collaborative diagramming tool built for modern teams. Create multi-level diagrams, collaborate in real-time, and bring your ideas to life with an intuitive, sketch-style interface.

[🚀 Getting Started](#-getting-started) • [📖 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [📚 Documentation](#-documentation) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

### 🎨 **Core Capabilities**

- **🆓 Free Forever** - No credit cards, no trial limits, no hidden fees
- **👥 Real-Time Collaboration** - Work together with instant synchronization via WebRTC
- **🌳 Multi-Level Diagrams** - Drill down into nodes to create infinite nested hierarchies
- **🎭 Sketchy Style** - Beautiful hand-drawn aesthetic using RoughJS
- **🤖 AI-Powered** - Ask AI to generate diagrams (bring your own OpenAI API key)

### 🛠️ **Advanced Features**

- **Custom Templates** - Create reusable node templates with icons, colors, and styles
- **Multiple Node Types** - ArktNodes, Text nodes, Freehand drawing, Integration nodes
- **Flexible Edges** - Customizable connection lines with labels, arrows, and styling
- **Node Drilling** - Navigate through diagram hierarchies with breadcrumb navigation
- **Mobile Support** - Fully responsive design that works on all devices
- **SEO Optimized** - Built with comprehensive SEO and structured data support

### 🎯 **User Experience**

- **Intuitive Interface** - Clean, minimal design focused on your work
- **Command Palette** - Quick access to all features (Cmd+K / Ctrl+K)
- **Smart Layouts** - Automatic node positioning with ELK.js algorithms
- **Keyboard Shortcuts** - Efficient workflows for power users
- **Dark/Light Mode** - Theme support for comfortable viewing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **pnpm** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd arkt2.0

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quick Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm dev:webpack      # Start dev server with Webpack

# Building
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm type-check       # TypeScript type checking
pnpm lint             # ESLint
pnpm check            # Type check + lint

# Testing
pnpm test             # Run Vitest tests
pnpm test:watch       # Watch mode
pnpm e2e              # Playwright E2E tests
pnpm e2e:ui           # Playwright UI mode
```

---

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type safety

### Diagramming & Visualization
- **[React Flow](https://xyflow.com/)** - Node-based diagram editor
- **[RoughJS](https://roughjs.com/)** - Hand-drawn, sketchy graphics
- **[ELK.js](https://github.com/kieler/elkjs)** - Automatic graph layout

### Collaboration
- **[Yjs](https://github.com/yjs/yjs)** - CRDT for conflict-free collaboration
- **[y-webrtc](https://github.com/yjs/y-webrtc)** - WebRTC provider for real-time sync
- **[y-indexeddb](https://github.com/yjs/y-indexeddb)** - Local persistence

### AI & Integration
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - AI integrations
- **[OpenAI](https://openai.com/)** - AI diagram generation (bring your own key)

### UI & Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Development Tools
- **[Playwright](https://playwright.dev/)** - E2E testing
- **[Vitest](https://vitest.dev/)** - Unit testing
- **[ESLint](https://eslint.org/)** - Code linting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript linting

---

## 📁 Project Structure

```
arkt2.0/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── design/            # Main diagram editor
│   │   ├── about/             # About page
│   │   ├── docs/              # Documentation pages
│   │   └── ...
│   ├── components/            # React components
│   │   ├── nodes/             # Node types (ArktNode, Text, Freehand, etc.)
│   │   ├── edges/             # Edge/connection components
│   │   ├── controls/          # UI controls (color picker, font size, etc.)
│   │   ├── yjs/               # Collaboration & sync logic
│   │   └── ...
│   ├── lib/                   # Utilities & shared code
│   │   ├── seo/               # SEO utilities
│   │   ├── tutorial/          # Tutorial system
│   │   └── ...
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
├── e2e/                      # Playwright E2E tests
└── scripts/                  # Build & utility scripts
```

---

## 📚 Documentation

### Quick Links

- **[Quick Start Guide](QUICK_START.md)** - Get up and running in 5 minutes
- **[SEO Documentation](src/lib/seo/README.md)** - SEO implementation details
- **[Tutorial System](src/lib/tutorial/README.md)** - Interactive tutorial features
- **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - Production deployment steps

### Key Documentation Files

- `QUICK_START.md` - 5-minute setup guide
- `SEO_IMPLEMENTATION_GUIDE.md` - SEO optimization roadmap
- `SEO_ACCEPTANCE_CRITERIA_SUMMARY.md` - SEO tracking & metrics
- `IMPLEMENTATION_SUMMARY.md` - Feature implementation overview

---

## 🎯 Key Concepts

### Nodes
- **ArktNode** - Main node type with labels, descriptions, icons, and custom styling
- **Text Node** - Simple text nodes for annotations
- **Freehand** - Draw freehand shapes with perfect-freehand
- **Integration** - Connect to external services (GitHub, etc.)

### Edges
- **ArktEdge** - Customizable connections with labels, arrows, and styling
- **Flexible Routing** - Multiple routing algorithms (ELK, Smart, etc.)
- **Labels** - Edge labels with customizable positioning

### Collaboration
- **Real-Time Sync** - Changes sync instantly across all users
- **Presence** - See where collaborators are working
- **Offline Support** - Local persistence with IndexedDB

### Multi-Level Diagrams
- **Drill Down** - Click nodes (Alt+Click) to navigate into sub-diagrams
- **Breadcrumbs** - Navigate back through diagram hierarchy
- **Virtual Nodes** - Reference nodes from parent diagrams

---

## 🤝 Contributing

This is a private project. For internal contributors:

1. Create a feature branch from `master`
2. Make your changes with proper TypeScript types
3. Ensure tests pass: `pnpm check && pnpm test`
4. Submit a pull request with a clear description

### Code Standards

- **TypeScript** - Strict mode enabled, no `any` types
- **React** - Functional components with hooks
- **Styling** - Tailwind CSS utility classes
- **Testing** - E2E tests for critical user flows

---

## 🔒 Privacy & Security

- **No Data Collection** - We don't track your diagrams
- **Self-Hosted Collaboration** - Use your own signaling server
- **OpenAI API Key** - Stored locally, never sent to our servers
- **Local-First** - Your data is stored in your browser first

---

## 📄 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

Built with amazing open-source projects:
- [React Flow](https://xyflow.com/) - Diagramming engine
- [Yjs](https://github.com/yjs/yjs) - Collaboration framework
- [RoughJS](https://roughjs.com/) - Sketchy graphics
- [Next.js](https://nextjs.org/) - React framework

---

<div align="center">

**Made with ❤️ by the Arkt team**

[Report Bug](https://github.com/your-org/arkt2.0/issues) • [Request Feature](https://github.com/your-org/arkt2.0/issues)

</div>
