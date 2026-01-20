// 📄 /app/layout.jsx

import "./globals.css";
import { siteMetadata, viewport } from "@/lib/metadata";
import HeadMeta from "@/components/meta/HeadMeta";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollController from "@/components/layout/ScrollController";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = siteMetadata;

export { viewport };

export default function RootLayout({ children }) {

  return (

    <html
      lang="it"
      suppressHydrationWarning
    >

      <head>

        <HeadMeta />

      </head>

      <body
        className="min-h-screen
                   bg-white
                   text-neutral-900
                   antialiased
                   selection:bg-black/90
                   selection:text-white"
      >

        <ScrollController />

        <CookieBanner />

        <Header />

        <main
          className="relative
                     z-10"
        >

          {children}

        </main>

        <ScrollToTop />

        <Footer />

      </body>

    </html>

  );

}
