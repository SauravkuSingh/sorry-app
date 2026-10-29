import { motion } from "motion/react";
import { photos } from "@/data";
import { Button } from "@/components/ui/button";
import Stack from "@/components/Stack";
import { ArrowRight } from "lucide-react";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export default function Photos({ onNext }: Props) {
  // Card elements for Stack component (polaroid memory cards)
  const stackCards = photos.map((p, idx) => (
    <div
      key={idx}
      className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-rose-200/80 select-none"
    >
      <div className="relative flex-1 bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden">
        <img
          src={p.image}
          alt={p.text}
          className="w-full h-full object-cover pointer-events-none select-none"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            if (target.parentElement) {
              const fallback = document.createElement("div");
              fallback.className =
                "w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-100 to-pink-200 text-rose-700 select-none";
              fallback.innerHTML =
                `<div class='text-7xl mb-2'>📸</div><p class='text-lg font-bold'>${p.text}</p>`;
              target.parentElement.appendChild(fallback);
            }
          }}
        />
      </div>
      <div className="p-4 sm:p-5 bg-white text-center border-t border-rose-100">
        <p className="text-lg sm:text-xl font-bold text-rose-950">{p.text}</p>
        {/* <p className="text-xs sm:text-sm text-rose-400 font-medium mt-0.5">
          Memory {idx + 1} of {photos.length}
        </p> */}
      </div>
    </div>
  ));

  return (
    <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/85 backdrop-blur-xl border border-rose-200/80 shadow-2xl shadow-rose-300/40 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-12 space-y-6 sm:space-y-8 relative overflow-hidden text-center"
      >
        {/* Subtle decorative background ambient glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-rose-200/35 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-pink-200/35 rounded-full blur-2xl pointer-events-none" />

        {/* Title for the memories */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-rose-600 tracking-tight">
            Our Precious Memories
          </h2>
          <p className="text-rose-900/70 text-sm sm:text-lg">
            A few moments that remind me how lucky I am to have you ✨
          </p>
        </div>

        {/* Stack Deck - Big, tactile, responsive card fan */}
        <div className="w-full flex flex-col items-center justify-center py-2 sm:py-4">
          <div className="w-[280px] h-[370px] sm:w-[340px] sm:h-[450px] md:w-[390px] md:h-[500px] relative">
            <Stack
              cards={stackCards}
              layout="fan"
              visible={4}
              spread={0.65}
              depth={0.5}
              tilt={20}
              sendToBackOnClick={true}
            />
          </div>

          <p className="text-xs sm:text-sm text-rose-500 font-semibold pt-4 select-none">
            ✨ Tap or swipe cards to shuffle
          </p>
        </div>

        {/* Action Button */}
        <div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={onNext}
              className="w-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold py-6 sm:py-7 md:py-8 text-base sm:text-xl shadow-xl shadow-rose-500/25 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>One last question... 💖</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
