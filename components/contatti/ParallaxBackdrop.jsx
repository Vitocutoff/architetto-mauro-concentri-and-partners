import Image from "next/image";

export default function ParallaxBackdrop() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* layer fisso: resta fermo mentre il contenuto scorre sopra */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/backgrounds/bgContatti.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* scrim: leggibilità senza “ammazzare” l’immagine */}
        <div className="absolute inset-0 bg-black/18 sm:bg-black/16" />

        {/* focus sul testo in alto a sinistra (molto soft) */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_18%,rgba(0,0,0,0.38),transparent_62%)]" />

        {/* base leggerissima solo per stacco (non scurire troppo) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12)_0%,transparent_40%,rgba(255,255,255,0.06)_100%)]" />
      </div>
    </div>
  );
}
