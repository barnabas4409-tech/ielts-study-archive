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

Speaking practice is organized in `speaking.topicPacks` (Part 1, Part 2 cue card, Part 3, and useful language) and `speaking.partTwoBank` (rotating cue-card questions). Curated vocabulary from lesson materials lives in `expressions.topicPacks`, separate from the personal reusable-expression list.

### Writing reviews

Send the original essay and task prompt in the Codex conversation to prepare a review, then save it in `writing.reviews`. The website displays saved reviews; it does not submit essays to an AI service.

Each review has `task`, `title`, `paragraphs`, `comparisons`, `model` (full revised paragraphs), and `expressions` (`phrase`, `meaning`, `example`). `comparisons` groups rows by essay section; each row is `[original sentence, suggested sentence, reason]`. The website shows these side by side, then the complete model answer. Each original paragraph is an array of unchanged strings and correction objects with `original`, `replacement`, `category`, and `reason`. Keep every original character in those strings and `original` fields so the original-only view reconstructs the submitted essay exactly. An empty `original` inserts text; an empty `replacement` deletes text.

```js
paragraphs: [
  ["Many people ", { original: "uses", replacement: "use", category: "문법", reason: "복수 주어에 맞춰 use를 씁니다." }, " online courses."],
],
comparisons: [
  { section: "Introduction", rows: [["Many people uses online courses.", "Many people use online courses.", "people은 복수이므로 use를 씁니다."]] },
]
```

The Task 1/Task 2 structure and reusable examples below the reviews are in `writing.phraseBank`. Each entry has a reusable `pattern`, an `example` quoted from a saved answer, and a short `note`.

The focused Task 1 reference is in `writing.taskOneToolkit`. Edit its `movement`, `degrees`, `numbers`, `overviews`, `comparisons`, `mistakes`, and `practice` arrays to extend the toolkit without changing the page code.

The built-in preview is explicitly labelled as a demonstration, not a submitted essay.

## Deploy

Import the repository into Vercel and deploy with the default static-site settings. No build command is required.
