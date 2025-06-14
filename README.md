# [Panic Panini Next.Js template](https://panic-panini-next.vercel.app/)

This is a [Next.js](https://nextjs.org/) + [Tailwindcss](https://tailwindcss.com/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Starter Next.Js theme template for your client (or yours 🎸) Rock'n'Roll band!

The live project can be found at [https://panic-panini-next.vercel.app/](https://panic-panini-next.vercel.app/)

![Band playing](/public/panic-panini-template2.png?raw=true "Panic Panini intro template")

## Getting Started

First, clone the repo

```bash
https://github.com/stefanogali/panic-panini-next.git
```

then install the dependencies with

```bash
nvm install node --latest-npm

npm install
```

then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

Please feel free to use/modify any parts of the code as you wish.

Find things
```bash
grep -rl "frame-band" .
```
Edit the audio files

ffmpeg -i /home/vera/code/panic-panini-next/public/mp3-songs/01.IAU-BATTLE-CRY.wav -codec:a libmp3lame -b:a 192k 01.IAU-BATTLE-CRY.mp3

ffmpeg -i /home/vera/code/panic-panini-next/public/mp3-songs/02.IAU-MANA-MANA.wav -codec:a libmp3lame -b:a 192k 02.IAU-MANA-MANA.mp3

ffmpeg -i /home/vera/code/panic-panini-next/public/mp3-songs/03.IAU-ME-ALONE.wav -codec:a libmp3lame -b:a 192k 03.IAU-ME-ALONE.mp3