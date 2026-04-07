# Ngo Trong Phuc — Portfolio

A personal portfolio site built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and React Three Fiber.

Live: https://ngotrongphuc.vercel.app

## Tech stack

- **Framework**: Next.js 16 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS 3.4 + `cn()` (clsx + tailwind-merge)
- **3D**: React Three Fiber + drei, GLTF models
- **Animation**: Framer Motion
- **Forms**: server route + EmailJS REST API
- **Package manager**: yarn 4 (Corepack)

## Prerequisites

- Node.js 20+ (Next.js 16 minimum)
- Corepack enabled (`corepack enable`) — pins yarn 4 automatically via `packageManager` in `package.json`

## Setup

```bash
git clone https://github.com/<you>/my-portfolio.git
cd my-portfolio
yarn install
cp .env.example .env.local   # then fill in the EmailJS keys
yarn dev
```

Open http://localhost:3000.

## Environment variables

See [`.env.example`](./.env.example) for the full list with inline comments. All EmailJS keys are **server-side only** — neither the contact form nor the visit logger ships any EmailJS IDs to the browser bundle.

At https://dashboard.emailjs.com/admin/account/security you need to:

1. Enable **"Allow EmailJS API for non-browser applications"** — required so server-side calls are accepted at all.
2. Copy the **Private Key** (Access Token) into `EMAILJS_PRIVATE_KEY` — required if your account has **strict mode** on (recommended). Both routes pass it as `accessToken` alongside the public key.

Without step 1, both routes return 403 `"API access from non-browser environments is currently disabled"`. Without step 2, both routes return 403 `"API access in strict mode, but no Private Key was provided"`.

In production on Vercel, the site's canonical URL for OG metadata is derived from `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel injects automatically — no manual config needed.

### Anti-bot on the contact form

The contact form has two layers of protection, both invisible to real users:

1. **Honeypot** — a CSS-hidden `website` field bots reliably fill in. Server silently returns `200 OK` without sending when it's populated, so bots think they succeeded and don't retry. No configuration needed; always on.
2. **Google reCAPTCHA v3** — a score-based (`0.0` = bot, `1.0` = human) invisible check. Requires these two env vars:

   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — **must be browser-exposed** because reCAPTCHA v3's client library needs it to request a token from Google. This is the _one_ required exception to the server-side-first env rule.
   - `RECAPTCHA_SECRET_KEY` — server-only, used by `/api/send-message` to call Google's `siteverify` endpoint.

   Get both at https://www.google.com/recaptcha/admin/create (select "reCAPTCHA v3") and register both `localhost` and your production domain. The threshold is `0.5` and the expected action is `contact` — see [`/api/send-message/route.ts`](./app/api/send-message/route.ts) to adjust.

   **Graceful degradation**: if either env var is empty, reCAPTCHA is skipped entirely and only the honeypot runs. This lets local dev work without registering a site; production should always set both.

## Scripts

| Command          | Description                                       |
| ---------------- | ------------------------------------------------- |
| `yarn dev`       | Start Next.js dev server (Turbopack) on port 3000 |
| `yarn build`     | Production build                                  |
| `yarn start`     | Serve the production build                        |
| `yarn lint`      | ESLint over `app/**/*.{ts,tsx}`                   |
| `yarn typecheck` | `tsc --noEmit`                                    |
| `yarn prettier`  | Format the whole repo                             |

## Project structure

```
app/
├── api/
│   ├── log-visit/      # server route: ipinfo.io → EmailJS
│   └── send-message/   # server route: contact form → EmailJS
├── components/
│   ├── canvas/         # R3F scenes (Moon, Earth, Computer, Space)
│   ├── sections/       # Hero, About, Skills, Work, Projects, Contact
│   └── ...             # Navbar, Modal, Popup, etc.
├── hooks/              # useWindowDimensions, useNavbarVisible
├── ui/                 # fonts, shared style class strings
├── utils/              # constants, types, cn, motions, regexPatterns
├── layout.tsx          # root layout + OG metadata
└── page.tsx            # single-page composition of all sections
```

## Deployment

Deployed to Vercel via GitHub integration. Set the four EmailJS env vars in the Vercel project's **Environment Variables** page (use `vercel env add`, or the dashboard), then push to `master`.
