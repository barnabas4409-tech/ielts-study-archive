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

### Writing reviews

Send the original essay and task prompt in the Codex conversation to prepare a review, then save it in `writing.reviews`. The website displays saved reviews; it does not submit essays to an AI service.

Each review has `task`, `title`, `paragraphs`, `model` (full revised paragraphs), and `expressions` (`phrase`, `meaning`, `example`). Each original paragraph is an array of unchanged strings and correction objects with `original`, `replacement`, `category`, and `reason`. Keep every original character in those strings and `original` fields so the original-only view reconstructs the submitted essay exactly. An empty `original` inserts text; an empty `replacement` deletes text.

```js
paragraphs: [
  ["Many people ", { original: "uses", replacement: "use", category: "문법", reason: "복수 주어에 맞춰 use를 씁니다." }, " online courses."],
]
```

The built-in preview is explicitly labelled as a demonstration, not a submitted essay.

## Deploy

Import the repository into Vercel and deploy with the default static-site settings. No build command is required.
