import Background from "@/components/workinprogress/Background";
import WorkInProgressCard from "@/components/workinprogress/WorkInProgressCard";
import { workInProgressProjects } from "@/data/workInProgress";
import { fontSans, fontSerif } from "@/lib/fonts";

export const metadata = {
  title: "Work in Progress",
  description: "Cantieri e progetti in corso: aggiornamenti e lavori in fase di sviluppo.",
};

export default function WorkInProgressPage() {
  const projects = workInProgressProjects;

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <Background />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-300" />
            <p className={`${fontSans.className} text-xs tracking-[0.22em] uppercase text-zinc-600`}>
              aggiornamenti
            </p>
          </div>

          <h1 className={`${fontSerif.className} mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900`}>
            Work in Progress
          </h1>

          <p className={`${fontSans.className} mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-700`}>
            Cantieri e progetti in fase di sviluppo. La sezione verrà aggiornata progressivamente con immagini e dettagli.
          </p>
        </header>

        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <WorkInProgressCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
