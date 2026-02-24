// /components/workinprogress/Background.jsx

export default function Background() {
  // Blueprint tileable (SVG) — variante diversa da Progetti:
  // - micro grid + macro grid
  // - hex hints + cerchi quota + rettangoli tecnici + diagonali
  // - tono cyan leggero, carta chiara
  const blueprintSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
      <rect width="640" height="640" fill="rgba(0,0,0,0)"/>

      <!-- micro grid -->
      <g stroke="rgba(0,150,185,0.05)" stroke-width="1">
        ${Array.from({ length: 31 }, (_, i) => {
          const y = (i + 1) * 20;
          return `<path d="M0 ${y}H640"/>`;
        }).join("")}
        ${Array.from({ length: 31 }, (_, i) => {
          const x = (i + 1) * 20;
          return `<path d="M${x} 0V640"/>`;
        }).join("")}
      </g>

      <!-- macro grid -->
      <g stroke="rgba(0,150,185,0.075)" stroke-width="1.2">
        <path d="M0 0H640 M0 320H640 M0 640H640"/>
        <path d="M0 0V640 M320 0V640 M640 0V640"/>
      </g>

      <!-- sheet seams (tavola) -->
      <g stroke="rgba(0,0,0,0.03)" stroke-width="1">
        <path d="M80 40H560"/>
        <path d="M40 120V520"/>
        <path d="M600 140V500"/>
      </g>

      <!-- subtle hex hints -->
      <g fill="none" stroke="rgba(0,150,185,0.06)" stroke-width="1">
        <path d="M120 170l40-24l40 24v48l-40 24l-40-24z"/>
        <path d="M420 430l44-26l44 26v52l-44 26l-44-26z" stroke="rgba(0,150,185,0.05)"/>
        <path d="M240 520l34-20l34 20v40l-34 20l-34-20z" stroke="rgba(0,150,185,0.045)"/>
      </g>

      <!-- technical rectangles -->
      <g fill="none" stroke="rgba(0,150,185,0.07)" stroke-width="1">
        <rect x="420" y="86" width="140" height="90" rx="10"/>
        <rect x="92" y="410" width="160" height="110" rx="14" stroke="rgba(0,150,185,0.055)"/>
      </g>

      <!-- dimension circles + arcs -->
      <g fill="none">
        <circle cx="500" cy="130" r="18" stroke="rgba(0,150,185,0.09)" stroke-width="1"/>
        <circle cx="500" cy="130" r="46" stroke="rgba(0,150,185,0.06)" stroke-width="1"/>
        <circle cx="500" cy="130" r="76" stroke="rgba(0,150,185,0.045)" stroke-width="1"/>

        <path d="M-120 520a440 440 0 0 1 880 0" stroke="rgba(0,150,185,0.075)" stroke-width="1"/>
        <path d="M-160 560a480 480 0 0 1 960 0" stroke="rgba(0,150,185,0.05)" stroke-width="1"/>
      </g>

      <!-- diagonals (diverse da Progetti) -->
      <g stroke="rgba(0,150,185,0.055)" stroke-width="1">
        <path d="M-60 220L700 480"/>
        <path d="M40 -40L360 700" stroke="rgba(0,150,185,0.045)"/>
        <path d="M260 -80L740 400" stroke="rgba(0,150,185,0.04)"/>
      </g>

      <!-- crosshair nodes -->
      <g stroke="rgba(0,150,185,0.09)" stroke-width="1">
        <path d="M160 160h18 M160 160h-18 M160 160v18 M160 160v-18"/>
        <path d="M480 160h18 M480 160h-18 M480 160v18 M480 160v-18"/>
        <path d="M160 480h18 M160 480h-18 M160 480v18 M160 480v-18"/>
        <path d="M480 480h18 M480 480h-18 M480 480v18 M480 480v-18"/>
        <path d="M320 320h22 M320 320h-22 M320 320v22 M320 320v-22"/>
      </g>

      <!-- dotted points -->
      <g fill="rgba(0,150,185,0.08)">
        <circle cx="160" cy="160" r="1.25"/>
        <circle cx="480" cy="160" r="1.25"/>
        <circle cx="160" cy="480" r="1.25"/>
        <circle cx="480" cy="480" r="1.25"/>
        <circle cx="320" cy="320" r="1.35"/>
        <circle cx="500" cy="130" r="1.2"/>
      </g>

      <!-- dimension line bottom -->
      <g stroke="rgba(0,150,185,0.055)" stroke-width="1">
        <path d="M140 590H500"/>
        <path d="M140 584V596 M500 584V596"/>
        <path d="M146 590l8-4v8z" fill="rgba(0,150,185,0.055)" stroke="none"/>
        <path d="M494 590l-8-4v8z" fill="rgba(0,150,185,0.055)" stroke="none"/>
      </g>
    </svg>
  `);

  // Noise tileable (carta)
  const noiseSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/>
      </filter>
      <rect width="240" height="240" filter="url(#n)" opacity=".22"/>
    </svg>
  `);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Base carta chiara */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,251,253,0.98) 55%, rgba(242,247,250,0.98) 100%)",
        }}
      />

      {/* Luce centrale (molto soft) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(980px 560px at 52% 26%, rgba(255,255,255,0.92), rgba(255,255,255,0) 64%)",
          opacity: 0.55,
        }}
      />

      {/* Pieghe/ombre tavola (diverse da Progetti) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,0,0,0.045) 0%, rgba(0,0,0,0.018) 30%, rgba(0,0,0,0.00) 58%)",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(300deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.016) 46%, rgba(0,0,0,0.00) 76%)",
          opacity: 0.70,
        }}
      />

      {/* Macchie carta “cantiere” (cyan + neutro, leggere) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(520px 360px at 16% 22%, rgba(0,155,190,0.055), rgba(0,155,190,0) 72%)," +
            "radial-gradient(720px 420px at 82% 34%, rgba(0,0,0,0.04), rgba(0,0,0,0) 74%)," +
            "radial-gradient(560px 420px at 58% 88%, rgba(0,155,190,0.04), rgba(0,155,190,0) 76%)",
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
          backgroundSize: "640px 640px",
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
          opacity: 0.055,
        }}
      />

      {/* Vignetta leggerissima */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1400px 900px at 50% 18%, rgba(0,0,0,0.00), rgba(0,0,0,0.055) 80%)",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
