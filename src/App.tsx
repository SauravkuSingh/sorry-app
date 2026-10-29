import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Intro from "./components/stages/Intro";
import Messages from "./components/stages/Messages";
import Note from "./components/stages/Note";
import Photos from "./components/stages/Photos";
import Heart from "./components/stages/Heart";

type Stage = "intro" | "messages" | "note" | "photos" | "heart";

const order: Stage[] = ["intro", "messages", "note", "photos", "heart"];

export default function App() {
  const [stage, setStage] = useState<Stage>("intro");
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentIndex = order.indexOf(stage);

  const goNext = () => {
    const next = order[currentIndex + 1];
    if (next) setStage(next);
  };

  const goPrev = () => {
    const prev = order[currentIndex - 1];
    if (prev) setStage(prev);
  };

  const handleRestart = () => {
    setStage("intro");
  };

  const handleOpen = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
    goNext();
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-3 sm:p-6 md:p-8 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 overflow-x-hidden font-sans selection:bg-rose-200">
      <audio ref={audioRef} src="/music/soft1.mp3" loop />

      {/* Floating Ambient Background Hearts across the screen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: "110vh",
              x: `${(i * 5.8 + 2) % 96}vw`,
            }}
            animate={{
              opacity: [0, 0.45, 0.75, 0],
              y: "-10vh",
              rotate: [0, (i % 2 === 0 ? 35 : -35), 0],
            }}
            transition={{
              duration: 12 + (i % 6) * 3,
              repeat: Infinity,
              delay: i * 1.1,
              ease: "linear",
            }}
            className="absolute text-rose-300 text-xl sm:text-3xl md:text-4xl"
          >
            {["❤️", "💖", "🌸", "✨", "💕", "🫶🏻"][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Main Content Area - completely centered, distraction-free */}
      <main className="relative z-10 w-full flex items-center justify-center py-4 sm:py-8">
        <AnimatePresence mode="wait">
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex justify-center"
            >
              <Intro onOpen={handleOpen} />
            </motion.div>
          )}

          {stage === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex justify-center"
            >
              <Messages onNext={goNext} onPrev={goPrev} />
            </motion.div>
          )}

          {stage === "note" && (
            <motion.div
              key="note"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex justify-center"
            >
              <Note onNext={goNext} onPrev={goPrev} />
            </motion.div>
          )}

          {stage === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex justify-center"
            >
              <Photos onNext={goNext} onPrev={goPrev} />
            </motion.div>
          )}

          {stage === "heart" && (
            <motion.div
              key="heart"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex justify-center"
            >
              <Heart onRestart={handleRestart} onPrev={goPrev} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
