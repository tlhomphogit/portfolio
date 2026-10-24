
# Developer Portfolio

A modern, responsive personal portfolio showcasing my work, technical skills, and software development services.

Built with **React, TypeScript, Vite, and Tailwind CSS v4**, the portfolio is designed to communicate my professional identity as a Software Engineer and help potential clients, collaborators, and employers explore my work.

## Portfolio Links

- **Website:** [tlhomphogit.github.io/portfolio](https://tlhomphogit.github.io/portfolio/)
- **GitHub:** [github.com/tlhomphogit](https://github.com/tlhomphogit)

> **Development status:** The portfolio is undergoing an iterative redesign. The published GitHub Pages version may differ from the latest local development version until the next deployment.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Featured Projects](#featured-projects)
5. [Services](#services)
6. [Project Structure](#project-structure)
7. [Getting Started](#getting-started)
8. [Environment Configuration](#environment-configuration)
9. [Available Scripts](#available-scripts)
10. [Design and Architecture](#design-and-architecture)
11. [Deployment](#deployment)
12. [Verification](#verification)
13. [Future Improvements](#future-improvements)
14. [Contact](#contact)
15. [License](#license)

---

## Overview

I am a Software Engineer with an interest in building practical, maintainable software solutions.

My development work includes frontend interfaces, backend REST APIs, database integration, and full-stack applications.

This portfolio serves as a central place to:

- Introduce my professional background and technical skills.
- Showcase selected software engineering projects.
- Present freelance development services.
- Share my availability and preferred working arrangements.
- Connect with potential clients and collaborators.

The application is a **single-page React website**, with section-based navigation and responsive layouts.

## Features

### Modern User Interface

- Responsive layouts for desktop, tablet, and mobile.
- Clean visual hierarchy and consistent typography.
- Minimal navigation and pill-shaped action buttons.
- Editorial-style sections, bento cards, and subtle visual effects.
- Light and dark themes.

### Light and Dark Mode

- Light theme as the default.
- Manual theme switching from the navigation bar.
- Theme preference saved using browser local storage.
- Consistent theme colors across application sections.

### Interactive Navigation

- Shared rounded navigation container.
- Active section highlighting.
- Dropdown previews for About, Services, Projects, and Contact.
- Section-based navigation using anchor links.
- Mobile navigation with expandable menus.

### Portfolio Overview

A bento-style overview featuring:

- Professional identity and background.
- Education and current learning journey.
- Technical skills and development tools.
- Social and professional links.
- Freelance availability and indicative pricing.

### Interactive Services

The Services section uses a numbered editorial accordion.

Visitors can:

- Browse available software development services.
- Expand a service to read its description.
- View related technologies and capabilities.
- Start a service-specific email enquiry.

### Featured Projects

An interactive project gallery allows visitors to select a project and view:

- Project name and description.
- Technology stack.
- Relevant project links.
- An IDE-inspired code preview.

The code preview includes a typewriter animation designed to run for two cycles before displaying the completed code.

### Contact Options

- Direct email contact.
- Expandable contact form using EmailJS.
- Links to professional profiles.
- Clear calls to action for project enquiries.

---

## Technology Stack

| Category | Technology | Purpose |
|---|---|---|
| Frontend | React 19 | Component-based user interface |
| Language | TypeScript | Type safety and maintainability |
| Build tool | Vite 6 | Development and production builds |
| Styling | Tailwind CSS v4 | Utility-first styling |
| Styling | Custom CSS | Design tokens, layouts, and animations |
| Icons | Lucide React | Interface icons |
| Contact | EmailJS | Client-side email form integration |
| Hosting | GitHub Pages | Static website hosting |
| Package management | npm | Dependency and script management |

### Design Technologies

The interface uses:

- Google Poppins typography.
- CSS custom properties for color themes.
- Responsive layouts and media queries.
- Subtle gradients, borders, and shadows.
- Native React state for interactive components.

### Typography

| Element | Font | Weight |
|---|---|---|
| Main headings | Poppins | 600 — Semibold |
| Section headings | Poppins | 600 — Semibold |
| Card headings | Poppins | 600 — Semibold |
| Body paragraphs | Poppins | 300 — Light |

---

## Featured Projects

### 1. Personal Developer Portfolio

A responsive portfolio application developed using React, TypeScript, Tailwind CSS, and Vite.

**Key areas:**
- Component-based frontend development.
- Responsive interface design.
- Theme management.
- Interactive portfolio content.
- GitHub Pages deployment.

**Technologies:** React, TypeScript, Tailwind CSS, Vite

### 2. College Management API

A backend-focused college management project built with Node.js, Express, and MongoDB.

**Key areas:**
- REST API design.
- Authentication and authorization.
- Structured application routes.
- Database integration.
- Backend application organization.

**Technologies:** Node.js, Express, MongoDB

### 3. DigiGuard — Real-Time SOC & Active Threat Interceptor

A software engineering hackathon project exploring security-event interception and real-time threat visibility.

**Key areas:**
- Backend service integration.
- API request monitoring.
- Real-time event notifications.
- Frontend dashboard integration.
- Multi-service development environments.

**Technologies:** Python/FastAPI, Java/Spring Boot, React, WebSockets, Docker Compose

> Project descriptions summarize development work and implementation goals. They do not imply independently verified security guarantees, performance benchmarks, or production deployment.

---

## Services

The portfolio presents five software development services.

| Service | Description |
|---|---|
| Frontend Web Development | Responsive, accessible and user-friendly web interfaces |
| Backend API Development | REST APIs and backend application services |
| Full-Stack Web Applications | Integrated frontend and backend solutions |
| Bug Fixing & Maintenance | Troubleshooting, improvements, and ongoing maintenance |
| Portfolio & Business Websites | Professional websites for individuals and businesses |

### Working Arrangements

- **Availability:** Flexible, depending on project requirements.
- **Work location:** Remote, hybrid, or on-site, depending on the project.
- **Indicative starting rate:** R330 per hour.
- **Pricing approach:** Final quotations depend on scope, complexity, and agreed deliverables.

---

## Project Structure

The main repository structure is organized as follows:

```text
portfolio/
├── public/
│   └── ...                      # Static public assets
│
├── src/
│   ├── assets/                  # Images, icons, and other assets
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation and dropdown menus
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── PortfolioOverview.tsx# Bento-style portfolio overview
│   │   ├── Services.tsx         # Services and Why Hire Me
│   │   ├── Projects.tsx         # Interactive project gallery
│   │   ├── Contact.tsx          # Contact CTA and EmailJS form
│   │   ├── Footer.tsx           # Footer content
│   │   └── ...                  # Other retained components
│   │
│   ├── hooks/
│   │   └── useTheme.ts          # Theme management
│   │
│   ├── App.tsx                  # Application composition
│   ├── App.css                  # Component and layout styling
│   ├── index.css                # Global styles and theme tokens
│   └── main.tsx                 # React application entry point
│
├── docs/
│   └── design/                  # HTML design references
│
├── index.html                   # HTML entry point
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.app.json            # Application TypeScript settings
├── eslint.config.js             # ESLint configuration
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
└── README.md
```

Some legacy components and assets may remain in the repository while the redesign is being finalized.

---

## Getting Started

### Prerequisites

Install the following tools:

- Git
- Node.js
- npm

The application has been developed in a WSL environment using Node.js 24 and npm 11. Use Node.js and npm versions compatible with the dependencies declared in `package.json`.

### 1. Clone the Repository

```bash
git clone https://github.com/tlhomphogit/portfolio.git
cd portfolio
```

### 2. Install Dependencies

For a reproducible installation using the existing lockfile:

```bash
npm ci
```

Alternatively, during dependency development:

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed by Vite.

Because the application is configured for GitHub Pages under `/portfolio/`, the development URL may include that base path.

### 4. Build the Application

```bash
npm run build
```

This runs TypeScript build checks and generates the production-ready files in `dist/`.

### 5. Preview the Production Build

```bash
npm run preview
```

This serves the locally generated production build for inspection before deployment.

---

## Environment Configuration

The contact form uses EmailJS.

The application expects these Vite environment variables:

```dotenv
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

### Local Setup

Create a file named `.env.local` in the project root:

```bash
touch .env.local
```

Add your EmailJS configuration values:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the Vite development server after changing environment variables.

### Important Notes

- Do not commit private credentials or sensitive configuration.
- Ensure local environment files are excluded from Git.
- Vite embeds variables prefixed with `VITE_` into the client application during the build.
- EmailJS public configuration identifiers are intended for browser-side integration; they must not be treated as server-side secrets.
- Do not place private API keys or server credentials in Vite client environment variables.
- Validate actual form delivery using the configured EmailJS account before relying on the form in production.

A direct email link remains an alternative contact method.

---

## Available Scripts

The following npm scripts are used by the project:

| Command | Description |
|---|---|
| `npm run dev` | Starts the local Vite development server |
| `npm run build` | Runs TypeScript checks and creates a production build |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build |
| `npm run deploy` | Builds and publishes the static site using `gh-pages` |

Refer to `package.json` for the authoritative script definitions.

---

## Design and Architecture

### Application Architecture

The portfolio follows a straightforward component-based React architecture.

```text
Browser
   |
   v
React Application
   |
   +-- Navigation
   |
   +-- Hero
   |
   +-- Portfolio Overview
   |
   +-- Services / Why Hire Me
   |
   +-- Featured Projects
   |
   +-- Contact
   |
   +-- Footer
   |
   +-- Theme Management
```

The application is client-rendered and deployed as a static website.

It does not require a dedicated backend server to display its portfolio content.

### Component Organization

Individual interface sections are implemented as React components.

This provides:

- Separation of concerns.
- Reusable interface elements.
- Easier component maintenance.
- Isolated interactive behavior.
- Room for future enhancements.

### State Management

React state and custom hooks manage the interactive features.

Examples include:

- Navigation menu visibility.
- Active section navigation.
- Theme selection.
- Service accordion expansion.
- Project selection.
- Project code typing animation.
- Contact form interaction.

No additional global state-management framework is required for the current scope.

### Theme Architecture

The site supports light and dark themes through CSS custom properties.

The active theme is applied through the document theme attributes and classes.

A custom React hook manages theme changes and persists manual selections using `localStorage`.

### Interactive Project Preview

The Projects section uses React state to update the selected project information and animated code preview.

The typing effect is designed to:

1. Type the code at approximately 100 milliseconds per character.
2. Pause after the first cycle.
3. Type the code a second time.
4. Stop and leave the completed code visible.

Reduced-motion preferences should be respected by displaying the code without unnecessary animation.

### Styling Approach

Tailwind CSS v4 and custom CSS are used together.

- Tailwind provides utility classes.
- Custom CSS defines the approved visual design.
- CSS variables support light and dark palettes.
- Responsive rules adapt layouts across screen sizes.

This keeps the current design maintainable without requiring another UI framework.

---

## Deployment

The portfolio is configured for deployment to GitHub Pages.

### Hosting

**GitHub Pages URL:**

https://tlhomphogit.github.io/portfolio/

The Vite configuration uses the repository base path:

```ts
base: "/portfolio/"
```

The base path is important for correctly resolving built assets on GitHub Pages.

### Manual Deployment

Before deploying, verify that the application builds successfully:

```bash
npm run lint
npm run build
```

Then publish using:

```bash
npm run deploy
```

The deployment script uses the `gh-pages` package to publish the generated static files.

Ensure the repository's GitHub Pages settings point to the appropriate deployment branch.

### Deployment Considerations

- Confirm all image and asset paths resolve under `/portfolio/`.
- Check navigation and section links.
- Verify both themes.
- Check responsive layouts.
- Verify public project links.
- Verify contact methods.
- Confirm EmailJS variables are available during the production build if the contact form is enabled.
- Review the published website after deployment.

> Deployment is a separate action. A successful local build does not automatically update the public website.

---

## Verification

### Automated Checks

Run:

```bash
npm run lint
npm run build
```

The repository previously passed both checks during the redesign process, but they should be rerun after subsequent changes.

No dedicated automated test suite or CI workflow is assumed to be present.

### Manual Verification Checklist

- [ ] Navigation links reach the correct sections.
- [ ] Desktop dropdown menus work.
- [ ] Mobile menus expand and close.
- [ ] Keyboard navigation is usable.
- [ ] Light and dark themes render correctly.
- [ ] Theme preference persists after refreshing.
- [ ] Services accordion expands and collapses correctly.
- [ ] Project selection updates the featured content.
- [ ] Code typing animation stops after two cycles.
- [ ] Reduced-motion preferences are respected.
- [ ] Project links lead to intended destinations.
- [ ] Contact email link opens an email application.
- [ ] EmailJS form submission is tested with valid configuration.
- [ ] Mobile layouts have no unwanted horizontal overflow.
- [ ] Production assets load correctly under `/portfolio/`.

---

## Future Improvements

The portfolio is being improved incrementally.

Potential future enhancements include:

- [ ] Finalize and verify all featured project repository links.
- [ ] Add more detailed project case studies.
- [ ] Add project screenshots or demonstrations where available.
- [ ] Improve accessibility through systematic testing.
- [ ] Add automated component and interaction tests.
- [ ] Add a GitHub Actions CI workflow.
- [ ] Improve metadata and social-sharing previews.
- [ ] Optimize image loading and application performance.
- [ ] Improve contact-form feedback and reliability.
- [ ] Add a dedicated page for exploring additional projects if needed.
- [ ] Perform a full responsive and cross-browser review.

These items are planned or under consideration, not completed features.

---

## Contact

I'm open to discussing software development projects, technical collaboration, and freelance opportunities.

- **GitHub:** [github.com/tlhomphogit](https://github.com/tlhomphogit)
- **Portfolio:** [tlhomphogit.github.io/portfolio](https://tlhomphogit.github.io/portfolio/)

---

## License

No open-source license has been specified for this repository.

Unless a license is added, the source code and other original content remain subject to applicable copyright restrictions.

© 2026 Tlhompho Ratlhogo. All rights reserved.
