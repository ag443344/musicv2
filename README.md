# 🎸 Rock & Rewind

A "Name That Tune" music quiz game with real 30-second audio previews powered by Deezer.

## Quick Deploy to Vercel

1. **Unzip** this project
2. Push to a GitHub repo, or drag the folder into [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — just click **Deploy**
4. Done! No API keys or auth needed.

## How It Works

- Plays real 30-second song previews from Deezer (free, no API key)
- Falls back to synthesized melodies via Tone.js if Deezer is unavailable
- 20 classic rock & 80s/90s songs
- Points based on how fast you guess
- Lyric hints (-100 pts) and year hints (-50 pts)
- Streak tracking and end-of-game ranking

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Tech Stack

- Vite + React
- Tone.js (synth fallback)
- Deezer API (free 30-sec previews, no auth)
