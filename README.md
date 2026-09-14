# IELTS Study Archive

A warm, minimal personal study dashboard for working toward IELTS Band 7.0. The site is a dependency-free static single-page app and can be deployed directly to Vercel or any static host.

## Run locally

Start any static file server from the repository root, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/#/home`.

## Routes

- `#/home`
- `#/speaking`
- `#/writing`
- `#/reading`
- `#/listening`
- `#/expressions`
- `#/pronunciation`

## Add study content

All study material and navigation labels live in `data/content.js`. Edit that file to add answers, phrases, scores, notes, or new starter cards; the interface renders the data automatically.

## Deploy

Import the repository into Vercel and deploy with the default static-site settings. No build command is required.
