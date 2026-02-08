// /components/progetti/Background.jsx

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Pattern: stesso “look” di object-contain (non taglia), ripetuto in verticale */}
      <div
        className="
          absolute inset-0
          [background-image:url('/backgrounds/bgProgetti.webp')]
          bg-top
          bg-repeat-y
          [background-size:contain]
        "
      />

      {/* Vignetta leggerissima per profondità */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_50%,transparent_58%,rgba(0,0,0,0.045)_100%)]" />

      {/* Micro-contrasto direzionale (aiuta cards/testi senza “lavare” tutto) */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.18)_55%,rgba(255,255,255,0.08)_100%)]" />

    </div>
  );
}
