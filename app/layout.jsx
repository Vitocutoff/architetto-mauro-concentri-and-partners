// /app/layout.jsx

import "./globals.css";
import { siteMetadata, viewport } from "@/lib/metadata";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ClientShell from "@/components/layout/ClientShell";

export const metadata = siteMetadata;
export { viewport };

export default function RootLayout({ children }) {
  return (

    <html
      lang="it"
    >

      <body
        className="min-h-screen
                   overflow-x-hidden
                   bg-white
                   text-neutral-900
                   antialiased
                   selection:bg-black/90
                   selection:text-white"
      >

        <ClientShell
          footer={<Footer />}
        >

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

        </ClientShell>

      </body>

    </html>
  );

}
