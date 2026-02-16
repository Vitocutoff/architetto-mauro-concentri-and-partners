"use client";

import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function PreviewVideoModal({ open, onClose, reduceMotion, videoSrc }) {
  const canPortal = typeof document !== "undefined";

  if (!open || !canPortal) return null;

  return createPortal(

    <motion.div
      className="fixed
                 inset-0
                 z-9999
                 bg-black/75
                 px-4
                 sm:px-6
                 flex
                 items-center
                 justify-center"
      style={{ minHeight: "100svh" }}
      role="dialog"
      aria-modal="true"
      aria-label="Video"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >

      <button
        type="button"
        onClick={onClose}
        className="fixed
                   z-10000
                   top-[calc(env(safe-area-inset-top)+1rem)]
                   right-4
                   sm:right-6
                   rounded-full
                   bg-white/10
                   hover:bg-white/20
                   border
                   border-white/15
                   text-white
                   px-3
                   py-2
                   text-sm
                   transition"
        aria-label="Chiudi video"
      >

        Chiudi ✕

      </button>

      <motion.div
        className="relative
                   w-full
                   max-w-5xl
                   rounded-2xl
                   overflow-hidden
                   bg-black
                   shadow-[0_20px_80px_rgba(0,0,0,0.60)]
                   border
                   border-white/10"
        initial={{ scale: reduceMotion ? 1 : 0.985, y: reduceMotion ? 0 : 8 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
        onMouseDown={(e) => e.stopPropagation()}
      >

        <video
          src={videoSrc}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full
                     h-auto
                     max-h-[78svh]"
        />

      </motion.div>

    </motion.div>,

    document.body

  );

}
