// /components/home/LogoCard.jsx

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { fontMono, fontMonoSpecial, fontSerif, fontCursive } from "@/lib/fonts";

export default function LogoCard() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 65, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 65, damping: 18 });

  const handlePointerMove = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 6;

    rotateX.set(x);
    rotateY.set(-y);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (

    <motion.div
      role="img"
      aria-label="Logo Architetto Mauro Concentri & Partners"
      className="relative
                 flex
                 flex-col
                 items-center
                 justify-center
                 px-12
                 py-6
                 lg:px-18
                 lg:py-8
                 rounded-2xl
                 select-none
                 shadow-[0_0_40px_rgba(0,0,0,0.4)]
                 backdrop-blur-xl
                 backdrop-saturate-150
                 bg-linear-to-r
                 from-white/60
                 via-white/50
                 to-white/50
                 border-2
                 border-black/60
                 will-change-transform
                 origin-center
                 scale-[0.92]
                 sm:scale-100
                 md:scale-[1.06]
                 lg:scale-100"
      style={{
        perspective: 800,
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >

      <motion.div
        className="absolute
                   inset-0
                   rounded-2xl
                   bg-linear-to-br
                   from-white/40
                   via-white/25
                   to-white/30
                   pointer-events-none"
        whileTap={{ opacity: 0.25 }}
        style={{ opacity: 0.4 }}
        transition={{ type: "spring", stiffness: 140, damping: 18 }}
      />

      <motion.div
        className={`${fontMono.className}
                    relative
                    z-10
                    text-xl
                    lg:text-xl
                    text-blue-900
                    tracking-wide`}
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.25, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <span
          className={`${fontMonoSpecial.className}
                      font-extrabold`}
        >

          A

        </span>

        rchitetto

      </motion.div>

      <motion.div
        className={`${fontSerif.className}
                    relative
                    z-10
                    mt-2
                    text-2xl
                    lg:text-3xl
                    text-neutral-950`}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.55, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >

        MAURO

      </motion.div>

      <motion.div
        className={`${fontSerif.className}
                    relative
                    z-10
                    text-2xl
                    lg:text-3xl
                    text-neutral-950`}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.85, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >

        CONCENTRI

      </motion.div>

      <motion.hr
        className="relative
                   z-10
                   my-3
                   w-full
                   border-t
                   border-black/40"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.15, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      />

      <motion.div
        className={`${fontCursive.className}
                    relative
                    z-10
                    -mt-1
                    text-4xl
                    lg:text-4xl
                    xl:text-5xl
                    text-red-600`}
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 1.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >

        &amp; Partners

      </motion.div>

    </motion.div>

  );

}
