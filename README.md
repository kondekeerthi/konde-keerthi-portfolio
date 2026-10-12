# Konde Keerthi — AI Developer Portfolio

Professional multi-page developer portfolio for **Konde Keerthi** — programmer / AI Developer at
PCS, Police Department (Chief Office), B.Tech in Electronics and Communication Engineering.

Interests: AI-assisted development, web development, data analytics, automation, and DevOps.

Built with **Next.js (App Router), HTML, CSS** — reusable components, clean code, responsive
dark-tech design with blue/purple gradient accents.

## Page structure (separate routes, not one-page sections)

| Route       | Page              | Contents |
|-------------|-------------------|----------|
| `/`         | Home              | Hero, intro, View My Skills / Contact Me buttons, GitHub button |
| `/about`    | About Me          | Role, education, AI-assisted development focus, profile layout |
| `/skills`   | Skills            | Web Dev, Database & Analytics, AI tools, Version Control, Deployment, DevOps — icon + name per row |
| `/tools`    | Tools             | Cline, OpenCode, Git, GitHub, Next.js, Vercel, Netlify, CLI tools — cards with official links |
| `/learning` | Currently Learning| 6 learning-interest cards (not claimed expertise) |
| `/github`   | GitHub Statistics | Live stats, top languages, streak + profile button; graceful fallback |
| `/contact`  | Contact           | GitHub / LinkedIn / email / portfolio cards; no fake form |

Shared components in `src/components/`: `Navbar`, `Footer`, `Button`, `SkillCard`,
`ToolCard`, `SocialLinks`. Shared layout (`src/app/layout.js`) keeps
header/nav/footer consistent; active page is highlighted; mobile hamburger menu included.

## Run locally

Requirements: Node.js 18+.

```bash
cd konde-keerthi-portfolio
npm install
npm run dev
# open http://localhost:3000
```

Other commands:

```bash
npm run build   # production build check
npm start       # serve the production build
npm run lint    # Next.js lint
```

> Note: if `npm` is blocked by PowerShell execution policy on Windows, use
> `cmd /c "npm install"` / `cmd /c "npm run dev"`.

## Configure your real details (placeholders to replace)

All placeholders live in code — no invented projects, stats, or contact details.

1. **`src/data/siteConfig.js`**
   - `githubUsername`: e.g. `"kondekeerthi"` (drives `/github` stats + all GitHub links)
   - `linkedinUrl`: e.g. `"https://www.linkedin.com/in/kondekeerthi"`
   - `email`: e.g. `"keerthi@example.com"`
   - `portfolioUrl`: your deployed URL after shipping
2. **Icons** — skills/tools use jsDelivr Devicons + SimpleIcons CDNs with `alt` text and
   fixed 28px size; badge fallbacks (letters) are used where no official icon exists
   (Cline, OpenCode, CLI). No proficiency levels are claimed.

## Deploy

### Vercel (recommended for Next.js)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → Add New → Project → import the repo.
3. Framework preset: Next.js. Build command `npm run build`. Deploy.
4. Copy the `https://…vercel.app` URL into `portfolioUrl` in `siteConfig.js`.

### Netlify

1. Push to GitHub.
2. https://app.netlify.com → Add new site → Import from Git.
3. Build command: `npm run build`, publish directory: `.next` — or use the
   [Next.js Runtime](https://docs.netlify.com/integrations/frameworks/next-js/overview/).
4. Deploy, then update `portfolioUrl`.

## Project layout

```text
src/
  app/
    layout.js  page.js  globals.css
    about/ skills/ tools/ learning/ github/ contact/
  components/
    Navbar.js  Footer.js  Button.js  SkillCard.js
    ToolCard.js  SocialLinks.js
  data/
    siteConfig.js  skills.js  tools.js  learning.js
public/
  favicon.svg
```

## Accessibility & responsive notes

- Semantic landmarks, skip link, `aria-current="page"`, keyboard-focusable buttons/links.
- Sufficient text contrast on dark background; all images have `alt` text.
- Grids collapse 3→2→1 columns; sticky nav becomes a hamburger menu under 640px; no horizontal overflow.
