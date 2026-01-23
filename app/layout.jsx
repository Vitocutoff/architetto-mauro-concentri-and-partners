// /app/layout.jsx

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
                   overflow-x-hidden
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
          id="main-content"
          aria-label="Contenuto principale"
          className="relative
                     z-10
                     w-full
                     flex
                     flex-col
                     items-center"
        >
          {/* Page frame: respiro e larghezza controllata su wide/ultra-wide */}
          <div
            className="w-full
                       px-4
                       sm:px-6
                       lg:px-8
                       xl:px-12
                       max-w-full
                       xl:max-w-360
                       2xl:max-w-420"
          >

            {children}

          </div>

        </main>

        <ScrollToTop />

        <Footer />

      </body>

    </html>

  );

}
