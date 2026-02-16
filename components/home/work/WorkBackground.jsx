"use client";

export default function WorkBackground() {
  return (

    <div
      className="pointer-events-none
                 absolute
                 inset-0
                 -z-50"
      aria-hidden="true"
    >

      {/* Sfondo bae */}
      <div
        className="absolute
                   inset-0
                   g-[#f6f6f4]"
      />

      {/* Gradiente verticale */}
      <div
        className="absolute
                   inset-0
                   bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04)_0%,transparent_35%,rgba(0,0,0,0.03)_100%)]"
      />

      {/* Piano d’ombra diagonale */}
      <div
        className="absolute
                   inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.035) 32%, transparent 60%)",
        }}
      />

      {/* Profondità */}
      <div
        className="absolute
                   inset-0"
        style={{
          background:
            "linear-gradient(315deg, transparent 0%, rgba(0,0,0,0.025) 45%, transparent 75%)",
        }}
      />

      {/* Grain carta */}
      <div
        className="absolute
                   inset-0
                   opacity-[0.035]
                   mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E\")",
        }}
      />

    </div>

  );

}
