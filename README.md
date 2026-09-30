# Zo-Hotel, Goa

Marketing site for Zo-Hotel, a small hotel in village Goa, built around the
monsoon-season blog post *The Smell of Wet Earth*.

Static HTML/CSS/JS — no build step, no dependencies.

## Pages

| File | |
|---|---|
| `index.html` | Home |
| `the-smell-of-wet-earth.html` | The blog post |
| `stay.html` | Rooms |
| `dining.html` | Dining |
| `journal.html` | Journal index |
| `contact.html` | Contact & booking |
| `credits.html` | Photography credits |

## Local preview

```bash
python3 -m http.server 4173
```

## Before this is a finished business site

- Replace the stand-in photography (`images/heritage-house.jpg`,
  `images/verandah-garden.jpg`, `images/rain-window.jpg`) with real
  photographs of the property. Keep the filenames and no markup changes are needed.
- Replace the placeholder contact details and room rates in
  `index.html`, `stay.html`, `contact.html` and the shared footer.
- Wire up the booking and enquiry forms — both are currently inert
  (`onsubmit="return false"`).

## Photography

Images are freely licensed photographs of Goa and the Indian monsoon from
Wikimedia Commons. Per-file author, licence and source are listed on
`credits.html` and in `images/credits.json`.
