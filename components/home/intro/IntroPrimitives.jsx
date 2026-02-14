"use client";

export function MicroLabel({ children, align = "left" }) {
  return (

    <div
      className={[
        "hidden lg:flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-black/45 select-none",
        align === "right" ? "justify-end" : "justify-start",
      ].join(" ")}
      aria-hidden="true"
    >

      {align === "left" && <span className="h-px w-25 bg-black/15" />}
      <span className="leading-none">{children}</span>
      {align === "right" && <span className="h-px w-25 bg-black/15" />}

    </div>

  );

}

export function Node({ className = "" }) {
  return (

    <div
      className={["relative", className].join(" ")}
      aria-hidden="true"
    >

      <span
        className="absolute
                   left-1/2
                   -translate-x-1/2
                   h-1.5
                   w-1.5
                   rounded-full
                   bg-black/18"
      />

      <span
        className="absolute
                   left-1/2
                   -translate-x-1/2
                   -top-1.5
                   h-1 w-1
                   rounded-full
                   bg-black/10"
      />

    </div>

  );

}
