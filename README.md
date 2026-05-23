# Portfolio Website

A modern and responsive open-source portfolio website built with a combination of modern frontend technologies and UI libraries.

This project focuses on clean design, smooth interactions, scalability, and customization, making it suitable for personal portfolios, developer showcases, and creative websites.

## Tech Stack

### Core
- HTML5
- CSS3
- JavaScript
- TypeScript
- Node.js
- React.js

### Styling & UI
- Tailwind CSS
- Shadcn UI
- Radix UI
- DaisyUI
- Ant Design

### Animation & Interaction
- Framer Motion
- GSAP (GreenSock)
- AOS (Animate On Scroll)

### Visual & Components
- Three.js
- Swiper.js
- Slick.js
- Gyroscope Effects

### Internationalization
- i18next

---

## Features

- Responsive layout
- Modern and minimal interface
- Smooth animations and transitions
- Reusable component system
- Interactive visual effects
- Multi-language support
- Open-source and customizable architecture

---

## Installation

Clone the repository:

```bash
git clone https://github.com/iqballllzzzz/aurora-portfolio.git
```

Navigate into the project:

```bash
cd repository
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

---

## Project Structure

```bash
src/
├── components/
├── pages/
├── assets/
├── styles/
├── hooks/
├── utils/
├── locales/
└── app/
```

---

## Deployment

### Deploy to Vercel

Install Vercel CLI:

```bash
npm install -g vercel
```

Deploy:

```bash
vercel
```

Or connect the repository directly through the Vercel dashboard.

Production build is automatically generated using:

```bash
npm run build
```

---

### Deploy to Netlify

Build project:

```bash
npm run build
```

Upload the generated `dist` or `build` folder through Netlify dashboard.

Build settings:

```bash
Build Command: npm run build
Publish Directory: dist
```

---

### Deploy to GitHub Pages

Install dependency:

```bash
npm install gh-pages --save-dev
```

Add scripts inside `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Deploy:

```bash
npm run deploy
```

---

## Contributing

Contributions, improvements, and issue reports are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

Please maintain code quality and project consistency.

---

## License

Licensed under the MIT License.

See the `LICENSE` file for more information.
