// /components/progetti/Background.jsx

export default function Background() {
  // Blueprint tileable (SVG): griglia + micro-griglia + archi + diagonali + assi + cerchi + triangoli + quota
  // Versione LIGHT + CIANO: linee sottili, opacità basse, “inchiostro” cyan tecnico.
  const blueprintSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="560" height="560" viewBox="0 0 560 560">
      <rect width="560" height="560" fill="rgba(0,0,0,0)"/>

      <!-- micro grid -->
      <g stroke="rgba(0,140,175,0.055)" stroke-width="1">
        ${Array.from({ length: 27 }, (_, i) => {
          const y = (i + 1) * 20;
          return `<path d="M0 ${y}H560"/>`;
        }).join("")}
        ${Array.from({ length: 27 }, (_, i) => {
          const x = (i + 1) * 20;
          return `<path d="M${x} 0V560"/>`;
        }).join("")}
      </g>

      <!-- main grid -->
      <g stroke="rgba(0,140,175,0.085)" stroke-width="1.2">
        <path d="M0 0H560 M0 280H560 M0 560H560"/>
        <path d="M0 0V560 M280 0V560 M560 0V560"/>
      </g>

      <!-- center axes -->
      <g stroke="rgba(0,140,175,0.095)" stroke-width="1">
        <path d="M280 40V520"/>
        <path d="M40 280H520"/>
      </g>

      <!-- axis ticks -->
      <g stroke="rgba(0,140,175,0.08)" stroke-width="1">
        ${Array.from({ length: 10 }, (_, i) => {
          const y = 80 + i * 40;
          return `<path d="M280 ${y}h12"/>`;
        }).join("")}
        ${Array.from({ length: 10 }, (_, i) => {
          const x = 80 + i * 40;
          return `<path d="M${x} 280v12"/>`;
        }).join("")}
      </g>

      <!-- compass / arcs -->
      <g fill="none">
        <path d="M-120 430a400 400 0 0 1 800 0" stroke="rgba(0,140,175,0.105)" stroke-width="1"/>
        <path d="M-150 460a430 430 0 0 1 860 0" stroke="rgba(0,140,175,0.075)" stroke-width="1"/>
        <path d="M260 620a340 340 0 0 1 340-340" stroke="rgba(0,140,175,0.075)" stroke-width="1"/>
        <path d="M300 620a300 300 0 0 1 300-300" stroke="rgba(0,140,175,0.065)" stroke-width="1"/>
      </g>

      <!-- concentric circles top-right -->
      <g fill="none" stroke="rgba(0,140,175,0.075)" stroke-width="1">
        <circle cx="430" cy="120" r="34"/>
        <circle cx="430" cy="120" r="62" stroke="rgba(0,140,175,0.065)"/>
        <circle cx="430" cy="120" r="92" stroke="rgba(0,140,175,0.055)"/>
      </g>

      <!-- diagonals -->
      <g stroke="rgba(0,140,175,0.075)" stroke-width="1">
        <path d="M-40 120L600 420"/>
        <path d="M-60 300L620 60" stroke="rgba(0,140,175,0.055)"/>
        <path d="M160 -40L420 620" stroke="rgba(0,140,175,0.055)"/>
      </g>

      <!-- triangles -->
      <g fill="none" stroke="rgba(0,140,175,0.075)" stroke-width="1">
        <path d="M90 110L210 110L150 220Z"/>
        <path d="M340 330L470 380L360 470Z" stroke="rgba(0,140,175,0.065)"/>
        <path d="M80 430L180 380L220 500Z" stroke="rgba(0,140,175,0.058)"/>
      </g>

      <!-- crosshair nodes -->
      <g stroke="rgba(0,140,175,0.105)" stroke-width="1">
        <path d="M140 140h18 M140 140h-18 M140 140v18 M140 140v-18"/>
        <path d="M420 140h18 M420 140h-18 M420 140v18 M420 140v-18"/>
        <path d="M140 420h18 M140 420h-18 M140 420v18 M140 420v-18"/>
        <path d="M420 420h18 M420 420h-18 M420 420v18 M420 420v-18"/>
        <path d="M280 280h22 M280 280h-22 M280 280v22 M280 280v-22"/>
      </g>

      <!-- dotted points -->
      <g fill="rgba(0,140,175,0.09)">
        <circle cx="140" cy="140" r="1.25"/>
        <circle cx="420" cy="140" r="1.25"/>
        <circle cx="140" cy="420" r="1.25"/>
        <circle cx="420" cy="420" r="1.25"/>
        <circle cx="280" cy="280" r="1.35"/>
        <circle cx="430" cy="120" r="1.25"/>
      </g>

      <!-- dimension line -->
      <g stroke="rgba(0,140,175,0.06)" stroke-width="1">
        <path d="M110 520H450"/>
        <path d="M110 514V526 M450 514V526"/>
        <path d="M116 520l8-4v8z" fill="rgba(0,140,175,0.06)" stroke="none"/>
        <path d="M444 520l-8-4v8z" fill="rgba(0,140,175,0.06)" stroke="none"/>
      </g>
    </svg>
  `);

  // Noise tileable per carta (leggerissimo)
  const noiseSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/>
      </filter>
      <rect width="240" height="240" filter="url(#n)" opacity=".22"/>
    </svg>
  `);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Base carta tecnica chiara */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(246,249,252,0.97) 52%, rgba(241,244,248,0.97) 100%)",
        }}
      />

      {/* “Luce” morbida centrale (wow, ma chiara) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(980px 560px at 52% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0) 62%)",
          opacity: 0.60,
        }}
      />

      {/* ✅ Pieghe / ombre diagonali (tavola tecnica, ultra soft) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.022) 26%, rgba(0,0,0,0.00) 52%)",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(315deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.018) 44%, rgba(0,0,0,0.00) 74%)",
          opacity: 0.70,
        }}
      />

      {/* ✅ Macchie carta (molto leggere, realistiche) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(520px 360px at 18% 22%, rgba(0,120,150,0.06), rgba(0,120,150,0) 70%)," +
            "radial-gradient(640px 420px at 78% 34%, rgba(0,0,0,0.045), rgba(0,0,0,0) 72%)," +
            "radial-gradient(560px 420px at 56% 84%, rgba(0,120,150,0.04), rgba(0,120,150,0) 74%)",
          opacity: 0.55,
          mixBlendMode: "multiply",
        }}
      />

      {/* Blueprint tileable */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${blueprintSvg}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "560px 560px",
          backgroundPosition: "top left",
          opacity: 1,
        }}
      />

      {/* Texture carta */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "240px 240px",
          mixBlendMode: "multiply",
          opacity: 0.06,
        }}
      />

      {/* Vignetta leggerissima (non scurisce) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1400px 900px at 50% 20%, rgba(0,0,0,0.00), rgba(0,0,0,0.06) 78%)",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
