// /app/work-in-progress/page.jsx

import Background from "@/components/workinprogress/Background";
import WorkInProgressHero from "@/components/workinprogress/WorkInProgressHero";
import WorkInProgressCard from "@/components/workinprogress/WorkInProgressCard";
import { workInProgressProjects } from "@/data/workInProgress";

export const metadata = {
  title: "Work in Progress",
  description: "Cantieri e progetti in corso: aggiornamenti e lavori in fase di sviluppo.",
};

export default function WorkInProgressPage() {
  const projects = workInProgressProjects;

  return (

    <section
      className="relative
                 min-h-screen
                 bg-white
                 overflow-hidden"
    >

      <Background />

      <div
        className="relative
                   mx-auto
                   w-full
                   max-w-6xl
                   px-4
                   pb-16
                   pt-10
                   sm:px-6
                   lg:px-8"
      >

        <WorkInProgressHero />

        <div
          className="mt-10"
        >

          <div
            className="grid
                       gap-4
                       sm:grid-cols-2
                       lg:grid-cols-3"
          >

            {projects.map((p) => (

              <WorkInProgressCard
                key={p.slug}
                p={p}
              />

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}
