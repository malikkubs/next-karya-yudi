import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import APINew from "../../utils/Api";
import TopMenu from "../../components/TopMenu";
import CardProjects from "../../components/CardProject";

export default function Project(data) {
  const router = useRouter();
  return (
    <TopMenu
      ogtype="website"
      title={"karyayudi.my.id - Project Games Release"}
      desc="merupakan portfolio resmi Yudian Malik sebagai game developer independen yang berisi kumpulan game rilisan, project game kreatif, development update, serta eksperimen gameplay original karya Yudi. Website ini menghadirkan showcase game indie, dokumentasi pengembangan game, dan berbagai project digital yang terus dikembangkan sebagai bagian dari portfolio developer Indonesia"
      image="/img-project/project-management.png"
      keywords="flutter, svelte, flame, pemrograman, coding, developer, aplikasi mobile, web development, game development, dart, javascript, frontend, backend, framework, tutorial flutter, belajar svelte, belajar flame, next karya yudi, karya yudi, karyayudi.id, yudian malik"
    >
      <div className="px-4 pt-16 w-full lg:w-6/12 mx-auto">
        <p>
          Karyayudi.my.id – Project Games Release adalah website portfolio game
          developer milik Yudian Malik yang menampilkan berbagai game rilisan,
          project game indie, eksperimen gameplay, serta proses pengembangan
          game karya Yudi. Platform ini menjadi tempat showcase game, update
          development, dan koleksi project kreatif yang dibuat untuk web maupun
          platform digital lainnya.
        </p>
      </div>

      <div className="container h-16 mx-4 lg:mx-auto w-11/12 flex-row flex justify-between items-center">
        <div className="w-full min-h-screen flex flex-wrap">
          <a
            href={`/project/game/floppy-bird`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 lg:p-3 w-1/2 lg:w-1/5"
          >
            <CardProjects
              title="Floppy Bird"
              status="done"
              logo="/img-project/project-management.png"
            />
          </a>
        </div>
      </div>
    </TopMenu>
  );
}
