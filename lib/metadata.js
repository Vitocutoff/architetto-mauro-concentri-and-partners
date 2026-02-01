// /lib/metadata.js

export const siteMetadata = {

  title: "Architetto Mauro Concentri & Partners",

  description: "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettazione e design sostenibile.",

  metadataBase: new URL("https://www.mauroconcentriarchitetto.com"),

  robots: { index: true, follow: true },

  alternates: {
    canonical: "https://www.mauroconcentriarchitetto.com",
  },

  openGraph: {

    title: "Architetto Mauro Concentri & Partners",
    description: "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettazione e design sostenibile.",

    url: "https://www.mauroconcentriarchitetto.com",

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

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  other: { "apple-mobile-web-app-status-bar-style": "black-translucent"},

};

export const viewport = {

  themeColor: "#ffffff",
};
