import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { messages } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export default function Messages({ onNext }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = messages[index];
  const isLast = index === messages.length - 1;

  const handleNext = () => {
    if (isLast) {
      onNext();
    } else {
      setDirection(1);
      setIndex((i) => i + 1);
    }
  };

  return (
    <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/85 backdrop-blur-xl border border-rose-200/80 shadow-2xl shadow-rose-300/40 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-7 sm:p-11 md:p-14 space-y-6 sm:space-y-8 relative overflow-hidden"
      >
        {/* Subtle decorative background ambient glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-rose-200/35 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-pink-200/35 rounded-full blur-2xl pointer-events-none" />

        {/* Message Card Container with slide animation */}
        <div className="relative min-h-[360px] sm:min-h-[440px] md:min-h-[480px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full flex flex-col items-center text-center space-y-6 sm:space-y-8"
            >
              {/* Media image / GIF with significantly larger frame */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-xl border-3 border-rose-200 bg-rose-50 flex items-center justify-center">
                <img
                  src={current.gif}
                  alt="Sorry GIF"
                  className="w-full h-full object-cover select-none"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      const fallback = document.createElement("div");
                      fallback.className = "flex flex-col items-center justify-center p-6 text-center";
                      fallback.innerHTML = "<div class='text-7xl sm:text-8xl mb-3'>🥺👉👈</div><p class='text-sm sm:text-base text-rose-500 font-semibold'>With all my heart</p>";
                      target.parentElement.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Message Text - bigger, bolder typography */}
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-950 px-4 leading-snug sm:leading-relaxed max-w-xl min-h-[4.5rem] flex items-center justify-center">
                "{current.text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center items-center gap-3 py-1">
          {messages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "w-10 sm:w-12 bg-rose-500"
                  : "w-2.5 sm:w-3 bg-rose-200 hover:bg-rose-300"
              }`}
              aria-label={`Go to message ${i + 1}`}
            />
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleNext}
              className="w-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold py-6 sm:py-7 md:py-8 text-base sm:text-xl shadow-xl shadow-rose-500/25 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>{isLast ? "A special note for you 💌" : "Next message"}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
