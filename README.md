# Peanut Gallery

Be a fly on the wall in five group chats full of satire, dark humor and very petty people.
An installable app for Android (built for a Google Pixel).

## Install on your phone

1. Open the GitHub Pages link for this repo in Chrome on your phone.
2. Tap **Install** (or ⋮ → **Install app**).

It gets its own icon, opens full screen, and works offline.

## How it's put together

| Folder | What's in it |
| --- | --- |
| `design/` | The screens (`*.dc.html`, the same files as the Claude Design canvas) and the chat scripts (`design/data/*.json`). **Edit these.** |
| `build/` | Turns the design files into the app. You shouldn't need to touch it. |
| `dist/` | Built output. Not committed; GitHub builds it. |

Every push to `main` rebuilds the app and publishes it. Phones pick up the new version the next time the app opens online.

## Editing

- **New lines, storylines or characters' jokes:** edit `design/data/<chat>.json`. Each chat has `episodes` (storylines that play in order) and `banter` (random one-liners).
- **Message types in a storyline:** `{"f": "june", "t": "text"}`, a photo `{"f": "rick", "p": "mailbox"}`, a sticker `{"f": "mia", "s": "💀"}`, a voice note `{"f": "june", "v": "0:38", "t": "transcript"}`, a poll `{"f": "tyler", "poll": "Question?", "o": ["A", "B"], "n": [2, 1]}`, reactions `"r": ["😂3"]`, a typing pause `"w": 2`, a system line `{"sys": "Later that night"}`, and tea that leaks to another chat `{"x": "office", "t": "…", "then": "episode_id"}`.
- **Looks and layout:** edit the matching `design/*.dc.html` screen.

## Build locally

```
cd build
npm ci
node build.js      # app in dist/
node single.js     # also makes dist/PeanutGallery.html, a one-file version
```
