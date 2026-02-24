// /lib/fonts.js

import { Lora, Major_Mono_Display, Plus_Jakarta_Sans, Qwitcher_Grypen, Space_Grotesk, Space_Mono, } from "next/font/google";

export const fontCursive = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  preload: true, // per forzare il caricamento
});

export const fontMonoSpecial = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

export const fontNav = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  preload: true,
});

export const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  preload: true,
});

export const fontSerif = Lora({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  preload: true,
});

export const fontMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  preload: true,
});
