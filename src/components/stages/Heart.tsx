import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { finalText } from "@/data";
import { Button } from "@/components/ui/button";
import { Heart as HeartIcon, RotateCcw, Sparkles } from "lucide-react";

type Props = {
  onRestart: () => void;
  onPrev: () => void;
};

const NO_PHRASES = [
  "No 💔",
  "Are you sure? 🥺",
  "Please reconsider 😭",
  "Pakka? Ek baar soch lo na 🥺",
  "You can't say no! 🙈",
  "Look at that pretty Yes button 👉👈",
  "I promise to be better! 🌸",
  "Ek aakhiri chance? 🥺❤️",
  "Pretty please with cherry on top 🍒",
  "No is not an option anymore! 💖",
];

export default function Heart({ onRestart }: Props) {
  const [forgiven, setForgiven] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    setNoCount((prev) => prev + 1);

    // Random offset within reasonable bounds
    const maxOffset = 130;
    const x = (Math.random() - 0.5) * maxOffset * 2;
    const y = (Math.random() - 0.5) * maxOffset * 1.6;
    setNoPosition({ x, y });
  };

  const handleYes = () => {
    setForgiven(true);
  };

  const currentNoPhrase = NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];
  const yesScale = Math.min(1 + noCount * 0.08, 1.45);

  return (
    <div ref={containerRef} className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 relative">
      <AnimatePresence mode="wait">
        {!forgiven ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/90 backdrop-blur-xl border border-rose-200/80 shadow-2xl shadow-rose-300/40 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-7 sm:p-12 md:p-16 text-center space-y-7 sm:space-y-10 relative overflow-hidden"
          >
            {/* Cute pleading illustration */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-7xl sm:text-8xl md:text-9xl select-none"
            >
              🥺
            </motion.div>

            {/* Question Text */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-rose-600 tracking-tight leading-tight">
                Do you forgive me?
              </h2>
              <p className="text-rose-900/75 text-base sm:text-xl md:text-2xl max-w-xl mx-auto leading-relaxed">
                I truly mean every single word, and I promise to make you smile again. 🫶🏻
              </p>
            </div>

            {/* Interactive Yes / Runaway No Buttons */}
            <div className="relative pt-4 pb-2 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 min-h-[110px]">
              {/* Yes Button (grows larger with every No attempt) */}
              <motion.div
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="z-10"
              >
                <Button
                  onClick={handleYes}
                  className="rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white font-black px-8 py-6 sm:px-12 sm:py-8 text-lg sm:text-2xl shadow-xl shadow-rose-500/30 cursor-pointer flex items-center gap-3"
                >
                  <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white animate-pulse" />
                  <span>Yes, I do! ❤️</span>
                </Button>
              </motion.div>

              {/* Elusive Runaway No Button */}
              <motion.div
                animate={
                  noPosition
                    ? { x: noPosition.x, y: noPosition.y }
                    : { x: 0, y: 0 }
                }
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
              >
                <Button
                  variant="outline"
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  onTouchStart={moveNoButton}
                  className="rounded-full border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-bold transition-colors cursor-pointer select-none shadow-xs"
                >
                  {currentNoPhrase}
                </Button>
              </motion.div>
            </div>

            {noCount > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs sm:text-sm text-rose-500 font-semibold italic"
              >
                (You know the right answer... 😉)
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-xl border border-rose-200 shadow-2xl shadow-rose-300/50 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-14 md:p-18 text-center space-y-7 sm:space-y-9 relative overflow-hidden"
          >
            {/* Pulsing Giant Beating Heart */}
            <div className="relative flex justify-center items-center py-6">
              <motion.div
                animate={{
                  scale: [1, 1.25, 1, 1.2, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative text-rose-500"
              >
                <HeartIcon className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 fill-rose-500 text-rose-500 drop-shadow-xl" />
              </motion.div>

              {/* Floating Sparkles around heart */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400 absolute -top-2 right-10 sm:right-24 animate-bounce" />
                <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-rose-400 absolute -bottom-2 left-10 sm:left-24 animate-pulse" />
              </motion.div>
            </div>

            {/* Final Text from data.ts */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-rose-600 leading-tight">
                {finalText}
              </h2>
              <p className="text-rose-950/85 text-base sm:text-xl md:text-2xl leading-relaxed max-w-xl mx-auto font-normal">
                I promise to always listen, understand, and protect your precious smile. Thank you for giving me this chance. 🫶🏻❤️
              </p>
            </div>

            {/* Restart button */}
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={onRestart}
                className="rounded-full border-2 border-rose-300 text-rose-600 hover:bg-rose-50 hover:text-rose-700 px-8 py-6 sm:px-12 sm:py-7 text-base sm:text-lg font-bold gap-2.5 cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Experience it again ↺</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
