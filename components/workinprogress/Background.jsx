// /components/workinprogress/Background.jsx

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Base */}
      <div className="absolute inset-0 bg-[#fbfcfe]" />

      {/* Campi colore (variante WIP) */}
      {/* cyan/steel */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_16%_12%,rgba(170,235,255,0.52),transparent_62%)]" />
      {/* verde “CAD highlight” */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_78%_18%,rgba(195,255,214,0.32),transparent_60%)]" />
      {/* giallo/ivory soft */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_52%_92%,rgba(255,243,184,0.22),transparent_62%)]" />

      {/* Vignetta */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_50%,transparent_56%,rgba(0,0,0,0.038)_100%)]" />

      {/* Griglia grande */}
      <div
        className="absolute inset-0 opacity-[0.17]
        [background-image:linear-gradient(to_right,rgba(0,0,0,.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.22)_1px,transparent_1px)]
        [background-size:96px_96px]"
      />

      {/* Griglia fitta */}
      <div
        className="absolute inset-0 opacity-[0.085]
        [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)]
        [background-size:18px_18px]"
      />

      {/* Cross-hatch diagonale */}
      <div
        className="absolute inset-0 opacity-[0.095]
        [background-image:
          linear-gradient(135deg,transparent_49.1%,rgba(0,0,0,0.19)_49.4%,rgba(0,0,0,0.19)_50.6%,transparent_50.9%),
          linear-gradient(45deg,transparent_49.1%,rgba(0,0,0,0.17)_49.4%,rgba(0,0,0,0.17)_50.6%,transparent_50.9%)]
        [background-size:420px_420px]"
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.30'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
