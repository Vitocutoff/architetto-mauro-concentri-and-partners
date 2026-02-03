// components/cv/CvEntry.jsx

export default function CvEntry({ period, title, place, note }) {
  return (

    <article
      className="rounded-2xl
                 border
                 border-zinc-200
                 bg-white/92
                 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
    >

      <div
        className="p-5
                   sm:p-6"
      >

        {period ? (

          <div
            className="text-[11px]
                       tracking-[0.22em]
                       uppercase
                       text-zinc-500"
          >

            <time>

              {period}

            </time>

          </div>

        ) : null}

        {title ? (

          <h3
            className="mt-3
                       text-base
                       sm:text-lg
                       font-semibold
                       tracking-tight
                       text-zinc-900"
          >

            {title}

          </h3>

        ) : null}

        {place ? (

          <div
            className="mt-1
                       text-sm
                       leading-relaxed
                       text-zinc-700"
          >

            {place}

          </div>

        ) : null}

        {note ? (

          <div
            className="mt-2
                       text-sm
                       leading-relaxed
                       text-zinc-500"
          >

            {note}

          </div>

        ) : null}

      </div>

    </article>

  );

}
