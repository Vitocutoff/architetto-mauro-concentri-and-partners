import {
  Qwitcher_Grypen,     // CORSIVO per logo
  Major_Mono_Display,   // MONO con caratteri speciali
  Space_Grotesk,        // Sans per navigazione
  Plus_Jakarta_Sans,    // Sans generale
  Lora,                 // Serif per testi principali
  Space_Mono,           // Mono per dettagli tecnici
} from "next/font/google";

export const fontCursive = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  preload: true, // forza il pre-caricamento
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
