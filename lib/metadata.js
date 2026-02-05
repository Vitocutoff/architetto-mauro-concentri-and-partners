// /lib/metadata.js

/** @type {import("next").Metadata} */
export const siteMetadata = {
  metadataBase: new URL("https://www.mauroconcentriarchitetto.com"),

  title: {
    default: "Architetto Mauro Concentri & Partners",
    template: "%s | Architetto Mauro Concentri & Partners",
  },

  description:
    "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettazione e design sostenibile.",

  robots: { index: true, follow: true },

  // Canonical "per route"
  alternates: {
    canonical: "./",
  },

  openGraph: {
    title: "Architetto Mauro Concentri & Partners",
    description:
      "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettazione e design sostenibile.",
    url: "./",
    siteName: "Architetto Mauro Concentri & Partners",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Progetto architettonico dell'architetto Mauro Concentri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Architetto Mauro Concentri & Partners",
    description:
      "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettazione e design sostenibile.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: ["/favicon.ico"],
    // se metti un file in public/apple-touch-icon.png, iOS lo usa automaticamente
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  other: {
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};
