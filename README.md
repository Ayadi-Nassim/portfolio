# Nassim Ayadi — Portfolio

Static, dependency-free (HTML/CSS/JS, no build step) bilingual (EN default / FR toggle) portfolio site.

## Deploy for free

Pick whichever is easiest:

- **Vercel / Netlify (drag & drop)**: go to vercel.com/new or app.netlify.com/drop and drag this `portfolio/` folder in. Live in seconds, no config needed.
- **Vercel / Netlify (Git)**: push this folder to a GitHub repo, then "Import Project" on Vercel or "New site from Git" on Netlify. Framework preset: "Other" / static — no build command needed.
- **GitHub Pages**: push this folder to a repo, then in repo Settings → Pages, set the source to the branch/root containing `index.html`.

## Editing content

All text lives in `script.js` inside the `CONTENT` object (`en` and `fr` keys). Edit the strings there — the page re-renders from that data, so you don't need to touch `index.html`.

## Notes

- No résumé PDF is linked yet — the existing tailored CVs in this repo are company-specific, so none was reused here. Drop a neutral CV PDF into `assets/` and link it from the hero/contact actions in `script.js` if you want a download button.
- The headshot in `assets/headshot.png` was pulled from your interview presentation deck.
