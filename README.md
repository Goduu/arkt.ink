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

## 📚 Documentation

### Quick Links

- **[Quick Start Guide](https://arkt.ink/docs/create-first-node)** - Get up and running in 5 minutes
- **[Documentation](https://arkt.ink/docs)** - SEO implementation details
- **[Tutorial](https://arkt.ink/learn)** - Interactive tutorial features

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

[Report Bug](https://github.com/goduu/arkt.ink/issues) • [Request Feature](https://github.com/goduu/arkt.ink/issues)

</div>
