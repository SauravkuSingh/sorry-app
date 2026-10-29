import { motion } from "motion/react";
import { note } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export default function Note({ onNext }: Props) {
  return (
    <div className="w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-xl border border-rose-200/80 shadow-2xl shadow-rose-300/40 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-7 sm:p-11 md:p-14 space-y-6 sm:space-y-8 relative overflow-hidden"
      >
        {/* Decorative corner ribbons & glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-rose-200/50 to-transparent pointer-events-none rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-200/40 to-transparent pointer-events-none rounded-tr-full" />

        {/* Letter Container with delicate, large styling */}
        <div className="relative bg-gradient-to-b from-rose-50/70 to-pink-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-9 md:p-12 border border-rose-200/70 shadow-inner max-h-[460px] sm:max-h-[520px] md:max-h-[580px] overflow-y-auto space-y-5 text-left">
          <div className="flex items-center gap-2.5 border-b border-rose-200/70 pb-4">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-rose-500 text-rose-500" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-rose-900 tracking-tight">
              Straight from my heart...
            </h2>
          </div>

          <div className="text-rose-950/90 text-base sm:text-xl md:text-2xl leading-relaxed sm:leading-loose space-y-4 font-normal whitespace-pre-line">
            <p className="italic text-rose-800 font-serif text-2xl sm:text-3xl">
              Dearest,
            </p>
            <p className="text-justify sm:text-left">
              {note}
            </p>
            <div className="pt-4 text-right space-y-1">
              <p className="font-serif italic text-rose-700 text-base sm:text-lg">
                Yours always, Saurav 🌷
              </p>
              <p className="font-bold text-rose-900 text-lg sm:text-2xl">
                With all my love ❤️
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={onNext}
              className="w-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold py-6 sm:py-7 md:py-8 text-base sm:text-xl shadow-xl shadow-rose-500/25 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Our Memories 📸</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
