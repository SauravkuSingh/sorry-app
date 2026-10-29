# Heartfelt ❤️ — A Heartfelt Apology Web Experience

A romantic, emotional, and interactive apology web application built with **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Motion**. Designed with care, sincere words, and playful interactive elements to touch someone's heart and ask for forgiveness.

---

## ✨ Features

- 💌 **Multi-Stage Emotional Journey**:
  - **1. Intro (`Intro.tsx`)**: Bouncing animated 🥺 emoji with sparkle accents and an *"Open 💌"* button that begins the journey and initiates soft background music.
  - **2. Messages (`Messages.tsx`)**: Step-by-step card carousel cycling through custom apology messages and GIFs with smooth sliding transitions, pagination dots, and image fallbacks.
  - **3. The Letter (`Note.tsx`)**: A scrollable parchment-style love letter styled with delicate typography, wax seal motifs, and heartfelt words.
  - **4. Memories (`Photos.tsx`)**: Interactive **3D Card Stack** (fan deck) where the recipient can drag, fling, swipe, or tap to shuffle through cherished memory photos.
  - **5. Forgiveness Finale (`Heart.tsx`)**:
    - **Elusive "No 💔" Button**: Playfully jumps away and changes to funny, pleading phrases whenever hovered or tapped.
    - **Growing "Yes, I do! ❤️" Button**: Grows larger with each attempt to say No.
    - **Celebration Screen**: A pulsing giant beating heart, sparkle effects, and the loving thank-you confirmation text, plus a *"Start Over ↺"* button.
- 🎵 **Ambient Background Music**: Automatically begins playing softly when the card is opened (built with browser autoplay policy fallbacks).
- 🌸 **Atmospheric Visuals**: Floating background hearts and sparkles drifting across a soft pastel gradient with glassmorphism cards.
- 📱 **Fully Responsive**: Scaled to look grand, spacious, and centered on desktop monitors while adapting naturally to phones and tablets.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite`
- **Animations**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Shadcn UI](https://ui.shadcn.com/) / [@base-ui/react](https://base-ui.com/)

---

## 📁 Project Structure

```text
sorry-app/
├── public/
│   ├── gifs/                  # Apology GIFs (1.gif, 2.gif, 3.gif)
│   ├── music/                 # Background music (soft1.mp3)
│   └── photos/                # Memory photos (1.jpg, 2.jpg, ...)
├── src/
│   ├── components/
│   │   ├── stages/
│   │   │   ├── Intro.tsx      # Welcome stage with "Open" button
│   │   │   ├── Messages.tsx   # Apology cards carousel
│   │   │   ├── Note.tsx       # Long-form love letter
│   │   │   ├── Photos.tsx     # Polaroid memory card stack
│   │   │   └── Heart.tsx      # Interactive forgiveness climax
│   │   ├── ui/                # Base UI button component
│   │   └── Stack.tsx          # Interactive card stack component
│   ├── data.ts                # All customizable text, note, and media paths
│   ├── App.tsx                # Main stage controller & floating particles
│   ├── index.css              # Global styling & Tailwind theme setup
│   └── main.tsx               # App entrypoint
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd sorry-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```text
   http://localhost:5173
   ```

### Production Build

To build the project for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🎨 Customizing Content

All text, messages, photos, and music can be customized in a few simple steps:

### 1. Edit the Messages & Letter
Open [`src/data.ts`](src/data.ts) to edit:
- **`messages`**: The apology lines and corresponding GIF paths.
- **`note`**: The main heartfelt letter text.
- **`photos`**: Image paths and captions for the photo memory stack.
- **`finalText`**: The celebration text displayed after she/he clicks "Yes".

### 2. Replace Photos & GIFs
Drop your own images into:
- `public/gifs/` (e.g. `1.gif`, `2.gif`, `3.gif`)
- `public/photos/` (e.g. `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`)

### 3. Replace Background Music
Replace `public/music/soft.mp3` with your favorite song or instrumental track.

---

## 💖 License

Crafted with love and sincerity. Feel free to use and customize this for your special someone!
