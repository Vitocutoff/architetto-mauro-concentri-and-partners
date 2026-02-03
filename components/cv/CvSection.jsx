// components/cv/CvSection.jsx

export default function CvSection({ id, title, children, size = "lg" }) {
  const titleClass =
    size === "sm"
      ? "text-lg font-semibold tracking-tight leading-tight text-zinc-900"
      : "text-2xl font-semibold tracking-tight leading-tight text-zinc-900";

  return (

    <section
      id={id}
      className="scroll-mt-24"
    >

      <div
        className="flex
                   items-end
                   justify-between
                   gap-6"
      >

        <h2
          className={titleClass}
        >

          {title}

        </h2>

        <span
          className="hidden
                     sm:block
                     h-px w-16
                     bg-zinc-200/80"
          aria-hidden="true"
        />

      </div>

      <div
        className="mt-4
                   h-px
                   w-full
                   bg-zinc-200/80"
        aria-hidden="true"
      />

      <div
        className="mt-6
                   space-y-5"
      >

        {children}

      </div>

    </section>

  );

}
