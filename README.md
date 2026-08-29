<p align="center">
  <img src="public/favicon.svg" width="64" alt="Meridian logo" />
</p>

<h1 align="center">Meridian Engineering &amp; Consultancy — Frontend</h1>

<p align="center">
  <strong>Marketing site for an engineering, architecture &amp; civil consultancy firm</strong><br/>
  Built with <a href="https://nextjs.org" target="_blank">Next.js 16</a> (App Router), React 19, and Tailwind CSS v4
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/></a>
  <a href="#"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
  <a href="#"><img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit"/></a>
</p>

---

## ⚠️ Codebase status — read this first

This project carries **two different products** in one repo, at two different stages of a rebrand:

- **The public marketing site** (`app/(withCommonLayout)`) is fully built and on-brand for **Meridian Engineering & Consultancy** — a fictional/placeholder engineering, architecture, and civil consultancy firm. Home, Services, Projects, About Us, and Contact are real, finished pages with real (stock) photography.
- **Authentication and the admin/staff dashboard** (`app/login`, `app/signup`, `app/otp`, `app/(dashboardLayout)/dashboard`) were inherited from an earlier version of this codebase built for a yacht charter booking platform, and still talk to that same backend's data model (yachts, bookings, payments, support chat, destinations, etc.). They have **not** been migrated to the new brand or content — they're generic-styled (emerald/slate Tailwind defaults) and functionally unrelated to the engineering-firm content on the public site.

In short: if you're working on the public pages, everything is consistent and Meridian-branded. If you're working on auth or the dashboard, you're in the old yacht-platform code, wired to the old backend API. See [Known gaps](#-known-gaps--todo) below before assuming otherwise.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Public Pages](#-public-pages)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Known Gaps / TODO](#-known-gaps--todo)

---

## ⚡ Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4 |
| Fonts | Space Grotesk (display) + IBM Plex Sans (body), via `next/font/google` |
| Icons | [lucide-react](https://lucide.dev) |
| State / data | Redux Toolkit + RTK Query, `redux-persist` |
| Forms | react-hook-form |
| Realtime | socket.io-client (support chat, dashboard-side) |
| Misc | date-fns, react-datepicker, react-paginate, recharts (dashboard charts), sweetalert2, react-toastify |

---

## 🏛️ Public Pages

All under `app/(withCommonLayout)`, sharing the `Navbar` / `Footer` shell in `components/Shared`:

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, intro, stats, core services, expertise diagram, industries served, project approach, featured projects, why-choose-us, testimonials, latest insights, final CTA |
| `/services` | Architecture, Structural, Civil, MEP, Project Management, Survey, and BIM service detail sections |
| `/projects` | Category filters, a featured project, a project grid, stats, a case study, a technical-excellence showcase, and client-logo placeholders |
| `/about` | Company story, mission/vision, values, team, certifications, methodology, and sustainability commitments |
| `/contact` | A working (client-validated) consultation request form, contact info, service areas, departments, FAQ, consultation process, and an office map |

Section-level components for each page live under `components/Ui/{HomePage,ServicesPage,ProjectsPage,AboutPage,ContactPage}/`, one folder per section, composed by a `Root*Page/*Templet.tsx` file.

---

## 📦 Project Structure

```
src/
├── app/
│   ├── (withCommonLayout)/     # Public site: Home, Services, Projects, About, Contact
│   ├── (dashboardLayout)/      # Staff/admin dashboard (legacy yacht-platform CMS)
│   ├── login/, signup/, otp/   # Auth screens (legacy, generic-styled)
│   └── globals.css             # Theme tokens (brand-*/gold-* → navy/charcoal/bronze), fonts
├── components/
│   ├── Shared/                 # Navbar, Footer, Logo, MobileMenuSheet — Meridian-branded
│   ├── Common/                 # Form fields, modals, toast provider, skeletons
│   └── Ui/
│       ├── HomePage/ ServicesPage/ ProjectsPage/ AboutPage/ ContactPage/
│       │                        # One folder per marketing-page section
│       ├── Shared/
│       │   ├── SiteImage.tsx    # next/image wrapper used across marketing pages
│       │   ├── stockImages.ts   # Curated Unsplash URLs standing in for real photos
│       │   └── DarkCta/         # Reusable dark CTA band
│       └── Dashboard/           # Admin CRUD screens (legacy — yacht content model)
├── redux/                       # RTK Query API slices, auth/chat state, store
├── types/                       # Shared TS types (mostly legacy yacht-platform shapes)
└── utils/                       # Helpers, sample data, permission checks
```

---

## 🚀 Getting Started

```bash
npm install

# Create .env.local (see below) — at minimum NEXT_PUBLIC_API_URL

npm run dev
```

The app runs at `http://localhost:3000` (Next.js will pick another port automatically if that one's busy).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

---

## 🔑 Environment Variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Base URL of the NestJS backend (auth, dashboard, bookings, chat). Currently points at the legacy yacht-charter API — see [Known gaps](#-known-gaps--todo). |

---

## 🧭 Known gaps / TODO

- **"MERIDIAN" is a placeholder brand name.** No real name, logo, or domain was supplied — swap `components/Shared/Logo/Logo.tsx` and the metadata in `app/layout.tsx` before this goes anywhere real.
- **Stock photography stands in for real assets.** Every photo across the public pages (`components/Ui/Shared/stockImages.ts`) is a live Unsplash URL, not the firm's own project photography or team headshots.
- **Team names, certifications, client logos, and the office address are bracketed placeholders** (`[Full Name]`, `[Company Address]`, etc.) rather than fabricated — fill these in with real data before launch.
- **The Contact page's consultation form has no backend to submit to.** It validates client-side (react-hook-form) and shows a success toast, but nothing is persisted — there's no consultation-request endpoint on the backend yet.
- **Auth and the dashboard are unmigrated.** They're generic-styled (not on the Meridian brand tokens) and still model yachts/bookings/destinations/support-chat rather than engineering projects, clients, or consultation requests. Deciding whether to rebuild them for the new business or replace them entirely is an open decision, not started.
- **`NEXT_PUBLIC_API_URL` points at a yacht-charter backend deployment.** Auth and dashboard features will only work against that specific backend's data model.
