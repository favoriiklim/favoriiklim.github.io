# İlker Coşkunsel — Portfolio

Personal portfolio site for **İlker Coşkunsel**, an Aerospace Engineering student and software developer.

🌐 **Live site:** [ilkercoskunsel.com](https://ilkercoskunsel.com)

---

## Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Structure   | HTML5 (semantic)            |
| Styles      | Vanilla CSS                 |
| Logic       | Vanilla JavaScript (ES6+)   |
| Fonts       | VT323 + Space Mono (Google) |
| Analytics   | GoatCounter (no cookies)    |
| Hosting     | GitHub Pages                |
| CI/CD       | GitHub Actions              |

---

## Features

- **Bilingual** — Turkish and English, switchable at runtime
- **Dark / Light theme** — auto-detects OS preference, saved in localStorage
- **Retro RPG aesthetic** — VT323 pixel font, quest cards, HUD navigation, rotating gears
- **Responsive** — works on 360 px up to 1440+ px
- **Accessible** — skip link, semantic HTML, focus states, `aria-*` labels, `prefers-reduced-motion` support
- **SEO** — meta tags, Open Graph, Twitter Card, JSON-LD Person schema, sitemap, canonical URL
- **Start screen** — skippable RPG-style intro, remembers returning visitors

---

## Project Structure

```
favoriiklim.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions auto-deploy
├── css/
│   └── app.css              # All styles (retro design system)
├── js/
│   ├── content.js           # All TR/EN text content (edit here)
│   └── portfolio.js         # Interactive logic (theme, lang, scroll, etc.)
├── index.html               # Main page shell
├── 404.html                 # SPA routing fallback
├── sitemap.xml
├── robots.txt
├── CNAME                    # Custom domain: ilkercoskunsel.com
├── favicon.png
└── icon-192.png
```

---

## Local Development

No build step required. Open `index.html` in a browser, or use a simple local server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .

# VS Code
# Install "Live Server" extension, right-click index.html → Open with Live Server
```

Then open [http://localhost:8080](http://localhost:8080).

---

## Updating Content

All page text lives in [`js/content.js`](js/content.js).

- To update any text in **Turkish**, edit the `tr` object.
- To update any text in **English**, edit the `en` object.
- To add a new project, add an entry to `projects.items` in both `tr` and `en`.
- To add a new experience, add an entry to `experience.items` in both `tr` and `en`.

No compilation or build step needed — just edit and push.

---

## Updating Social Links

Open [`js/portfolio.js`](js/portfolio.js) and update the `LINKS` constant at the top:

```js
const LINKS = {
  github:   "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
  email:    "mailto:your@email.com",
  budgetRepo: "https://github.com/GoktugSaylam/Budget",
};
```

---

## Deployment

The site deploys automatically via GitHub Actions on every push to `main`.

**Manual trigger:**
1. Go to the **Actions** tab in this repository.
2. Select **Deploy to GitHub Pages**.
3. Click **Run workflow**.

The `CNAME` file (`ilkercoskunsel.com`) is preserved automatically.

---

## Custom Domain

The custom domain is configured in `CNAME`:

```
ilkercoskunsel.com
```

Do not delete this file. GitHub Pages uses it to serve the site on the custom domain.

---

## License

Personal portfolio — content and design are not licensed for reuse.