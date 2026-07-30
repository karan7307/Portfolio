# ⚡ Karan Kushwaha — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-amber-nine-75ejn249bb.vercel.app)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A ultra-responsive developer portfolio showcasing AI/ML projects, cloud automation frameworks, certifications, and technical experience. Designed with Apple/Linear/Vercel-inspired aesthetics, interactive 3D card tilt effects, dynamic theme system, and custom glassmorphic UI.

---

## ✨ Features

- **🌐 100% Full-Width Responsiveness**: Fluid container scaling from mobile viewports (375px) up to ultra-wide 2K and 4K displays with zero horizontal scrolling.
- **🎨 3-Tier Dynamic Theme System**:
  - **White Theme**: Minimalistic, high-contrast, clean professional layout.
  - **Black Theme (Cyber Dark)**: Deep pitch black (`#05070f`), electric cyan, blue, and neon purple accents with glowing glassmorphism.
  - **Brown Theme (Luxury Chocolate Gold)**: Dark chocolate background (`#120b06`), warm champagne gold, amber, and copper accents.
  - *Instant theme toggling saved in `localStorage` with zero page reload.*
- **🖋️ Script Calligraphy Branding**: Custom `"Karan Kushwaha"` script branding in the navbar with blue $\rightarrow$ purple gradient and theme-aware glow.
- **🚀 60 FPS Micro-Animations**:
  - **Typewriter Effect**: Automated cycling roles in Hero section.
  - **3D Card Perspective Tilt**: Real-time mouse tracking tilt (`rotateX` / `rotateY`) on Projects and Certifications cards.
  - **Mouse Spotlight**: Subtle radial light spotlight tracking cursor movement across background.
  - **Scroll Progress Indicator**: Top fixed 3px gradient reading bar.
  - **Theme-Aware Custom Cursor**: Interactive glowing cursor ring and pointer dot.
  - **Stat Counters**: Highlighted performance metrics (`90+ ATS Resumes`, `6+ Certifications`, `80% Satisfaction`).

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, JavaScript (ES6+), HTML5, CSS3
- **Build Tooling**: Vite 8, ESLint
- **Icons**: Lucide React
- **Typography**: Inter & Great Vibes (Google Fonts)
- **Deployment**: Vercel CLI & GitHub CI/CD

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── My Photo.jpeg                     # Profile portrait image
│   └── Karan Kushwaha ( Resume ) .pdf    # Technical Resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                    # Header navigation with theme switcher & script logo
│   │   ├── Hero.jsx                      # Hero section with typewriter role loop & floating photo
│   │   ├── About.jsx                     # About bio, stat counters, and technical skills grid
│   │   ├── Experience.jsx                # Professional timeline with vertical glowing node line
│   │   ├── Projects.jsx                  # Featured projects with 3D tilt interaction
│   │   ├── Certifications.jsx            # Licenses & industry certifications grid
│   │   ├── Contact.jsx                   # Contact section with interactive badges
│   │   ├── Footer.jsx                    # Footer with copyright and back-to-top button
│   │   ├── ScrollProgress.jsx            # Top fixed scroll progress bar
│   │   ├── CustomCursor.jsx              # Theme-aware glowing mouse follower
│   │   └── MouseSpotlight.jsx            # Radial background light tracking spotlight
│   ├── App.jsx                           # App entry component & global layout
│   ├── App.css                           # App layout helpers
│   ├── index.css                         # Core CSS design system tokens & theme variables
│   └── main.jsx                          # React DOM root render
├── index.html                            # HTML entry & font imports
├── package.json                          # Dependencies & build scripts
└── vercel.json                           # Vercel deployment rewrite rules
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation & Local Setup

```bash
# Clone the repository
git clone https://github.com/karan7307/Portfolio.git

# Navigate into the project folder
cd Portfolio/portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📦 Building for Production

```bash
# Compile and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Deployment

Deployed on [Vercel](https://vercel.com/):

```bash
# Deploy using Vercel CLI
npx vercel --prod
```

**Live Production Link**: [https://portfolio-amber-nine-75ejn249bb.vercel.app](https://portfolio-amber-nine-75ejn249bb.vercel.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
