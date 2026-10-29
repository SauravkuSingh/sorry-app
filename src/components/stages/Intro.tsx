import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

type Props = {
  onOpen: () => void;
};

export default function Intro({ onOpen }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center px-2 sm:px-4"
    >
      <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 shadow-2xl shadow-rose-300/40 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-7 sm:p-12 md:p-16 space-y-6 sm:space-y-9 relative overflow-hidden">
        {/* Subtle decorative background ambient glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 sm:w-64 sm:h-64 bg-rose-300/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 sm:w-64 sm:h-64 bg-pink-300/35 rounded-full blur-3xl pointer-events-none" />

        {/* Animated emoji / icon badge - significantly bigger */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-rose-50 to-pink-100 shadow-inner border-2 border-rose-200 text-6xl sm:text-7xl md:text-8xl select-none"
        >
          <span>🥺</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 sm:-top-1 sm:-right-1 text-rose-500"
          >
            <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 fill-rose-300 text-rose-500 drop-shadow" />
          </motion.span>
        </motion.div>

        {/* Heading & Subtitle - scaled up */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-rose-600 leading-tight">
            I made something for you
          </h1>
          <p className="text-rose-900/75 text-base sm:text-xl md:text-2xl max-w-xl mx-auto leading-relaxed font-normal">
            Please take a moment and open this with an open heart... 🌸
          </p>
        </div>

        {/* Open Button - larger and more prominent */}
        <div className="pt-2 sm:pt-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onOpen}
              className="rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold px-10 py-7 sm:px-14 sm:py-8 md:px-16 md:py-9 text-lg sm:text-2xl md:text-3xl shadow-xl shadow-rose-500/30 transition-all gap-3 cursor-pointer"
            >
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-white text-white animate-pulse" />
              <span>Open 💌</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
