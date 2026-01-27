// components/cv/CvSidebarBlock.jsx

export default function CvSidebarBlock({ title, children, compact = false }) {
  return (

    <section
      className="rounded-2xl
                 border
                 border-zinc-200
                 bg-white/92
                 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
    >

      <div
        className={compact ? "p-4" : "p-5"}
      >

        <h3
          className="text-sm
                     font-semibold
                     tracking-tight
                     text-zinc-900"
        >

          {title}

        </h3>

        <div
          className={compact ? "mt-3" : "mt-4"}
        >

          {children}

        </div>

      </div>

    </section>

  );

}
